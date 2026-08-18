import { notFound } from 'next/navigation';
import { featuresData, getFeatureBySlug, featureSlugs } from '@/data/features';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import FeaturePageTemplate from '@/components/templates/FeaturePageTemplate';

export async function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return getSEOTags({
    title: feature.seo.title,
    description: feature.seo.description,
    keywords: feature.seo.keywords,
    canonicalUrlRelative: `/features/${slug}`,
    openGraph: {
      title: `${feature.seo.title} | ${config.appName}`,
      description: feature.seo.description,
      url: `https://${config.domainName}/features/${slug}`,
    },
  });
}

export default async function FeaturePage({ params }) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Features', url: `https://${config.domainName}/features` },
    { name: feature.name, url: `https://${config.domainName}/features/${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(feature.faqs);

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
      <FeaturePageTemplate feature={feature} allFeatures={featuresData} />
    </>
  );
}
