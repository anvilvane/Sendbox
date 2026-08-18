'use client';

import { useState, useRef } from 'react';
import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, WarningIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import TurnstileWidget from './TurnstileWidget';

const STATUS_MAP = {
  deliverable:   { bg: 'bg-emerald-50', color: 'text-emerald-600', icon: CheckCircleIcon, label: 'Deliverable' },
  risky:         { bg: 'bg-amber-50',   color: 'text-amber-600',   icon: WarningIcon,     label: 'Risky' },
  undeliverable: { bg: 'bg-red-50',     color: 'text-red-600',     icon: XCircleIcon,     label: 'Undeliverable' },
  unknown:       { bg: 'bg-gray-50',    color: 'text-[#6b7280]',   icon: EnvelopeSimpleIcon, label: 'Unknown' },
};

export default function EmailValidator() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const turnstileToken = useRef(null);

  const handleValidate = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true); setResult(null); setError(null);
    try {
      const res = await fetch('/api/tools/validate-email', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), _turnstile_token: turnstileToken.current, _fingerprint: typeof navigator !== 'undefined' ? btoa(navigator.userAgent + screen.width + screen.height) : null }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong'); return; }
      setResult(data);
    } catch {
      setError('Failed to connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const s = result ? (STATUS_MAP[result.status] || STATUS_MAP.unknown) : null;

  return (
    <div>
      <form onSubmit={handleValidate} className="flex gap-2">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address to validate..."
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !email.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className={loading ? 'opacity-0' : ''}>Validate</span>
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

      {result && s && (
        <div className="mt-8 space-y-4">
          {/* Status */}
          <div className="text-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${s.bg} border border-transparent`}>
              <s.icon size={20} weight="fill" className={s.color} />
              <span className={`text-[15px] font-semibold ${s.color}`}>{s.label}</span>
            </div>
            <p className="text-sm font-medium text-black mt-3">{result.email}</p>
            {result.reason && <p className="text-sm text-[#9ca3af] mt-1">{result.reason}</p>}
          </div>

          {/* Details */}
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-sm text-[#6b7280]">Format</span>
              {result.format_valid ? (
                <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium"><CheckCircleIcon size={14} weight="fill" /> Valid</span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-red-600 font-medium"><XCircleIcon size={14} weight="fill" /> Invalid</span>
              )}
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-sm text-[#6b7280]">Mailbox</span>
              {result.status === 'deliverable' ? (
                <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium"><CheckCircleIcon size={14} weight="fill" /> Exists</span>
              ) : result.status === 'risky' ? (
                <span className="flex items-center gap-1 text-xs text-amber-600 font-medium"><WarningIcon size={14} weight="fill" /> Catch-all</span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-red-600 font-medium"><XCircleIcon size={14} weight="fill" /> Not found</span>
              )}
            </div>
            {result.is_catch_all && (
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Catch-all domain</span>
                <span className="flex items-center gap-1 text-xs text-amber-600 font-medium"><WarningIcon size={14} weight="fill" /> Yes</span>
              </div>
            )}
            {result.provider && (
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Provider</span>
                <span className="text-sm font-medium text-black">{result.provider}</span>
              </div>
            )}
            {result.confidence && (
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Confidence</span>
                <span className="text-sm font-medium text-black capitalize">{result.confidence}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
