// Independent, third-party sources cited on deliverability content across
// /learn guides and comparison pages. Kept separate from data/external-links.js
// (competitor G2/Capterra/website links) since these are authoritative
// standards-body and ESP postmaster references, not competitor citations.
const authoritativeSources = [
  {
    key: 'google-postmaster',
    name: 'Google Postmaster Tools',
    publisher: 'Google',
    url: 'https://postmaster.google.com/',
  },
  {
    key: 'google-sender-guidelines',
    name: 'Email sender guidelines',
    publisher: 'Google',
    url: 'https://support.google.com/mail/answer/81126',
  },
  {
    key: 'microsoft-snds',
    name: 'Smart Network Data Services (SNDS)',
    publisher: 'Microsoft',
    url: 'https://sendersupport.olc.protection.outlook.com/snds/',
  },
  {
    key: 'microsoft-email-auth',
    name: 'Email validation and authentication',
    publisher: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/email-validation-and-authentication',
  },
  {
    key: 'm3aawg-best-practices',
    name: 'Sender best common practices',
    publisher: 'M3AAWG',
    url: 'https://www.m3aawg.org/published-documents',
  },
];

export default authoritativeSources;

export const getAuthoritativeSources = (keys = []) =>
  keys.length === 0
    ? authoritativeSources
    : authoritativeSources.filter((s) => keys.includes(s.key));
