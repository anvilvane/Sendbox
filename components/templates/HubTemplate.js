import React from 'react';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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

function HubCard({ item }) {
  return (
    <a
      href={item.href}
      className="group rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col"
    >
      <h3 className="text-[15px] font-semibold text-black group-hover:text-[#2663eb] transition-colors mb-1.5">
        {item.title}
      </h3>
      <p className="text-[13px] text-[#6b7280] leading-relaxed line-clamp-3 flex-1">
        {item.description}
      </p>
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1 text-[13px] font-medium text-[#2663eb]">
        {item.cta || 'Learn more'}
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </a>
  );
}

export default function HubTemplate({ eyebrow, breadcrumb, title, description, stats, sections }) {
  return (
    <main className="bg-white">
      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#6b7280]">{breadcrumb}</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            {title}
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] max-w-2xl">{description}</p>

          {stats && stats.length > 0 && (
            <div className="flex items-center gap-6 mt-8 text-[13px] text-[#6b7280] flex-wrap">
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <span className="w-px h-4 bg-gray-200" />}
                  <span>
                    <span className="font-semibold text-black text-[15px]">{s.value}</span> {s.label}
                  </span>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </Section>

      {sections.map((section) => (
        <Section key={section.heading} className="pb-14 border-t border-gray-100">
          <div className="pt-10 md:pt-14">
            {section.heading && (
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-2">
                {section.heading}
              </h2>
            )}
            {section.subheading ? (
              <p className="text-[14px] text-[#6b7280] mb-6">{section.subheading}</p>
            ) : (
              <div className="mb-6" />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item) => (
                <HubCard key={item.href} item={item} />
              ))}
            </div>
          </div>
        </Section>
      ))}

      <CTA />
      <Footer />
    </main>
  );
}
