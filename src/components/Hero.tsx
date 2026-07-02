import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#08080c]/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent z-10 pointer-events-none" />
        <img
          className="w-full h-full object-cover animate-slow-zoom"
          src="/images/bg.png"
          alt="Trix Studio Background"
        />
      </div>

      {/* Grid Scanline Overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-25 mt-10">

        {/* Cinematic Static Heading */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 leading-none tracking-tight uppercase select-none whitespace-nowrap"
          >
            TRIX STUDIO
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-gray-400 text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed mb-12"
        >
          We craft memorable games through code and art, creating immersive experiences that transport players to the edge of imagination.
        </motion.p>

        {/* Small Navigation Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex gap-4 justify-center items-center mb-16"
        >
          {/* About Us Box */}
          <button
            onClick={() => handleScroll('#about')}
            className="px-6 py-3 bg-yellow-500 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-none interactive-hover active:scale-95"
            style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
          >
            About Us
          </button>

          {/* Our Projects Box */}
          <button
            onClick={() => handleScroll('#projects')}
            className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-none interactive-hover active:scale-95"
            style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
          >
            Our Projects
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-gray-500 uppercase select-none cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-riot-red" />
        </motion.div>
      </motion.div>
    </section>
  );
};
