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
    <section id="fullstack" className="py-24 relative overflow-hidden bg-[#07080b] border-t border-zinc-800 engineering-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-carbon-900 border border-zinc-800 text-amber-400 text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End System Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full Stack <span className="text-gradient-gold">Development Journey</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {fullStackJourney.subtitle}
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fullStackJourney.pillars.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.icon);
            return (
              <Card3D key={pillar.id} depth={15} maxTilt={9}>
                <div className="glass-card rounded-2xl p-6 border border-zinc-800 hover:border-amber-500/40 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-carbon-950 border border-zinc-800 text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        STAGE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/90 mb-4">
                      {pillar.role}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-carbon-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 text-xs text-zinc-400">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Verified Stack</span>
                    <span className="text-amber-400 font-semibold">&bull; Active</span>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Full Stack Data Flow Diagram */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              Integration Workflow
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              Architecture & Data Flow Lifecycle
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-4 rounded-xl bg-carbon-950 border border-zinc-800 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h5 className="text-sm font-bold text-white">Client Interface</h5>
              <p className="text-xs text-zinc-400">
                React component tree, Tailwind utility styling, and state management.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-carbon-950 border border-zinc-800 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h5 className="text-sm font-bold text-white">API Gateway & Logic</h5>
              <p className="text-xs text-zinc-400">
                Express.js routing, JSON body parsers, validation and async controllers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-carbon-950 border border-zinc-800 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h5 className="text-sm font-bold text-white">Persistence Layer</h5>
              <p className="text-xs text-zinc-400">
                MongoDB document collections and MySQL relational schemas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-carbon-950 border border-zinc-800 text-center space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h5 className="text-sm font-bold text-white">CI/CD & Cloud Host</h5>
              <p className="text-xs text-zinc-400">
                Git commits, remote GitHub repositories, and automated Vercel preview deploys.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
