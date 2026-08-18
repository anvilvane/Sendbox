'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, LinkedinLogoIcon, FireIcon } from '@phosphor-icons/react/dist/ssr';

const ContributorProfile = ({ contributor }) => {
  const liveCount = contributor.contributions.filter(c => c.status === 'live').length;
  const inProgressCount = contributor.contributions.filter(c => c.status === 'building').length;

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-white relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/contributors"
            className="inline-flex items-center gap-2 text-[#9ca3af] text-sm"
          >
            <ArrowLeftIcon size={16} />
            Contributors
          </Link>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-start gap-6 mb-6">
            <Image
              src={contributor.avatar}
              alt={contributor.name}
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
            />
            <div className="pt-1">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
                  {contributor.name}
                </h1>
                {contributor.links?.linkedin && (
                  <a
                    href={contributor.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-[#695AF2] transition-colors"
                  >
                    <LinkedinLogoIcon size={16} />
                  </a>
                )}
                {contributor.badge && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-orange-600 px-3 py-1.5 rounded-md bg-orange-50 border border-orange-200">
                    <FireIcon size={13} weight="fill" className="text-orange-500" />
                    {contributor.badge.label}
                  </span>
                )}
              </div>
              <p className="text-[#9ca3af] text-lg">{contributor.role}</p>
            </div>
          </div>

          <p className="text-xl text-[#6b7280] leading-relaxed mb-8">
            {contributor.bio}
          </p>

          {/* Stats as pills */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm bg-gray-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#695AF2]"></span>
              <span className="text-[#6b7280]"><span className="font-medium text-black">{liveCount}</span> shipped</span>
            </span>
            {inProgressCount > 0 && (
              <span className="inline-flex items-center gap-2 text-sm bg-gray-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-[#6b7280]"><span className="font-medium text-black">{inProgressCount}</span> in progress</span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-black tracking-tight mb-8">
            Contributions
          </h2>

          <div className="space-y-6">
            {contributor.contributions.map((contribution, index) => (
              <motion.div
                key={contribution.feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="pb-6 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${
                    contribution.status === 'live' ? 'bg-[#695AF2]' : 'bg-amber-500'
                  }`}></span>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">
                      {contribution.feature}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      {contribution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributorProfile;
