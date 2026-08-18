import Link from 'next/link';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import UnifiedPricing from '@/components/UnifiedPricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: 'Sendbox Pricing',
  description: 'Sendbox pricing: dedicated IPs, isolated infrastructure, warmup, and the full deliverability suite on every plan. Plans from $99/mo, no per-seat fees.',
  keywords: ['sendbox pricing', 'cold email software pricing', 'sendbox plans', 'sendbox cost', 'dedicated ip cold email pricing'],
  canonicalUrlRelative: '/pricing',
  openGraph: {
    title: `Sendbox Pricing | ${config.appName}`,
    description: 'Dedicated IPs and the full deliverability suite on every plan. Plans from $99/mo.',
    url: `https://${config.domainName}/pricing`,
  },
});

export default function PricingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Pricing', url: `https://${config.domainName}/pricing` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white">
        <div className="px-4 md:px-8 pt-8">
          <nav className="max-w-6xl mx-auto flex items-center gap-1.5 text-[13px] text-[#9ca3af]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6b7280]">Pricing</span>
          </nav>
        </div>
        <UnifiedPricing headingTag="h1" />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
