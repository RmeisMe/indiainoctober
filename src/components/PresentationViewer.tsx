'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SlideData } from '@/types/slide';
import { Taskbar } from './Taskbar';
import { ClaimSlide } from './slides/ClaimSlide';
import { FactSlide } from './slides/FactSlide';
import { DetainedSlide } from './slides/DetainedSlide';
import { Section163Slide } from './slides/Section163Slide';
import { PeacefulProtestsSlide } from './slides/PeacefulProtestsSlide';
import { StudentOrgsSlide } from './slides/StudentOrgsSlide';
import { QuestionSlide } from './slides/QuestionSlide';
import { WordOfTheDaySlide } from './slides/WordOfTheDaySlide';
import { ActualWordSlide } from './slides/ActualWordSlide';
import { ThoughtSlide } from './slides/ThoughtSlide';
import { DhanyawaadSlide } from './slides/DhanyawaadSlide';
import { audio } from '@/utils/audio';

interface PresentationViewerProps {
  slides: SlideData[];
  onExit: () => void;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '4%' : '-4%',
    opacity: 0,
    scale: 0.985,
    filter: 'blur(4px)',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32 },
      opacity: { duration: 0.35, ease: 'easeOut' },
      scale: { duration: 0.35, ease: 'easeOut' },
      filter: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '4%' : '-4%',
    opacity: 0,
    scale: 0.985,
    filter: 'blur(4px)',
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32 },
      opacity: { duration: 0.25, ease: 'easeIn' },
      scale: { duration: 0.25 },
    },
  }),
};

export const PresentationViewer: React.FC<PresentationViewerProps> = ({
  slides,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [stampedMap, setStampedMap] = useState<Record<string, boolean>>({});
  const [isTaskbarVisible, setIsTaskbarVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  const autoHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const currentSlide = slides[currentIndex];

  // Fullscreen helper
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      // Ignored if browser prevents fullscreen
    }
  }, []);

  // Update fullscreen state on native change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Taskbar auto-hide logic (5 seconds untouched)
  const resetAutoHideTimer = useCallback(() => {
    setIsTaskbarVisible(true);
    if (autoHideTimeoutRef.current) {
      clearTimeout(autoHideTimeoutRef.current);
    }
    autoHideTimeoutRef.current = setTimeout(() => {
      setIsTaskbarVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    resetAutoHideTimer();

    const handleUserInteraction = () => {
      resetAutoHideTimer();
    };

    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('mousedown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      if (autoHideTimeoutRef.current) {
        clearTimeout(autoHideTimeoutRef.current);
      }
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('mousedown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [resetAutoHideTimer]);

  // Stamp trigger with physical impact & audio
  const triggerStamp = useCallback((slideId: string) => {
    setStampedMap((prev) => ({ ...prev, [slideId]: true }));
    audio.playStamp();
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  }, []);

  // Slide navigation
  const handleNext = useCallback(() => {
    if (!currentSlide) return;

    // If on a claim slide and not yet stamped, stamp it first!
    if (currentSlide.type === 'claim' && !stampedMap[currentSlide.id]) {
      triggerStamp(currentSlide.id);
      return;
    }

    if (currentIndex < slides.length - 1) {
      audio.playClick();
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentSlide, currentIndex, slides.length, stampedMap, triggerStamp]);

  const handlePrev = useCallback(() => {
    if (!currentSlide) return;

    // If on a claim slide and the stamp is active, reverse the stamp animation!
    if (currentSlide.type === 'claim' && stampedMap[currentSlide.id]) {
      audio.playClick();
      setStampedMap((prev) => ({ ...prev, [currentSlide.id]: false }));
      return;
    }

    if (currentIndex > 0) {
      audio.playClick();
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentSlide, currentIndex, stampedMap]);

  const handleRestart = useCallback(() => {
    audio.playClick();
    setDirection(-1);
    setCurrentIndex(0);
    setStampedMap({});
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onExit]);

  // Touch Swipe navigation for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Ensure horizontal swipe
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Sound toggle
  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audio.enabled = nextState;
  };

  // Render current slide component
  const renderSlideContent = () => {
    if (!currentSlide) return null;

    switch (currentSlide.type) {
      case 'claim':
        return (
          <ClaimSlide
            data={currentSlide}
            isStamped={!!stampedMap[currentSlide.id]}
            onTriggerStamp={() => triggerStamp(currentSlide.id)}
          />
        );
      case 'fact':
        return <FactSlide data={currentSlide} />;
      case 'detained':
        return <DetainedSlide data={currentSlide} />;
      case 'section-163':
        return <Section163Slide data={currentSlide} />;
      case 'peaceful-protests':
        return <PeacefulProtestsSlide data={currentSlide} />;
      case 'question':
        return <QuestionSlide data={currentSlide} />;
      case 'student-orgs':
        return <StudentOrgsSlide data={currentSlide} />;
      case 'word-of-the-day':
        return <WordOfTheDaySlide data={currentSlide} />;
      case 'actual-word':
        return <ActualWordSlide data={currentSlide} />;
      case 'thought':
        return <ThoughtSlide data={currentSlide} />;
      case 'dhanyawaad':
        return (
          <DhanyawaadSlide
            data={currentSlide}
            onRestart={handleRestart}
            onHome={onExit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative w-screen h-screen overflow-hidden select-none bg-black ${
        isShaking ? 'shake-screen' : ''
      }`}
    >
      {/* Slide transition container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide?.id || currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full"
        >
          {renderSlideContent()}
        </motion.div>
      </AnimatePresence>

      {/* Floating auto-hiding taskbar */}
      <Taskbar
        currentIndex={currentIndex}
        totalSlides={slides.length}
        onPrev={handlePrev}
        onNext={handleNext}
        canPrev={currentIndex > 0 || (currentSlide?.type === 'claim' && !!stampedMap[currentSlide.id])}
        canNext={currentIndex < slides.length - 1}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onExitPresentation={onExit}
        isVisible={isTaskbarVisible}
        slideTheme={currentSlide?.theme}
      />
    </div>
  );
};
