'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, WarningIcon } from '@phosphor-icons/react/dist/ssr';

const RECORD_TYPES = [
  { key: 'mx', label: 'MX Records' },
  { key: 'a', label: 'A Records' },
  { key: 'aaaa', label: 'AAAA Records' },
  { key: 'cname', label: 'CNAME Records' },
  { key: 'txt', label: 'TXT Records' },
  { key: 'ns', label: 'NS Records' },
];

function RecordSection({ type, records }) {
  if (!records || records.length === 0) return null;

  const config = RECORD_TYPES.find(r => r.key === type);
  if (!config) return null;

  return (
    <div>
      <p className="text-xs font-medium text-[#9ca3af] mb-2 uppercase tracking-wider">{config.label}</p>
      <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
        {type === 'mx' && records.map((r, i) => (
          <div key={i} className="px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-black">{r.exchange}</span>
            <span className="text-xs text-[#9ca3af] tabular-nums ml-3 shrink-0">Priority {r.priority}</span>
          </div>
        ))}
        {(type === 'a' || type === 'aaaa') && records.map((r, i) => (
          <div key={i} className="px-4 py-3">
            <span className="text-sm text-black font-mono">{r}</span>
          </div>
        ))}
        {type === 'cname' && records.map((r, i) => (
          <div key={i} className="px-4 py-3">
            <span className="text-sm text-black">{r}</span>
          </div>
        ))}
        {type === 'txt' && records.map((r, i) => (
          <div key={i} className="px-4 py-3">
            <span className="text-sm text-[#6b7280] font-mono break-all leading-relaxed">{r}</span>
          </div>
        ))}
        {type === 'ns' && records.map((r, i) => (
          <div key={i} className="px-4 py-3">
            <span className="text-sm text-black">{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DnsLookup() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleLookup = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch('/api/tools/dns-lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: input.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }
      setResult(data);
    } catch {
      setError('Failed to connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hasRecords = result?.records && RECORD_TYPES.some(t => result.records[t.key]?.length > 0);

  return (
    <div>
      <form onSubmit={handleLookup} className="flex gap-2">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a domain (e.g. google.com)"
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className={loading ? 'opacity-0' : ''}>Lookup</span>
          {loading && (
            <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2">
          <WarningIcon size={16} weight="fill" className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-8">
          <div className="text-center mb-6">
            <p className="text-[15px] font-semibold text-black">{result.domain}</p>
            <p className="text-sm text-[#6b7280] mt-1">
              {hasRecords
                ? `Found ${RECORD_TYPES.reduce((sum, t) => sum + (result.records[t.key]?.length || 0), 0)} records`
                : 'No DNS records found'}
            </p>
          </div>

          {hasRecords && (
            <div className="space-y-5">
              {RECORD_TYPES.map(t => (
                <RecordSection key={t.key} type={t.key} records={result.records[t.key]} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
