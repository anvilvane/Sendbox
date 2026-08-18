import { notFound } from 'next/navigation';
import { getRoundupBySlug, roundupSlugs } from '@/data/roundups';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import RoundupTemplate from '@/components/templates/RoundupTemplate';

export async function generateStaticParams() {
  return roundupSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const roundup = getRoundupBySlug(slug);
  if (!roundup) return {};

  return getSEOTags({
    title: roundup.seo.title,
    description: roundup.seo.description,
    keywords: roundup.seo.keywords,
    canonicalUrlRelative: `/best-${slug}`,
    openGraph: {
      title: `${roundup.seo.title} | ${config.appName}`,
      description: roundup.seo.description,
      url: `https://${config.domainName}/best-${slug}`,
    },
  });
}

export default async function RoundupPage({ params }) {
  const { slug } = await params;
  const roundup = getRoundupBySlug(slug);
  if (!roundup) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Best-Of Guides', url: `https://${config.domainName}/best-cold-email-tools` },
    { name: roundup.headline, url: `https://${config.domainName}/best-${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(roundup.faqs);

  const articleSchema = getArticleSchema({
    headline: roundup.seo.title,
    description: roundup.seo.description,
    url: `https://${config.domainName}/best-${slug}`,
    datePublished: roundup.publishedDate,
    dateModified: roundup.updatedDate,
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
      <RoundupTemplate data={roundup} />
    </>
  );
}
