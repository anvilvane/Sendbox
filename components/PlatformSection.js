'use client';

import { APP_LOGIN_URL } from "@/lib/app-url";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PaperPlaneTilt, EnvelopeSimple, Tray, ChartBar, Phone, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const tools = [
  {
    icon: PaperPlaneTilt,
    name: 'Campaigns',
    description: 'Build multi-step sequences that send inside smart windows, and pause on their own the moment a mailbox gets flagged.',
  },
  {
    icon: EnvelopeSimple,
    name: 'Mailboxes',
    description: 'Each mailbox runs on a dedicated IP in its own isolated environment, warmed up in a way that reads as human because real activity drives it.',
  },
  {
    icon: Tray,
    name: 'Inbox',
    description: 'Every reply lands in a single inbox you can answer straight from Slack, so hot leads stop getting buried across a dozen open tabs.',
  },
  {
    icon: ChartBar,
    name: 'Analytics',
    description: 'Opens, replies, and clicks roll up across every campaign into the numbers that actually matter, not a dashboard drowning in noise.',
  },
  {
    icon: Phone,
    name: 'Dialer',
    description: "Call the leads who opened your emails and blend calls with email inside a single sequence, so you're running one workflow instead of two.",
  },
];

const PlatformSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const borderRadius = useTransform(scrollYProgress, [0.8, 1], [0, isMobile ? 0 : 24]);
  const marginX = useTransform(scrollYProgress, [0.8, 1], [0, isMobile ? 0 : 64]);

  return (
    <section ref={sectionRef} className="py-0 bg-white">
      <motion.div
        className="bg-[#1a1a1a]"
        data-header-theme="dark"
        style={{ borderRadius, marginLeft: marginX, marginRight: marginX }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="mb-12 md:mb-20">
            <div className="grid lg:grid-cols-[1.3fr_1fr] items-end gap-8">
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] text-white tracking-tight">
                One platform.<br />Every tool your outbound team needs.
              </h2>
              <div className="lg:border-l lg:border-white/10 lg:pl-8">
                <p className="text-base leading-relaxed text-[#9ca3af] mb-6">
                  Campaigns, mailboxes, a unified inbox, analytics, and a dialer all live under one roof, so you're not duct-taping five separate tools together.
                </p>
                <a
                  href={APP_LOGIN_URL}
                  data-fast-goal="click_start_sending"
                  data-fast-goal-location="platform_section"
                  className="inline-flex items-center gap-2 text-[#695AF2] cursor-pointer text-base font-medium transition-all hover:gap-3 group"
                >
                  Create a free account
                  <ArrowRightIcon size={20} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-t border-white/10">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  className={[
                    'border-r border-white/10 px-4 md:px-6 py-8 md:py-10 flex flex-col gap-4',
                    index === 1 || index === 3 ? 'border-r-0 md:border-r' : '',
                    index === 4 ? 'border-r-0 col-span-2 md:col-span-1' : '',
                    index >= 2 ? 'border-t md:border-t-0 border-white/10' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                >
                  <Icon size={22} weight="duotone" className="text-[#695AF2] flex-shrink-0" />
                  <div>
                    <div className="text-white text-[15px] font-medium mb-2">{tool.name}</div>
                    <p className="text-[#9ca3af] text-sm leading-relaxed">{tool.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="border-b border-white/10" />
        </div>
      </motion.div>
    </section>
  );
};

export default PlatformSection;
