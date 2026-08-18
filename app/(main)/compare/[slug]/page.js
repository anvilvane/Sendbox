import { notFound } from 'next/navigation';
import { getComparisonBySlug, comparisonSlugs } from '@/data/comparisons';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import { assetIfExists } from '@/lib/public-asset';
import config from '@/config';
import ComparisonPageTemplate from '@/components/templates/ComparisonPageTemplate';

export async function generateStaticParams() {
  return comparisonSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  return getSEOTags({
    title: comparison.seo.title,
    description: comparison.seo.description,
    keywords: comparison.seo.keywords,
    canonicalUrlRelative: `/sendbox-vs-${slug}`,
    openGraph: {
      title: `${comparison.seo.title} | ${config.appName}`,
      description: comparison.seo.description,
      url: `https://${config.domainName}/sendbox-vs-${slug}`,
    },
  });
}

export default async function ComparisonPage({ params }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  // Drop screenshot paths whose files don't exist so the template never
  // renders a broken image (some competitors have no pricing screenshot).
  const safeComparison = {
    ...comparison,
    screenshots: {
      ...comparison.screenshots,
      competitor: assetIfExists(comparison.screenshots?.competitor),
      competitorPricing: assetIfExists(comparison.screenshots?.competitorPricing),
    },
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Compare', url: `https://${config.domainName}/compare` },
    { name: `Sendbox vs ${comparison.competitorName}`, url: `https://${config.domainName}/sendbox-vs-${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(comparison.faqs);

  const articleSchema = getArticleSchema({
    headline: comparison.seo.title,
    description: comparison.seo.description,
    url: `https://${config.domainName}/sendbox-vs-${slug}`,
    datePublished: comparison.publishedDate,
    dateModified: comparison.updatedDate,
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
      <ComparisonPageTemplate comparison={safeComparison} />
    </>
  );
}
