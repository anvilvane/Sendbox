'use client';

import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, WarningIcon, ArrowRightIcon, ClockIcon, ShieldCheckIcon } from '@phosphor-icons/react/dist/ssr';

/* ────────── Parsing helpers ────────── */

function parseHeaders(raw) {
  // Unfold continuation lines (lines starting with whitespace are continuations)
  const unfolded = raw.replace(/\r\n/g, '\n').replace(/\n[ \t]+/g, ' ');
  const lines = unfolded.split('\n');
  const headers = [];

  for (const line of lines) {
    const match = line.match(/^([A-Za-z0-9-]+):\s*(.*)/);
    if (match) {
      headers.push({ name: match[1], value: match[2] });
    }
  }
  return headers;
}

function getHeaderValue(headers, name) {
  const h = headers.find((h) => h.name.toLowerCase() === name.toLowerCase());
  return h ? h.value : null;
}

function getAllHeaderValues(headers, name) {
  return headers.filter((h) => h.name.toLowerCase() === name.toLowerCase()).map((h) => h.value);
}

function parseReceivedHops(headers) {
  const receivedHeaders = getAllHeaderValues(headers, 'Received');
  // Received headers are in reverse order (most recent first)
  const hops = receivedHeaders.map((val, idx) => {
    // Try to extract server name: "from <server>"
    const fromMatch = val.match(/from\s+([^\s(;]+)/i);
    // Try to extract "by <server>"
    const byMatch = val.match(/by\s+([^\s(;]+)/i);
    // Try to extract IP: bracket notation [x.x.x.x] or (x.x.x.x)
    const ipMatch = val.match(/\[(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\]/) ||
                    val.match(/\((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\)/) ||
                    val.match(/\[([a-fA-F0-9:]+)\]/); // IPv6
    // Try to extract timestamp: after the semicolon
    let timestamp = null;
    const semiIdx = val.lastIndexOf(';');
    if (semiIdx !== -1) {
      const dateStr = val.substring(semiIdx + 1).trim();
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        timestamp = parsed;
      }
    }

    const server = fromMatch ? fromMatch[1] : (byMatch ? byMatch[1] : 'Unknown');

    return {
      index: idx,
      server,
      by: byMatch ? byMatch[1] : null,
      ip: ipMatch ? ipMatch[1] : null,
      timestamp,
      raw: val,
    };
  }).reverse(); // reverse so hop 1 is the earliest

  // Calculate delays between hops
  for (let i = 1; i < hops.length; i++) {
    if (hops[i].timestamp && hops[i - 1].timestamp) {
      const delayMs = hops[i].timestamp.getTime() - hops[i - 1].timestamp.getTime();
      hops[i].delaySeconds = Math.max(0, Math.round(delayMs / 1000));
    } else {
      hops[i].delaySeconds = null;
    }
  }
  if (hops.length > 0) {
    hops[0].delaySeconds = null; // first hop has no delay
  }

  return hops;
}

function parseAuthentication(headers) {
  const authResults = getAllHeaderValues(headers, 'Authentication-Results').join(' ');
  const receivedSpf = getHeaderValue(headers, 'Received-SPF');

  const result = { spf: 'unknown', dkim: 'unknown', dmarc: 'unknown' };

  // SPF
  if (authResults) {
    const spfMatch = authResults.match(/spf=(pass|fail|softfail|neutral|none|temperror|permerror)/i);
    if (spfMatch) result.spf = spfMatch[1].toLowerCase();
  }
  if (result.spf === 'unknown' && receivedSpf) {
    const spfMatch = receivedSpf.match(/^(pass|fail|softfail|neutral|none)/i);
    if (spfMatch) result.spf = spfMatch[1].toLowerCase();
  }

  // DKIM
  if (authResults) {
    const dkimMatch = authResults.match(/dkim=(pass|fail|neutral|none|temperror|permerror|policy)/i);
    if (dkimMatch) result.dkim = dkimMatch[1].toLowerCase();
  }

  // DMARC
  if (authResults) {
    const dmarcMatch = authResults.match(/dmarc=(pass|fail|bestguesspass|none|temperror|permerror)/i);
    if (dmarcMatch) result.dmarc = dmarcMatch[1].toLowerCase();
  }

  return result;
}

function parseSpamScore(headers) {
  const spamStatus = getHeaderValue(headers, 'X-Spam-Status');
  const spamScore = getHeaderValue(headers, 'X-Spam-Score');
  const barracuda = getHeaderValue(headers, 'X-Barracuda-Spam-Score');

  if (spamStatus) {
    const scoreMatch = spamStatus.match(/score=([0-9.-]+)/i);
    return {
      status: spamStatus.match(/^(Yes|No)/i)?.[1] || null,
      score: scoreMatch ? parseFloat(scoreMatch[1]) : null,
      raw: spamStatus,
    };
  }
  if (spamScore) {
    return { status: null, score: parseFloat(spamScore), raw: spamScore };
  }
  if (barracuda) {
    return { status: null, score: parseFloat(barracuda), raw: barracuda };
  }
  return null;
}

function formatDelay(seconds) {
  if (seconds === null || seconds === undefined) return '-';
  if (seconds < 1) return '< 1s';
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

function formatTimestamp(ts) {
  if (!ts) return '-';
  return ts.toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  });
}

/* ────────── Auth status badge ────────── */

function AuthBadge({ label, status }) {
  const isPass = status === 'pass' || status === 'bestguesspass';
  const isFail = status === 'fail' || status === 'softfail' || status === 'permerror';
  const isUnknown = !isPass && !isFail;

  let Icon, bgClass, textClass, displayStatus;
  if (isPass) {
    Icon = CheckCircleIcon;
    bgClass = 'bg-emerald-50';
    textClass = 'text-emerald-600';
    displayStatus = 'Pass';
  } else if (isFail) {
    Icon = XCircleIcon;
    bgClass = 'bg-red-50';
    textClass = 'text-red-600';
    displayStatus = status === 'softfail' ? 'Soft Fail' : 'Fail';
  } else {
    Icon = WarningIcon;
    bgClass = 'bg-gray-50';
    textClass = 'text-[#9ca3af]';
    displayStatus = status === 'unknown' ? 'Not Found' : status.charAt(0).toUpperCase() + status.slice(1);
  }

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${bgClass}`}>
      <Icon size={20} weight="fill" className={textClass} />
      <div>
        <p className="text-sm font-medium text-black">{label}</p>
        <p className={`text-xs ${textClass} font-medium`}>{displayStatus}</p>
      </div>
    </div>
  );
}

/* ────────── Main component ────────── */

export default function HeaderAnalyzer() {
  const [rawHeaders, setRawHeaders] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = () => {
    setError(null);
    setAnalysis(null);

    const trimmed = rawHeaders.trim();
    if (!trimmed) return;

    const headers = parseHeaders(trimmed);
    if (headers.length === 0) {
      setError(
        'No valid email headers were found. To get email headers:\n\n' +
        '- Gmail: Open the email > click the three dots menu > "Show original"\n' +
        '- Outlook: Open the email > File > Properties > "Internet headers"\n' +
        '- Apple Mail: View > Message > All Headers\n\n' +
        'Copy the full header text and paste it above.'
      );
      return;
    }

    const from = getHeaderValue(headers, 'From');
    const to = getHeaderValue(headers, 'To');
    const subject = getHeaderValue(headers, 'Subject');
    const date = getHeaderValue(headers, 'Date');
    const messageId = getHeaderValue(headers, 'Message-ID') || getHeaderValue(headers, 'Message-Id');
    const returnPath = getHeaderValue(headers, 'Return-Path');
    const hops = parseReceivedHops(headers);
    const auth = parseAuthentication(headers);
    const spam = parseSpamScore(headers);

    // Check if we got at least some meaningful data
    if (!from && !to && !subject && hops.length === 0) {
      setError(
        'The pasted text does not appear to contain standard email headers. Make sure you are copying the full raw headers (not just the email body).'
      );
      return;
    }

    setAnalysis({ from, to, subject, date, messageId, returnPath, hops, auth, spam });
  };

  return (
    <div>
      {/* Input */}
      <div className="space-y-3">
        <textarea
          value={rawHeaders}
          onChange={(e) => setRawHeaders(e.target.value)}
          rows={8}
          placeholder={'Paste raw email headers here...\n\nExample:\nDelivered-To: user@example.com\nReceived: from mail.example.com ...\nFrom: sender@example.com\nTo: user@example.com\nSubject: Test email'}
          className="w-full py-2.5 sm:py-3 px-4 rounded-lg border border-[#e5e5e5] text-sm text-black placeholder:text-[#9ca3af] focus:outline-none transition-all font-mono"
        />
        <button
          onClick={handleAnalyze}
          disabled={!rawHeaders.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <ArrowRightIcon size={16} weight="bold" />
          Analyze Headers
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <WarningIcon size={18} weight="fill" className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 whitespace-pre-line">{error}</p>
        </div>
      )}

      {/* Results */}
      {analysis && (
        <div className="mt-8 space-y-6">

          {/* Summary */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
              <ClockIcon size={16} weight="duotone" className="text-[#695AF2]" />
              Summary
            </h3>
            <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
              {[
                { label: 'From', value: analysis.from },
                { label: 'To', value: analysis.to },
                { label: 'Subject', value: analysis.subject },
                { label: 'Date', value: analysis.date },
                { label: 'Message-ID', value: analysis.messageId },
                { label: 'Return-Path', value: analysis.returnPath },
              ].filter((r) => r.value).map((row) => (
                <div key={row.label} className="flex px-4 py-2.5 text-sm">
                  <span className="text-[#6b7280] w-28 shrink-0 font-medium">{row.label}</span>
                  <span className="text-black break-all">{row.value}</span>
                </div>
              ))}
              {!analysis.from && !analysis.to && !analysis.subject && !analysis.date && (
                <div className="px-4 py-3 text-sm text-[#9ca3af]">No summary fields found in these headers.</div>
              )}
            </div>
          </div>

          {/* Authentication */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
              <ShieldCheckIcon size={16} weight="duotone" className="text-[#695AF2]" />
              Authentication
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <AuthBadge label="SPF" status={analysis.auth.spf} />
              <AuthBadge label="DKIM" status={analysis.auth.dkim} />
              <AuthBadge label="DMARC" status={analysis.auth.dmarc} />
            </div>
          </div>

          {/* Spam Score (if found) */}
          {analysis.spam && (
            <div>
              <h3 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
                <WarningIcon size={16} weight="duotone" className="text-[#695AF2]" />
                Spam Score
              </h3>
              <div className="border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  {analysis.spam.score !== null && (
                    <span className={`text-lg font-semibold ${analysis.spam.score >= 5 ? 'text-red-600' : analysis.spam.score >= 2 ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {analysis.spam.score}
                    </span>
                  )}
                  {analysis.spam.status && (
                    <span className={`text-sm font-medium px-2 py-0.5 rounded ${analysis.spam.status.toLowerCase() === 'yes' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {analysis.spam.status.toLowerCase() === 'yes' ? 'Marked as Spam' : 'Not Spam'}
                    </span>
                  )}
                </div>
                {analysis.spam.raw && (
                  <p className="text-xs text-[#9ca3af] mt-2 font-mono break-all">{analysis.spam.raw}</p>
                )}
              </div>
            </div>
          )}

          {/* Routing / Hops */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
              <ArrowRightIcon size={16} weight="duotone" className="text-[#695AF2]" />
              Routing ({analysis.hops.length} hop{analysis.hops.length !== 1 ? 's' : ''})
            </h3>
            {analysis.hops.length > 0 ? (
              <div className="border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-2.5 text-[#6b7280] font-medium text-xs">#</th>
                      <th className="px-4 py-2.5 text-[#6b7280] font-medium text-xs">Server</th>
                      <th className="px-4 py-2.5 text-[#6b7280] font-medium text-xs">IP</th>
                      <th className="px-4 py-2.5 text-[#6b7280] font-medium text-xs">Timestamp</th>
                      <th className="px-4 py-2.5 text-[#6b7280] font-medium text-xs">Delay</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {analysis.hops.map((hop, i) => {
                      const isDelayed = hop.delaySeconds !== null && hop.delaySeconds > 30;
                      return (
                        <tr key={i} className={isDelayed ? 'bg-amber-50' : ''}>
                          <td className="px-4 py-2.5 text-[#9ca3af] font-mono">{i + 1}</td>
                          <td className="px-4 py-2.5 text-black font-mono text-xs break-all max-w-[200px]">{hop.server}</td>
                          <td className="px-4 py-2.5 text-black font-mono text-xs">{hop.ip || '-'}</td>
                          <td className="px-4 py-2.5 text-[#6b7280] text-xs whitespace-nowrap">{formatTimestamp(hop.timestamp)}</td>
                          <td className={`px-4 py-2.5 text-xs font-medium ${isDelayed ? 'text-amber-600' : 'text-[#6b7280]'}`}>
                            {isDelayed && <WarningIcon size={14} weight="fill" className="inline mr-1 -mt-0.5 text-amber-500" />}
                            {formatDelay(hop.delaySeconds)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg px-4 py-3">
                <p className="text-sm text-[#9ca3af]">No Received headers found. Routing information is not available.</p>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
