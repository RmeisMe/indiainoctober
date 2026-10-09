'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center p-6 bg-black text-white select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-6xl mx-auto px-4"
      >
        {/* Title in the middle: INDIA IN OCTOBER */}
        <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-tight leading-[0.9] text-white uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
          <span className="block text-white">INDIA IN</span>
          <span className="block text-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            OCTOBER
          </span>
        </h1>

        {/* Button just below it */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono text-sm sm:text-base tracking-[0.2em] uppercase font-bold shadow-[0_10px_35px_rgba(220,38,38,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Start Presentation</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
};
