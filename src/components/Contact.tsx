import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pt-[20px] pb-24 sm:pb-32 overflow-visible bg-valorant-light text-valorant-dark">
      {/* Chiseled Section Transition Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-valorant-light -translate-y-[99%] z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 35% 0, 30% 30px, 0 30px)' }}
      />

      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-riot-red/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-end text-right w-full">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-riot-red mb-3">04 SECURE CHANNEL</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-valorant-dark uppercase tracking-tight">
            WORK WITH US
          </h2>
          <div className="h-[2px] w-20 bg-riot-red mt-4 self-end" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Email */}
          <div className="riot-card p-8 border border-black/10 bg-valorant-dark relative flex flex-col items-center text-center group interactive-hover">
            <div className="p-4 bg-white/5 border border-white/10 rounded-none text-riot-red mb-6">
              <Mail size={24} />
            </div>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">Email Address</span>
            <a href="mailto:aanhthuu2005@gmail.com" className="text-white hover:text-riot-red transition-colors text-sm font-medium cursor-none interactive-hover">
              aanhthuu2005@gmail.com
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="riot-card p-8 border border-black/10 bg-valorant-dark relative flex flex-col items-center text-center group interactive-hover">
            <div className="p-4 bg-white/5 border border-white/10 rounded-none text-riot-red mb-6">
              <Phone size={24} />
            </div>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">Phone Line</span>
            <a href="tel:0348293334" className="text-white hover:text-riot-red transition-colors text-sm font-medium cursor-none interactive-hover">
              0348293334
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="riot-card p-8 border border-black/10 bg-valorant-dark relative flex flex-col items-center text-center group interactive-hover">
            <div className="p-4 bg-white/5 border border-white/10 rounded-none text-riot-red mb-6">
              <MapPin size={24} />
            </div>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">Base Coordinate</span>
            <span className="text-white text-sm font-medium">
              TPHCM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
