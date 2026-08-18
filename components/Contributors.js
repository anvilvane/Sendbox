'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LinkedinLogoIcon, HeartIcon, FireIcon } from '@phosphor-icons/react/dist/ssr';
import { contributorsData } from '@/data/contributors';

const ContributorRow = ({ contributor, index }) => {
  const liveCount = contributor.contributions.filter(c => c.status === 'live').length;
  const inProgressCount = contributor.contributions.filter(c => c.status === 'building').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Link
        href={`/contributors/${contributor.slug}`}
        className="group block"
      >
        <div className="py-12 md:py-16 border-gray-100">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Avatar */}
            <Image
              src={contributor.avatar}
              alt={contributor.name}
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
                      {contributor.name}
                    </h2>
                    {contributor.links?.linkedin && (
                      <a
                        href={contributor.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#9ca3af] hover:text-[#695AF2] transition-colors"
                      >
                        <LinkedinLogoIcon size={16} />
                      </a>
                    )}
                    {contributor.badge && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-orange-600 px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200">
                        <FireIcon size={11} weight="fill" className="text-orange-500" />
                        {contributor.badge.label}
                      </span>
                    )}
                  </div>
                  <p className="text-[#9ca3af]">{contributor.role}</p>
                </div>

                {/* Stats pill */}
                <div className="hidden sm:flex items-center gap-1 text-sm text-[#6b7280] bg-gray-50 px-3 py-1.5 rounded-full flex-shrink-0">
                  <span className="font-medium text-black">{liveCount}</span>
                  <span>shipped</span>
                  {inProgressCount > 0 && (
                    <>
                      <span className="mx-1">·</span>
                      <span className="font-medium text-black">{inProgressCount}</span>
                      <span>pending</span>
                    </>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                {contributor.bio}
              </p>

              {/* Contributions preview */}
              <div className="flex flex-wrap gap-2">
                {contributor.contributions.slice(0, 3).map((c) => (
                  <span
                    key={c.feature}
                    className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] bg-gray-50 px-3 py-1.5 rounded-full"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'live' ? 'bg-[#695AF2]' : 'bg-amber-500'}`}></span>
                    {c.feature}
                  </span>
                ))}
                {contributor.contributions.length > 3 && (
                  <span className="text-sm text-[#9ca3af] px-3 py-1.5">
                    +{contributor.contributions.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Contributors = () => {
  const totalLive = contributorsData.reduce(
    (acc, c) => acc + c.contributions.filter(cont => cont.status === 'live').length,
    0
  );

  return (
    <section className="pt-24 pb-8 md:pb-12 px-4 md:px-8 bg-white relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
              Contributors
            </h1>
            <HeartIcon weight="fill" className="w-8 h-8 md:w-10 md:h-10 text-red-500 mt-2 md:mt-3" />
          </div>
          <p className="text-xl text-[#6b7280] max-w-2xl leading-relaxed">
            The people shaping Sendbox before almost anyone else does — flagging bugs, pitching features, and keeping our shipping pace honest. {totalLive} features live so far.
          </p>
        </motion.div>

        {/* Contributors */}
        <div>
          {contributorsData.map((contributor, index) => (
            <ContributorRow
              key={contributor.slug}
              contributor={contributor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
