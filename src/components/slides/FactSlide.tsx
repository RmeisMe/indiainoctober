'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FactSlideData } from '@/types/slide';

interface FactSlideProps {
  data: FactSlideData;
}

export const FactSlide: React.FC<FactSlideProps> = ({ data }) => {
  const isLongText = data.fact.length > 180;
  const isMediumText = data.fact.length > 90;

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
          {data.badge || 'FACT'}
        </h1>
      </motion.div>

      {/* Center Fact Statement */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4 py-2 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-4 sm:space-y-6 w-full"
        >
          {/* Main Statement */}
          <p
            className={`font-heading tracking-tight text-white uppercase drop-shadow-md mx-auto ${
              isLongText
                ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-5xl'
                : isMediumText
                ? 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-5xl'
                : 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] max-w-5xl'
            }`}
          >
            {data.fact}
          </p>

          {/* Stats Breakdown Grid - ENLARGED */}
          {data.statsBreakdown && data.statsBreakdown.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto pt-3"
            >
              {data.statsBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-black/85 border-2 border-white/30 backdrop-blur-md shadow-2xl"
                >
                  <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                    {item.figure}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-zinc-200 uppercase tracking-wider text-center mt-2 font-bold">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Subpoints if available */}
          {data.subpoints && data.subpoints.length > 0 && (
            <div className="space-y-2 max-w-3xl mx-auto text-left pt-2">
              {data.subpoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 font-subheading text-base sm:text-xl md:text-2xl text-zinc-100"
                >
                  <span className="text-white font-bold">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          )}

          {/* Source Citation */}
          {data.source && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-zinc-200 text-xs sm:text-sm md:text-base tracking-wider uppercase opacity-90 pt-1"
            >
              SOURCE: {data.source}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
