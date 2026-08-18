// This top-level layout intentionally renders no <html>/<body> of its own --
// app/(main)/layout.js is the only remaining zone and renders the real <html>
// document (including the Poppins/Figtree/Inter font setup). This file used to
// try to inject fonts here via cloneElement onto `children`, which silently
// did nothing in the App Router's RSC tree (children isn't a plain cloneable
// element) -- the site shipped with the fonts never actually applied. Fixed by
// moving the font setup to where the real <html> tag is, and reducing this
// back to a trivial pass-through now that only one zone exists.
export default function RootLayout({ children }) {
  return children;
}
