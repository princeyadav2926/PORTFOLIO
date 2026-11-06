import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Terminal, 
  Database, 
  Server, 
  Layout, 
  GitBranch, 
  Boxes,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Boxes },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'fullstack', label: 'Full Stack', icon: Layers },
    { id: 'dsa', label: 'DSA & CS Core', icon: Cpu },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
    { id: 'ai', label: 'AI & Emerging', icon: Sparkles },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skill Set</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured skill categories across programming languages, web systems, algorithmic foundations, and developer tooling.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Displays */}
        <div className="space-y-16">

          {/* 1. PROGRAMMING LANGUAGES */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-800/80 pb-3">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Programming Languages
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skills.programmingLanguages.map((lang, idx) => (
                  <Card3D key={idx} depth={15} maxTilt={10}>
                    <div className="glass-card rounded-xl p-5 border border-slate-800 hover:border-cyan-500/40 group h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                            {lang.category}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-cyan-400/80 group-hover:scale-125 transition-transform" />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {lang.name}
                        </h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                        {lang.highlight}
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* 2. FULL STACK DEVELOPMENT */}
          {(activeTab === 'all' || activeTab === 'fullstack') && (
            <div className="space-y-8">
              <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Full Stack Development
                </h3>
              </div>

              {/* Sub-sections: Frontend, Backend, Database */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Frontend */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 font-mono">
                    <Layout className="w-4 h-4 text-cyan-400" />
                    <span>Frontend Engineering</span>
                  </div>
                  <div className="space-y-3">
                    {skills.fullStack.frontend.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="glass-card rounded-lg p-3.5 border border-slate-800/80 hover:border-cyan-500/30">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white text-sm">{item.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 font-mono">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>Backend Systems</span>
                  </div>
                  <div className="space-y-3">
                    {skills.fullStack.backend.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="glass-card rounded-lg p-3.5 border border-slate-800/80 hover:border-cyan-500/30">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white text-sm">{item.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 font-mono">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span>Database Architecture</span>
                  </div>
                  <div className="space-y-3">
                    {skills.fullStack.database.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="glass-card rounded-lg p-3.5 border border-slate-800/80 hover:border-cyan-500/30">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white text-sm">{item.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 3. DSA AND COMPUTER SCIENCE */}
          {(activeTab === 'all' || activeTab === 'dsa') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-800/80 pb-3">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  DSA and Computer Science Foundations
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.dsaAndCS.map((dsa, idx) => (
                  <Card3D key={idx} depth={12} maxTilt={8}>
                    <div className="glass-card rounded-xl p-4 border border-slate-800/90 hover:border-cyan-500/40 group h-full">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {dsa.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {dsa.focus}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* 4. DEVELOPER TOOLS */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-800/80 pb-3">
                <Wrench className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Developer Tools & Environments
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {skills.developerTools.map((tool, idx) => (
                  <Card3D key={idx} depth={12} maxTilt={8}>
                    <div className="glass-card rounded-xl p-4 border border-slate-800 hover:border-cyan-500/40 group h-full flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 mb-2 inline-block">
                          {tool.type}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        {tool.desc}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* 5. AI AND EMERGING TECHNOLOGIES */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-800/80 pb-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  AI & Emerging Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {skills.aiAndEmerging.map((ai, idx) => (
                  <Card3D key={idx} depth={15} maxTilt={10}>
                    <div className="glass-card rounded-xl p-5 border border-slate-800 hover:border-cyan-500/40 group h-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-cyan-400">AI FOCUS</span>
                        <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {ai.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {ai.desc}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

