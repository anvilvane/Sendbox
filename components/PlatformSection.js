'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PaperPlaneTilt, EnvelopeSimple, Tray, ChartBar, Phone, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const tools = [
  {
    icon: PaperPlaneTilt,
    name: 'Campaigns',
    description: 'Multi-step sequences with smart sending windows. Pauses automatically when a mailbox gets flagged.',
  },
  {
    icon: EnvelopeSimple,
    name: 'Mailboxes',
    description: 'Dedicated IPs, isolated infrastructure. Warmup that looks human because it is.',
  },
  {
    icon: Tray,
    name: 'Inbox',
    description: 'Every reply in one place. Respond from Slack. No more losing hot leads in tab hell.',
  },
  {
    icon: ChartBar,
    name: 'Analytics',
    description: 'Opens, replies, clicks - across every campaign. The signal, not a dashboard full of noise.',
  },
  {
    icon: Phone,
    name: 'Dialer',
    description: 'Call the leads who opened. Mix calls and emails in the same sequence. One workflow, not two.',
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
            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-white">
              <div className="w-5 h-1 bg-[#2663eb] rounded-xl"></div>
              <span>the platform</span>
            </div>

            <div className="grid lg:grid-cols-2 items-end">
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-white tracking-tight">
                Every tool your outbound team needs. One platform.
              </h2>
              <div>
                <p className="text-base leading-relaxed text-[#9ca3af] mb-6">
                  Campaigns, mailboxes, unified inbox, analytics, dialer - all connected. No stitching five tools together.
                </p>
                <a
                  href="https://app.sendbox.ai/login"
                  data-fast-goal="click_start_sending"
                  data-fast-goal-location="platform_section"
                  className="inline-flex items-center gap-2 text-[#2663eb] cursor-pointer text-base font-medium transition-all hover:gap-3 group"
                >
                  Get started free
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
                  <Icon size={22} weight="duotone" className="text-[#2663eb] flex-shrink-0" />
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
