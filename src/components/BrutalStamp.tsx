'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrutalStampProps {
  text?: string;
  subtext?: string;
  isVisible: boolean;
}

export const BrutalStamp: React.FC<BrutalStampProps> = ({
  text = 'MISLEADING',
  subtext = 'RECORD OF DISSONANCE',
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-40 overflow-hidden">
          <motion.div
            initial={{
              scale: 3.2,
              opacity: 0,
              rotate: -24,
              filter: 'blur(8px)',
            }}
            animate={{
              scale: 1,
              opacity: 0.95,
              rotate: -11,
              filter: 'blur(0px)',
            }}
            exit={{
              scale: 2.2,
              opacity: 0,
              rotate: -18,
              filter: 'blur(6px)',
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 18,
              mass: 0.8,
            }}
            className="relative flex flex-col items-center justify-center px-8 py-5 md:px-14 md:py-8 border-[6px] md:border-[10px] border-red-600 rounded-lg bg-black/75 backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.5),inset_0_0_20px_rgba(220,38,38,0.3)]"
          >
            {/* Inner Stencil Border */}
            <div className="absolute inset-1.5 md:inset-2.5 border-2 border-dashed border-red-600/80 rounded pointer-events-none" />

            {/* Top Stamp Header */}
            <div className="flex items-center gap-3 text-red-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-1">
              <span className="w-3 h-0.5 bg-red-600 inline-block" />
              <span>OFFICIAL VERDICT</span>
              <span className="w-3 h-0.5 bg-red-600 inline-block" />
            </div>

            {/* Main Stamp Text */}
            <div className="font-heading text-red-600 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] uppercase select-none leading-none drop-shadow-[0_4px_12px_rgba(220,38,38,0.6)]">
              {text}
            </div>

            {/* Bottom Subtext */}
            <div className="mt-2 text-red-400 font-mono text-[9px] md:text-xs tracking-[0.25em] uppercase text-center border-t border-red-600/40 pt-1.5">
              {subtext}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
