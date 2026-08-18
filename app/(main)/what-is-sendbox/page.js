import { whatIsSendboxData } from '@/data/what-is-sendbox';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import WhatIsSendboxTemplate from '@/components/templates/WhatIsSendboxTemplate';

export const metadata = getSEOTags({
  title: whatIsSendboxData.seo.title,
  description: whatIsSendboxData.seo.description,
  keywords: whatIsSendboxData.seo.keywords,
  canonicalUrlRelative: '/what-is-sendbox',
  openGraph: {
    title: `${whatIsSendboxData.seo.title} | ${config.appName}`,
    description: whatIsSendboxData.seo.description,
    url: `https://${config.domainName}/what-is-sendbox`,
  },
});

export default function WhatIsSendboxPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'What is Sendbox', url: `https://${config.domainName}/what-is-sendbox` },
  ]);

  const faqSchema = getFAQPageSchema(whatIsSendboxData.faqs);

  const articleSchema = getArticleSchema({
    headline: whatIsSendboxData.seo.title,
    description: whatIsSendboxData.seo.description,
    url: `https://${config.domainName}/what-is-sendbox`,
    datePublished: whatIsSendboxData.publishedDate,
    dateModified: whatIsSendboxData.updatedDate,
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <WhatIsSendboxTemplate data={whatIsSendboxData} />
    </>
  );
}
