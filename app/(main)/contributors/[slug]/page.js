import { notFound } from 'next/navigation';
import ContributorProfile from "@/components/ContributorProfile";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { contributorsData } from "@/data/contributors";
import { getSEOTags, clampDescription, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

// Generate static params for all contributors
export async function generateStaticParams() {
  return contributorsData.map((contributor) => ({
    slug: contributor.slug,
  }));
}

// Generate metadata for each contributor
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const contributor = contributorsData.find((c) => c.slug === slug);

  if (!contributor) {
    return getSEOTags({
      title: "Contributor Not Found",
    });
  }

  const liveCount = contributor.contributions.filter(c => c.status === 'live').length;

  return getSEOTags({
    title: `${contributor.name} - Contributor`,
    description: clampDescription(`${contributor.name} has contributed ${liveCount} feature${liveCount !== 1 ? 's' : ''} to Sendbox. ${contributor.bio}`),
    canonicalUrlRelative: `/contributors/${slug}`,
    openGraph: {
      title: `${contributor.name} - Sendbox Contributor`,
      description: `${contributor.name} has contributed ${liveCount} feature${liveCount !== 1 ? 's' : ''} to Sendbox.`,
    },
  });
}

export default async function ContributorPage({ params }) {
  const { slug } = await params;
  const contributor = contributorsData.find((c) => c.slug === slug);

  if (!contributor) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Contributors", url: `https://${config.domainName}/contributors` },
    { name: contributor.name, url: `https://${config.domainName}/contributors/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ContributorProfile contributor={contributor} />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
