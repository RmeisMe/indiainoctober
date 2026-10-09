'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StudentOrgsSlideData } from '@/types/slide';

interface StudentOrgsSlideProps {
  data: StudentOrgsSlideData;
}

export const StudentOrgsSlide: React.FC<StudentOrgsSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 md:p-7 pb-16 sm:pb-20 bg-black text-white select-none overflow-hidden">
      {/* Top Header Block: Heading, Subtitle pill & Lead text */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 shrink-0 space-y-2"
      >
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-red-600 uppercase drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title}
        </h1>

        {/* Subtitle pill: AISA, AISF, SFI, bsCEM, and others */}
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold shadow">
          <span>{data.subtitle}</span>
        </div>

        {/* Lead text in presentation font (Anton, uppercase) */}
        <p className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-200 uppercase tracking-wider max-w-5xl">
          {data.leadText}
        </p>
      </motion.div>

      {/* Center Section: Balanced 5-Boxes Layout (3 on top row, 2 on bottom row) */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 py-1 w-full min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 md:gap-4.5 w-full items-stretch">
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
                className={`flex flex-col justify-between p-4 sm:p-4.5 md:p-5 rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-xl relative overflow-hidden group transition-all ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5 pb-2 border-b border-zinc-800">
                    <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-red-600 tracking-tight leading-none">
                      {item.number}
                    </span>
                    {item.title && (
                      <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-red-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider font-bold">
                        {item.title}
                      </span>
                    )}
                  </div>

                  <p className="font-subheading text-xs sm:text-sm md:text-[15px] lg:text-base xl:text-[17px] text-zinc-100 font-normal leading-relaxed">
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
