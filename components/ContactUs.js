'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company: message ? `Message: ${message}` : undefined }),
      });
      if (!res.ok) throw new Error('Failed to send. Please email us directly instead.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  }

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
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
            <span>contact us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-[#6b7280] leading-relaxed max-w-xl">
            Questions about the product, billing, or anything else — reach us directly or use the form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-10 md:gap-16"
        >
          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-black uppercase tracking-wider mb-2">Support</h2>
              <a href="mailto:support@sendboxes.tech" className="text-[#695AF2] hover:underline">
                support@sendboxes.tech
              </a>
            </div>

            <div>
              <h2 className="text-sm font-medium text-black uppercase tracking-wider mb-2">Business inquiries</h2>
              <a href="mailto:support@sendboxes.tech" className="text-[#695AF2] hover:underline">
                support@sendboxes.tech
              </a>
            </div>

            {/*
              TODO(user): a registered business (legal entity) name, physical business
              address, and phone number belong here -- Razorpay/PayPal business
              verification specifically look for these on a Contact page, and none of
              them can be filled in with a placeholder or invented. Add a section like:

              <div>
                <h2 className="text-sm font-medium text-black uppercase tracking-wider mb-2">Registered address</h2>
                <p className="text-[#6b7280] leading-relaxed">[Legal entity name]<br />[Street address]<br />[City, State, PIN]<br />[Country]</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-black uppercase tracking-wider mb-2">Phone</h2>
                <a href="tel:+91XXXXXXXXXX" className="text-[#695AF2] hover:underline">+91 XXXXX XXXXX</a>
              </div>
            */}
          </div>

          {/* Contact form */}
          <div>
            {status === 'success' ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                Thanks — we'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:border-[#695AF2] focus:outline-none focus:ring-1 focus:ring-[#695AF2]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:border-[#695AF2] focus:outline-none focus:ring-1 focus:ring-[#695AF2]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:border-[#695AF2] focus:outline-none focus:ring-1 focus:ring-[#695AF2]"
                  />
                </div>
                {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#5847E0] disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
