import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import FeatureFAQ from './FeatureFAQ';
import Prose from './Prose';
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


export default function WhatIsSendboxTemplate({ data }) {
  const readTime = Math.ceil(data.sections.reduce((a, s) => a + s.content.split(/\s+/).length, 0) / 200);
  const tocSections = [
    ...data.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: 'feature-highlights', title: 'Key Features' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#6b7280]">What is Sendbox</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
            <span>about sendbox</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">{data.headline}</h1>
          <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-2xl">{data.description}</p>

          <AuthorByline
            author={author}
            readTime={readTime}
            publishedDate={data.publishedDate}
            updatedDate={data.updatedDate}
          />
        </div>
      </Section>

      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            <div className="lg:hidden"><TableOfContents sections={tocSections} /></div>

            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">{section.title}</h2>
                <Prose>{section.content}</Prose>
              </div>
            ))}

            {/* Feature Highlights */}
            <div id="feature-highlights" className="scroll-mt-24">
              <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">Key Features at a Glance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.featureHighlights.map((h, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 p-4">
                    <h3 className="text-[14px] font-semibold text-black mb-1">{h.title}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[15px] font-semibold text-white mb-0.5">Ready to try Sendbox?</p>
                <p className="text-sm text-gray-400">Dedicated IPs and isolated infrastructure on every plan.</p>
              </div>
              <a href="https://app.sendbox.ai/login" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0">
                Get Started <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24"><TableOfContents sections={tocSections} /></div>
          </aside>
        </div>
      </Section>

      <div id="faq" className="scroll-mt-24"><FeatureFAQ items={data.faqs} /></div>
      <CTA />
      <Footer />
    </main>
  );
}
