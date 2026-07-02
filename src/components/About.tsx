import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Target, Eye } from 'lucide-react';


export const About: React.FC = () => {
  const stats = [
    { label: 'Founding Year', value: '2026', icon: <Calendar size={20} className="text-riot-red" /> },
    { label: 'Team Size', value: '4 Members', icon: <Users size={20} className="text-yellow-500" /> },
    { label: 'Our Mission', value: 'Empower gameplay through rich narrative and art.', icon: <Target size={20} className="text-riot-red" /> },
    { label: 'Our Vision', value: 'Craft custom stylized game worlds that live forever.', icon: <Eye size={20} className="text-yellow-500" /> }
  ];

  return (
    <section id="about" className="relative pt-[20px] pb-24 sm:pb-32 overflow-visible bg-valorant-light text-valorant-dark">
      {/* Chiseled Section Transition Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-valorant-light -translate-y-[99%] z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 30px, 70% 30px, 65% 0, 0 0)' }}
      />

      {/* Background radial glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-riot-red/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-start w-full">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-riot-red mb-3">01 OVERVIEW</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-valorant-dark uppercase tracking-tight">
            THE STUDIO
          </h2>
          <div className="h-[2px] w-20 bg-riot-red mt-4" />
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-valorant-dark/85 text-sm sm:text-base font-light leading-relaxed">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-valorant-dark mb-6 leading-snug">
              WE BELIEVE GAMEPLAY AND VISUAL STORYTELLING SHOULD ALWAYS COMPLEMENT EACH OTHER.
            </h3>
            <p>
              Founded by passionate game developers and digital creators, our studio operates as a boutique workshop where gameplay systems, atmospheric sound design, and hand-painted art assets are forged in close dialogue.
            </p>
            <p>
              We avoid corporate templating and mass-production structures. Every shader, character rig, script framework, and storyline choice we make is driven by our commitment to raw artistic expression and high-fidelity interaction.
            </p>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                key={stat.label}
                className="riot-card p-5 bg-valorant-dark text-white border-none flex flex-col gap-4 justify-between"
              >
                <div className="p-3 bg-black/40 border border-white/10 shrink-0 w-fit">
                  {stat.icon}
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-white font-medium text-sm leading-snug block">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
