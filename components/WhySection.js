'use client';

import { APP_LOGIN_URL } from "@/lib/app-url";
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, GlobeIcon, HardDrivesIcon, FireIcon, BrainIcon, PulseIcon, ShieldCheckIcon, MagnifyingGlassIcon, TargetIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

const WhySection = () => {
  const useCases = [
    { label: 'Truly yours, not shared', desc: 'Each plan ships with a dedicated IP running inside its own isolated sending environment.', icon: GlobeIcon },
    { label: 'Skip the sales call', desc: "Sign up and you're already sending live campaigns within 15 minutes.", icon: HardDrivesIcon },
    { label: 'No ceiling on usage', desc: 'Warmup, validation, and inbox placement testing all run without caps.', icon: FireIcon },
    { label: 'Let AI handle the grunt work', desc: 'Replies get drafted and tagged automatically as they arrive, freeing your team to focus on leads worth chasing.', icon: BrainIcon },
    { label: 'Bounces watched 24/7', desc: 'Issues get caught and flagged early, before they can put a dent in your sender reputation.', icon: PulseIcon },
    { label: "Mailbox health, visible", desc: 'Bounce and reply rates are tracked mailbox by mailbox, so a struggling account never stays hidden for long.', icon: ShieldCheckIcon },
    { label: 'Monitoring that never sleeps', desc: 'Blacklist status and inbox placement get rechecked continuously, not just once during setup.', icon: MagnifyingGlassIcon },
    { label: 'Deliverability, all in one place', desc: 'Warmup, validation, ESP matching, and A/B testing all sit inside a single platform.', icon: TargetIcon }
  ];

  const stats = [
    { tag: 'Setup', value: '15m', description: "That's how long it takes to go from a brand-new account to a campaign that's actually sending, with no onboarding call required." },
    { tag: 'Isolation', value: '100%', description: 'Every account operates on its own IP within its own sending environment, keeping your sender reputation fully in your hands.' },
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
              <div className="w-5 h-1 bg-[#695AF2] rounded-xl"></div>
              <span>the essentials</span>
            </div>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight max-w-3xl text-balance">
              If it doesn't help you land in the inbox, it's not here.
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
                      <Icon size={18} className="text-[#695AF2] flex-shrink-0 md:w-5 md:h-5" />
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
              Plenty of outreach platforms lump every customer onto identical IPs and one shared reputation. <Link href="/deliverability/isolated-infrastructure" className="text-[#695AF2] hover:underline">Sendbox's isolated infrastructure</Link> means your IP and your sender reputation belong to nobody but you. Add <Link href="/deliverability/auto-mailbox-protection" className="text-[#695AF2] hover:underline">per-mailbox health visibility</Link> on top, and a mailbox in trouble gets caught before it pulls the rest of your sending down with it.
            </p>

            <a href={APP_LOGIN_URL} data-fast-goal="click_start_sending" data-fast-goal-location="why_section" className="inline-flex items-center gap-2 text-[#695AF2] bg-transparent border-none cursor-pointer text-base font-medium transition-all hover:gap-3 group">
              Start now
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
                      <span className="bg-[#695AF2]/10 text-[#695AF2] text-xs md:text-sm font-medium tracking-tight px-2 py-1 rounded">{stat.tag}</span>
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
                      <span className="bg-[#695AF2]/10 text-[#695AF2] text-xs md:text-sm font-medium tracking-tight px-2 py-1 rounded">{stat.tag}</span>
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
