import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';


interface GameProject {
  title: string;
  genre: string;
  description: string;
  engine: string;
  teamSize: string;
  period: string;
  coverUrl: string;
  videoUrl: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  steamUrl?: string;
  itchUrl?: string;
  status: string;
  platforms: string[];
  showcaseId: string;
}

export const Projects: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState<string | null>(null);

  const projects: GameProject[] = [
    {
      title: 'Lone Scavenger',
      genre: '2D Endless Runner / Action Boss Battles',
      description: 'An action-packed 2D endless runner set in a brutal post-apocalyptic wasteland. Ride Verso\'s trusty bike into Galvanizers gang territory, dodge deadly obstacles, survive relentless chases, and defeat weaponized mechanical bosses to reclaim Mad Max\'s iconic vehicle.',
      engine: 'Godot',
      teamSize: '6 Members',
      period: '2 Months',
      coverUrl: '/images/project1 copy.png',
      videoUrl: '/images/project1.mp4',
      youtubeUrl: 'https://www.youtube.com/watch?si=xGAhZcoN7CPmQHOd&v=Q2yGKpo7Cyg&feature=youtu.be',
      itchUrl: 'https://xpnhi023gmailcom.itch.io/lone-scavenger',
      status: 'Released',
      platforms: ['PC'],
      showcaseId: 'lone-scavenger',
    },
    {
      title: 'Diary: White',
      genre: '2D Psychological Horror',
      description: 'A haunting 2D psychological horror game. Venture into a ruined school and a gloomy house to hunt for clues, solve mysteries, escape shadow entities, and make life-or-death choices to determine your fate.',
      engine: 'Godot',
      teamSize: '5 Members',
      period: 'Jan 2026 - Present',
      coverUrl: '/images/project4.png',
      videoUrl: '/images/project4.mp4',
      facebookUrl: 'https://www.facebook.com/share/1JWNf4AZTL/',
      steamUrl: 'https://store.steampowered.com/app/4783030/Diary_White/',
      status: 'In Development',
      platforms: ['PC', 'Steam'],
      showcaseId: 'diary-white',
    },
  ];

  const loneScavengerImages = [
    '01.gif', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '6_.gif',
    '7.png', '8.png', '9.png', '9_.gif', '10.png', '11.png', '12.png', '13.png',
    '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png',
    '22.png', '22_.gif', '23.png', '24.png'
  ];

  const diaryWhiteImages = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png',
    '9.png', '10.png', '11.png', '11_.png', '12.png'
  ];

  return (
    <section id="projects" className="pt-[20px] pb-24 sm:pb-32 relative overflow-visible bg-valorant-dark">
      {/* Chiseled Section Transition Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-valorant-dark -translate-y-[99%] z-20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 30px, 70% 30px, 65% 0, 0 0)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-start w-full">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow-500 mb-3">03 SELECTED MISSIONS</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            SELECTED WORK
          </h2>
          <div className="h-[2px] w-20 bg-yellow-500 mt-4" />
        </div>

        {/* Project Card List */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={idx} 
              onShowcaseClick={(id) => setActiveShowcase(id)}
            />
          ))}
        </div>
      </div>

      {/* Showcase Sub-page Overlay */}
      {activeShowcase && (
        <div className="fixed inset-0 bg-valorant-dark z-50 overflow-y-auto">
          {/* Close Button */}
          <button 
            onClick={() => setActiveShowcase(null)}
            className="fixed top-6 right-6 p-3 bg-black/60 hover:bg-riot-red/90 border border-white/10 text-white transition-all cursor-none interactive-hover rounded-none z-[60] backdrop-blur-sm"
            aria-label="Close Showcase"
          >
            <X size={24} />
          </button>

          {activeShowcase === 'lone-scavenger' ? (
            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
              <div className="w-full flex flex-col">
                {loneScavengerImages.map((img) => (
                  <img
                    key={img}
                    src={`${import.meta.env.BASE_URL}images/LONE SCAVENGER/${img}`}
                    alt={img}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
              <div className="w-full flex flex-col">
                {diaryWhiteImages.map((img) => (
                  <img
                    key={img}
                    src={`${import.meta.env.BASE_URL}images/DIARY_ WHITE/${img}`}
                    alt={img}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

/* Subcomponent to manage individual hover states cleanly */
const ProjectCard: React.FC<{ 
  project: GameProject; 
  index: number; 
  onShowcaseClick: (id: string) => void;
}> = ({ project, index, onShowcaseClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log('Video play deferred:', e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Media Column (Left / Right based on index) */}
      <div
        className={`lg:col-span-7 relative aspect-video overflow-hidden riot-card border border-white/5 group shadow-2xl transition-transform duration-500 hover:scale-[1.01] ${
          index % 2 === 1 ? 'lg:order-last' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Status Tag */}
        <div className="absolute top-4 left-4 z-30 px-3 py-1 bg-riot-dark/90 border border-white/10 rounded-none font-mono text-[9px] uppercase tracking-widest text-riot-red backdrop-blur-md">
          {project.status}
        </div>

        {/* Platforms Badge */}
        <div className="absolute bottom-4 left-4 z-30 flex gap-2">
          {project.platforms.map((p) => (
            <span
              key={p}
              className="px-2 py-0.5 bg-black/70 border border-white/5 rounded-none font-mono text-[8px] tracking-wider text-gray-400"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Cover Image */}
        <img
          src={`${import.meta.env.BASE_URL}${project.coverUrl.slice(1)}`}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-10 ${
            isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Loop Gameplay Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loop
          muted
          playsInline
          src={`${import.meta.env.BASE_URL}${project.videoUrl.slice(1)}`}
        />

        {/* Play Icon Hint Overlay */}
        <div className={`absolute inset-0 z-20 bg-black/20 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="p-3 bg-riot-dark/95 border border-white/15 rounded-none text-riot-red backdrop-blur">
            <PlayCircle size={24} className="animate-pulse" />
          </div>
        </div>
      </div>

      {/* Details Column */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        {/* Genre & Meta info */}
        <span className="font-mono text-xs text-riot-red uppercase tracking-[0.15em] mb-2">
          {project.genre}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Core Attributes */}
        <div className="grid grid-cols-3 gap-4 pb-6 border-b border-white/5 mb-6 text-xs font-mono">
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Engine</span>
            <span className="text-white block font-medium">{project.engine}</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Team Size</span>
            <span className="text-white block font-medium">{project.teamSize}</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider mb-1">Period</span>
            <span className="text-white block font-medium">{project.period}</span>
          </div>
        </div>

        {/* Action Buttons & Showcase */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onShowcaseClick(project.showcaseId)}
            className="px-6 py-2.5 bg-yellow-500 text-black hover:bg-white hover:text-black border border-transparent transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold cursor-none interactive-hover active:scale-95"
          >
            Showcase
          </button>

          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500/10 transition-all duration-300 font-mono text-xs uppercase tracking-widest font-medium cursor-none interactive-hover"
            >
              YouTube
            </a>
          )}

          {project.itchUrl && (
            <a
              href={project.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500/10 transition-all duration-300 font-mono text-xs uppercase tracking-widest font-medium cursor-none interactive-hover"
            >
              Itch.io
            </a>
          )}

          {project.facebookUrl && (
            <a
              href={project.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500/10 transition-all duration-300 font-mono text-xs uppercase tracking-widest font-medium cursor-none interactive-hover"
            >
              Facebook
            </a>
          )}

          {project.steamUrl && (
            <a
              href={project.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500/10 transition-all duration-300 font-mono text-xs uppercase tracking-widest font-medium cursor-none interactive-hover"
            >
              Steam
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
