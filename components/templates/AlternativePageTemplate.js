import { APP_LOGIN_URL } from "@/lib/app-url";

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, ArrowSquareOut, CheckCircle, XCircle, Crown } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import ProsCons from './ProsCons';
import FeatureFAQ from './FeatureFAQ';
import ExternalSources from './ExternalSources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AuthorByline from './AuthorByline';
import author from '@/data/author';

/* ---- Guide lines wrapper ---- */
function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`px-4 md:px-8 bg-white relative ${className}`}>
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

/* ---- Inline CTA ---- */
function InlineCTA({ heading = 'Switch to Sendbox', sub = 'Dedicated IPs. Isolated infrastructure. From $99/mo.' }) {
  return (
    <div className="rounded-xl bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[15px] font-semibold text-white mb-0.5">{heading}</p>
        <p className="text-sm text-gray-400">{sub}</p>
      </div>
      <a href={APP_LOGIN_URL} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0">
        Get Started <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ---- Methodology ---- */
function MethodologySection({ methodology }) {
  if (!methodology) return null;
  return (
    <div id="methodology" className="scroll-mt-24">
      <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-4">{methodology.title}</h2>
      <div className="rounded-lg border border-gray-100 bg-gray-50/70 p-4">
        <ul className="space-y-2">
          {methodology.criteria.map((c, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
              <CheckCircle size={15} weight="fill" className="text-[#695AF2] flex-shrink-0 mt-[3px]" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---- Switch Reasons ----
   Flowing divider list with a small violet dot leading-mark instead of
   a grid of identical bordered boxes -- matches WhySection's pattern. */
function SwitchReasons({ reasons, competitorName }) {
  if (!reasons || reasons.length === 0) return null;
  return (
    <div id="why-switch" className="scroll-mt-24">
      <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">Why people switch from {competitorName}</h2>
      <div className="grid grid-cols-1 divide-y divide-gray-100 border-t border-gray-100 sm:grid-cols-2 sm:divide-y-0 sm:gap-x-8">
        {reasons.map((r, i) => (
          <div key={i} className={`flex items-start gap-3 py-4 sm:border-t sm:border-gray-100 ${i % 2 === 0 ? 'sm:pr-4' : 'sm:pl-4'}`}>
            <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#695AF2]" />
            <div>
              <h3 className="text-[14px] font-semibold text-black mb-1">{r.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Quick Comparison Table ---- */
function QuickComparisonTable({ rows }) {
  if (!rows || rows.length === 0) return null;
  return (
    <div id="quick-comparison" className="scroll-mt-24">
      <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">Quick Comparison</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-3 py-2.5 font-semibold text-black border-b border-gray-200">Tool</th>
              <th className="text-left px-3 py-2.5 font-semibold text-black border-b border-gray-200">Best For</th>
              <th className="text-left px-3 py-2.5 font-semibold text-black border-b border-gray-200">Price</th>
              <th className="text-center px-3 py-2.5 font-semibold text-black border-b border-gray-200">IPs</th>
              <th className="text-center px-3 py-2.5 font-semibold text-black border-b border-gray-200">Dialer</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 last:border-0 ${i === 0 ? 'bg-[#695AF2]/[0.03]' : ''}`}>
                <td className={`px-3 py-2.5 font-medium whitespace-nowrap ${i === 0 ? 'text-[#695AF2]' : 'text-black'}`}>
                  {i === 0 && <Crown size={12} weight="fill" className="inline mr-1 text-[#695AF2] -mt-0.5" />}{row.tool}
                </td>
                <td className="px-3 py-2.5 text-[#6b7280]">{row.bestFor}</td>
                <td className="px-3 py-2.5 text-[#6b7280] whitespace-nowrap">{row.startingPrice}</td>
                <td className="px-3 py-2.5 text-center">{row.dedicatedIPs ? <CheckCircle size={15} weight="fill" className="text-green-500 inline" /> : <XCircle size={15} weight="fill" className="text-gray-300 inline" />}</td>
                <td className="px-3 py-2.5 text-center">{row.builtInDialer ? <CheckCircle size={15} weight="fill" className="text-green-500 inline" /> : <XCircle size={15} weight="fill" className="text-gray-300 inline" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---- Alternative Card ---- */
function AlternativeCard({ alt }) {
  const paragraphs = alt.description.split(/(?<=\.)\s+/).reduce((acc, s, i) => {
    const idx = Math.floor(i / 3);
    if (!acc[idx]) acc[idx] = [];
    acc[idx].push(s);
    return acc;
  }, []);

  return (
    <div id={`alt-${alt.rank}`} className={`scroll-mt-24 rounded-xl border p-5 md:p-6 ${alt.isSendbox ? 'border-[#695AF2]/20 bg-[#695AF2]/[0.015]' : 'border-gray-200'}`}>
      <div className="flex items-center gap-3 mb-1">
        <span className={`text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${alt.isSendbox ? 'bg-[#695AF2] text-white' : 'bg-gray-100 text-[#6b7280]'}`}>{alt.rank}</span>
        {alt.logo && (
          <Image src={alt.logo} alt={alt.name} width={80} height={20} className={`h-5 w-auto flex-shrink-0 ${alt.isSendbox ? '' : 'rounded'}`} />
        )}
        {!alt.isSendbox && <h3 className="text-lg font-semibold text-black">{alt.name}</h3>}
        {alt.isSendbox && <span className="text-[11px] font-medium text-[#695AF2] bg-[#695AF2]/10 px-2 py-0.5 rounded-full flex-shrink-0">Our Pick</span>}
      </div>
      <p className="text-[13px] text-[#9ca3af] mb-4 ml-[32px]">{alt.tagline}</p>

      <div className="mb-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-[15px] text-[#374151] leading-[1.7] mb-3 last:mb-0">{para.join(' ')}</p>
        ))}
      </div>

      {alt.screenshot && (
        <div className="rounded-lg border border-gray-200 overflow-hidden mb-5 bg-gray-50">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image src={alt.screenshot} alt={alt.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <p className="text-[11px] text-[#9ca3af] px-3 py-1.5 border-t border-gray-100">Source: {alt.name}</p>
        </div>
      )}

      <ProsCons pros={alt.pros} cons={alt.cons} />

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5 text-[13px]">
        <p><span className="font-semibold text-black">Pricing: </span><span className="text-[#6b7280]">{alt.pricing}</span></p>
        <p><span className="font-semibold text-black">Best for: </span><span className="text-[#6b7280]">{alt.bestFor}</span></p>
      </div>

      {alt.isSendbox && (
        <div className="mt-4">
          <a href={APP_LOGIN_URL} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-[13px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg">
            Get Started
          </a>
        </div>
      )}
    </div>
  );
}

/* ---- Keep Reading ---- */
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

/* ==================================================================== */
export default function AlternativePageTemplate({ alternative }) {
  const a = alternative;
  const readTime = Math.ceil(
    (a.alternatives.reduce((acc, alt) => acc + alt.description.split(/\s+/).length, 0) + a.faqs.reduce((acc, f) => acc + f.answer.split(/\s+/).length, 0)) / 200
  );
  const tocSections = [
    { id: 'methodology', title: 'Methodology' },
    { id: 'why-switch', title: `Why Switch` },
    { id: 'quick-comparison', title: 'Quick Comparison' },
    ...a.alternatives.map((alt) => ({ id: `alt-${alt.rank}`, title: `#${alt.rank} ${alt.name}` })),
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/compare" className="hover:text-black transition-colors">Compare</a>
            <span>/</span>
            <span className="text-[#6b7280]">{a.competitorName} Alternatives</span>
          </nav>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">{a.headline}</h1>
          <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-2xl">{a.description}</p>

          <AuthorByline
            author={author}
            readTime={readTime}
            publishedDate={a.publishedDate}
            updatedDate={a.updatedDate}
          />
        </div>
      </Section>

      {/* Body: two-column */}
      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            <div className="lg:hidden"><TableOfContents sections={tocSections} /></div>
            <MethodologySection methodology={a.methodology} />
            <SwitchReasons reasons={a.switchReasons} competitorName={a.competitorName} />
            <QuickComparisonTable rows={a.quickComparisonTable} />
            <InlineCTA />

            <div>
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-6">
                The 7 Best {a.competitorName} Alternatives
              </h2>
              <div className="space-y-6">
                {a.alternatives.map((alt, idx) => (
                  <React.Fragment key={alt.rank}>
                    <AlternativeCard alt={alt} />
                    {idx === 2 && <InlineCTA />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <KeepReading links={a.keepReading} />
            <ExternalSources tools={['sendbox', a.slug]} />
          </div>

          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24"><TableOfContents sections={tocSections} /></div>
          </aside>
        </div>
      </Section>

      <div id="faq" className="scroll-mt-24"><FeatureFAQ items={a.faqs} /></div>
      <CTA />
      <Footer />
    </main>
  );
}
