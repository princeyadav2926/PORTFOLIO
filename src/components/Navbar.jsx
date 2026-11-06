import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Send } from 'lucide-react';
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
          ? 'bg-[#0B0D0E]/90 backdrop-blur-md border-b border-[#D6AD60]/20 py-3 shadow-xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 text-[#F5F5F0] hover:text-[#D6AD60] transition-colors"
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#15191B] border border-[#D6AD60]/30 flex items-center justify-center font-mono font-bold text-[#D6AD60] group-hover:border-[#D6AD60] group-hover:shadow-[0_0_15px_rgba(214,173,96,0.25)] transition-all">
              <span className="text-base">&lt;PK/&gt;</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D6AD60] opacity-80 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D6AD60]" />
            </div>
            <div>
              <div className="font-semibold text-base sm:text-lg tracking-tight font-sans flex items-center gap-2 text-[#F5F5F0]">
                <span>Prince Kumar</span>
              </div>
              <p className="text-[10px] font-mono text-[#A7AAA8] tracking-wider hidden sm:block">
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
                className="px-3 py-1.5 rounded-lg text-sm text-[#A7AAA8] hover:text-[#F5F5F0] hover:bg-[#15191B] hover:border hover:border-[#D6AD60]/30 transition-all duration-200 font-medium"
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
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#A7AAA8] hover:text-[#D6AD60] hover:border-[#D6AD60]/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#A7AAA8] hover:text-[#D6AD60] hover:border-[#D6AD60]/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Secondary Button: Transparent background + Golden border */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-transparent border border-[#D6AD60]/40 text-[#F5F5F0] hover:border-[#D6AD60] hover:text-[#D6AD60] text-xs sm:text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-[#D6AD60]" />
              <span>Resume</span>
            </button>

            {/* Primary Button: Champagne Gold background + Dark text */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs sm:text-sm shadow-md hover:shadow-[0_0_15px_rgba(214,173,96,0.25)] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded-md bg-[#15191B] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-mono"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#F5F5F0]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D0E]/98 border-b border-[#D6AD60]/20 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#A7AAA8] hover:text-[#D6AD60] hover:bg-[#15191B] font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#D6AD60]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#A7AAA8] hover:text-[#D6AD60]"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#A7AAA8] hover:text-[#D6AD60]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs"
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
