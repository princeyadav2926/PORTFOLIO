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
    <div className="min-h-screen bg-[#0B0D0E] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#D6AD60]/25 selection:text-[#F5E6C8] relative">
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
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#15191B]/95 hover:bg-[#1B2023] border border-[#D6AD60]/30 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] text-xs font-mono shadow-xl backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
          title="Press Ctrl+K or Cmd+K to open search"
        >
          <Search className="w-3.5 h-3.5 text-[#D6AD60]" />
          <span className="text-[#A7AAA8]">Search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-[#0B0D0E] border border-[#D6AD60]/20 text-[10px] text-[#D6AD60]">
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
