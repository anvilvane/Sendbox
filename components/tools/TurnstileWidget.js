'use client';

import { useEffect, useRef } from 'react';

// Cloudflare Turnstile managed widget.
// Requires NEXT_PUBLIC_TURNSTILE_SITE_KEY env var.
// Docs: https://developers.cloudflare.com/turnstile/

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

// Module-level singleton so the script loads exactly once even when several
// widgets mount, or React re-mounts the component (Strict Mode, navigation).
let scriptPromise = null;

const turnstileReady = () =>
  typeof window !== 'undefined' &&
  window.turnstile &&
  typeof window.turnstile.render === 'function';

// Poll until window.turnstile.render is actually callable. The script's
// `load` event can fire a tick before Turnstile finishes initialising, and
// calling turnstile.ready() at the wrong time warns and silently no-ops.
function waitForTurnstile(resolve, reject) {
  if (turnstileReady()) {
    resolve();
    return;
  }
  let elapsed = 0;
  const interval = setInterval(() => {
    if (turnstileReady()) {
      clearInterval(interval);
      resolve();
    } else if ((elapsed += 50) >= 8000) {
      clearInterval(interval);
      reject(new Error('turnstile init timed out'));
    }
  }, 50);
}

function loadTurnstile() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (turnstileReady()) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const fail = () => {
      scriptPromise = null;
      reject(new Error('turnstile script failed'));
    };
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onerror = fail;
      document.head.appendChild(script);
    }
    // Poll for readiness rather than relying on turnstile.ready().
    waitForTurnstile(resolve, reject);
  });
  return scriptPromise;
}

export default function TurnstileWidget({ onToken, onExpire }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  // Keep latest callbacks without re-running the mount effect.
  const cbRef = useRef({ onToken, onExpire });
  cbRef.current = { onToken, onExpire };

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;
    let cancelled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => cbRef.current.onToken?.(token),
          'expired-callback': () => cbRef.current.onExpire?.(),
          'error-callback': () => {
            cbRef.current.onExpire?.();
            if (widgetIdRef.current !== null) {
              try {
                window.turnstile.reset(widgetIdRef.current);
              } catch {
                /* widget already gone */
              }
            }
          },
          theme: 'light',
          size: 'normal',
          appearance: 'always',
          retry: 'auto',
          'retry-interval': 3000,
        });
      })
      .catch(() => {
        /* script failed to load or timed out; nothing to render */
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && turnstileReady()) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* already removed */
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return null;

  return (
    <div className="mt-4 flex justify-center">
      <div ref={containerRef} />
    </div>
  );
}
