import React from 'react';
import Image from 'next/image';
import { ArrowSquareOut, WarningCircle, Check } from '@phosphor-icons/react/dist/ssr';
import TableOfContents from './TableOfContents';
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


/* ---- Plan table instead of cards ---- */
function PlansTable({ plans }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Plan</th>
            <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Price</th>
            <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">What you get</th>
            <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Watch out for</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0 align-top">
              <td className="px-4 py-3">
                <span className="text-[14px] font-semibold text-black">{plan.name}</span>
                {plan.billingNote && <p className="text-[11px] text-[#9ca3af] mt-0.5">{plan.billingNote}</p>}
              </td>
              <td className="px-4 py-3">
                <span className="text-[14px] font-semibold text-[#374151]">{plan.price}</span>
              </td>
              <td className="px-4 py-3">
                <ul className="space-y-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-[12px] text-[#374151] flex items-start gap-1.5">
                      <Check size={11} weight="bold" className="text-[#9ca3af] flex-shrink-0 mt-[2px]" /> {f}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-4 py-3">
                {plan.limitations && plan.limitations.length > 0 ? (
                  <ul className="space-y-1">
                    {plan.limitations.map((l, j) => (
                      <li key={j} className="text-[12px] text-[#9ca3af] flex items-start gap-1.5">
                        <WarningCircle size={11} weight="fill" className="text-[#d4d4d4] flex-shrink-0 mt-[2px]" /> {l}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-[12px] text-[#d4d4d4]">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---- Hidden costs as a single list, not cards ---- */
function HiddenCostsList({ costs }) {
  return (
    <div className="space-y-0 rounded-lg border border-gray-200 overflow-hidden">
      {costs.map((cost, i) => (
        <div key={i} className={`px-4 py-3.5 flex items-start justify-between gap-4 ${i < costs.length - 1 ? 'border-b border-gray-100' : ''}`}>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-medium text-black">{cost.title}</p>
            <p className="text-[12px] text-[#6b7280] mt-0.5 leading-relaxed">{cost.description}</p>
          </div>
          {cost.estimatedCost && (
            <span className="text-[13px] font-semibold text-[#374151] whitespace-nowrap flex-shrink-0 bg-gray-50 px-2 py-0.5 rounded">{cost.estimatedCost}</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Cost-at-volume reference (no Sendbox overlay) ---- */
function CostAtVolume({ data }) {
  return (
    <div>
      <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">
        {data.title}
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Usage scenario</th>
              <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Monthly cost</th>
              <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.scenarios.map((s, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0 align-top">
                <td className="px-4 py-3 font-medium text-black">{s.name}</td>
                <td className="px-4 py-3 text-[#374151] font-semibold whitespace-nowrap">{s.competitorTotal}</td>
                <td className="px-4 py-3 text-[#6b7280] leading-relaxed">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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

/* ---- Persistent path back into Sendbox's own funnel ---- */
function CompareToSendbox({ competitorName, compareHref }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <div className="flex-1">
        <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">How Sendbox compares</p>
        <p className="text-[14px] text-[#374151] leading-relaxed">
          Sendbox plans start at $99/mo with dedicated IPs and the full deliverability suite included on every tier &mdash; no add-ons required.
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5 flex-shrink-0">
        <a href="/pricing" className="inline-flex items-center justify-center px-4 py-2 bg-[#695AF2] text-white rounded-lg text-[13px] font-medium transition-all hover:bg-[#5847E0]">
          View Sendbox Pricing
        </a>
        <a href={compareHref} className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#374151] border border-[#e5e5e5] rounded-lg text-[13px] font-medium transition-all hover:bg-[#f5f5f5]">
          Sendbox vs {competitorName}
        </a>
        <a href="/features" className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#374151] border border-[#e5e5e5] rounded-lg text-[13px] font-medium transition-all hover:bg-[#f5f5f5]">
          Browse Features
        </a>
      </div>
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

export default function PricingTeardownTemplate({
  data,
  parentCrumb = { name: 'Pricing Breakdowns', href: '/pricing-breakdowns' },
}) {
  const d = data;
  const readTime = Math.ceil(
    (d.sections.reduce((a, s) => a + s.content.split(/\s+/).length, 0)
    + d.faqs.reduce((a, f) => a + f.answer.split(/\s+/).length, 0)) / 200
  );

  const tocSections = [
    { id: 'plans', title: 'Plan Breakdown' },
    { id: 'hidden-costs', title: "What's Not Included" },
    ...(d.totalCostComparison ? [{ id: 'cost-at-volume', title: 'Cost at Volume' }] : []),
    ...d.sections.map(s => ({ id: s.id, title: s.title })),
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
            <a href={parentCrumb.href} className="hover:text-black transition-colors">{parentCrumb.name}</a>
            <span>/</span>
            <span className="text-[#6b7280]">{d.competitorName} Pricing</span>
          </nav>

          <div className="inline-flex items-center gap-3 mb-5">
            <Image src={d.competitorLogo} alt={d.competitorName} width={96} height={24} className="h-6 w-auto rounded" />
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

      {/* Pricing screenshot */}
      {d.pricingScreenshot && (
        <Section className="pb-10">
          <a href={`${d.competitorUrl}/pricing`} target="_blank" rel="noopener noreferrer">
            <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50 transition-shadow hover:shadow-md">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image src={d.pricingScreenshot} alt={`${d.competitorName} pricing page`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
              </div>
              <figcaption className="text-xs text-[#9ca3af] px-4 py-2 border-t border-gray-100">Source: {d.competitorName} pricing page</figcaption>
            </figure>
          </a>
        </Section>
      )}

      {/* Body */}
      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

          <div className="flex-1 min-w-0 space-y-14">
            <div className="lg:hidden"><TableOfContents sections={tocSections} /></div>

            {/* Verdict */}
            <div className="border-l-2 border-black pl-5">
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Bottom line</p>
              <Prose>{d.verdict}</Prose>
            </div>

            <CompareToSendbox
              competitorName={d.competitorName}
              compareHref={`/compare/${d.slug.replace('-pricing', '')}`}
            />

            {/* Plans as table */}
            <div id="plans" className="scroll-mt-24">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">
                {d.competitorName} Plans
              </h2>
              <PlansTable plans={d.plans} />
            </div>

            {/* Hidden costs as list */}
            <div id="hidden-costs" className="scroll-mt-24">
              <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-black tracking-tight leading-[1.2] mb-5">
                What&apos;s Not Included
              </h2>
              <HiddenCostsList costs={d.hiddenCosts} />
            </div>

            {/* Cost at volume (kept as competitor-only reference, no Sendbox overlay) */}
            {d.totalCostComparison && (
              <div id="cost-at-volume" className="scroll-mt-24">
                <CostAtVolume data={d.totalCostComparison} />
              </div>
            )}

            {/* Deep-dive sections */}
            {d.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}

            <KeepReading links={d.keepReading} />
            <ExternalSources tools={[d.slug.replace('-pricing', ''), 'sendbox']} />
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
