'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function TableOfContents({ sections, showCta = true }) {
  const [activeId, setActiveId] = useState('');
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;

  useEffect(() => {
    const handleScroll = () => {
      const ids = sectionsRef.current.map(s => s.id);
      let current = '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is "active" when its top is above the 30% viewport mark
        if (rect.top <= window.innerHeight * 0.3) {
          current = id;
        }
      }

      if (current) setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!sections || sections.length === 0) return null;

  return (
    <div>
      <nav>
        <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">On this page</p>
        <ul className="space-y-0.5">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-[13px] py-1 transition-colors ${
                  activeId === id
                    ? 'text-[#2663eb] font-medium'
                    : 'text-[#9ca3af] hover:text-[#6b7280]'
                }`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {showCta && (
        <div className="mt-6 rounded-xl bg-[#111] px-5 py-5">
          <Image src="/icon.png" alt="Sendbox" width={80} height={20} className="h-5 w-auto brightness-0 invert mb-2.5" />
          <p className="text-[12px] text-gray-400 whitespace-nowrap mb-1">Dedicated IPs. Isolated infrastructure.</p>
          <p className="text-[12px] text-gray-400 mb-4">From $99/mo.</p>
          <a
            href="https://app.sendbox.ai/login"
            data-fast-goal="click_sidebar_cta"
            className="flex items-center justify-center gap-1.5 w-full text-[13px] font-medium text-white bg-[#2663eb] px-4 py-2 rounded-lg transition-all hover:bg-[#1d4ed8] group"
          >
            Get Started
            <ArrowRightIcon size={12} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </div>
  );
}
