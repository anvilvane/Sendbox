'use client';

import { useState, useCallback, useRef } from 'react';

const LAYOUTS = [
  { id: 'horizontal', label: 'Horizontal', desc: 'Photo left, details right' },
  { id: 'stacked', label: 'Stacked', desc: 'Name & title on top, contact below' },
  { id: 'minimal', label: 'Minimal', desc: 'Text only, no dividers' },
];

const FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

function buildSignatureHTML(fields, layout) {
  const { name, title, company, email, phone, website, linkedin, twitter, photo } = fields;

  const nameStyle = `margin:0;font-size:16px;font-weight:700;color:#000000;font-family:${FONT_STACK};`;
  const titleStyle = `margin:0;font-size:14px;color:#6b7280;font-family:${FONT_STACK};line-height:1.4;`;
  const companyStyle = `margin:0;font-size:14px;color:#000000;font-family:${FONT_STACK};line-height:1.4;`;
  const linkStyle = `color:#2663eb;text-decoration:none;font-size:13px;font-family:${FONT_STACK};`;
  const separatorStyle = `color:#9ca3af;font-size:13px;font-family:${FONT_STACK};`;

  const contactParts = [];
  if (email) contactParts.push(`<a href="mailto:${email}" style="${linkStyle}">${email}</a>`);
  if (phone) contactParts.push(`<a href="tel:${phone}" style="${linkStyle}">${phone}</a>`);
  if (website) {
    const cleanUrl = website.replace(/^https?:\/\//, '');
    contactParts.push(`<a href="${website.startsWith('http') ? website : 'https://' + website}" style="${linkStyle}">${cleanUrl}</a>`);
  }

  const socialParts = [];
  if (linkedin) socialParts.push(`<a href="${linkedin.startsWith('http') ? linkedin : 'https://' + linkedin}" style="${linkStyle}">LinkedIn</a>`);
  if (twitter) socialParts.push(`<a href="${twitter.startsWith('http') ? twitter : 'https://' + twitter}" style="${linkStyle}">Twitter</a>`);

  const contactLine = contactParts.join(`<span style="${separatorStyle}">&nbsp;&nbsp;|&nbsp;&nbsp;</span>`);
  const socialLine = socialParts.join(`<span style="${separatorStyle}">&nbsp;&nbsp;|&nbsp;&nbsp;</span>`);

  const titleLine = [title, company].filter(Boolean).join(', ');

  const photoCell = photo
    ? `<td style="vertical-align:top;padding-right:14px;">
        <img src="${photo}" alt="${name}" width="64" height="64" style="border-radius:50%;width:64px;height:64px;object-fit:cover;display:block;" />
      </td>`
    : '';

  if (layout === 'horizontal') {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT_STACK};">
  <tr>
    ${photoCell}
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding-bottom:2px;"><p style="${nameStyle}">${name}</p></td></tr>
        ${titleLine ? `<tr><td style="padding-bottom:6px;"><p style="${titleStyle}">${titleLine}</p></td></tr>` : ''}
        ${contactLine ? `<tr><td style="border-top:1px solid #e5e5e5;padding-top:6px;padding-bottom:2px;">${contactLine}</td></tr>` : ''}
        ${socialLine ? `<tr><td style="padding-top:2px;">${socialLine}</td></tr>` : ''}
      </table>
    </td>
  </tr>
</table>`;
  }

  if (layout === 'stacked') {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT_STACK};">
  ${photo ? `<tr><td style="padding-bottom:10px;"><img src="${photo}" alt="${name}" width="64" height="64" style="border-radius:50%;width:64px;height:64px;object-fit:cover;display:block;" /></td></tr>` : ''}
  <tr><td style="padding-bottom:2px;"><p style="${nameStyle}">${name}</p></td></tr>
  ${titleLine ? `<tr><td style="padding-bottom:8px;"><p style="${titleStyle}">${titleLine}</p></td></tr>` : ''}
  ${contactLine ? `<tr><td style="border-top:1px solid #e5e5e5;padding-top:8px;padding-bottom:2px;">${contactLine}</td></tr>` : ''}
  ${socialLine ? `<tr><td style="padding-top:2px;">${socialLine}</td></tr>` : ''}
</table>`;
  }

  // minimal
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT_STACK};">
  <tr><td style="padding-bottom:2px;"><p style="${nameStyle}">${name}</p></td></tr>
  ${titleLine ? `<tr><td style="padding-bottom:4px;"><p style="${titleStyle}">${titleLine}</p></td></tr>` : ''}
  ${contactLine ? `<tr><td style="padding-top:2px;padding-bottom:2px;">${contactLine}</td></tr>` : ''}
  ${socialLine ? `<tr><td style="padding-top:2px;">${socialLine}</td></tr>` : ''}
