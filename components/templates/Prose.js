import React from 'react';
import internalLinksMap from '@/data/internal-links';

// Build a regex from the link map keys, sorted longest-first to avoid partial matches
const linkKeys = Object.keys(internalLinksMap).sort((a, b) => b.length - a.length);
const linkRegex = new RegExp(`(${linkKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

function linkifyParagraph(text, linkedInThisPage) {
  const parts = [];
  let lastIndex = 0;
  let match;

  // Reset regex
  linkRegex.lastIndex = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    const matchedText = match[0];
    const key = matchedText.toLowerCase();
    const normalizedKey = linkKeys.find(k => k.toLowerCase() === key);

    if (!normalizedKey) continue;

    // Only link each keyword once per page render
    if (linkedInThisPage.has(normalizedKey.toLowerCase())) continue;

    const url = internalLinksMap[normalizedKey];
    if (!url) continue;

    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add linked text
    parts.push(
      <a key={match.index} href={url} className="text-[#695AF2] hover:underline underline-offset-2">
        {matchedText}
      </a>
    );

    linkedInThisPage.add(normalizedKey.toLowerCase());
    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function Prose({ children, autoLink = true }) {
  if (!children) return null;

  const raw = String(children);
  const sentences = raw.split(/(?<=\.)\s+/);
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(' '));
  }

  // Track which keywords have been linked across all paragraphs
  const linkedInThisPage = new Set();

  return paragraphs.map((p, i) => (
    <p key={i} className="mb-4 last:mb-0 text-[16px] leading-[1.75] text-[#374151]">
      {autoLink ? linkifyParagraph(p, linkedInThisPage) : p}
    </p>
  ));
}
