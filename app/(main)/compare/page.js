import { comparisonsData } from '@/data/comparisons';
import { alternativesData } from '@/data/alternatives';
import { toolVsToolData } from '@/data/tool-vs-tool';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import CompareHubTemplate from '@/components/templates/CompareHubTemplate';

export const metadata = getSEOTags({
  title: 'Compare Sendbox vs Competitors',
  description: 'See how Sendbox compares to Instantly, Smartlead, Lemlist, and other cold email tools. Side-by-side comparisons of infrastructure, pricing, and features.',
  keywords: ['sendbox comparison', 'sendbox vs instantly', 'sendbox vs smartlead', 'sendbox vs lemlist', 'cold email tool comparison'],
  canonicalUrlRelative: '/compare',
  openGraph: {
    title: `Compare Sendbox vs Competitors | ${config.appName}`,
    description: 'See how Sendbox compares to Instantly, Smartlead, Lemlist, and other cold email tools.',
    url: `https://${config.domainName}/compare`,
  },
});

export default function ComparePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Compare', url: `https://${config.domainName}/compare` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CompareHubTemplate comparisons={comparisonsData} alternatives={alternativesData} toolVsTool={toolVsToolData} />
    </>
  );
}
