import { Poppins, Figtree, Inter } from "next/font/google";
import { getSEOTags, getOrganizationSchema, getWebSiteSchema, getSoftwareApplicationSchema } from "@/libs/seo";
import config from "@/config";
import Providers from "@/components/Providers";
import dynamic from "next/dynamic";
const FloatingGoogleLogin = dynamic(() => import("@/components/FloatingGoogleLogin"), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"), { ssr: false });
import Header from "@/components/Header";
import SmoothScrollOnNav from "@/components/SmoothScrollOnNav";
import "../globals.css";

// Poppins → headings (h1-h6), Figtree → body text, Inter → numeric displays.
// Applied directly here because this is the file that actually renders the real
// <html> tag (see app/layout.js -- it's a thin pass-through, not a real root
// layout in this codebase's structure). An earlier attempt set these fonts in
// app/layout.js and tried to merge them onto this element via cloneElement,
// which silently did nothing (children here isn't a plain cloneable React
// element in App Router's RSC tree) -- the site shipped with only GeistSans
// applied. Fixed by importing the fonts where the <html> tag actually is.
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });


export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const softwareAppSchema = getSoftwareApplicationSchema();

  return (
    <html lang="en" data-theme={config.colors.theme} className={`${poppins.variable} ${figtree.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <link rel="dns-prefetch" href="https://cdn.brandfetch.io" />
        <script id="suppress-console" dangerouslySetInnerHTML={{ __html: `
          if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
            var _log = console.log, _warn = console.warn, _err = console.error;
            console.log = function(){};
            console.warn = function(){};
            console.error = function(){};
            console.debug = function(){};
          }
        `}} />
        {/*
          SECURITY/PRIVACY FIX: this file previously wired up Google Analytics
          (G-JG1JZDPB0C), DataFast (dfid_Sz3bN39vzZJdfm6wuKo5b), HappierLeads
          (clientId=nULKfWzsa6GhsNUU9bUCNQ), and Plausible -- all four were
          SendKit's real, live third-party analytics accounts, carried over
          verbatim by the original rebrand pass. Every Sendbox visitor's
          traffic was being sent straight into SendKit's own analytics
          dashboards. Removed entirely rather than left half-configured --
          add Sendbox's own analytics accounts here once they exist, don't
          reuse a competitor's tracking IDs as a placeholder.
        */}
      </head>
      <body>
        <Providers>
          <SmoothScrollOnNav />
          <Header />
          <main>{children}</main>
          <FloatingGoogleLogin />
          <ExitIntentPopup />
        </Providers>
      </body>
    </html>
  );
}
