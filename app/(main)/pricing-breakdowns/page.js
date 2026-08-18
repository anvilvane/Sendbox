import Link from 'next/link';
import { pricingTeardownsData } from '@/data/pricing-teardowns';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import author from '@/data/author';
import ContentCard from '@/components/ContentCard';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: 'Cold Email Tool Pricing Breakdowns',
  description: 'Full pricing breakdowns for every major cold email platform, covering every plan, hidden cost, and credit limit, plus what you actually pay compared to Sendbox.',
  keywords: ['cold email pricing', 'instantly pricing', 'smartlead pricing', 'lemlist pricing', 'apollo pricing', 'cold email tool cost'],
  canonicalUrlRelative: '/pricing-breakdowns',
  openGraph: {
    title: `Cold Email Tool Pricing Breakdowns | ${config.appName}`,
    description: 'Full pricing breakdowns for every major cold email platform.',
    url: `https://${config.domainName}/pricing-breakdowns`,
  },
});

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

export default function PricingBreakdownsHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Pricing Breakdowns', url: `https://${config.domainName}/pricing-breakdowns` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white">
        <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
              <Link href="/" className="hover:text-black transition-colors no-underline text-[#9ca3af]">Home</Link>
              <span>/</span>
              <span className="text-[#6b7280]">Pricing Breakdowns</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
              <span>pricing breakdowns</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-5">
              What cold email tools actually cost
            </h1>
            <p className="text-[17px] text-[#374151] leading-[1.7]">
              Advertised starting prices rarely tell the full story. Each breakdown adds up every plan, add-on, and credit limit so you can compare real costs.
            </p>
          </div>
        </Section>

        <Section className="pb-16 border-t border-gray-100">
          <div className="pt-10 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTeardownsData.map((p) => (
                <ContentCard
                  key={p.slug}
                  href={`/${p.slug}`}
                  title={p.seo.title}
                  category="Pricing"
                  excerpt={p.description}
                  author={author}
                />
              ))}
            </div>
          </div>
        </Section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
