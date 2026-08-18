import Contributors from "@/components/Contributors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Contributors",
  description: "Meet the community members and customers whose feedback shaped Sendbox. Specific features they requested, problems they surfaced, and how we built each one.",
  canonicalUrlRelative: "/contributors",
});

export default function ContributorsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Contributors", url: `https://${config.domainName}/contributors` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Contributors />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
