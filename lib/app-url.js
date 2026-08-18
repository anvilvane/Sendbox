// The customer dashboard app lives on a separate subdomain in production
// (app.sendboxes.tech) but runs locally on its own port (sendbox-dashboard's
// dev server, localhost:3001) during development. Every "Start Sending" /
// "Log in" CTA across this site needs to point at whichever one is actually
// reachable right now -- hardcoding the production URL broke local testing
// entirely (every login link 404'd against a server that isn't running).
const APP_URL = process.env.NODE_ENV === "production" ? "https://app.sendboxes.tech" : "http://localhost:3001";

export const APP_LOGIN_URL = `${APP_URL}/login`;

export default APP_URL;
