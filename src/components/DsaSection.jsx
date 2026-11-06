import React, { useState } from 'react';
import { 
  Cpu, 
  Github, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function DsaSection() {
  const { dsaSection } = portfolioData;
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-[#111416] border-t border-[#D6AD60]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Algorithmic Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Data Structures & <span className="text-gradient-gold">Algorithms</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            {dsaSection.description}
          </p>
        </div>

        {/* 10 Interactive DSA Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {dsaSection.cards.map((card, idx) => {
            const isSelected = activeCardIndex === idx;
            return (
              <Card3D key={card.name} depth={12} maxTilt={8}>
                <button
                  type="button"
                  onClick={() => setActiveCardIndex(idx)}
                  className={`w-full text-left rounded-xl p-4 transition-all duration-300 h-full flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#15191B] border-[#D6AD60] shadow-[0_0_20px_rgba(214,173,96,0.2)] ring-1 ring-[#D6AD60]/60'
                      : 'bg-[#15191B] border-[#D6AD60]/20 hover:border-[#D6AD60]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#D6AD60] font-semibold">
                        0{idx + 1}
                      </span>
                      <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D6AD60]' : 'text-[#A7AAA8]/40'}`} />
                    </div>
                    <h3 className="font-bold text-[#F5F5F0] text-base mb-1">
                      {card.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#F5E6C8]">
                      {card.complexity}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#D6AD60]/15 text-[11px] text-[#A7AAA8]">
                    Click to inspect focus
                  </div>
                </button>
              </Card3D>
            );
          })}
        </div>

        {/* Selected Topic Detailed Focus Panel */}
        {dsaSection.cards[activeCardIndex] && (
          <div className="matte-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#D6AD60]/20">
              <div>
                <span className="text-xs font-mono uppercase text-[#D6AD60] tracking-wider">
                  Algorithmic Focus Area
                </span>
                <h4 className="text-2xl font-bold text-[#F5F5F0] mt-1 flex items-center gap-2">
                  <span>{dsaSection.cards[activeCardIndex].name}</span>
                  <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60]">
                    C++ & Java Implementation
                  </span>
                </h4>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-xs font-mono text-[#D6AD60]">
                Complexity: {dsaSection.cards[activeCardIndex].complexity}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#A7AAA8] leading-relaxed mb-4">
              <strong className="text-[#F5F5F0]">Core Techniques: </strong>
              {dsaSection.cards[activeCardIndex].focus}
            </p>

            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-xs font-mono text-[#A7AAA8] space-y-1.5">
              <div className="text-[#D6AD60] font-semibold">// Practice & Implementation Philosophy:</div>
              <div>&bull; Code written in C++ and Java with clean variable naming & boundary checks.</div>
              <div>&bull; Emphasis on time-space complexity optimization and edge-case handling.</div>
            </div>
          </div>
        )}

        {/* GitHub Explore CTA: Primary Button in Champagne Gold */}
        <div className="text-center">
          <a
            href={dsaSection.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-sm shadow-lg shadow-[#D6AD60]/15 hover:shadow-[#D6AD60]/25 transition-all transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-xs font-mono text-[#A7AAA8] mt-3">
            Real code commits & data structure repositories tracked on GitHub.
          </p>
        </div>

      </div>
    </section>
  );
}
