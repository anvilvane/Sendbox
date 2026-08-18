import { notFound } from 'next/navigation';
import { getInfraComparisonBySlug, infraComparisonSlugs } from '@/data/infra-providers';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import InfraComparisonTemplate from '@/components/templates/InfraComparisonTemplate';

export async function generateStaticParams() {
  return infraComparisonSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getInfraComparisonBySlug(slug);
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

export default async function InfraComparisonPage({ params }) {
  const { slug } = await params;
  const data = getInfraComparisonBySlug(slug);
  if (!data) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Infrastructure', url: `https://${config.domainName}/best-email-infrastructure` },
    { name: `${data.toolA.name} vs ${data.toolB.name}`, url: `https://${config.domainName}/${slug}` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <InfraComparisonTemplate data={data} />
    </>
  );
}
