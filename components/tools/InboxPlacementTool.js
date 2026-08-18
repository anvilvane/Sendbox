'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  CheckCircleIcon,
  XCircleIcon,
  WarningIcon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldWarningIcon,
  FireIcon,
  SealWarningIcon,
  TagIcon,
} from '@phosphor-icons/react/dist/ssr';
import TurnstileWidget from './TurnstileWidget';

const PROVIDERS = [
  { value: 'personal_gmail', label: 'Personal', logo: '/icons/providers/google.png' },
  { value: 'personal_outlook', label: 'Personal', logo: '/icons/providers/outlook.png' },
  { value: 'business_gmail', label: 'Business', logo: '/icons/providers/google.png' },
  { value: 'business_outlook', label: 'Business', logo: '/icons/providers/outlook.png' },
];

function CopyBtn({ text, label = 'Copy', className = '' }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  return (
    <button onClick={copy}
      className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${copied ? 'text-[#2663eb]' : 'text-[#9ca3af] hover:text-[#6b7280]'} ${className}`}>
      {copied ? <CheckIcon size={12} weight="bold" /> : <CopyIcon size={12} />}
      {copied ? 'Copied' : label}
    </button>
  );
}

function Badge({ placement }) {
  const map = {
    inbox: 'text-emerald-600 bg-emerald-50', primary: 'text-emerald-600 bg-emerald-50',
    spam: 'text-red-600 bg-red-50', promotions: 'text-amber-600 bg-amber-50',
    categories: 'text-amber-600 bg-amber-50', other: 'text-[#6b7280] bg-gray-50',
    not_found: 'text-[#9ca3af] bg-gray-50',
  };
  const labels = { inbox: 'Inbox', primary: 'Primary', spam: 'Spam', promotions: 'Promotions', categories: 'Categories', other: 'Other', not_found: 'Not Found' };
  return <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-semibold ${map[placement] || map.not_found}`}>{labels[placement] || 'Not Found'}</span>;
}

function deriveIssues(statusData, prov) {
  const issues = [];
  const summary = statusData?.summary;
  const score = statusData?.overall_score ?? summary?.overall_score ?? 0;
  const spam = summary?.total_spam ?? summary?.spam ?? 0;
  const promo = summary?.total_promotions ?? summary?.promotions ?? 0;
  const primary = summary?.total_primary ?? summary?.inbox ?? 0;
  const total = spam + promo + primary;

  if (spam > 0) issues.push({ sev: 'crit', icon: ShieldWarningIcon, title: `${spam} email${spam > 1 ? 's' : ''} landed in spam`, desc: 'Check SPF, DKIM, and DMARC. Review content for spam triggers.' });
  if (promo > 0) issues.push({ sev: 'warn', icon: TagIcon, title: `${promo} email${promo > 1 ? 's' : ''} routed to Promotions`, desc: 'Reduce HTML and links. Plain-text formatting helps.' });
  if (score < 50 && total > 0) issues.push({ sev: 'crit', icon: FireIcon, title: 'Sender reputation at risk', desc: 'Pause campaigns and warm up before resuming.' });
  else if (score >= 50 && score < 80) issues.push({ sev: 'warn', icon: SealWarningIcon, title: 'Below inbox threshold', desc: 'Reduce volume and improve engagement.' });
  if (spam > 0 && prov?.startsWith('business_')) issues.push({ sev: 'warn', icon: ShieldWarningIcon, title: 'Business provider filtering', desc: 'Stricter filtering. Check domain age and volume.' });
  if (total > 0 && primary === 0) issues.push({ sev: 'crit', icon: XCircleIcon, title: 'Zero inbox placement', desc: 'Check sending infrastructure immediately.' });
  if (!issues.length && score >= 80) issues.push({ sev: 'ok', icon: CheckCircleIcon, title: 'No issues detected', desc: 'Landing in primary. Keep monitoring.' });
  return issues;
}

