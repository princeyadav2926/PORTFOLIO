import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FullStackJourney from './components/FullStackJourney';
import DsaSection from './components/DsaSection';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GithubDashboard from './components/GithubDashboard';
import LinkedInCard from './components/LinkedInCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import { Search } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpen);
    return () => window.removeEventListener('open-command-palette', handleOpen);
  }, []);

  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <FullStackJourney />
        <DsaSection />
        <Education />
        <Certifications />
        <GithubDashboard />
        <LinkedInCard />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Command Palette Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center">
        <button
          onClick={() => setIsPaletteOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-carbon-900/90 hover:bg-carbon-800 border border-zinc-700/80 hover:border-amber-500/60 text-zinc-300 hover:text-amber-300 text-xs font-mono shadow-xl backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
          title="Press Ctrl+K or Cmd+K to open search"
        >
          <Search className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-zinc-400">Search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-carbon-950 border border-zinc-700 text-[10px] text-amber-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Interactive Command Palette Modal */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
