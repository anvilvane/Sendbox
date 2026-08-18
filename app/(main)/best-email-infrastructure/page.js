import { infraRoundupData } from '@/data/infra-providers';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import RoundupTemplate from '@/components/templates/RoundupTemplate';

export const metadata = getSEOTags({
  title: infraRoundupData.seo.title,
  description: infraRoundupData.seo.description,
  keywords: infraRoundupData.seo.keywords,
  canonicalUrlRelative: '/best-email-infrastructure',
  openGraph: {
    title: `${infraRoundupData.seo.title} | ${config.appName}`,
    description: infraRoundupData.seo.description,
    url: `https://${config.domainName}/best-email-infrastructure`,
  },
});

export default function InfraRoundupPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Best-Of Guides', url: `https://${config.domainName}/best-cold-email-tools` },
    { name: infraRoundupData.headline, url: `https://${config.domainName}/best-email-infrastructure` },
  ]);

  const faqSchema = getFAQPageSchema(infraRoundupData.faqs);

  const articleSchema = getArticleSchema({
    headline: infraRoundupData.seo.title,
    description: infraRoundupData.seo.description,
    url: `https://${config.domainName}/best-email-infrastructure`,
    datePublished: infraRoundupData.publishedDate,
    dateModified: infraRoundupData.updatedDate,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <RoundupTemplate data={infraRoundupData} />
    </>
  );
}
