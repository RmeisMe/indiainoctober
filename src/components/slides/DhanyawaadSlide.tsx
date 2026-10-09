'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DhanyawaadSlideData } from '@/types/slide';
import { RotateCcw, Home } from 'lucide-react';

interface DhanyawaadSlideProps {
  data: DhanyawaadSlideData;
  onRestart?: () => void;
  onHome?: () => void;
}

export const DhanyawaadSlide: React.FC<DhanyawaadSlideProps> = ({
  data,
  onRestart,
  onHome,
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center p-6 bg-red-700 text-white select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 16 }}
        className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-5xl mx-auto px-4"
      >
        {/* Massive Hindi Title: धन्यवाद */}
        <h1 className="font-heading text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] tracking-tight leading-none text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.65)] uppercase">
          {data.titleHindi || 'धन्यवाद'}
        </h1>

        {/* Action buttons (rounded corners, no sharp edges) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {onRestart && (
            <button
              onClick={onRestart}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-zinc-900 text-white font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-90" />
              <span>Replay Presentation</span>
            </button>
          )}

          {onHome && (
            <button
              onClick={onHome}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Landing</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
