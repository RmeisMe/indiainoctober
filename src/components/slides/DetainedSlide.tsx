'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DetainedSlideData } from '@/types/slide';

interface DetainedSlideProps {
  data: DetainedSlideData;
}

export const DetainedSlide: React.FC<DetainedSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-red-700 text-white select-none overflow-hidden">
      {/* Top Centered BIG Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex justify-center pt-2 sm:pt-4"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {data.title || 'THOSE DETAINED'}
        </h1>
      </motion.div>

      {/* Center Stacked Layout: Claim Above, Fact Below - ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-6xl mx-auto px-4 py-2 w-full space-y-4 sm:space-y-6">
        {/* Popular Claim on Top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full p-6 sm:p-8 md:p-9 rounded-2xl bg-black/85 border-2 border-white/20 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
            <span className="px-4 py-1 rounded-full bg-red-950 border border-red-700 text-red-400 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase font-bold">
              {data.claimHeading || 'POPULAR CLAIM'}
            </span>
            <span className="font-mono text-xs sm:text-sm md:text-base text-red-400 font-semibold uppercase tracking-wider">
              ARTICLE 19(1)(B)
            </span>
          </div>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight leading-snug">
            {data.claimText}
          </p>
        </motion.div>

        {/* Actual Fact Below */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full p-6 sm:p-8 md:p-9 rounded-2xl bg-black/95 border-2 border-white/70 shadow-2xl relative"
        >
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
            <span className="px-4 py-1 rounded-full bg-white text-black font-mono text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase shadow">
              {data.factHeading || 'ACTUAL FACT'}
            </span>
            <span className="font-mono text-xs sm:text-sm md:text-base text-zinc-200 uppercase tracking-wider font-bold">
              SECTION 163 BNSS • ARTICLE 19(3)
            </span>
          </div>
          <p className="font-subheading text-lg sm:text-2xl md:text-3xl lg:text-3xl text-zinc-100 font-normal leading-relaxed">
            {data.factText}
          </p>
        </motion.div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
