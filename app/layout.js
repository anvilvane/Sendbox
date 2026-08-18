import { cloneElement, isValidElement } from "react";
import { Poppins, Figtree, Inter } from "next/font/google";

// Poppins → headings (h1-h6)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

// Figtree → body text / paragraphs / descriptions (site default)
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
});

// Inter → numeric displays (opt-in utility, see .font-numeric in globals.css)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const fontVariables = `${poppins.variable} ${figtree.variable} ${inter.variable}`;

export default function RootLayout({ children }) {
  // This top-level app/layout.js intentionally renders no <html>/<body> of
  // its own: each zone (app/(main)/layout.js, etc.) defines its own full HTML
  // document. To make the Poppins/Figtree/Inter CSS variables available
  // everywhere without editing those files, we merge the font variable
  // classNames onto whichever root element the active zone's layout
  // renders (normally its <html> tag), preserving any classNames already
  // set there.
  if (isValidElement(children)) {
    return cloneElement(children, {
      className: [children.props.className, fontVariables]
        .filter(Boolean)
        .join(" "),
    });
  }

  return children;
}
