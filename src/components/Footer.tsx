import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-black overflow-visible">
      {/* Chiseled Section Transition Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-10 bg-black -translate-y-[99%] z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 15px, 85% 15px, 80% 0, 0 0)' }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center gap-3">
        
        {/* Branding & Copy */}
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-white text-md tracking-wider">TRIX STUDIO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-riot-red animate-pulse" />
          </div>
          <span className="font-mono text-[10px] text-gray-500 tracking-wider">
            &copy; {new Date().getFullYear()} TRIX STUDIO. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-riot-red text-white rounded-none shadow-lg hover:shadow-riot-red/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none interactive-hover flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};
