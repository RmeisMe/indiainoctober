'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClaimSlideData } from '@/types/slide';
import { BrutalStamp } from '../BrutalStamp';

interface ClaimSlideProps {
  data: ClaimSlideData;
  isStamped: boolean;
  onTriggerStamp?: () => void;
}

export const ClaimSlide: React.FC<ClaimSlideProps> = ({
  data,
  isStamped,
  onTriggerStamp,
}) => {
  const isLongText = data.claim.length > 120;

  return (
    <div
      onClick={!isStamped ? onTriggerStamp : undefined}
      className={`relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-black text-white select-none ${
        !isStamped ? 'cursor-pointer' : ''
      }`}
    >
      {/* Top Centered BIG Visible Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full flex justify-center pt-2 sm:pt-4"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-red-600 uppercase text-center drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          {data.badge || 'CLAIM'}
        </h1>
      </motion.div>

      {/* Middle Claim Statement */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6"
        >
          <h2
            className={`font-heading tracking-tight text-zinc-100 uppercase drop-shadow-lg ${
              isLongText
                ? 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight'
                : 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]'
            }`}
          >
            {data.claim}
          </h2>

          {data.subtext && (
            <p className="font-subheading text-zinc-400 text-sm sm:text-lg md:text-xl tracking-wide max-w-2xl mx-auto pt-2">
              {data.subtext}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom spacer for clean balance */}
      <div className="h-10 sm:h-14" />

      {/* Stamp Animation Overlay */}
      <BrutalStamp
        isVisible={isStamped}
        text={data.stampText || 'MISLEADING'}
        subtext="OFFICIAL RECORD"
      />
    </div>
  );
};
