'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, WarningIcon, CheckCircleIcon, ClockIcon } from '@phosphor-icons/react/dist/ssr';

function formatDate(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

function ReadinessIndicator({ ageInDays }) {
  if (ageInDays === null) return null;

  if (ageInDays < 14) {
    return (
      <div className="flex items-center justify-center gap-2 mt-3 px-4 py-2 rounded-lg bg-red-50 border border-red-200">
        <WarningIcon size={16} weight="fill" className="text-red-500 shrink-0" />
        <span className="text-sm font-medium text-red-700">Too new for cold email</span>
      </div>
    );
  }

  if (ageInDays <= 30) {
    return (
      <div className="flex items-center justify-center gap-2 mt-3 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200">
        <ClockIcon size={16} weight="fill" className="text-amber-500 shrink-0" />
        <span className="text-sm font-medium text-amber-700">Almost ready. Keep warming up.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-3 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200">
      <CheckCircleIcon size={16} weight="fill" className="text-emerald-500 shrink-0" />
      <span className="text-sm font-medium text-emerald-700">Ready for cold outreach</span>
    </div>
  );
}

function Results({ result }) {
  if (!result) return null;

  const details = [
    { label: 'Created', value: formatDate(result.created) },
    { label: 'Updated', value: formatDate(result.updated) },
    { label: 'Expires', value: formatDate(result.expires) },
    { label: 'Registrar', value: result.registrar },
    { label: 'Age in days', value: result.ageInDays?.toLocaleString() },
  ].filter(d => d.value);

  return (
    <div className="mt-8">
      {/* Big age display */}
      <div className="text-center mb-6">
        <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-black leading-tight">
          {result.ageText || 'Unknown age'}
        </p>
        <p className="text-sm text-[#6b7280] mt-1.5">{result.domain}</p>
        <ReadinessIndicator ageInDays={result.ageInDays} />
      </div>

      {/* Details list */}
      {details.length > 0 && (
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
          {details.map((detail, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between">
              <span className="text-sm text-[#6b7280]">{detail.label}</span>
              <span className="text-sm font-medium text-black">{detail.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DomainAgeChecker() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true); setResult(null); setError(null);
    try {
      const res = await fetch('/api/tools/domain-age', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: input.trim() }),
      });
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
            placeholder="Enter a domain (e.g. example.com)"
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className={loading ? 'opacity-0' : ''}>Check</span>
          {loading && <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
        </button>
      </form>

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
