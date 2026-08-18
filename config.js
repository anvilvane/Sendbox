import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Sendbox",
  // Short tagline used in title tags (keep under 60 chars total with app name)
  appTagline: "Email sequencing without deliverability guesswork",
  // REQUIRED: primary meta description (150-160 chars optimal for SERP snippets)
  appDescription:
    "High-deliverability email sequencing platform with dedicated IPs, isolated infrastructure, and AI-powered warmup. Built for agencies and GTM teams who need primary inbox placement.",
  // Comprehensive keyword list for SEO and LLM/GEO discoverability
  seoKeywords: [
    "Sendbox",
    "sendbox",
    "send box",
    "sendboxes.tech",
    "sendbox email",
    "sendbox cold email",
    "sendbox warmup",
    "sendbox review",
    "sendbox pricing",
    "sendbox vs smartlead",
    "sendbox vs instantly",
    "cold email software",
    "email warmup tool",
    "cold email infrastructure",
    "email sequencing platform",
    "email deliverability",
    "dedicated IP email",
    "cold outreach tool",
    "email warmup service",
    "B2B email outreach",
    "agency email tool",
    "GTM email platform",
    "inbox placement",
    "email sender reputation",
    "cold email for agencies",
    "Smartlead alternative",
    "Instantly alternative",
    "email automation platform",
    "unified inbox",
    "AI email replies",
  ],
  // REQUIRED (no https://, no trailing slash, just the naked domain)
  domainName: "sendboxes.tech",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mailer",
    // REQUIRED - Email 'From' field to be used when sending magic login links
    fromNoReply: `Sendbox <noreply@mailer.sendboxes.tech>`,
    // REQUIRED - Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Sendbox <noreply@mailer.sendboxes.tech>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@sendboxes.tech",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    // TODO(user): forwarded to supportEmail itself as a safe default -- point this at a real inbox once one is set up.
    forwardRepliesTo: "support@sendboxes.tech",
  },
  // Social profile URLs for Organization schema sameAs (add your actual profiles)
  // TODO(user): add Sendbox's real social profile URLs once they exist
  socialLinks: [],
  colors: {
    // REQUIRED - The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED - This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["light"]["primary"],
  },
};

export default config;
