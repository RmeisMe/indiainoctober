'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section163SlideData } from '@/types/slide';

interface Section163SlideProps {
  data: Section163SlideData;
}

export const Section163Slide: React.FC<Section163SlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-black text-white select-none overflow-hidden">
      {/* Top Centered BIG Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex justify-center pt-2 sm:pt-4"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-red-600 uppercase text-center drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title || 'WHY SECTION 163?'}
        </h1>
      </motion.div>

      {/* Center 3 Reasons Layout - ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 w-full items-stretch">
          {data.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-7 md:p-8 rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-2xl transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="font-mono text-sm sm:text-base font-bold text-red-500 tracking-wider uppercase">
                    {reason.heading || `REASON #0${idx + 1}`}
                  </span>
                </div>
                <p className="font-subheading text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-100 leading-relaxed font-normal">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
