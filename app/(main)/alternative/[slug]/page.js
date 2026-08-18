import { notFound } from 'next/navigation';
import { getAlternativeBySlug, alternativeSlugs } from '@/data/alternatives';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import AlternativePageTemplate from '@/components/templates/AlternativePageTemplate';

export async function generateStaticParams() {
  return alternativeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);
  if (!alternative) return {};

  return getSEOTags({
    title: alternative.seo.title,
    description: alternative.seo.description,
    keywords: alternative.seo.keywords,
    canonicalUrlRelative: `/alternative/${slug}`,
    openGraph: {
      title: `${alternative.seo.title} | ${config.appName}`,
      description: alternative.seo.description,
      url: `https://${config.domainName}/alternative/${slug}`,
    },
  });
}

export default async function AlternativePage({ params }) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);
  if (!alternative) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Compare', url: `https://${config.domainName}/compare` },
    { name: `${alternative.competitorName} Alternatives`, url: `https://${config.domainName}/alternative/${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(alternative.faqs);

  const articleSchema = getArticleSchema({
    headline: alternative.seo.title,
    description: alternative.seo.description,
    url: `https://${config.domainName}/alternative/${slug}`,
    datePublished: alternative.publishedDate,
    dateModified: alternative.updatedDate,
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
      <AlternativePageTemplate alternative={alternative} />
    </>
  );
}
