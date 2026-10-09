'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WordSlideData } from '@/types/slide';

interface WordOfTheDaySlideProps {
  data: WordSlideData;
}

export const WordOfTheDaySlide: React.FC<WordOfTheDaySlideProps> = ({ data }) => {
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
          {data.title || 'WORD OF THE DAY'}
        </h1>
      </motion.div>

      {/* Center Word & Definitions - ENLARGED */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-5xl mx-auto px-4 py-4 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="w-full flex flex-col items-center"
        >
          {/* Main Word */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-6 justify-center border-b-2 border-zinc-800 pb-5 mb-8">
            <h2 className="font-heading text-7xl sm:text-9xl md:text-[10rem] lg:text-[11rem] tracking-tight text-white uppercase leading-none drop-shadow-xl">
              {data.word}
            </h2>
            {(data.phonetic || data.partOfSpeech) && (
              <div className="font-mono text-zinc-400 text-base sm:text-xl md:text-2xl tracking-wider flex items-center gap-3">
                {data.phonetic && <span className="text-red-500 font-bold">{data.phonetic}</span>}
                {data.partOfSpeech && <span className="italic text-zinc-400">{data.partOfSpeech}</span>}
              </div>
            )}
          </div>

          {/* Definition Box - BIGGER */}
          <div className="space-y-4 max-w-4xl w-full text-left">
            {data.definitions.map((def, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + idx * 0.1 }}
                className="p-7 sm:p-9 md:p-10 rounded-3xl bg-zinc-950 border-2 border-zinc-800 shadow-2xl"
              >
                <p className="font-subheading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-100 leading-relaxed font-normal">
                  {def}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />
    </div>
  );
};
