'use client';

import React, { useState, useEffect } from 'react';

const TabToNext = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const getAllSections = () => {
    // Get all main sections automatically
    return document.querySelectorAll('section[id], section:not([id])');
  };

  const getCurrentSectionIndex = () => {
    const scrollY = window.scrollY;
    const sections = getAllSections();

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        return i;
      }
    }
    return 0;
  };

  const scrollToNextSection = () => {
    const sections = getAllSections();
    const currentIndex = getCurrentSectionIndex();

    // Loop back to first section when reaching the end
    const nextIndex = currentIndex + 1 >= sections.length ? 0 : currentIndex + 1;
    const targetSection = sections[nextIndex];

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab' && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
        // Only handle tab if it's not focused on a form element
        const activeElement = document.activeElement;
        const isFormElement = activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.tagName === 'BUTTON' ||
          activeElement.tagName === 'SELECT' ||
          activeElement.isContentEditable
        );

        if (!isFormElement) {
          event.preventDefault();
          scrollToNextSection();
        }
      }
    };

    const handleScroll = () => {
      // Update current section index
      setCurrentSectionIndex(getCurrentSectionIndex());

      // Keep visible throughout the page (remove auto-hide)
      setIsVisible(true);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed hidden md:block bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2 shadow-lg">
        <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-300 font-mono">
            tab
          </kbd>
          <span>to see next</span>
          <span className="text-gray-400">↓</span>
        </span>
      </div>
    </div>
  );
};

export default TabToNext;