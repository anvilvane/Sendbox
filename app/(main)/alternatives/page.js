import { alternativesData } from '@/data/alternatives';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import AlternativesHubTemplate from '@/components/templates/AlternativesHubTemplate';

export const metadata = getSEOTags({
  title: 'Cold Email Tool Alternatives (2026)',
  description: 'Compare alternatives to every major cold email platform. Instantly, Smartlead, Lemlist, Apollo, Reply.io, Woodpecker, and Saleshandy alternatives.',
  keywords: ['cold email alternatives', 'instantly alternatives', 'smartlead alternatives', 'lemlist alternatives', 'apollo alternatives', 'saleshandy alternatives'],
  canonicalUrlRelative: '/alternatives',
  openGraph: {
    title: `Cold Email Tool Alternatives (2026) | ${config.appName}`,
    description: 'Compare alternatives to every major cold email platform.',
    url: `https://${config.domainName}/alternatives`,
  },
});

export default function AlternativesHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Alternatives', url: `https://${config.domainName}/alternatives` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AlternativesHubTemplate alternatives={alternativesData} />
    </>
  );
}
