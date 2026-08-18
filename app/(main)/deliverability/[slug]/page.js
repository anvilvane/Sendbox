import { notFound } from 'next/navigation';
import { deliverabilityData, getDeliverabilityBySlug, deliverablilitySlugs } from '@/data/deliverability';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import DeliverabilityPageTemplate from '@/components/templates/DeliverabilityPageTemplate';

export async function generateStaticParams() {
  return deliverablilitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getDeliverabilityBySlug(slug);
  if (!data) return {};

  return getSEOTags({
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    canonicalUrlRelative: `/deliverability/${slug}`,
    openGraph: {
      title: `${data.seo.title} | ${config.appName}`,
      description: data.seo.description,
      url: `https://${config.domainName}/deliverability/${slug}`,
    },
  });
}

export default async function DeliverabilityPage({ params }) {
  const { slug } = await params;
  const data = getDeliverabilityBySlug(slug);
  if (!data) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Deliverability', url: `https://${config.domainName}/deliverability` },
    { name: data.name, url: `https://${config.domainName}/deliverability/${slug}` },
  ]);

  const faqSchema = getFAQPageSchema(data.faqs);

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
      <DeliverabilityPageTemplate data={data} allDeliverability={deliverabilityData} />
    </>
  );
}
