import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

function Section({ children, className = '' }) {
  return (
    <section className={`px-4 md:px-8 bg-white relative ${className}`}>
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative">{children}</div>
    </section>
  );
}

// groups: [{ title, links: [{ name, href }] }]
export default function RelatedLinks({ eyebrow = 'keep exploring', heading = 'Related pages', groups }) {
  const visibleGroups = (groups || []).filter((g) => g.links && g.links.length > 0);
  if (visibleGroups.length === 0) return null;

  return (
    <Section className="py-14 md:py-20 border-t border-gray-100">
      <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
        <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-black tracking-tight leading-[1.2] mb-8">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {visibleGroups.map((group) => (
          <div key={group.title}>
            <p className="text-[13px] font-medium text-[#9ca3af] uppercase tracking-wider mb-4">
              {group.title}
            </p>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-[#2663eb] font-medium hover:underline no-underline"
                  >
                    {link.name}
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
