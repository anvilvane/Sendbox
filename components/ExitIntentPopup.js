'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ArrowUpRightIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';
import RequestDemoModal from '@/components/RequestDemoModal';

const ProductShowcase = dynamic(() => import('./ProductShowcase'), { ssr: false });

const STORAGE_KEY = 'sendbox_exit_intent_shown';
const MOBILE_DELAY_MS = 30000;
const MOBILE_SCROLL_THRESHOLD = 0.5;
const MOBILE_SCROLL_UP_VELOCITY = -1.5;
const MOBILE_SCROLL_MIN_Y = 200;
const MOUSEOUT_MIN_TIME_MS = 2000;
const MOUSEOUT_MIN_SCROLL_Y = 150;
const MOUSEOUT_DEBOUNCE_MS = 400;
const TAB_SWITCH_DEBOUNCE_MS = 2000;
const TITLE_ALERT_INTERVAL_MS = 1500;
const TITLE_ALERT_MESSAGES = [
  '👋 Come back',
  '👀 Hey...',
  '🫣 Still here',
];

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      firedRef.current = true;
    }

    const trigger = (source) => {
      if (firedRef.current) return;
      if (openRef.current) return;
      firedRef.current = true;
      sessionStorage.setItem(STORAGE_KEY, '1');
      setOpen(true);
      if (typeof window !== 'undefined' && window.datafast) {
        window.datafast('exit_intent_shown', { location: source });
      }
    };

    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const mountedAt = Date.now();

    const hasVisibleIframe = () => {
      const iframes = document.querySelectorAll('iframe');
      for (let i = 0; i < iframes.length; i++) {
        const rect = iframes[i].getBoundingClientRect();
        if (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          rect.left < window.innerWidth &&
          rect.right > 0
        ) {
          return true;
        }
      }
      // Google One Tap lives in a shadow DOM so querySelectorAll('iframe') can miss it.
      // Its container is injected directly on body with a known id.
      const gsi = document.getElementById('credential_picker_container');
      if (gsi) {
        const r = gsi.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) return true;
      }
      return false;
    };

    let delayTimer;
    let mouseoutTimer = null;
    let maxScrollY = window.scrollY;
    let onMouseOut;
    let onMouseOver;
    let onScroll;
    let onTrackScroll;

    if (isTouch) {
      delayTimer = setTimeout(() => trigger('mobile_timer'), MOBILE_DELAY_MS);
      let lastScrollY = window.scrollY;
      let lastScrollTime = Date.now();
      onScroll = () => {
        const doc = document.documentElement;
        const scrolled = (window.scrollY + window.innerHeight) / doc.scrollHeight;
        if (scrolled >= MOBILE_SCROLL_THRESHOLD) {
          trigger('mobile_scroll');
          return;
        }
        const now = Date.now();
        const dy = window.scrollY - lastScrollY;
        const dt = now - lastScrollTime;
        if (dt > 0 && dy < 0 && window.scrollY > MOBILE_SCROLL_MIN_Y) {
          const velocity = dy / dt;
          if (velocity < MOBILE_SCROLL_UP_VELOCITY) {
            trigger('mobile_fast_scroll_up');
            return;
          }
        }
        lastScrollY = window.scrollY;
        lastScrollTime = now;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    } else {
      onTrackScroll = () => {
        if (window.scrollY > maxScrollY) maxScrollY = window.scrollY;
      };
      window.addEventListener('scroll', onTrackScroll, { passive: true });
      onMouseOut = (e) => {
        if (e.relatedTarget || e.toElement) return;
        if (e.clientY > 20) return;
        if (Date.now() - mountedAt < MOUSEOUT_MIN_TIME_MS) return;
        if (maxScrollY < MOUSEOUT_MIN_SCROLL_Y) return;
        if (hasVisibleIframe()) return;
        if (mouseoutTimer) return;
        mouseoutTimer = setTimeout(() => {
          mouseoutTimer = null;
          if (hasVisibleIframe()) return;
          trigger('desktop_mouseout');
        }, MOUSEOUT_DEBOUNCE_MS);
      };
      onMouseOver = () => {
        if (mouseoutTimer) {
          clearTimeout(mouseoutTimer);
          mouseoutTimer = null;
        }
      };
      document.addEventListener('mouseout', onMouseOut);
      document.addEventListener('mouseover', onMouseOver);
    }

    let titleInterval = null;
    let savedTitle = null;
    let toggle = false;
    let msgIdx = 0;

    const startTitleAlert = () => {
      if (titleInterval) return;
      savedTitle = document.title;
      titleInterval = setInterval(() => {
        if (toggle) {
          document.title = savedTitle;
        } else {
          document.title = TITLE_ALERT_MESSAGES[msgIdx % TITLE_ALERT_MESSAGES.length];
          msgIdx++;
        }
        toggle = !toggle;
      }, TITLE_ALERT_INTERVAL_MS);
    };

    const stopTitleAlert = () => {
      if (titleInterval) {
        clearInterval(titleInterval);
        titleInterval = null;
      }
      if (savedTitle) document.title = savedTitle;
      toggle = false;
      msgIdx = 0;
    };

    let tabSwitchTimer = null;
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        startTitleAlert();
        tabSwitchTimer = setTimeout(() => {
          trigger('tab_switch');
          tabSwitchTimer = null;
        }, TAB_SWITCH_DEBOUNCE_MS);
      } else {
        stopTitleAlert();
        if (tabSwitchTimer) {
          clearTimeout(tabSwitchTimer);
          tabSwitchTimer = null;
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if (tabSwitchTimer) clearTimeout(tabSwitchTimer);
      if (mouseoutTimer) clearTimeout(mouseoutTimer);
      if (onMouseOut) document.removeEventListener('mouseout', onMouseOut);
      if (onMouseOver) document.removeEventListener('mouseover', onMouseOver);
      if (onScroll) window.removeEventListener('scroll', onScroll);
      if (onTrackScroll) window.removeEventListener('scroll', onTrackScroll);
      document.removeEventListener('visibilitychange', onVisibility);
      stopTitleAlert();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const bullets = [
    'Your own isolated infra and IP, starting at $99.',
    'Unlimited AI warmup. No reward-based pools.',
    'Dialer, unlimited validation, placement tests, blacklist checks and more.',
  ];

  const migrationSources = [
    { name: 'Smartlead', domain: 'smartlead.ai' },
    { name: 'Instantly', domain: 'instantly.ai' },
    { name: 'Bison', domain: 'emailbison.com', imgClass: 'w-5 h-5' },
    { name: 'Zapmail', domain: 'zapmail.ai' },
    { name: 'Inboxkit', domain: 'inboxkit.com', src: 'https://www.inboxkit.com/apple-icon.png', imgClass: 'w-4 h-3' },
    { name: 'Maildoso', domain: 'maildoso.com' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md md:max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(false)}
              data-fast-goal="exit_intent_dismissed"
              data-fast-goal-location="x_button"
              className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 z-20"
              aria-label="Close"
            >
              <XIcon size={18} weight="bold" />
            </button>

            <div className="grid md:grid-cols-[1fr_1fr]">
              {/* Left - copy + CTA */}
              <div className="px-6 pt-8 pb-6 md:pl-8 md:pr-6 md:py-8 flex flex-col bg-[#2663eb] text-white">
                <div className="mb-7">
                  <Image src="/icon.png" alt="Sendbox" className="h-8 w-auto brightness-0 invert" width={280} height={57} />
                </div>

                <div className="flex flex-col divide-y divide-white/15 mb-6">
                  {bullets.map((b, i) => (
                    <div key={b} className="flex gap-4 py-3.5 text-[14px] text-white leading-snug">
                      <span className="text-[11px] text-white/50 tabular-nums tracking-wider pt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {migrationSources.map((src) => (
                    <div
                      key={src.domain}
                      title={src.name}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0"
                    >
                      <Image
                        src={src.src || `https://www.google.com/s2/favicons?domain=${src.domain}&sz=64`}
                        alt={src.name}
                        width={20}
                        height={20}
                        className={src.imgClass || 'w-3.5 h-3.5'}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-white/75 leading-relaxed mb-5">
                  Switching usually takes weeks. We do it in hours. Free.
                </p>

                <RequestDemoModal
                  dataFastGoal="click_book_demo"
                  dataFastGoalLocation="exit_intent"
                  onOpen={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2663eb] rounded-lg text-[15px] font-medium"
                >
                  Book a demo
                  <ArrowUpRightIcon size={16} />
                </RequestDemoModal>

                <a
                  href="https://youtu.be/D7LZOAA6oTQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fast-goal="click_watch_demo"
                  data-fast-goal-location="exit_intent"
                  className="w-full mt-2 py-2 inline-flex items-center justify-center gap-1.5 text-[13px] text-white/70 no-underline"
                >
                  <YoutubeLogoIcon size={14} weight="duotone" />
                  Watch a 4-min demo
                </a>
              </div>

              {/* Right - product preview (desktop only) */}
              <div
                className="hidden md:block relative overflow-hidden bg-white"
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className="absolute"
                  style={{
                    width: 1280,
                    top: 0,
                    left: 0,
                    transform: 'scale(0.42) translate(0px, 0px)',
                    transformOrigin: 'top left',
                  }}
                >
                  <ProductShowcase />
                </div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/40" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
