'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Volume2, VolumeX, Home } from 'lucide-react';

interface TaskbarProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onExitPresentation: () => void;
  isVisible: boolean;
  slideTheme?: 'black' | 'red';
}

export const Taskbar: React.FC<TaskbarProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  canPrev,
  canNext,
  isFullscreen,
  onToggleFullscreen,
  soundEnabled,
  onToggleSound,
  onExitPresentation,
  isVisible,
  slideTheme = 'black',
}) => {
  const isRed = slideTheme === 'red';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto select-none"
        >
          <div
            className={`flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-md shadow-2xl border transition-colors ${
              isRed
                ? 'bg-black/80 border-white/20 text-white'
                : 'bg-zinc-950/90 border-zinc-800 text-zinc-100'
            }`}
          >
            {/* Exit / Home Button */}
            <button
              onClick={onExitPresentation}
              title="Return to Landing (Esc)"
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:scale-95 transition-all text-zinc-400 hover:text-white"
            >
              <Home className="w-4 h-4" />
            </button>

            <div className="h-5 w-[1px] bg-white/15" />

            {/* Previous Button */}
            <button
              onClick={onPrev}
              disabled={!canPrev}
              title="Previous Slide (← / Backspace)"
              className={`p-2 sm:p-2.5 rounded-full transition-all flex items-center justify-center ${
                canPrev
                  ? 'hover:bg-white/15 active:scale-90 text-white cursor-pointer'
                  : 'opacity-30 cursor-not-allowed text-zinc-500'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Slide Indicator */}
            <div className="flex items-center gap-1.5 px-2 font-mono text-xs sm:text-sm font-bold tracking-widest">
              <span className="text-red-500">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-400">
                {String(totalSlides).padStart(2, '0')}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={onNext}
              disabled={!canNext}
              title="Next Slide (→ / Space)"
              className={`p-2 sm:p-2.5 rounded-full transition-all flex items-center justify-center ${
                canNext
                  ? 'bg-red-600 hover:bg-red-500 active:scale-90 text-white shadow-lg shadow-red-900/40 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed text-zinc-500'
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="h-5 w-[1px] bg-white/15" />

            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:scale-95 transition-all text-zinc-400 hover:text-white"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4 text-red-400" />
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={onToggleFullscreen}
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 active:scale-95 transition-all text-zinc-400 hover:text-white"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
