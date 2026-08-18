import Changelog from "@/components/Changelog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Changelog",
  description: "Stay up to date with the latest features, improvements, and updates to Sendbox. New capabilities, bug fixes, and platform enhancements.",
  canonicalUrlRelative: "/changelog",
});

export default function ChangelogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Changelog", url: `https://${config.domainName}/changelog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Changelog />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
