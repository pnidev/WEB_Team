import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1800; // Total duration in ms
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step * (Math.random() * 1.5 + 0.3);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800); // Allow exit animations to complete
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 bg-riot-dark z-9999 flex flex-col items-center justify-center select-none"
        >
          {/* Scanline & ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-500/5 to-transparent pointer-events-none animate-pulse-glow" />

          {/* Intro Text / Logo Container */}
          <div className="relative flex flex-col items-center max-w-md w-full px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative mb-[5px]"
            >
              {/* Abstract Logo */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-yellow-500/40 rotate-45 animate-spin-slow" />
                <div className="absolute inset-2 border border-white/20 -rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <span className="font-display text-3xl font-extrabold text-white tracking-widest relative z-10">TS</span>
              </div>
            </motion.div>

            {/* Studio Logo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-[5px] flex justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo_studio.png`}
                alt="Trix Studio"
                className="h-64 w-auto object-contain"
              />
            </motion.div>

            {/* Progress bar container */}
            <div className="w-64 h-[3px] bg-white/5 overflow-hidden relative mb-[5px]">
              <motion.div
                className="h-full bg-yellow-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-mono text-xs tracking-[0.2em] text-yellow-500 uppercase mb-12 text-center"
            >
              Interactive
            </motion.p>

            {/* Percentage Indicator */}
            <div className="flex justify-between w-64 font-mono text-[10px] text-gray-500 tracking-wider">
              <span>SYSTEM BOOT</span>
              <span>{Math.floor(progress).toString().padStart(3, '0')}%</span>
            </div>
          </div>

          {/* Sound / Trailer prompt warning (visual decoration) */}
          <div className="absolute bottom-10 font-mono text-[9px] text-gray-600 tracking-[0.2em] uppercase">
            Initialize Core Engine v4.0.2 // GPU Render Active
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
