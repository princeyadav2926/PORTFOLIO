import React from 'react';
import { ArrowUp, Github, Linkedin, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Full Stack', href: '#fullstack' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-zinc-850 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          
          {/* Logo & College Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-carbon-900 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400">
              &lt;PK/&gt;
            </div>
            <div>
              <div className="font-bold text-white text-base">Prince Kumar</div>
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                <span>Lakshami Narayan College Of Technology And Science, Bhopal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-carbon-900 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-amber-400 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-carbon-900 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-amber-400 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-carbon-900 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-amber-400 transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Prince Kumar &bull; LNCTS Bhopal. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Bespoke Engineering &bull; React, Tailwind & 3D Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
