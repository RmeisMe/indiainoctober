'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PeacefulProtestsSlideData } from '@/types/slide';

interface PeacefulProtestsSlideProps {
  data: PeacefulProtestsSlideData;
}

export const PeacefulProtestsSlide: React.FC<PeacefulProtestsSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-12 bg-black text-white select-none overflow-hidden">
      {/* Top Centered BIG Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex justify-center pt-1 sm:pt-2"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-red-600 uppercase text-center drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title || '"PEACEFUL" PROTESTS'}
        </h1>
      </motion.div>

      {/* Center 6 Boxes Grid - ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 py-2 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 w-full items-stretch">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + idx * 0.05 }}
              className="flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-2xl relative overflow-hidden group transition-all"
            >
              <div>
                {/* Number & Badge */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-zinc-800">
                  <span className="font-heading text-3xl sm:text-4xl md:text-5xl text-red-600 tracking-tight leading-none">
                    {item.number}
                  </span>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-red-400 font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Card Text Content - BIGGER */}
                <p className="font-subheading text-sm sm:text-base md:text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-4 sm:h-8" />
    </div>
  );
};
