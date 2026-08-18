import { notFound } from 'next/navigation';
import { getToolVsToolBySlug, toolVsToolSlugs } from '@/data/tool-vs-tool';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema, getArticleSchema } from '@/libs/seo';
import config from '@/config';
import ToolVsToolTemplate from '@/components/templates/ToolVsToolTemplate';

export async function generateStaticParams() {
  return toolVsToolSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getToolVsToolBySlug(slug);
  if (!data) return {};

  return getSEOTags({
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    canonicalUrlRelative: `/${data.slug}`,
    openGraph: {
      title: `${data.seo.title} | ${config.appName}`,
      description: data.seo.description,
      url: `https://${config.domainName}/${data.slug}`,
    },
  });
}

export default async function ToolVsToolPage({ params }) {
  const { slug } = await params;
  const data = getToolVsToolBySlug(slug);
  if (!data) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Compare', url: `https://${config.domainName}/compare` },
    { name: `${data.toolA.name} vs ${data.toolB.name}`, url: `https://${config.domainName}/${data.slug}` },
  ]);

  const faqSchema = getFAQPageSchema(data.faqs);

  const articleSchema = getArticleSchema({
    headline: data.seo.title,
    description: data.seo.description,
    url: `https://${config.domainName}/${data.slug}`,
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
      <ToolVsToolTemplate data={data} />
    </>
  );
}
