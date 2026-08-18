import Link from 'next/link';
import Image from 'next/image';

// Gradient variants. Palette colors only: primary blue (#695AF2),
// primary hover (#5847E0), dark (#1a1a1a).
const GRADIENTS = [
  'from-[#695AF2] to-[#5847E0]',
  'from-[#1a1a1a] to-[#695AF2]',
  'from-[#5847E0] to-[#1a1a1a]',
  'from-[#695AF2] to-[#1a1a1a]',
];

// Pick a gradient from a stable hash of the href, so cards in a grid get a
// natural-looking spread instead of a visible repeating row pattern.
function pickGradient(seed = '') {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[h % GRADIENTS.length];
}

function ArrowUpRight({ className }) {
  return (
    <svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

export default function ContentCard({
  href,
  title,
  category,
  excerpt,
  readTime,
  author,
}) {
  const gradient = pickGradient(href);

  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-gray-300 hover:shadow-md transition-all no-underline"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${gradient} p-5 min-h-[148px] flex flex-col`}>
        <div className="flex items-start justify-between">
          <Image
            src="/icon.png"
            alt="Sendbox"
            width={84}
            height={17}
            className="h-3.5 w-auto brightness-0 invert opacity-90"
          />
          <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
        <p className="text-[15px] font-semibold text-white leading-snug mt-auto pt-4 line-clamp-3">
          {title}
        </p>
      </div>

      {/* Body */}
      <div className="p-5">
        {category && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#695AF2]">
            {category}
          </span>
        )}
        <h3 className="text-[15px] font-semibold text-black group-hover:text-[#695AF2] transition-colors leading-snug mt-1.5 mb-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-[13px] text-[#6b7280] leading-relaxed line-clamp-2 mb-4">
            {excerpt}
          </p>
        )}
        {author && (
          <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
            <Image
              src={author.avatar}
              alt={author.name}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover border border-gray-200"
            />
            <p className="text-[12px] leading-tight">
              <span className="text-black font-medium">{author.name}</span>
              {readTime && <span className="text-[#9ca3af]"> · {readTime} min read</span>}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
