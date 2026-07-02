import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  scaleClass: string;
  portfolioUrl: string;
}

export const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: 'ANH THU',
      role: 'Artist',
      imageUrl: '/images/Thu.png',
      scaleClass: 'scale-[1.2]',
      portfolioUrl: 'https://www.behance.net/thbi45',
    },
    {
      name: 'NGOC LINH',
      role: 'Artist',
      imageUrl: '/images/Lyk.png',
      scaleClass: 'scale-[1.0]',
      portfolioUrl: 'https://www.behance.net/lyknghiem',
    },
    {
      name: 'QUANG DUC',
      role: 'Leader, Dev',
      imageUrl: '/images/Duc.png',
      scaleClass: 'scale-[1.2]',
      portfolioUrl: 'https://ducquang65.github.io/Duc-Quang-Portfolio/',
    },
    {
      name: 'YEN NHI',
      role: 'Dev',
      imageUrl: '/images/Nhi.png',
      scaleClass: 'scale-[1.25]',
      portfolioUrl: 'https://pnidev.github.io/Nhi-Pham-portfolio/',
    },
  ];

  return (
    <section id="team" className="pt-[20px] pb-24 sm:pb-32 relative overflow-visible bg-riot-red text-white">
      {/* Chiseled Section Transition Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-riot-red -translate-y-[99%] z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 35% 0, 30% 30px, 0 30px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-end text-right w-full">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/80 mb-3">02 CREATIVES</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            MEET THE TEAM
          </h2>
          <div className="h-[2px] w-20 bg-white mt-4 self-end" />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <motion.a
              href={member.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              key={member.name}
              className="riot-card p-5 bg-[#050507] border border-white/15 hover:border-[#eeff00] relative flex flex-col justify-between group overflow-hidden transition-all duration-300 shadow-2xl block cursor-none interactive-hover"
            >
              {/* Scanline pattern */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none z-10"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              />

              <div>
                {/* Header status info */}
                <div className="flex justify-between items-center mb-4 z-20 relative">
                  <span className="font-mono text-[9px] uppercase tracking-widest border px-2 py-0.5 text-[#eeff00] border-[#eeff00]/30 bg-[#eeff00]/5">
                    FPT STUDENT
                  </span>
                </div>

                {/* Avatar Portrait with Corner Accents */}
                <div className="relative aspect-square overflow-hidden bg-black/40 border border-white/5 mb-4 group-hover:border-white/15 transition-colors flex items-end justify-center z-10">
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />
                  
                  <img
                    src={`${import.meta.env.BASE_URL}${member.imageUrl.slice(1)}`}
                    alt={member.name}
                    className={`w-full h-full ${member.scaleClass} object-contain transition-transform duration-500 group-hover:scale-[1.3]`}
                  />
                </div>

                {/* Name & Role */}
                <div className="space-y-2 z-20 relative">
                  <h3 className="font-display text-lg sm:text-xl font-black text-white uppercase tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm tracking-wider uppercase font-extrabold text-[#eeff00]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Footer university stamp */}
              <div className="mt-6 pt-3 border-t border-white/5 flex flex-col justify-center items-center gap-1 z-20 relative">
                <span className="font-display font-black text-xs sm:text-sm tracking-widest text-[#eeff00] select-none">
                  FPT UNIVERSITY
                </span>
                <span className="font-mono text-[8px] uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors animate-pulse">
                  [ CLICK TO VIEW PORTFOLIO ]
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
