import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send, MapPin, School, Terminal, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';
import Hero3DCanvas from './Hero3DCanvas';

export default function Hero({ onOpenResume }) {
  const { hero, personal } = portfolioData;
  const roles = hero.animatedRoles;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
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
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden engineering-grid ambient-warm-glow">
      {/* Background ambient lighting - warm metallic gold, no purple/neon */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] bg-zinc-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* College & Status Banner */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-carbon-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex items-center gap-1.5 text-amber-400 font-mono font-semibold">
                <School className="w-3.5 h-3.5" />
                LNCTS Bhopal
              </span>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="text-zinc-400 hidden sm:inline">{personal.college}</span>
              <span className="text-zinc-600">&bull;</span>
              <span className="flex items-center gap-1 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient-gold">Prince Kumar</span>
            </h1>

            {/* Animated Dynamic Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-zinc-100 min-h-[44px]">
              <span className="text-amber-400">&gt;</span>
              <span className="text-white border-b-2 border-amber-400/80 pb-0.5">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-amber-400 inline-block animate-pulse ml-0.5" />
            </div>

            {/* Description & College Info */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            <div className="p-3.5 rounded-xl bg-carbon-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5">
              <School className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200">Lakshami Narayan College Of Technology And Science, Bhopal</strong>
                <span className="block text-xs text-zinc-500 font-mono mt-0.5">
                  B.Tech in Computer Science and Engineering (Pursuing)
                </span>
              </div>
            </div>

            <p className="text-sm font-mono text-amber-300/90 italic border-l-2 border-amber-500/60 pl-3">
              "{personal.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-carbon-900 border border-zinc-700 hover:border-amber-400/80 text-zinc-200 hover:text-amber-300 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-carbon-900/60 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Tech Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">Core Stack:</span>
              {['C++', 'Java', 'Full Stack', 'DSA', 'LNCTS Bhopal'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-carbon-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Gyroscope Viewport Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <Card3D className="w-full max-w-md" depth={25} maxTilt={10}>
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden border border-zinc-800 shadow-2xl">
                
                {/* 3D Canvas */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-[#0a0c12] via-[#08090d] to-[#0a0c12] border border-zinc-800 flex items-center justify-center">
                  <Hero3DCanvas />
                </div>

                {/* Profile Footer */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                        Prince Kumar
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                          LNCTS Bhopal
                        </span>
                      </h2>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        B.Tech Computer Science Engineering
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-carbon-900 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono font-bold shadow-sm">
                      PK
                    </div>
                  </div>

                  {/* Terminal snippet */}
                  <div className="bg-[#050608] border border-zinc-800 rounded-lg p-2.5 font-mono text-xs text-zinc-300 space-y-1">
                    <div className="flex items-center text-zinc-500 text-[11px] gap-1.5 pb-1 border-b border-zinc-800/80">
                      <Terminal className="w-3 h-3 text-amber-400" />
                      <span>student_credentials.json</span>
                    </div>
                    <div className="pt-1 text-[11px]">
                      <span className="text-amber-400 font-semibold">institution:</span> "LNCTS Bhopal"
                    </div>
                    <div className="text-[11px]">
                      <span className="text-amber-400 font-semibold">degree:</span> "B.Tech Computer Science"
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
