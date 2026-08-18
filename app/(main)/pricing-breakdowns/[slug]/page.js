import { notFound } from 'next/navigation';
import { getPricingTeardownBySlug, pricingTeardownSlugs } from '@/data/pricing-teardowns';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import { assetIfExists } from '@/lib/public-asset';
import config from '@/config';
import PricingTeardownTemplate from '@/components/templates/PricingTeardownTemplate';

export async function generateStaticParams() {
  return pricingTeardownSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getPricingTeardownBySlug(slug);
  if (!data) return {};

  return getSEOTags({
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    canonicalUrlRelative: `/${slug}`,
    openGraph: {
      title: `${data.seo.title} | ${config.appName}`,
      description: data.seo.description,
      url: `https://${config.domainName}/${slug}`,
    },
  });
}

export default async function PricingTeardownPage({ params }) {
  const { slug } = await params;
  const data = getPricingTeardownBySlug(slug);
  if (!data) notFound();

  // Strip the pricing screenshot if the file is missing so no broken image
  // renders (not every competitor has a captured pricing screenshot).
  const safeData = { ...data, pricingScreenshot: assetIfExists(data.pricingScreenshot) };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Pricing Breakdowns', url: `https://${config.domainName}/pricing-breakdowns` },
    { name: `${data.competitorName} Pricing`, url: `https://${config.domainName}/${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(data.faqs);

  const articleSchema = getArticleSchema({
    headline: data.seo.title,
    description: data.seo.description,
    url: `https://${config.domainName}/${slug}`,
    datePublished: data.publishedDate,
    dateModified: data.updatedDate,
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
      <PricingTeardownTemplate data={safeData} />
    </>
  );
}