</table>`;
}

export default function SignatureGenerator() {
  const [fields, setFields] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    twitter: '',
    photo: '',
  });
  const [layout, setLayout] = useState('horizontal');
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef(null);

  const update = useCallback((key) => (e) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
  }, []);

  const signatureHTML = fields.name.trim() ? buildSignatureHTML({ ...fields, name: fields.name.trim() }, layout) : '';

  const handleCopy = useCallback(async () => {
    if (!signatureHTML) return;
    try {
      await navigator.clipboard.writeText(signatureHTML);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = signatureHTML;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    }
  }, [signatureHTML]);

  const inputClass = 'w-full py-2.5 sm:py-3 px-4 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all';

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fields.name}
            onChange={update('name')}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Job title</label>
          <input
            type="text"
            value={fields.title}
            onChange={update('title')}
            placeholder="Sales Director"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Company name</label>
          <input
            type="text"
            value={fields.company}
            onChange={update('company')}
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Email address</label>
          <input
            type="email"
            value={fields.email}
            onChange={update('email')}
            placeholder="john@acme.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Phone number</label>
          <input
            type="tel"
            value={fields.phone}
            onChange={update('phone')}
            placeholder="+1 (555) 123-4567"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Website URL</label>
          <input
            type="url"
            value={fields.website}
            onChange={update('website')}
            placeholder="https://acme.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">LinkedIn URL</label>
          <input
            type="url"
            value={fields.linkedin}
            onChange={update('linkedin')}
            placeholder="https://linkedin.com/in/johndoe"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1.5">Twitter/X URL</label>
          <input
            type="url"
            value={fields.twitter}
            onChange={update('twitter')}
            placeholder="https://x.com/johndoe"
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-black mb-1.5">Photo URL</label>
          <input
            type="url"
            value={fields.photo}
            onChange={update('photo')}
            placeholder="https://example.com/photo.jpg"
            className={inputClass}
          />
        </div>
      </div>

      {/* Layout selector */}
      <div>
        <label className="block text-sm font-medium text-black mb-3">Signature layout</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LAYOUTS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLayout(l.id)}
              className={`text-left px-4 py-3 rounded-lg border transition-all ${
                layout === l.id
                  ? 'border-[#2663eb] bg-[#2663eb]/[0.03]'
                  : 'border-[#e5e5e5] hover:border-[#d1d5db]'
              }`}
            >
              <span className="block text-sm font-medium text-black">{l.label}</span>
              <span className="block text-[13px] text-[#6b7280] mt-0.5">{l.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live preview */}
      <div>
        <label className="block text-sm font-medium text-black mb-3">Live preview</label>
        <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[120px]">
          {signatureHTML ? (
            <div dangerouslySetInnerHTML={{ __html: signatureHTML }} />
          ) : (
            <p className="text-sm text-[#9ca3af]">Enter your name to see a preview...</p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!signatureHTML}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none min-w-[130px]"
        >
          <span className={copied ? 'opacity-0' : ''}>Copy HTML</span>
          <span className={`absolute inset-0 inline-flex items-center justify-center transition-opacity ${copied ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            Copied!
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setFields({ name: '', title: '', company: '', email: '', phone: '', website: '', linkedin: '', twitter: '', photo: '' });
            setLayout('horizontal');
          }}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
