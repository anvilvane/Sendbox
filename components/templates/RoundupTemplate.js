import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, ArrowSquareOut, CheckCircle, Crown } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import ProsCons from './ProsCons';
import FeatureFAQ from './FeatureFAQ';
import Prose from './Prose';
import ExternalSources from './ExternalSources';
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


function InlineCTA() {
  return (
    <div className="rounded-xl bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[15px] font-semibold text-white mb-0.5">Try Sendbox</p>
        <p className="text-sm text-gray-400">Dedicated IPs. Isolated infrastructure. From $99/mo.</p>
      </div>
      <a href="https://app.sendbox.ai/login" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0">
        Get Started <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

function ToolCard({ tool }) {
  const paragraphs = tool.description.split(/(?<=\.)\s+/).reduce((acc, s, i) => {
    const idx = Math.floor(i / 3);
    if (!acc[idx]) acc[idx] = [];
    acc[idx].push(s);
    return acc;
  }, []);

  return (
    <div id={`tool-${tool.rank}`} className={`scroll-mt-24 rounded-xl border p-5 md:p-6 ${tool.isSendbox ? 'border-[#2663eb]/20 bg-[#2663eb]/[0.015]' : 'border-gray-200'}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <span className={`text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tool.isSendbox ? 'bg-[#2663eb] text-white' : 'bg-gray-100 text-[#6b7280]'}`}>{tool.rank}</span>
        {tool.logo && (
          <Image src={tool.logo} alt={tool.name} width={80} height={20} className={`h-5 w-auto flex-shrink-0 ${tool.isSendbox ? '' : 'rounded'}`} />
        )}
        {!tool.isSendbox && <h3 className="text-lg font-semibold text-black">{tool.name}</h3>}
        {tool.isSendbox && <span className="text-[11px] font-medium text-[#2663eb] bg-[#2663eb]/10 px-2 py-0.5 rounded-full flex-shrink-0">Our Pick</span>}
        <span className="text-[12px] text-[#9ca3af] ml-auto whitespace-nowrap">{tool.startingPrice}</span>
      </div>
      <p className="text-[13px] text-[#9ca3af] mb-4 ml-[32px]">{tool.tagline}</p>

      {/* Screenshot */}
      {tool.screenshot && (
        <div className="rounded-lg border border-gray-200 overflow-hidden mb-4 bg-gray-50">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image src={tool.screenshot} alt={tool.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <p className="text-[11px] text-[#9ca3af] px-3 py-1.5 border-t border-gray-100">Source: {tool.name}</p>
        </div>
      )}

      {/* Description */}
      <div className="mb-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-[15px] text-[#374151] leading-[1.7] mb-3 last:mb-0">{para.join(' ')}</p>
        ))}
      </div>

      <ProsCons pros={tool.pros} cons={tool.cons} />

      {/* Verdict */}
      {tool.verdict && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-[14px] text-[#374151] leading-relaxed"><span className="font-semibold text-black">Verdict: </span>{tool.verdict}</p>
        </div>
      )}

      {/* Meta */}
      <div className="mt-3 text-[13px]">
        <span className="font-medium text-black">Best for: </span>
        <span className="text-[#6b7280]">{tool.bestFor}</span>
      </div>

      {/* Links */}
      {tool.links && (tool.links.vs || tool.links.alt) && (
        <div className="flex items-center gap-4 mt-3 text-[13px]">
          {tool.links.vs && (
            <a href={tool.links.vs} className="inline-flex items-center gap-1 text-[#2663eb] font-medium hover:underline">
              Sendbox vs {tool.name} <ArrowSquareOut size={12} />
            </a>
          )}
          {tool.links.alt && (
            <a href={tool.links.alt} className="inline-flex items-center gap-1 text-[#2663eb] font-medium hover:underline">
              {tool.name} Alternatives <ArrowSquareOut size={12} />
            </a>
          )}
        </div>
      )}

      {/* CTA for Sendbox */}
      {tool.isSendbox && (
        <div className="mt-4">
          <a href="https://app.sendbox.ai/login" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-[13px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg">
            Get Started
          </a>
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
          <li key={i}><a href={link.url} className="inline-flex items-center gap-1.5 text-[14px] text-[#2663eb] font-medium hover:underline">{link.title} <ArrowSquareOut size={13} /></a></li>
        ))}
      </ul>
    </div>
  );
}

export default function RoundupTemplate({
  data,
  parentCrumb = { name: 'Best-Of Guides', href: '/best-cold-email-tools' },
}) {
  const d = data;
  const readTime = Math.ceil(d.tools.reduce((a, t) => a + t.description.split(/\s+/).length, 0) / 200);

  const tocSections = [
    { id: 'methodology', title: 'Methodology' },
    ...d.tools.map((t) => ({ id: `tool-${t.rank}`, title: `#${t.rank} ${t.name}` })),
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href={parentCrumb.href} className="hover:text-black transition-colors">{parentCrumb.name}</a>
            <span>/</span>
            <span className="text-[#6b7280] truncate max-w-[260px]">{d.headline}</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
            <span>roundup</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            {d.headline}
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-3xl">{d.description}</p>

          <AuthorByline
            author={author}
            readTime={readTime}
            publishedDate={d.publishedDate}
            updatedDate={d.updatedDate}
          />
        </div>
      </Section>

      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            <div className="lg:hidden"><TableOfContents sections={tocSections} /></div>

            {/* Methodology */}
            <div id="methodology" className="scroll-mt-24">
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-4">{d.methodology.title}</h2>
              <div className="rounded-lg border border-gray-100 bg-gray-50/70 p-4">
                <ul className="space-y-2">
                  {d.methodology.criteria.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
                      <CheckCircle size={15} weight="fill" className="text-[#2663eb] flex-shrink-0 mt-[3px]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tool list */}
            <div className="space-y-6">
              {d.tools.map((tool, idx) => (
                <React.Fragment key={tool.rank}>
                  <ToolCard tool={tool} />
                  {idx === 0 && <InlineCTA />}
                  {idx === 3 && <InlineCTA />}
                </React.Fragment>
              ))}
            </div>

            <KeepReading links={d.keepReading} />
            <ExternalSources tools={['sendbox', 'instantly', 'smartlead', 'lemlist']} />
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
