import { sendboxAlternativesData } from '@/data/sendbox-alternatives';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import SendboxAlternativesTemplate from '@/components/templates/SendboxAlternativesTemplate';

export const metadata = getSEOTags({
  title: sendboxAlternativesData.seo.title,
  description: sendboxAlternativesData.seo.description,
  keywords: sendboxAlternativesData.seo.keywords,
  canonicalUrlRelative: '/sendbox-alternatives',
  openGraph: {
    title: `${sendboxAlternativesData.seo.title} | ${config.appName}`,
    description: sendboxAlternativesData.seo.description,
    url: `https://${config.domainName}/sendbox-alternatives`,
  },
});

export default function SendboxAlternativesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Compare', url: `https://${config.domainName}/compare` },
    { name: 'Sendbox Alternatives', url: `https://${config.domainName}/sendbox-alternatives` },
  ]);

  const faqSchema = getFAQPageSchema(sendboxAlternativesData.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SendboxAlternativesTemplate data={sendboxAlternativesData} />
    </>
  );
}
