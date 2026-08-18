import { featuresData } from '@/data/features';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import HubTemplate from '@/components/templates/HubTemplate';

export const metadata = getSEOTags({
  title: 'Every Feature for Cold Email at Scale',
  description: 'Multi-step campaigns, unified inbox, built-in dialer, native CRM, A/B testing, and AI reply tagging. Every Sendbox feature, all on dedicated IPs.',
  keywords: ['cold email features', 'cold email software features', 'email sequencing', 'unified inbox', 'cold email crm', 'email ab testing', 'sendbox features'],
  canonicalUrlRelative: '/features',
  openGraph: {
    title: `Every Feature for Cold Email at Scale | ${config.appName}`,
    description: 'Every Sendbox feature for cold email at scale, all on dedicated IPs.',
    url: `https://${config.domainName}/features`,
  },
});

export default function FeaturesHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Features', url: `https://${config.domainName}/features` },
  ]);

  const categories = [...new Set(featuresData.map((f) => f.category))];
  const sections = categories.map((category) => ({
    heading: category,
    items: featuresData
      .filter((f) => f.category === category)
      .map((f) => ({
        title: f.name,
        description: f.description,
        href: `/features/${f.slug}`,
        cta: 'Explore feature',
      })),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HubTemplate
        eyebrow="features"
        breadcrumb="Features"
        title="Everything Sendbox does for cold email"
        description="The full outreach workflow in one platform: sequences, inbox, dialer, CRM, and analytics, all running on dedicated IPs instead of shared infrastructure."
        stats={[{ value: featuresData.length, label: 'features' }]}
        sections={sections}
      />
    </>
  );
}
