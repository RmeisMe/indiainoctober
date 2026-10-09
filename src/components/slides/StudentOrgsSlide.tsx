'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StudentOrgsSlideData } from '@/types/slide';

interface StudentOrgsSlideProps {
  data: StudentOrgsSlideData;
}

export const StudentOrgsSlide: React.FC<StudentOrgsSlideProps> = ({ data }) => {
  const isFiveItems = data.items.length === 5;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-black text-white select-none overflow-hidden">
      {/* Top Header Block: Heading & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-1 space-y-2"
      >
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-red-600 uppercase drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.title}
        </h1>

        {/* Subtitle in small text just below heading */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase font-bold shadow">
          <span>{data.subtitle}</span>
        </div>
      </motion.div>

      {/* Center Section: Lead-in Text + Boxes Grid - ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 py-1 w-full">
        {/* Big lead text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-center mb-3 sm:mb-4"
        >
          <span className="font-heading text-lg sm:text-2xl md:text-3xl text-zinc-100 uppercase tracking-wide">
            {data.leadText}
          </span>
        </motion.div>

        {/* Boxes Grid (Responsive for 5 items, enlarged) */}
        <div
          className={`grid gap-3 sm:gap-4.5 w-full items-stretch ${
            isFiveItems
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + idx * 0.06 }}
              className={`flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-2xl bg-zinc-950 border-2 border-zinc-800 hover:border-red-900 shadow-2xl relative overflow-hidden group transition-all ${
                isFiveItems && idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5 pb-2 border-b border-zinc-800">
                  <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-red-600 tracking-tight leading-none">
                    {item.number}
                  </span>
                  {item.title && (
                    <span className="px-3 py-0.5 rounded-full bg-red-950/80 border border-red-700/60 text-red-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                      {item.title}
                    </span>
                  )}
                </div>

                <p className="font-subheading text-xs sm:text-sm md:text-base lg:text-lg text-zinc-100 font-normal leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-3 sm:h-6" />
    </div>
  );
};
