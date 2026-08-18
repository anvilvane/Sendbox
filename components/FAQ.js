'use client';

import React, { useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr';
import { motion, AnimatePresence } from 'framer-motion';
import { homepageFAQs } from '@/data/homepage-faqs';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = homepageFAQs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header -- split, not stacked-and-centered: heading left, a direct
            "still stuck" prompt right, matching the asymmetric voice used
            elsewhere on the page instead of one more centered block. */}
        <div className="mb-10 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
            Questions people usually have before they sign up
          </h2>
          <a href="/contact" className="shrink-0 text-sm text-[#6b7280] transition-colors hover:text-[#695AF2]">
            Still stuck? <span className="font-medium text-[#695AF2]">Talk to us →</span>
          </a>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group transition-all hover:bg-gray-50/50"
              >
                <span className="text-base md:text-xl font-semibold text-black pr-4 md:pr-6 group-hover:text-[#695AF2] transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#695AF2]/10 transition-colors duration-200"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon size={20} className={`transition-colors duration-200 ${openIndex === index ? 'text-[#695AF2]' : 'text-black group-hover:text-[#695AF2]'}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pb-6 pr-12 pl-0"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="text-base leading-relaxed text-[#6b7280]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
