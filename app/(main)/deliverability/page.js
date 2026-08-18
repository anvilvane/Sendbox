import { deliverabilityData } from '@/data/deliverability';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import HubTemplate from '@/components/templates/HubTemplate';

export const metadata = getSEOTags({
  title: 'Cold Email Deliverability',
  description: 'Sendbox protects inbox placement with dedicated IPs, isolated infrastructure, human-like warmup, inbox placement tests, and blacklist monitoring on every plan.',
  keywords: ['cold email deliverability', 'dedicated ips', 'email warmup', 'inbox placement', 'blacklist monitoring', 'email infrastructure'],
  canonicalUrlRelative: '/deliverability',
  openGraph: {
    title: `Cold Email Deliverability | ${config.appName}`,
    description: 'How Sendbox protects your inbox placement, bundled on every plan.',
    url: `https://${config.domainName}/deliverability`,
  },
});

export default function DeliverabilityHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Deliverability', url: `https://${config.domainName}/deliverability` },
  ]);

  const categories = [...new Set(deliverabilityData.map((d) => d.category))];
  const sections = categories.map((category) => ({
    heading: category,
    items: deliverabilityData
      .filter((d) => d.category === category)
      .map((d) => ({
        title: d.name,
        description: d.description,
        href: `/deliverability/${d.slug}`,
        cta: 'Learn more',
      })),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HubTemplate
        eyebrow="deliverability"
        breadcrumb="Deliverability"
        title="The deliverability stack, built in"
        description="Most platforms sell warmup, validation, and placement testing as add-ons. Sendbox bundles the entire deliverability suite on every plan, on infrastructure that's yours alone."
        stats={[{ value: deliverabilityData.length, label: 'capabilities' }]}
        sections={sections}
      />
    </>
  );
}
