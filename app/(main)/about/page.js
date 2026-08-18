import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "About Us",
  description: "About Sendbox: cold email software built on dedicated IPs and isolated infrastructure, for teams who need primary inbox placement.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "About Us", url: `https://${config.domainName}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <AboutUs />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
