'use client';

import { useEffect, useState } from 'react';
import { XIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { AnimatePresence, motion } from 'framer-motion';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: '', email: '', company: '' };

// Self-contained "Request a demo" trigger + modal. Drop it anywhere a
// "Book a demo" button used to live - it renders its own trigger element
// (button by default) and owns all of its own open/submit state, so the
// parent never has to wire up any handlers.
export default function RequestDemoModal({
  children = 'Book a demo',
  className,
  trigger = 'button',
  dataFastGoal,
  dataFastGoalLocation,
  showIcon = false,
  onOpen,
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState(initialForm);
  const [fieldError, setFieldError] = useState('');

  const close = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Reset to a fresh form a moment after the modal closes, so a reopen
  // doesn't flash the previous success/error state.
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setStatus('idle');
      setForm(initialForm);
      setFieldError('');
    }, 200);
    return () => clearTimeout(t);
  }, [open]);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();

    if (!name) {
      setFieldError('Please enter your name.');
      return;
    }
    if (!email || !EMAIL_RE.test(email)) {
      setFieldError('Please enter a valid work email.');
      return;
    }
    setFieldError('');
    setStatus('submitting');

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company: company || undefined }),
      });

      if (res.ok) {
        setStatus('success');
        if (typeof window !== 'undefined' && window.datafast) {
          window.datafast('demo_request_submitted', { location: dataFastGoalLocation });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const Trigger = trigger;

  return (
    <>
      <Trigger
        type={trigger === 'button' ? 'button' : undefined}
        onClick={handleOpen}
        data-fast-goal={dataFastGoal}
        data-fast-goal-location={dataFastGoalLocation}
        className={className}
      >
        {children}
        {showIcon && <ArrowUpRightIcon size={14} className="inline-block ml-1" />}
      </Trigger>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 z-20"
                aria-label="Close"
              >
                <XIcon size={18} weight="bold" />
              </button>

              <div className="px-6 pt-8 pb-7 md:px-8 md:pt-9 md:pb-8">
                {status === 'success' ? (
                  <div className="py-6 text-center">
                    <h3 className="text-xl font-semibold text-black mb-2">Thanks — we&apos;ll be in touch.</h3>
                    <p className="text-sm text-[#6b7280]">
                      Someone from the team will reach out shortly to find a time that works.
                    </p>
                    <button
                      type="button"
                      onClick={close}
                      className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-[14px] font-medium bg-[#695AF2] text-white hover:bg-[#695AF2]/90 transition-all"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-black mb-1">Request a demo</h3>
                    <p className="text-sm text-[#6b7280] mb-6">
                      Tell us a bit about you and we&apos;ll set up a time to walk you through it.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="rdm-name" className="block text-[13px] font-medium text-black mb-1.5">
                          Name
                        </label>
                        <input
                          id="rdm-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange('name')}
                          placeholder="Jane Doe"
                          className="input input-bordered w-full text-[14px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="rdm-email" className="block text-[13px] font-medium text-black mb-1.5">
                          Work email
                        </label>
                        <input
                          id="rdm-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange('email')}
                          placeholder="jane@company.com"
                          className="input input-bordered w-full text-[14px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="rdm-company" className="block text-[13px] font-medium text-black mb-1.5">
                          Company <span className="text-[#9ca3af] font-normal">(optional)</span>
                        </label>
                        <input
                          id="rdm-company"
                          type="text"
                          value={form.company}
                          onChange={handleChange('company')}
                          placeholder="Acme Inc."
                          className="input input-bordered w-full text-[14px]"
                        />
                      </div>

                      {fieldError && (
                        <p className="text-[13px] text-red-600">{fieldError}</p>
                      )}
                      {status === 'error' && (
                        <p className="text-[13px] text-red-600">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#695AF2] text-white rounded-lg text-[15px] font-medium hover:bg-[#695AF2]/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Sending...' : 'Request a demo'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
