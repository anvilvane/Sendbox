'use client';

import { useState, useRef } from 'react';
import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, WarningIcon, CaretDownIcon } from '@phosphor-icons/react/dist/ssr';
import TurnstileWidget from './TurnstileWidget';

function Results({ result }) {
  const [expanded, setExpanded] = useState(false);
  if (!result) return null;

  const listed = result.summary?.total_listed ?? 0;
  const total = result.summary?.total_checked ?? 0;
  const clean = total - listed;
  const score = result.summary?.health_score ?? result.overall_score ?? (total > 0 ? Math.round((clean / total) * 100) : 0);
  const query = result.check_value || result.query || '';
  const color = score >= 90 ? '#22c55e' : score >= 70 ? '#f59e0b' : '#ef4444';
  const circ = 2 * Math.PI * 42;
  const offset = circ - (score / 100) * circ;

  const sorted = result.results ? [...result.results].sort((a, b) => (b.listed ? 1 : 0) - (a.listed ? 1 : 0)) : [];
  const listedItems = sorted.filter(r => r.listed);
  const cleanItems = sorted.filter(r => !r.listed);
  const visibleClean = expanded ? cleanItems : cleanItems.slice(0, 6);

  return (
    <div className="mt-6">
      {/* Score */}
      <div className="text-center mb-5">
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-3">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="42" fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <circle cx="48" cy="48" r="42" fill="none" stroke={color} strokeWidth="4"
              strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
          </svg>
          <span className="absolute text-2xl font-bold text-black tabular-nums">{Math.round(score)}</span>
        </div>
        <p className="text-[15px] font-semibold text-black">{query}</p>
        <p className="text-sm text-[#6b7280] mt-1">
          {listed === 0 ? 'Clean across all databases' : score >= 70 ? 'Some listings detected' : 'Needs immediate attention'}
        </p>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-xs text-[#6b7280]"><strong>{total}</strong> checked</span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="text-xs text-emerald-600"><strong>{clean}</strong> clean</span>
          {listed > 0 && <>
            <span className="w-px h-3 bg-gray-200" />
            <span className="text-xs text-red-600"><strong>{listed}</strong> listed</span>
          </>}
        </div>
      </div>

      {/* Listings */}
      {listedItems.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-medium text-red-600 mb-2">Listed on {listedItems.length} blacklist{listedItems.length > 1 ? 's' : ''}</p>
          <div className="border border-red-200 rounded-lg divide-y divide-red-100 overflow-hidden">
            {listedItems.map((item, i) => (
              <div key={i} className="px-4 py-3 flex items-center justify-between bg-red-50/50">
                <div className="min-w-0">
                  <p className="text-sm text-black font-medium">{item.blacklist || item.name}</p>
                  {item.reason && <p className="text-xs text-[#9ca3af] mt-0.5 truncate">{item.reason}</p>}
                </div>
                <XCircleIcon size={16} weight="fill" className="text-red-500 shrink-0 ml-3" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clean */}
      {cleanItems.length > 0 && (
        <div>
          <p className="text-xs font-medium text-[#9ca3af] mb-2">Clean ({cleanItems.length})</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
            {visibleClean.map((item, i) => (
              <div key={i} className="px-4 py-2.5 flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">{item.blacklist || item.name}</span>
                <CheckCircleIcon size={15} weight="fill" className="text-emerald-500 shrink-0" />
              </div>
            ))}
          </div>
          {cleanItems.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 mt-2.5 text-xs font-medium text-[#6b7280] hover:text-black transition-colors"
            >
              {expanded ? 'Show less' : `Show all ${cleanItems.length}`}
              <CaretDownIcon size={10} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      )}

      {result.ip && <p className="text-xs text-[#9ca3af] mt-2">Resolved IP: {result.ip}</p>}
    </div>
  );
}

export default function BlacklistChecker() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const turnstileToken = useRef(null);

  const detectType = (v) => {
    if (v.includes('@')) return 'email';
    if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v)) return 'ip';
    return 'domain';
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true); setResult(null); setError(null);
    try {
      const type = detectType(input.trim());
      const body = { _turnstile_token: turnstileToken.current, _fingerprint: typeof navigator !== 'undefined' ? btoa(navigator.userAgent + screen.width + screen.height) : null };
      body[type] = input.trim();
      const res = await fetch('/api/tools/blacklist-check', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter email, IP, or domain..."
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
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

      <Results result={result} />
    </div>
  );
}
