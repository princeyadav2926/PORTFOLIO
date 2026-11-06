import React from 'react';
import { 
  Layers, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  CheckCircle2, 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function FullStackJourney() {
  const { fullStackJourney } = portfolioData;

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      case 'Workflow':
        return GitBranch;
      default:
        return Layers;
    }
  };

  return (
    <section id="fullstack" className="py-24 relative overflow-hidden bg-[#0B0D0E] border-t border-[#D6AD60]/20 subtle-matte-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End System Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Full Stack <span className="text-gradient-gold">Development Journey</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            {fullStackJourney.subtitle}
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fullStackJourney.pillars.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.icon);
            return (
              <Card3D key={pillar.id} depth={15} maxTilt={8}>
                <div className="matte-card rounded-2xl p-6 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-[#D6AD60] group-hover:scale-105 group-hover:border-[#D6AD60]/50 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-[#D6AD60]">
                        STAGE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#D6AD60] mb-4">
                      {pillar.role}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-[#0B0D0E] border border-[#D6AD60]/15 text-[11px] font-mono text-[#F5E6C8]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-xs text-[#A7AAA8]">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AD60] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D6AD60]/15 flex items-center justify-between text-[11px] font-mono text-[#A7AAA8]">
                    <span>Verified Stack</span>
                    <span className="text-[#D6AD60] font-semibold">&bull; Active</span>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Full Stack Data Flow Diagram */}
        <div className="matte-card rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase text-[#D6AD60] tracking-wider">
              Integration Workflow
            </span>
            <h4 className="text-xl font-bold text-[#F5F5F0] mt-1">
              Architecture & Data Flow Lifecycle
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-[#15191B] border border-[#D6AD60]/30 text-[#D6AD60] flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h5 className="text-sm font-bold text-[#F5F5F0]">Client Interface</h5>
              <p className="text-xs text-[#A7AAA8]">
                React component tree, Tailwind utility styling, and state management.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-[#15191B] border border-[#D6AD60]/30 text-[#D6AD60] flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h5 className="text-sm font-bold text-[#F5F5F0]">API Gateway & Logic</h5>
              <p className="text-xs text-[#A7AAA8]">
                Express.js routing, JSON body parsers, validation and async controllers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-[#15191B] border border-[#D6AD60]/30 text-[#D6AD60] flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h5 className="text-sm font-bold text-[#F5F5F0]">Persistence Layer</h5>
              <p className="text-xs text-[#A7AAA8]">
                MongoDB document collections and MySQL relational schemas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-[#15191B] border border-[#D6AD60]/30 text-[#D6AD60] flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h5 className="text-sm font-bold text-[#F5F5F0]">CI/CD & Cloud Host</h5>
              <p className="text-xs text-[#A7AAA8]">
                Git commits, remote GitHub repositories, and automated Vercel preview deploys.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
