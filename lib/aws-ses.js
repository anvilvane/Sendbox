import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import nodemailer from 'nodemailer';

const SES_REGION = process.env.SES_REGION || 'us-east-1';
// TODO(user): replace with real production domain once chosen
const SENDING_DOMAIN = process.env.SES_SENDING_DOMAIN || 'mail.sendbox.ai';

const sesClient = new SESv2Client({
  region: SES_REGION,
  credentials:
    process.env.SES_ACCESS_KEY_ID && process.env.SES_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.SES_ACCESS_KEY_ID,
          secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
        }
      : undefined,
});

const transporter = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
});

export function sldFromDomain(domain) {
  if (!domain || typeof domain !== 'string') return null;
  const cleaned = domain
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '');
  const labels = cleaned.split('.').filter(Boolean);
  if (labels.length < 2) return labels[0] || null;
  return labels[labels.length - 2].replace(/[^a-z0-9-]/g, '') || null;
}

export function buildFromAddress({ whitelabelConfig, fallbackName = 'Sendbox' } = {}) {
  const enabled = !!(whitelabelConfig?.enabled && whitelabelConfig?.domainVerified);
  if (!enabled) {
    return `${fallbackName} <no-reply@${SENDING_DOMAIN}>`;
  }
  const displayName =
    whitelabelConfig.emailFromName || whitelabelConfig.brandName || fallbackName;
  const slug = sldFromDomain(whitelabelConfig.domain) || 'no-reply';
  return `${displayName} <${slug}@${SENDING_DOMAIN}>`;
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
  replyTo,
  from,
  cc,
  bcc,
  attachments,
}) {
  try {
    const info = await transporter.sendMail({
      from: from || `Sendbox <no-reply@${SENDING_DOMAIN}>`,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
      ...(cc ? { cc } : {}),
      ...(bcc ? { bcc } : {}),
      ...(attachments ? { attachments } : {}),
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { sesClient };
