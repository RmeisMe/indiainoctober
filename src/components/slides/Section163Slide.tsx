'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section163SlideData } from '@/types/slide';

interface Section163SlideProps {
  data: Section163SlideData;
}

export const Section163Slide: React.FC<Section163SlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 pb-16 sm:pb-20 bg-black text-white select-none overflow-hidden">
      {/* Top Centered Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full flex justify-center pt-2 sm:pt-3 shrink-0"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-red-600 uppercase text-center drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title || 'WHY SECTION 163?'}
        </h1>
      </motion.div>

      {/* Center 3 Reasons Layout - Substantial & Screen-Fitted */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 py-2 w-full min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full items-stretch">
          {data.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + idx * 0.08 }}
              className="flex flex-col justify-between p-5 sm:p-6 md:p-7 rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-2xl transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                  <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-red-500 tracking-wider uppercase">
                    {reason.heading || `REASON #0${idx + 1}`}
                  </span>
                </div>
                <p className="font-subheading text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl text-zinc-100 leading-relaxed font-normal">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-2 sm:h-4 shrink-0" />
    </div>
  );
};
