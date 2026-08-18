import { APP_LOGIN_URL } from "@/lib/app-url";

import Image from 'next/image';
import { ArrowRight, ArrowRightIcon, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import FeatureFAQ from './FeatureFAQ';
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

function AlternativeCard({ alt }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Image src={alt.logo} alt={alt.name} width={96} height={24} className="h-6 w-auto rounded" />
        <h3 className="text-lg font-semibold text-black">{alt.name}</h3>
        <span className="text-[12px] text-[#9ca3af] ml-auto whitespace-nowrap">{alt.startingPrice}</span>
      </div>
      <p className="text-[13px] text-[#6b7280] mb-4">{alt.tagline}</p>

      {/* Screenshot */}
      <a href={alt.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-gray-200 overflow-hidden mb-4 bg-gray-50 transition-shadow hover:shadow-md">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image src={alt.screenshot} alt={alt.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        </div>
      </a>

      {/* Description */}
      <p className="text-[15px] text-[#374151] leading-[1.7] mb-4">{alt.description}</p>

      {/* Pros / Cons inline */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Strengths</p>
          <ul className="space-y-1">
            {alt.pros.map((p, i) => (
              <li key={i} className="text-[13px] text-[#374151] flex items-start gap-1.5">
                <span className="text-black mt-[5px]">+</span> {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Limitations</p>
          <ul className="space-y-1">
            {alt.cons.map((c, i) => (
              <li key={i} className="text-[13px] text-[#6b7280] flex items-start gap-1.5">
                <span className="text-[#9ca3af] mt-[5px]">-</span> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-3 border-t border-gray-100 flex items-center gap-4 text-[13px]">
        <span><span className="font-medium text-black">Best for:</span> <span className="text-[#6b7280]">{alt.bestFor}</span></span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-3 text-[13px]">
        <a href={alt.vsLink} className="inline-flex items-center gap-1 text-[#695AF2] font-medium hover:underline">
          Sendbox vs {alt.name} <ArrowSquareOut size={12} />
        </a>
        <a href={alt.altLink} className="inline-flex items-center gap-1 text-[#695AF2] font-medium hover:underline">
          {alt.name} Alternatives <ArrowSquareOut size={12} />
        </a>
      </div>
    </div>
  );
}

export default function SendboxAlternativesTemplate({ data }) {
  const tocSections = [
    { id: 'why-this-page', title: 'Why This Page Exists' },
    { id: 'sendbox-strengths', title: 'Sendbox Strengths' },
    { id: 'sendbox-limitations', title: 'Sendbox Limitations' },
    { id: 'alternatives', title: 'The Alternatives' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/compare" className="hover:text-black transition-colors">Compare</a>
            <span>/</span>
            <span className="text-[#6b7280]">Sendbox Alternatives</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
            <span>sendbox alternatives</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            {data.headline}
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] max-w-3xl">{data.description}</p>
        </div>
      </Section>

      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            <div className="lg:hidden"><TableOfContents sections={tocSections} showCta={false} /></div>

            {/* Why this page */}
            <div id="why-this-page" className="scroll-mt-24 border-l-2 border-black pl-5">
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">{data.whyThisPageExists.title}</p>
              <p className="text-[16px] leading-[1.75] text-[#374151]">{data.whyThisPageExists.content}</p>
            </div>

            {/* Sendbox strengths */}
            <div id="sendbox-strengths" className="scroll-mt-24">
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">What Sendbox does well</h2>
              <ul className="space-y-2">
                {data.sendboxStrengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#374151] leading-relaxed">
                    <span className="text-black font-bold mt-[2px]">+</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sendbox limitations */}
            <div id="sendbox-limitations" className="scroll-mt-24">
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">Where Sendbox falls short</h2>
              <ul className="space-y-2">
                {data.sendboxLimitations.map((l, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#6b7280] leading-relaxed">
                    <span className="text-[#9ca3af] font-bold mt-[2px]">-</span> {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[15px] font-semibold text-white mb-0.5">Still want to try Sendbox?</p>
                <p className="text-sm text-gray-400">Dedicated IPs and isolated infrastructure on every plan.</p>
              </div>
              <a href={APP_LOGIN_URL} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0">
                Get Started <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Alternatives */}
            <div id="alternatives" className="scroll-mt-24">
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-6">The Alternatives</h2>
              <div className="space-y-6">
                {data.alternatives.map((alt, i) => (
                  <AlternativeCard key={i} alt={alt} />
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} />
            </div>
          </aside>
        </div>
      </Section>

      <div id="faq" className="scroll-mt-24">
        <FeatureFAQ items={data.faqs} />
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
