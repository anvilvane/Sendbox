import React from 'react';
import Image from 'next/image';
import { ArrowSquareOut, Check, X } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import Prose from './Prose';
import ProsCons from './ProsCons';
import FeatureFAQ from './FeatureFAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AuthorByline from './AuthorByline';
import author from '@/data/author';

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

function Screenshot({ src, alt, caption, href }) {
  if (!src) return null;
  const img = (
    <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50 transition-shadow hover:shadow-md">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
      </div>
      {caption && <figcaption className="text-xs text-[#9ca3af] px-4 py-2 border-t border-gray-100">{caption}</figcaption>}
    </figure>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{img}</a>;
  return img;
}

function TwoWayTable({ rows, toolAName, toolBName, toolALogo, toolBLogo }) {
  if (!rows || rows.length === 0) return null;
  const categories = [...new Set(rows.map(r => r.category))];

  const ValueCell = ({ value, detail }) => (
    <td className="px-4 py-3 text-[13px]">
      <div className="flex items-start gap-1.5">
        {value === true ? (
          <Check size={13} weight="bold" className="text-black flex-shrink-0 mt-[2px]" />
        ) : value === false ? (
          <X size={13} weight="bold" className="text-[#d4d4d4] flex-shrink-0 mt-[2px]" />
        ) : null}
        <div>
          <span className="text-[#374151]">{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}</span>
          {detail && <p className="text-[#9ca3af] text-[11px] mt-0.5 leading-snug">{detail}</p>}
        </div>
      </div>
    </td>
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200 w-[36%]">Feature</th>
            <th className="text-left px-4 py-3 bg-gray-50 border-b border-gray-200 w-[32%]">
              <span className="flex items-center gap-1.5">
                {toolALogo &&
                  <Image src={toolALogo} alt={toolAName} width={64} height={16} className="h-4 w-auto rounded" />}
                <span className="text-[12px] font-semibold text-[#374151]">{toolAName}</span>
              </span>
            </th>
            <th className="text-left px-4 py-3 bg-gray-50 border-b border-gray-200 w-[32%]">
              <span className="flex items-center gap-1.5">
                {toolBLogo &&
                  <Image src={toolBLogo} alt={toolBName} width={64} height={16} className="h-4 w-auto rounded" />}
                <span className="text-[12px] font-semibold text-[#374151]">{toolBName}</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <React.Fragment key={category}>
              {categories.length > 1 && (
                <tr>
                  <td colSpan={3} className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] bg-white border-b border-gray-100 border-t border-gray-100">{category}</td>
                </tr>
              )}
              {rows.filter(r => r.category === category).map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 text-[13px] font-medium text-black">{row.feature}</td>
                  <ValueCell value={row.toolA.value} detail={row.toolA.detail} />
                  <ValueCell value={row.toolB.value} detail={row.toolB.detail} />
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContentSection({ section }) {
  return (
    <div id={section.id} className="scroll-mt-24">
      <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">{section.title}</h2>
      <Prose autoLink={false}>{section.content}</Prose>
      {section.highlights && section.highlights.length > 0 && (
        <div className="mt-5 rounded-lg border border-gray-100 bg-gray-50/70 p-4">
          <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Key takeaways</p>
          <ul className="space-y-2">
            {section.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[#695AF2] flex-shrink-0 mt-[9px]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function KeepReading({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="border-t border-gray-100 pt-6">
      <p className="text-sm font-semibold text-black mb-3">Keep reading</p>
      <ul className="space-y-1.5">
        {links.map((link, i) => (
          <li key={i}><a href={link.url} className="inline-flex items-center gap-1.5 text-[14px] text-[#695AF2] font-medium hover:underline">{link.title} <ArrowSquareOut size={13} /></a></li>
        ))}
      </ul>
    </div>
  );
}

export default function InfraComparisonTemplate({ data }) {
  const d = data;
  const readTime = Math.ceil(
    (d.sections.reduce((a, s) => a + s.content.split(/\s+/).length, 0)
    + d.faqs.reduce((a, f) => a + f.answer.split(/\s+/).length, 0)) / 200
  );

  const tocSections = [
    { id: 'comparison-table', title: 'Feature Comparison' },
    ...d.sections.map(s => ({ id: s.id, title: s.title })),
    { id: 'pros-cons', title: 'Pros & Cons' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/best-email-infrastructure" className="hover:text-black transition-colors">Infrastructure</a>
            <span>/</span>
            <span className="text-[#6b7280]">{d.toolA.name} vs {d.toolB.name}</span>
          </nav>

          <div className="inline-flex items-center gap-3 mb-5">
            {d.toolA.logo &&
              <Image src={d.toolA.logo} alt={d.toolA.name} width={96} height={24} className="h-6 w-auto rounded" />}
            <span className="text-[13px] font-medium text-[#9ca3af]">vs</span>
            {d.toolB.logo &&
              <Image src={d.toolB.logo} alt={d.toolB.name} width={96} height={24} className="h-6 w-auto rounded" />}
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">{d.headline}</h1>
          <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-3xl">{d.description}</p>

          <AuthorByline
            author={author}
            readTime={readTime}
            publishedDate={d.publishedDate}
            updatedDate={d.updatedDate}
          />
        </div>
      </Section>

      {/* Screenshots side by side */}
      {(d.toolA.screenshot || d.toolB.screenshot) && (
        <Section className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screenshot src={d.toolA.screenshot} alt={d.toolA.name} caption={`Source: ${d.toolA.name}`} href={d.toolA.url} />
            <Screenshot src={d.toolB.screenshot} alt={d.toolB.name} caption={`Source: ${d.toolB.name}`} href={d.toolB.url} />
          </div>
        </Section>
      )}

      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            {/* Verdict */}
            <div className="border-l-2 border-black pl-5">
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">The Verdict</p>
              <Prose autoLink={false}>{d.verdict}</Prose>
            </div>

            <div className="lg:hidden"><TableOfContents sections={tocSections} showCta={false} /></div>

            {/* Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">
                {d.toolA.name} vs {d.toolB.name}
              </h2>
              <TwoWayTable
                rows={d.comparisonTable}
                toolAName={d.toolA.name}
                toolBName={d.toolB.name}
                toolALogo={d.toolA.logo}
                toolBLogo={d.toolB.logo}
              />
            </div>

            {/* Content sections */}
            {d.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}

            {/* Pros & Cons */}
            <div id="pros-cons" className="scroll-mt-24 space-y-8">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2]">Pros & Cons</h2>
              <ProsCons name={d.toolA.name} pros={d.toolAPros} cons={d.toolACons} />
              <ProsCons name={d.toolB.name} pros={d.toolBPros} cons={d.toolBCons} />
            </div>

            <KeepReading links={d.keepReading} />
          </div>

          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} />
            </div>
          </aside>
        </div>
      </Section>

      <div id="faq" className="scroll-mt-24">
        <FeatureFAQ items={d.faqs} />
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
