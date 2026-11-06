import React, { useState } from 'react';
import { 
  Cpu, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Code, 
  ChevronRight, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function DsaSection() {
  const { dsaSection } = portfolioData;
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Algorithmic Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Structures & <span className="text-gradient-cyan">Algorithms</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {dsaSection.description}
          </p>
        </div>

        {/* 10 Interactive DSA Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {dsaSection.cards.map((card, idx) => {
            const isSelected = activeCardIndex === idx;
            return (
              <Card3D key={card.name} depth={12} maxTilt={10}>
                <button
                  type="button"
                  onClick={() => setActiveCardIndex(idx)}
                  className={`w-full text-left rounded-xl p-4 transition-all duration-300 h-full flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/50'
                      : 'bg-slate-950/70 border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        0{idx + 1}
                      </span>
                      <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {card.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-300/80">
                      {card.complexity}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    Click to inspect focus
                  </div>
                </button>
              </Card3D>
            );
          })}
        </div>

        {/* Selected Topic Detailed Focus Panel */}
        {dsaSection.cards[activeCardIndex] && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 max-w-4xl mx-auto mb-12 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  Algorithmic Focus Area
                </span>
                <h4 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
                  <span>{dsaSection.cards[activeCardIndex].name}</span>
                  <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-300">
                    C++ & Java
                  </span>
                </h4>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                Complexity: {dsaSection.cards[activeCardIndex].complexity}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Core Techniques: </strong>
              {dsaSection.cards[activeCardIndex].focus}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-1.5">
              <div className="text-cyan-400 font-semibold">// Practice & Implementation Philosophy:</div>
              <div>&bull; Code written in C++ and Java with clean variable naming & boundary checks.</div>
              <div>&bull; Emphasis on time-space complexity optimization and edge-case handling.</div>
            </div>
          </div>
        )}

        {/* GitHub Explore CTA */}
        <div className="text-center">
          <a
            href={dsaSection.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs font-mono text-slate-500 mt-3">
            Real code commits & data structure repositories tracked on GitHub.
          </p>
        </div>

      </div>
    </section>
  );
}

