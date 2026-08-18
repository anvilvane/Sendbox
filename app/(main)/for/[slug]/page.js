import { notFound } from 'next/navigation';
import { getSolutionBySlug, solutionSlugs } from '@/data/solutions';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import FeaturePageTemplate from '@/components/templates/FeaturePageTemplate';

export async function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return getSEOTags({
    title: solution.seo.title,
    description: solution.seo.description,
    keywords: solution.seo.keywords,
    canonicalUrlRelative: `/for-${slug}`,
    openGraph: {
      title: `${solution.seo.title} | ${config.appName}`,
      description: solution.seo.description,
      url: `https://${config.domainName}/for-${slug}`,
    },
  });
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: solution.name, url: `https://${config.domainName}/for/${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(solution.faqs);

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
      <FeaturePageTemplate feature={solution} />
    </>
  );
}
