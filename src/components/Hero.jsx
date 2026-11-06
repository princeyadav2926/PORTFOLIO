import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send, Sparkles, MapPin, CheckCircle, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';
import Hero3DCanvas from './Hero3DCanvas';

export default function Hero({ onOpenResume }) {
  const { hero, personal } = portfolioData;
  const roles = hero.animatedRoles;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText === fullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid radial-glow-bg">
      {/* Background ambient lighting accents - strictly cyan/electric blue, no purple */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Typewriter, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.statusText}</span>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" /> {personal.location}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient-cyan">Prince Kumar</span>
            </h1>

            {/* Animated Dynamic Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-200 min-h-[44px]">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-white border-b-2 border-cyan-400/80 pb-0.5">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse ml-0.5" />
            </div>

            {/* Tagline & Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            <p className="text-sm font-mono text-cyan-300/80 italic border-l-2 border-cyan-500/50 pl-3">
              "{personal.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/60 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/50 border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Tech Highlights Badge */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Focus:</span>
              {['C++', 'Java', 'Full Stack', 'DSA', 'AI Tools'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-cyan-300/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Real 3D Interactive Canvas & 3D Tilt Developer Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <Card3D className="w-full max-w-md" depth={30} maxTilt={12}>
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden border border-cyan-500/20 shadow-2xl">
                
                {/* 3D Canvas embedded inside modern viewport */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/20 flex items-center justify-center">
                  <Hero3DCanvas />
                </div>

                {/* Profile Card Footer */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                        Prince Kumar
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400">
                          B.Tech CSE
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Aspiring Software Engineer & Full Stack Dev
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold shadow-sm">
                      PK
                    </div>
                  </div>

                  {/* Terminal snippet info */}
                  <div className="bg-[#040812] border border-slate-800 rounded-lg p-2.5 font-mono text-xs text-slate-300 space-y-1">
                    <div className="flex items-center text-slate-500 text-[11px] gap-1.5 pb-1 border-b border-slate-800/80">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>student_profile.json</span>
                    </div>
                    <div className="pt-1 text-[11px]">
                      <span className="text-cyan-400 font-semibold">degree:</span> "B.Tech Computer Science"
                    </div>
                    <div className="text-[11px]">
                      <span className="text-cyan-400 font-semibold">status:</span> "Building Real-World Projects"
                    </div>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

        </div>
      </div>
    </section>
  );
}
