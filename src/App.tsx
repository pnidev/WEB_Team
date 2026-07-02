import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleBg } from './components/ParticleBg';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Cinematic Studio Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Page Layout Wrapper */}
      {!isLoading && (
        <div className="relative min-h-screen text-gray-300 select-text overflow-hidden">
          
          {/* Subtle noise grid texture overlay for cinematic feel */}
          <div className="noise-overlay" />

          {/* Interactive Particle background */}
          <ParticleBg />

          {/* Header/Nav */}
          <Header />

          {/* Page Sections */}
          <main>
            <Hero />
            <About />
            <Team />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
