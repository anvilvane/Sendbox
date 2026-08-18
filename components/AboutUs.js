'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { APP_LOGIN_URL } from '@/lib/app-url';

const AboutUs = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 bg-white relative">
      {/* Vertical guide lines + corner dots */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
            <span>about us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            About Sendbox
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">What we do</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Sendbox is cold email software built for teams who treat inbox placement as a requirement, not a hope. Every account runs on its own dedicated IP with fully isolated sending infrastructure, backed by AI-powered warmup, mailbox health monitoring, and deliverability tooling that most platforms sell as an add-on. We built Sendbox because too many teams find out their emails are landing in spam only after a campaign has already failed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Why deliverability first</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Most cold email tools compete on how many features they can bundle into a sequencer. We think the sequencer is the easy part. The hard part — the part that actually determines whether your emails get read — is infrastructure: dedicated IPs so your sending reputation is yours alone, isolated environments so another user's mistakes never touch your account, and honest, visible health monitoring instead of a black box. That's what Sendbox is built around.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Who it's for</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Agencies running outbound for multiple clients, SDR and GTM teams sending at volume, and recruiters reaching candidates who ignore InMail — anyone whose outreach only works if it actually reaches the inbox.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Our approach to trust</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We'd rather tell you plainly what's built, what isn't, and what a plan actually costs than dress up a feature list. Our <Link href="/changelog" className="text-[#695AF2] hover:underline">changelog</Link> is public. Our <Link href="/pricing" className="text-[#695AF2] hover:underline">pricing</Link> has no hidden per-seat surcharges. If something breaks, we'll say so.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Get in touch</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Questions about the product, a partnership, or anything else — see our <Link href="/contact" className="text-[#695AF2] hover:underline">Contact page</Link>, or{' '}
              <a href={APP_LOGIN_URL} className="text-[#695AF2] hover:underline">start sending</a> to try Sendbox directly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
