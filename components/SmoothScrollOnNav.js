'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SmoothScrollOnNav() {
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip first mount (initial page load)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Smooth scroll to top on route change
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  }, [pathname]);

  return null;
}