export default function InboxPlacementTool() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState('personal_gmail');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testData, setTestData] = useState(null);
  const [statusData, setStatusData] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const pollRef = useRef(null);
  const timerRef = useRef(null);
  const turnstileToken = useRef(null);

  const stopPolling = useCallback(() => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);
  useEffect(() => () => stopPolling(), [stopPolling]);

  const generate = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/tools/inbox-placement/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ types: [provider], _turnstile_token: turnstileToken.current, _fingerprint: typeof navigator !== 'undefined' ? btoa(navigator.userAgent + screen.width + screen.height) : null }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Failed to generate test'); return; }
      setTestData(data); setStep(2);
    } catch { setError('Failed to connect.'); }
    finally { setLoading(false); }
  };

  const confirmSent = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/tools/inbox-placement/start', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test_code: testData.test_code, complete_early: true, expected_senders: 1 }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Failed to start'); setLoading(false); return; }
      setStep(3); setLoading(false); setElapsed(0);
      timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
      const poll = async () => {
        try {
          const r = await fetch(`/api/tools/inbox-placement/status/${testData.test_code}`);
          const d = await r.json();
          if (r.ok && d.success) { setStatusData(d); if (d.status === 'completed' || d.status === 'done') { stopPolling(); setStep(4); } }
        } catch { /* retry next interval */ }
      };
      poll(); pollRef.current = setInterval(poll, 5000);
    } catch { setError('Failed to connect.'); setLoading(false); }
  };

  const reset = () => { stopPolling(); setStep(1); setTestData(null); setStatusData(null); setError(null); setElapsed(0); };
  const fmt = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  const allEmails = testData?.receiver_mailboxes?.map(m => m.email || m).join(', ') || '';

  // Shared button classes matching site design
  const primaryBtn = 'relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none';
  const secondaryBtn = 'inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5';

  return (
    <div>
      {/* Steps */}
      <div className="flex items-center mb-8">
        {['Provider', 'Send', 'Analyzing', 'Results'].map((l, i) => {
          const n = i + 1, done = step > n, active = step === n;
          return (
            <div key={n} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all ${done || active ? 'bg-[#2663eb] text-white' : 'bg-gray-100 text-[#9ca3af]'}`}>
                  {done ? <CheckIcon size={10} weight="bold" /> : n}
                </div>
                <span className={`text-xs font-medium hidden sm:block transition-colors ${done || active ? 'text-black' : 'text-[#9ca3af]'}`}>{l}</span>
              </div>
              {i < 3 && <div className={`flex-1 h-px mx-2.5 transition-colors ${done ? 'bg-[#2663eb]' : 'bg-gray-200'}`} />}
            </div>
          );
        })}
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2">
          <WarningIcon size={16} weight="fill" className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <TurnstileWidget onToken={(t) => { turnstileToken.current = t; }} onExpire={() => { turnstileToken.current = null; }} />

      {/* Step 1: Provider selection */}
      {step === 1 && (
        <div className="space-y-8">
          <div className="flex gap-2.5 justify-center">
            {PROVIDERS.map(p => {
              const active = provider === p.value;
              return (
                <button key={p.value} onClick={() => setProvider(p.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    active
                      ? 'border-[#2663eb] bg-[#2663eb]/[0.04] text-black'
                      : 'border-[#e5e5e5] text-[#6b7280] hover:border-gray-300 hover:text-black'
                  }`}>
                  <Image src={p.logo} alt={p.label} width={16} height={16} className="w-4 h-4" />
                  {p.label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-4">
            <button onClick={generate} disabled={loading} className={primaryBtn}>
              <span className={loading ? 'opacity-0' : ''}>Generate test</span>
              {loading && <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9ca3af]">No signup required</span>
              <span className="w-px h-3 bg-gray-200" />
              <span className="text-xs text-[#9ca3af]">Results in under 5 min</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Send instructions */}
      {step === 2 && testData && (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-black mb-1.5">Use this as your email subject</p>
            <div className="flex items-center justify-between border border-[#e5e5e5] rounded-lg px-4 py-2.5">
              <code className="text-sm text-black font-mono select-all">{testData.test_code}</code>
              <CopyBtn text={testData.test_code} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-sm font-medium text-black">Send to</p>
              {testData.receiver_mailboxes?.length > 1 && <CopyBtn text={allEmails} label="Copy all" />}
            </div>
            <div className="space-y-1.5">
              {testData.receiver_mailboxes?.map((mailbox, i) => {
                const email = mailbox.email || mailbox;
                return (
                  <div key={i} className="flex items-center justify-between border border-[#e5e5e5] rounded-lg px-4 py-2.5 group">
                    <span className="text-sm text-[#6b7280] font-mono truncate mr-2">{email}</span>
                    <CopyBtn text={email} className="opacity-0 group-hover:opacity-100 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-[#9ca3af] leading-relaxed">
            Send from the mailbox you want to test. Use the code as the subject. Body can be anything.
          </p>

          <button onClick={confirmSent} disabled={loading} className={`${primaryBtn} w-full`}>
            <span className={loading ? 'opacity-0' : ''}>I've sent it</span>
            {loading && <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
          </button>
        </div>
      )}

      {/* Step 3: Waiting */}
      {step === 3 && (
        <div className="text-center py-10 space-y-4">
          <svg className="animate-spin h-7 w-7 text-[#2663eb] mx-auto" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          <div>
            <p className="text-[15px] font-semibold text-black">Checking placement</p>
            <p className="text-sm text-[#9ca3af] mt-0.5">Usually 2-5 minutes</p>
          </div>
          <div className="max-w-[220px] mx-auto">
            <div className="w-full h-[3px] bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#2663eb] rounded-full transition-all duration-1000 ease-linear" style={{ width: `${Math.min((elapsed / 300) * 100, 95)}%` }} />
            </div>
            <p className="text-xs text-[#9ca3af] mt-1.5 tabular-nums">{fmt(elapsed)}</p>
          </div>
          {statusData?.progress && <p className="text-xs text-[#9ca3af]">{statusData.progress.found}/{statusData.progress.total_expected} mailboxes</p>}
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && statusData && (
        <div className="space-y-5">
          {/* Score ring */}
          {(statusData.overall_score != null || statusData.summary?.overall_score != null) && (() => {
            const score = statusData.overall_score ?? statusData.summary?.overall_score ?? 0;
            const color = score >= 80 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444';
            const circ = 2 * Math.PI * 42;
            const offset = circ - (score / 100) * circ;
            return (
              <div className="text-center mb-2">
                <div className="relative inline-flex items-center justify-center w-24 h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r="42" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                    <circle cx="48" cy="48" r="42" fill="none" stroke={color} strokeWidth="4"
                      strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
                      style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
                  </svg>
                  <span className="absolute text-2xl font-bold text-black tabular-nums">{Math.round(score)}</span>
                </div>
                <p className="text-[15px] font-semibold text-black mt-2">
                  {score >= 80 ? 'Great placement' : score >= 50 ? 'Needs improvement' : 'Deliverability issues'}
                </p>
                <p className="text-sm text-[#9ca3af] mt-0.5">{PROVIDERS.find(p => p.value === provider)?.label}</p>
              </div>
            );
          })()}

          {/* Breakdown */}
          {statusData.summary && (
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: statusData.summary.total_primary ?? statusData.summary.inbox ?? 0, l: 'Primary', c: 'text-emerald-600' },
                { n: statusData.summary.total_promotions ?? statusData.summary.promotions ?? 0, l: 'Promotions', c: 'text-amber-600' },
                { n: statusData.summary.total_spam ?? statusData.summary.spam ?? 0, l: 'Spam', c: 'text-red-600' },
              ].map(d => (
                <div key={d.l} className="border border-gray-200 rounded-lg py-3 text-center">
                  <p className={`text-xl font-bold tabular-nums ${d.c}`}>{d.n}</p>
                  <p className="text-xs text-[#9ca3af] font-medium">{d.l}</p>
                </div>
              ))}
            </div>
          )}

          {/* Issues */}
          {(() => {
            const issues = deriveIssues(statusData, provider);
            if (!issues.length) return null;
            return (
              <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
                {issues.map((issue, i) => {
                  const Icon = issue.icon;
                  const ic = issue.sev === 'crit' ? 'text-red-500' : issue.sev === 'warn' ? 'text-amber-500' : 'text-emerald-500';
                  return (
                    <div key={i} className="px-4 py-3 flex items-start gap-2.5">
                      <Icon size={16} weight="fill" className={`${ic} shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-sm font-medium text-black">{issue.title}</p>
                        <p className="text-sm text-[#9ca3af] mt-0.5">{issue.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* Per-provider */}
          {statusData.summary?.by_provider && (
            <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
              {Object.entries(statusData.summary.by_provider).map(([prov, data]) => (
                <div key={prov} className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-black capitalize">{prov.replace(/_/g, ' ')}</p>
                    <p className="text-xs text-[#9ca3af]">{data.primary || 0} inbox, {data.spam || 0} spam, {data.promotions || 0} promo</p>
                  </div>
                  <span className={`text-sm font-bold tabular-nums ${(data.score || 0) >= 80 ? 'text-emerald-600' : (data.score || 0) >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                    {Math.round(data.score || 0)}%
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed results */}
          {statusData.results?.length > 0 && (
            <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
              {statusData.results.map((r, i) => (
                <div key={i} className="px-4 py-3">
                  <p className="text-sm font-medium text-black mb-1.5">{r.receiver_email || r.email || `Mailbox ${i + 1}`}</p>
                  {r.senders?.length > 0 ? (
                    <div className="space-y-1">
                      {r.senders.map((s, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <span className="text-xs text-[#9ca3af] font-mono truncate mr-2">{s.sender_email}</span>
                          <Badge placement={s.placement} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Badge placement={r.placement || r.folder} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="https://app.sendbox.ai/login" className={`${primaryBtn} no-underline`}>
              Get Started
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <button onClick={reset} className={secondaryBtn}>
              Run again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
