'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, GlobeIcon, HardDrivesIcon, FireIcon, BrainIcon, PulseIcon, ShieldCheckIcon, MagnifyingGlassIcon, TargetIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

const WhySection = () => {
  const useCases = [
    { label: 'No shared infrastructure', desc: 'Dedicated IPs and isolated environments on every plan.', icon: GlobeIcon },
    { label: 'Self-serve setup', desc: 'Go from sign-up to sending in under 15 minutes.', icon: HardDrivesIcon },
    { label: 'Nothing is capped', desc: 'Unlimited warmup, validation, placement tests, and more.', icon: FireIcon },
    { label: 'Built-in intelligence', desc: 'AI drafts replies and tags leads so you stay focused.', icon: BrainIcon },
    { label: '24/7 bounce monitoring', desc: 'Issues detected and flagged before they hurt deliverability.', icon: PulseIcon },
    { label: 'Mailbox health visibility', desc: 'Reply and bounce rate tracked per mailbox so you catch issues early.', icon: ShieldCheckIcon },
    { label: 'Continuous health checks', desc: 'Blacklist and placement monitoring runs around the clock.', icon: MagnifyingGlassIcon },
    { label: 'Full deliverability suite', desc: 'Warmup, validation, ESP matching, and A/B testing built in.', icon: TargetIcon }
  ];

  const stats = [
    { tag: 'Setup', value: '15m', description: 'From sign-up to first campaign live. No onboarding calls. Fully self-serve.' },
    { tag: 'Isolation', value: '100%', description: 'Every account gets its own IP and sending environment. Your reputation is never shared.' },
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

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="mb-12 md:mb-20">
          {/* Eyebrow and Title */}
          <div className="mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1 bg-[#2663eb] rounded-xl"></div>
              <span>what's included</span>
            </div>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight max-w-3xl text-balance">
              Everything you need to land in the inbox. Nothing you don't.
            </h2>
          </div>

          {/* Use Cases Grid */}
          <div className="space-y-0">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-100">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className={`border-r border-gray-100 px-4 md:px-6 py-5 md:py-8 flex flex-col gap-2 ${
                      index % 2 === 1 ? 'border-r-0 md:border-r' : ''
                    } ${index % 4 === 3 ? 'md:border-r-0' : ''} ${
                      index >= 2 && index < 4 ? 'border-t border-gray-100' : ''
                    } ${index >= 4 ? 'border-t border-gray-100' : ''}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={18} className="text-[#2663eb] flex-shrink-0 md:w-5 md:h-5" />
                      <span className="text-black text-sm md:text-[15px] font-medium leading-snug">{useCase.label}</span>
                    </div>
                    <p className="text-xs md:text-[13px] text-[#6b7280] leading-relaxed">{useCase.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="border-b border-gray-100"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-base leading-relaxed text-[#6b7280] mb-8 max-w-lg">
              Other tools share infrastructure. <Link href="/deliverability/isolated-infrastructure" className="text-[#2663eb] hover:underline">Sendbox's isolated infrastructure</Link> means your IP is yours. Your reputation is yours. And with <Link href="/deliverability/auto-mailbox-protection" className="text-[#2663eb] hover:underline">per-mailbox health visibility</Link>, you see reply and bounce rate for every mailbox, so a struggling one stands out before the damage spreads.
            </p>

            <a href="https://app.sendbox.ai/login" data-fast-goal="click_start_sending" data-fast-goal-location="why_section" className="inline-flex items-center gap-2 text-[#2663eb] bg-transparent border-none cursor-pointer text-base font-medium transition-all hover:gap-3 group">
              Start sending
              <ArrowRightIcon size={20} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right Stats Grid */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="mb-3 md:mb-4">
                    <div className="inline-block mb-2 md:mb-4">
                      <span className="bg-[#2663eb]/10 text-[#2663eb] text-xs md:text-sm font-medium tracking-tight px-2 py-1 rounded">{stat.tag}</span>
                    </div>
                    <div className="text-4xl md:text-6xl font-medium text-black tracking-tighter leading-none mb-2 md:mb-4 font-numeric">{stat.value}</div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#6b7280]">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.slice(2, 4).map((stat, index) => (
                <motion.div
                  key={index + 2}
                  className="flex flex-col"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1, ease: "easeOut" }}
                >
                  <div className="mb-3 md:mb-4">
                    <div className="inline-block mb-2 md:mb-4">
                      <span className="bg-[#2663eb]/10 text-[#2663eb] text-xs md:text-sm font-medium tracking-tight px-2 py-1 rounded">{stat.tag}</span>
                    </div>
                    <div className="text-4xl md:text-6xl font-medium text-black tracking-tighter leading-none mb-2 md:mb-4 font-numeric">{stat.value}</div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#6b7280]">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
