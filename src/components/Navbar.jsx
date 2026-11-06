import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Send, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Full Stack', href: '#fullstack' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Education', href: '#education' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white hover:text-amber-400 transition-colors"
          >
            <div className="relative w-10 h-10 rounded-xl bg-carbon-900 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all">
              <span className="text-base">&lt;PK/&gt;</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div>
              <div className="font-semibold text-base sm:text-lg tracking-tight font-sans flex items-center gap-2">
                <span>Prince Kumar</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-400 tracking-wider hidden sm:block">
                LNCTS Bhopal &bull; Full Stack & DSA
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-carbon-900/90 border border-zinc-700/60 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-carbon-900/90 border border-zinc-700/60 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-carbon-900 border border-zinc-700 hover:border-amber-400 text-zinc-200 hover:text-amber-300 text-xs sm:text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-amber-500/20 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded-md bg-carbon-900 border border-amber-500/30 text-amber-300 text-xs font-mono"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-carbon-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d13]/95 border-b border-zinc-800/80 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/40 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-carbon-900 border border-zinc-700 text-zinc-300 hover:text-amber-400"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-carbon-900 border border-zinc-700 text-zinc-300 hover:text-amber-400"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Contact Prince
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
