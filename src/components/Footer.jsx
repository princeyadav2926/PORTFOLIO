import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
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
    <footer className="relative bg-[#0B0D0E] border-t border-[#D6AD60]/20 py-12 text-[#A7AAA8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D6AD60]/15">
          
          {/* Logo & College Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#15191B] border border-[#D6AD60]/30 flex items-center justify-center font-mono font-bold text-[#D6AD60]">
              &lt;PK/&gt;
            </div>
            <div>
              <div className="font-bold text-[#F5F5F0] text-base">Prince Kumar</div>
              <div className="text-[11px] font-mono text-[#A7AAA8] flex items-center gap-1">
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
                className="hover:text-[#D6AD60] transition-colors"
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
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#A7AAA8]/60">
          <div>
            &copy; {new Date().getFullYear()} Prince Kumar &bull; LNCTS Bhopal. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#A7AAA8]">
            <span>Matte Black & Champagne Gold &bull; React, Tailwind & 3D Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
