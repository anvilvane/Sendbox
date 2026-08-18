'use client';

import { useState, useRef } from 'react';
import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, WarningIcon } from '@phosphor-icons/react/dist/ssr';
import TurnstileWidget from './TurnstileWidget';

function RecordRow({ title, found, children }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <p className="text-sm font-semibold text-black">{title}</p>
        {found ? (
          <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
            <CheckCircleIcon size={14} weight="fill" /> Found
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-red-600 font-medium">
            <XCircleIcon size={14} weight="fill" /> Not Found
          </span>
        )}
      </div>
      <div className="px-4 py-3">{children}</div>
    </div>
  );
}

export default function DnsChecker() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const turnstileToken = useRef(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!domain.trim()) return;
    setLoading(true); setResult(null); setError(null);
    try {
      const res = await fetch('/api/tools/dns-check', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: domain.trim(), _turnstile_token: turnstileToken.current, _fingerprint: typeof navigator !== 'undefined' ? btoa(navigator.userAgent + screen.width + screen.height) : null }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong'); return; }
      setResult(data);
    } catch {
      setError('Failed to connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain (e.g., yourdomain.com)"
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !domain.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className={loading ? 'opacity-0' : ''}>Check</span>
          {loading && <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
        </button>
      </form>

      <TurnstileWidget onToken={(t) => { turnstileToken.current = t; }} onExpire={() => { turnstileToken.current = null; }} />

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2">
          <WarningIcon size={16} weight="fill" className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-4">
          {/* SPF */}
          <RecordRow title="SPF (Sender Policy Framework)" found={result.spf.found}>
            {result.spf.found ? (
              <>
                <p className="text-sm text-[#6b7280] font-mono bg-gray-50 rounded p-2 break-all">{result.spf.record}</p>
                <p className="text-sm text-[#6b7280] mt-2">Specifies which servers are authorized to send email from your domain.</p>
              </>
            ) : (
              <p className="text-sm text-[#6b7280]">Add a TXT record starting with &quot;v=spf1&quot; to authorize sending servers.</p>
            )}
          </RecordRow>

          {/* DKIM */}
          <RecordRow title="DKIM (DomainKeys Identified Mail)" found={result.dkim.found}>
            {result.dkim.found ? (
              <>
                <p className="text-xs text-[#9ca3af] mb-1">Selector: {result.dkim.selector}</p>
                <p className="text-sm text-[#6b7280] font-mono bg-gray-50 rounded p-2 break-all line-clamp-3">{result.dkim.record}</p>
                <p className="text-sm text-[#6b7280] mt-2">Cryptographic signature attached to outgoing emails.</p>
              </>
            ) : (
              <p className="text-sm text-[#6b7280]">No DKIM record found for common selectors. Check with your email provider.</p>
            )}
          </RecordRow>

          {/* DMARC */}
          <RecordRow title="DMARC (Domain-based Message Authentication)" found={result.dmarc.found}>
            {result.dmarc.found ? (
              <>
                <p className="text-sm text-[#6b7280] font-mono bg-gray-50 rounded p-2 break-all">{result.dmarc.record}</p>
                {result.dmarc.policy && (
                  <p className="text-xs text-[#9ca3af] mt-2">
                    Policy: <span className="font-medium text-black">{result.dmarc.policy}</span>
                    {result.dmarc.policy === 'none' && ' (monitoring only, no enforcement)'}
                    {result.dmarc.policy === 'quarantine' && ' (failing emails sent to spam)'}
                    {result.dmarc.policy === 'reject' && ' (failing emails rejected)'}
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-[#6b7280]">Add a TXT record at _dmarc.{result.domain} to handle authentication failures.</p>
            )}
          </RecordRow>
        </div>
      )}
    </div>
  );
}
