import { getAuthoritativeSources } from '@/data/authoritative-sources';

// Renders independent citations (ESP postmaster tools, bulk-sender
// guidelines, M3AAWG best practices) backing deliverability claims made
// on the page. Pass `keys` to narrow to specific sources; omit for the
// full default set.
export default function AuthoritativeSources({ keys = [] }) {
  const sources = getAuthoritativeSources(keys);
  if (sources.length === 0) return null;

  return (
    <div className="border-t border-gray-100 pt-5 mt-8">
      <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Cited sources</p>
      <ul className="space-y-1.5">
        {sources.map((s) => (
          <li key={s.key} className="text-[12px] text-[#9ca3af]">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#2663eb] transition-colors">
              {s.publisher} &mdash; {s.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
