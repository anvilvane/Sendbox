'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { GoogleOAuthProvider, useGoogleOneTapLogin } from '@react-oauth/google';

function GoogleOneTap() {
  const isLoadingRef = useRef(false);

  // Inject CSS to position One Tap to bottom left
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'google-one-tap-style';
    style.textContent = `
      #credential_picker_container {
        top: 24px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existing = document.getElementById('google-one-tap-style');
      if (existing) existing.remove();
    };
  }, []);

  const handleCredentialResponse = useCallback(async (credentialResponse) => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    try {
      window?.datafast("google_one_tap_signup");
      const credential = encodeURIComponent(credentialResponse.credential);
      window.location.href = `https://app.sendbox.ai/api/auth/google-credential?credential=${credential}`;
    } catch (err) {
      console.error('Google One-Tap error:', err);
      isLoadingRef.current = false;
    }
  }, []);

  useGoogleOneTapLogin({
    onSuccess: handleCredentialResponse,
    onError: () => {
      console.error('Google One-Tap login failed');
    },
    auto_select: false,
    cancel_on_tap_outside: false,
    context: 'signup',
    use_fedcm_for_prompt: false,
  });

  return null;
}

export default function FloatingGoogleLogin() {
  // The Google Identity Services SDK (accounts.google.com/gsi/client) is ~95 KiB
  // and the GoogleOAuthProvider injects it as soon as it mounts. One Tap is only
  // a signup nudge, so we hold off rendering it until the browser is idle (capped
  // at 4s) to keep GSI off the critical path.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId;
    let timeoutId;
    const start = () => setReady(true);

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(start, { timeout: 4000 });
    } else {
      timeoutId = setTimeout(start, 3000);
    }

    return () => {
      if (idleId != null && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID}>
      <GoogleOneTap />
    </GoogleOAuthProvider>
  );
}
