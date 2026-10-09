'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StudentOrgsSlideData } from '@/types/slide';

interface StudentOrgsSlideProps {
  data: StudentOrgsSlideData;
}

export const StudentOrgsSlide: React.FC<StudentOrgsSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 md:p-6 pb-16 sm:pb-20 bg-black text-white select-none overflow-hidden">
      {/* Top Header Block: Heading, Subtitle pill & Lead text */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 shrink-0 space-y-1.5"
      >
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-red-600 uppercase drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title}
        </h1>

        {/* Subtitle pill: AISA, AISF, SFI, bsCEM, and others */}
        <div className="inline-flex items-center px-3 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-[11px] sm:text-xs tracking-widest uppercase font-bold shadow">
          <span>{data.subtitle}</span>
        </div>

        {/* Lead text */}
        <p className="text-xs sm:text-sm md:text-sm text-zinc-300 tracking-wide font-normal max-w-3xl">
          {data.leadText}
        </p>
      </motion.div>

      {/* Center Section: Balanced 5-Boxes Layout (3 on top row, 2 on bottom row) */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-1 sm:px-3 py-1 w-full min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 w-full items-stretch">
          {data.items.map((item, idx) => {
            // First 3 items take 1/3 width each (2 cols of 6) on desktop
            // Last 2 items take 1/2 width each (3 cols of 6) on desktop
            const spanClass =
              idx < 3
                ? 'md:col-span-3 lg:col-span-2'
                : idx === 3
                ? 'md:col-span-3 lg:col-span-3'
                : 'md:col-span-6 lg:col-span-3';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + idx * 0.05 }}
                className={`flex flex-col justify-between p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-xl relative overflow-hidden group transition-all ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-zinc-800">
                    <span className="font-heading text-lg sm:text-xl md:text-2xl text-red-600 tracking-tight leading-none">
                      {item.number}
                    </span>
                    {item.title && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-700/60 text-red-400 font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider font-bold">
                        {item.title}
                      </span>
                    )}
                  </div>

                  <p className="font-subheading text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] xl:text-[15px] text-zinc-100 font-normal leading-snug sm:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-1 sm:h-2 shrink-0" />
    </div>
  );
};
