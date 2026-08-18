const lightTheme = require("daisyui/src/theming/themes")["light"];

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
        scroll: "scroll 30s linear infinite",
        "ios-spinner": "ios-spinner 1.2s linear infinite",
        "fade-in": "fade-in 0.4s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "ios-spinner": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.15" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // The site is hardcoded to data-theme="light" (see layout.js), and the few
    // dark sections use literal colors (bg-[#1a1a1a]/text-white), not DaisyUI's
    // dark theme. Shipping the "dark" theme too just doubles unused theme CSS.
    // The "light" theme below is DaisyUI's default light theme with primary/
    // secondary/accent overridden to Sendbox's brand color (extracted from
    // the logo) — every other key (neutral, base-*, base-content, info/
    // success/warning/error, etc.) is left exactly as DaisyUI defines it.
    themes: [
      {
        light: {
          ...lightTheme,
          primary: "#695AF2",
          "primary-content": "#ffffff",
          secondary: "#9F92FA",
          accent: "#9589F0",
        },
      },
    ],
  },
};
