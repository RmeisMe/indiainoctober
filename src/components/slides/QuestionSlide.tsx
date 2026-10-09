'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QuestionSlideData } from '@/types/slide';

interface QuestionSlideProps {
  data: QuestionSlideData;
}

export const QuestionSlide: React.FC<QuestionSlideProps> = ({ data }) => {
  const isLongQuestion = data.question.length > 100;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-red-800 text-white select-none overflow-hidden">
      {/* Top Centered BIG Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex justify-center pt-2 sm:pt-4"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          QUESTION
        </h1>
      </motion.div>

      {/* Center Question */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 py-4 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-6 w-full"
        >
          <h2
            className={`font-heading tracking-tight text-white uppercase drop-shadow-md mx-auto ${
              isLongQuestion
                ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug max-w-4xl'
                : 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] max-w-5xl'
            }`}
          >
            {data.question}
          </h2>

          {data.context && (
            <p className="font-mono text-red-200 text-xs sm:text-sm md:text-base tracking-widest uppercase pt-2">
              [ {data.context} ]
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
