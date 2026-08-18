import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
import ComparisonTable from './ComparisonTable';
import ProsCons from './ProsCons';
import FeatureFAQ from './FeatureFAQ';
import Prose from './Prose';
import ExternalSources from './ExternalSources';
import AuthoritativeSources from './AuthoritativeSources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AuthorByline from './AuthorByline';
import author from '@/data/author';

/* ---- Guide lines wrapper (matches site pattern) ---- */
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


/* ---- Inline CTA (always dark) ---- */
function InlineCTA({ heading = 'Switch to Sendbox', sub = 'Dedicated IPs. Isolated infrastructure. From $99/mo.', cta = 'Get Started' }) {
  return (
    <div className="rounded-xl bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[15px] font-semibold text-white mb-0.5">{heading}</p>
        <p className="text-sm text-gray-400">{sub}</p>
      </div>
      <a href="https://app.sendbox.ai/login" data-fast-goal="click_dark_cta" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0">
        {cta} <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

/* ---- Verdict ---- */
function VerdictBox({ verdict }) {
  return (
    <div className="border-l-2 border-black pl-5">
      <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">The Verdict</p>
      <Prose>{verdict}</Prose>
    </div>
  );
}

/* ---- Screenshot (clickable, 16:9 cropped, high-res) ---- */
function Screenshot({ src, alt, caption, href, priority = false }) {
  if (!src) return null;
  const img = (
    <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50 transition-shadow hover:shadow-md">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" priority={priority} />
      </div>
      {caption && <figcaption className="text-xs text-[#9ca3af] px-4 py-2 border-t border-gray-100">{caption}</figcaption>}
    </figure>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{img}</a>;
  return img;
}

/* ---- Pricing ---- */
function PricingComparison({ data, competitorName, competitorLogo }) {
  if (!data) return null;

  const PlanRow = ({ plan, accent }) => (
    <div className={`flex items-baseline justify-between py-3 border-b border-gray-100 last:border-0 ${accent ? '' : ''}`}>
      <div className="flex-1 min-w-0">
        <span className={`text-[14px] font-semibold ${accent ? 'text-black' : 'text-[#374151]'}`}>{plan.name}</span>
        <p className="text-[12px] text-[#9ca3af] mt-0.5">{plan.emails} emails &middot; {plan.leads} leads</p>
        <p className="text-[12px] text-[#6b7280] mt-0.5">{plan.highlight}</p>
      </div>
      <span className={`text-[15px] font-semibold flex-shrink-0 ml-4 ${accent ? 'text-[#2663eb]' : 'text-[#6b7280]'}`}>{plan.price}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sendbox */}
        <div>
          <div className="mb-4">
            <Image src="/icon.png" alt="Sendbox" width={80} height={20} className="h-5 w-auto" />
          </div>
          <div>{data.sendboxPlans.map((p, i) => <PlanRow key={i} plan={p} accent />)}</div>
        </div>

        {/* Competitor */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {competitorLogo && (
              <Image src={competitorLogo} alt={competitorName} width={80} height={20} className="h-5 w-auto rounded" />
            )}
            <span className="text-[14px] font-semibold text-[#6b7280]">{competitorName}</span>
          </div>
          <div>{data.competitorPlans.map((p, i) => <PlanRow key={i} plan={p} />)}</div>
        </div>
      </div>

      {data.verdict && (
        <div className="border-l-2 border-gray-200 pl-4">
          <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1">Pricing takeaway</p>
          <p className="text-[14px] text-[#374151] leading-relaxed">{data.verdict}</p>
        </div>
      )}
    </div>
  );
}

/* ---- Content Section ---- */
function ContentSection({ section }) {
  return (
    <div id={section.id} className="scroll-mt-24">
      <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">{section.title}</h2>
      <Prose>{section.content}</Prose>
      {section.highlights && section.highlights.length > 0 && (
        <div className="mt-5 rounded-lg border border-gray-100 bg-gray-50/70 p-4">
          <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Key takeaways</p>
          <ul className="space-y-2">
            {section.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[#2663eb] flex-shrink-0 mt-[9px]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---- Winner Summary ---- */
function WinnerSummary({ rows, competitorName }) {
  const sw = rows.filter(r => r.winner === 'sendbox').length;
  const cw = rows.filter(r => r.winner === 'competitor').length;
  const t = rows.filter(r => r.winner === 'tie').length;
  return (
    <div className="flex items-center gap-6 mb-5 text-[13px] text-[#6b7280]">
      <span><span className="font-semibold text-black text-[15px]">{sw}</span> Sendbox wins</span>
      <span className="w-px h-4 bg-gray-200" />
      <span><span className="font-semibold text-black text-[15px]">{t}</span> Ties</span>
      <span className="w-px h-4 bg-gray-200" />
      <span><span className="font-semibold text-black text-[15px]">{cw}</span> {competitorName} wins</span>
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
          <li key={i}>
            <a href={link.url} className="inline-flex items-center gap-1.5 text-[14px] text-[#2663eb] font-medium hover:underline">
              {link.title} <ArrowSquareOut size={13} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ====================================================================
   MAIN TEMPLATE
   Uses max-w-6xl + guide lines like every other page on the site.
   Two-column layout on desktop: content left, TOC sticky right.
   ==================================================================== */
export default function ComparisonPageTemplate({ comparison }) {
  const c = comparison;

  const readTime = Math.ceil(
    (c.sections.reduce((a, s) => a + s.content.split(/\s+/).length, 0)
    + c.faqs.reduce((a, f) => a + f.answer.split(/\s+/).length, 0)
    + c.comparisonTable.length * 8) / 200
  );

  const tocSections = [
    { id: 'comparison-table', title: 'Feature Comparison' },
    { id: 'pricing', title: 'Pricing' },
    ...c.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: 'pros-cons', title: 'Pros & Cons' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="bg-white">

      {/* ======== HERO ======== */}
      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/compare" className="hover:text-black transition-colors">Compare</a>
            <span>/</span>
            <span className="text-[#6b7280]">vs {c.competitorName}</span>
          </nav>

          <div className="inline-flex items-center gap-3 mb-5">
            <Image src="/icon.png" alt="Sendbox" width={96} height={24} className="h-6 w-auto" />
            <span className="text-[13px] font-medium text-[#9ca3af]">vs</span>
            {c.competitorLogo && (
              <Image src={c.competitorLogo} alt={c.competitorName} width={96} height={24} className="h-6 w-auto rounded" />
            )}
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            {c.headline}
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-3xl">{c.description}</p>

          <AuthorByline
            author={author}
            readTime={readTime}
            publishedDate={c.publishedDate}
            updatedDate={c.updatedDate}
          />
        </div>
      </Section>

      {/* ======== HERO SCREENSHOT ======== */}
      <Section className="pb-10">
        <Screenshot
          src={c.screenshots.competitor}
          alt={`${c.competitorName} homepage`}
          caption={`Source: ${c.competitorName} (${c.competitorUrl})`}
          href={c.competitorUrl}
          priority
        />
      </Section>

      {/* ======== BODY: Two-column on desktop ======== */}
      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* LEFT: Content */}
          <div className="flex-1 min-w-0 space-y-14">
            <VerdictBox verdict={c.verdict} />

            {/* Mobile TOC */}
            <div className="lg:hidden">
              <TableOfContents sections={tocSections} />
            </div>

            {/* Feature Comparison */}
            <div id="comparison-table" className="scroll-mt-24">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">
                Sendbox vs {c.competitorName}: Feature-by-Feature
              </h2>
              <WinnerSummary rows={c.comparisonTable} competitorName={c.competitorName} />
              <ComparisonTable rows={c.comparisonTable} competitorName={c.competitorName} competitorLogo={c.competitorLogo} />
            </div>

            <InlineCTA />

            {/* Pricing */}
            <div id="pricing" className="scroll-mt-24">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">Pricing Comparison</h2>
              <PricingComparison data={c.pricingComparison} competitorName={c.competitorName} competitorLogo={c.competitorLogo} />
            </div>

            {/* Deep-dive sections */}
            {c.sections.map((section, idx) => (
              <React.Fragment key={section.id}>
                <ContentSection section={section} />
                {idx === 1 && <InlineCTA heading="Start sending today" sub="Set up in 15 minutes. Dedicated IPs on every plan." cta="Start Sending" />}
              </React.Fragment>
            ))}

            {/* Pros & Cons */}
            <div id="pros-cons" className="scroll-mt-24 space-y-8">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2]">Pros & Cons</h2>
              <ProsCons name="Sendbox" pros={c.sendboxPros} cons={c.sendboxCons} />
              <ProsCons name={c.competitorName} pros={c.competitorPros} cons={c.competitorCons} />
            </div>

            {/* Screenshots */}
            {(c.screenshots?.competitor || c.screenshots?.competitorPricing) && (
              <div>
                <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-6">{c.competitorName} Screenshots</h2>
                {c.screenshots?.competitor && (
                  <div className="mb-8">
                    <Screenshot src={c.screenshots.competitor} alt={`${c.competitorName} homepage`} caption={`Source: ${c.competitorName}`} href={c.competitorUrl} />
                  </div>
                )}
                {c.screenshots?.competitorPricing && (
                  <div>
                    <Screenshot src={c.screenshots.competitorPricing} alt={`${c.competitorName} pricing`} caption={`Source: ${c.competitorName} pricing page`} href={`${c.competitorUrl}/pricing`} />
                  </div>
                )}
              </div>
            )}

            <InlineCTA heading="Ready to switch?" sub="Your reputation, your control. No shared infrastructure." cta="Get Started" />
            <KeepReading links={c.keepReading} />
            <ExternalSources tools={['sendbox', c.slug]} />
            <AuthoritativeSources />
          </div>

          {/* RIGHT: Sticky TOC (desktop) */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} />
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-24">
        <FeatureFAQ items={c.faqs} />
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
