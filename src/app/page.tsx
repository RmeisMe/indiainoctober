'use client';

import React, { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { PresentationViewer } from '@/components/PresentationViewer';
import { presentationSlides } from '@/data/slides';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [mode, setMode] = useState<'landing' | 'presentation'>('landing');

  const handleStartPresentation = async () => {
    try {
      if (typeof window !== 'undefined' && !document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
      }
    } catch {
      // Browsers may require user permission or user gesture
    }
    setMode('presentation');
  };

  const handleExitPresentation = () => {
    setMode('landing');
  };

  return (
    <main className="w-screen h-screen overflow-hidden bg-black select-none">
      <AnimatePresence mode="wait">
        {mode === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <LandingPage onStart={handleStartPresentation} />
          </motion.div>
        ) : (
          <motion.div
            key="presentation"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <PresentationViewer
              slides={presentationSlides}
              onExit={handleExitPresentation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
