'use client';

import { APP_LOGIN_URL } from "@/lib/app-url";
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

const WhySection = () => {
  const useCases = [
    { label: 'Truly yours, not shared', desc: 'Each plan ships with a dedicated IP running inside its own isolated sending environment.' },
    { label: 'Skip the sales call', desc: "Sign up and you're already sending live campaigns within 15 minutes." },
    { label: 'No ceiling on usage', desc: 'Warmup, validation, and inbox placement testing all run without caps.' },
    { label: 'Let AI handle the grunt work', desc: 'Replies get drafted and tagged automatically as they arrive, freeing your team to focus on leads worth chasing.' },
    { label: 'Bounces watched 24/7', desc: 'Issues get caught and flagged early, before they can put a dent in your sender reputation.' },
    { label: 'Mailbox health, visible', desc: 'Bounce and reply rates are tracked mailbox by mailbox, so a struggling account never stays hidden for long.' },
    { label: 'Monitoring that never sleeps', desc: 'Blacklist status and inbox placement get rechecked continuously, not just once during setup.' },
    { label: 'Deliverability, all in one place', desc: 'Warmup, validation, ESP matching, and A/B testing all sit inside a single platform.' },
  ];

  return (
    <section className="bg-white border-t border-gray-100 relative" id="whyus">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Statement + the two real stats, side by side instead of stacked-on-top-of-a-grid */}
        <div className="mb-14 md:mb-20 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-black text-balance">
            If it doesn't help you land in the inbox, it's not here.
          </h2>

          <div className="mt-8 flex shrink-0 items-center gap-8 lg:mt-0">
            <div>
              <div className="font-numeric text-3xl font-semibold tracking-tight text-black md:text-4xl">15m</div>
              <div className="mt-1 text-xs text-[#9ca3af] max-w-[10rem] leading-snug">signup to a live, sending campaign</div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <div className="font-numeric text-3xl font-semibold tracking-tight text-black md:text-4xl">100%</div>
              <div className="mt-1 text-xs text-[#9ca3af] max-w-[10rem] leading-snug">of your sending reputation, yours alone</div>
            </div>
          </div>
        </div>

        {/* Differentiators — a flowing two-column list with a leading index mark,
            not a uniform icon-card grid. Alternating rule weight breaks the
            "identical cards" reflex without pretending it's not a list. */}
        <div className="grid gap-x-12 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.label}
              className={`flex gap-4 py-6 ${index < useCases.length - 2 ? 'border-b border-gray-100' : ''}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.08, ease: 'easeOut' }}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#695AF2]" />
              <div>
                <div className="text-[15px] font-medium leading-snug text-black">{useCase.label}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{useCase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-gray-100 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-base leading-relaxed text-[#4b5563]">
            Plenty of outreach platforms lump every customer onto identical IPs and one shared reputation. <Link href="/deliverability/isolated-infrastructure" className="text-[#695AF2] hover:underline">Sendbox's isolated infrastructure</Link> means your IP and your sender reputation belong to nobody but you. Add <Link href="/deliverability/auto-mailbox-protection" className="text-[#695AF2] hover:underline">per-mailbox health visibility</Link> on top, and a mailbox in trouble gets caught before it pulls the rest of your sending down with it.
          </p>

          <a href={APP_LOGIN_URL} data-fast-goal="click_start_sending" data-fast-goal-location="why_section" className="group inline-flex shrink-0 items-center gap-2 text-base font-medium text-[#695AF2] transition-all hover:gap-3">
            Start now
            <ArrowRightIcon size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
