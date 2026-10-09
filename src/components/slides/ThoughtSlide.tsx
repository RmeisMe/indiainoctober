'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThoughtSlideData } from '@/types/slide';

interface ThoughtSlideProps {
  data: ThoughtSlideData;
}

export const ThoughtSlide: React.FC<ThoughtSlideProps> = ({ data }) => {
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
          {data.title || 'THOUGHT OF THE DAY'}
        </h1>
      </motion.div>

      {/* Center Multiline Thought - Entire Thing Enclosed in Quotes & ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4 py-4 w-full">
        {data.lines && data.lines.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6 sm:space-y-8 md:space-y-10 w-full max-w-5xl mx-auto"
          >
            {/* Line 1 - Opens the quote */}
            <p className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100 uppercase tracking-tight leading-snug">
              “The biggest lie that we have been told is that criticism only and only involves questioning.{' '}
              <span className="text-red-500 font-black">That is FALSE.</span>
            </p>

            {/* Line 2 */}
            <p className="font-subheading text-lg sm:text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
              The truth is that one of the most vital parts of criticism, alongside questioning, is
            </p>

            {/* Line 3 - BOLD, ENLARGED & Closes the quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="pt-2 sm:pt-4"
            >
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-red-600 font-black uppercase tracking-tight leading-none drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                TO HAVE THE GUTS TO DIGEST AN ANSWER.”
              </h2>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] text-zinc-100 uppercase drop-shadow-md">
              “{data.quote?.replace(/^["“]|["”]$/g, '')}”
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
