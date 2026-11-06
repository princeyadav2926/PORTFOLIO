import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Boxes,
  Layout,
  Server,
  Database,
  Binary,
  GitBranch,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';
import TechLogo from './TechLogo';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Boxes },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'fullstack', label: 'Full Stack', icon: Layers },
    { id: 'dsa', label: 'DSA & CS Core', icon: Cpu },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
    { id: 'ai', label: 'AI & Systems', icon: Sparkles },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0D0E] subtle-matte-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Technical <span className="text-gradient-gold">Skill Set</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            Core technologies, programming languages, and engineering tools in Prince Kumar's stack.
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D6AD60] text-[#0B0D0E] font-bold shadow-lg shadow-[#D6AD60]/20'
                    : 'bg-[#15191B] text-[#A7AAA8] hover:text-[#F5F5F0] border border-[#D6AD60]/20 hover:border-[#D6AD60]/40'
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
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#D6AD60]/15 pb-3">
                <Code2 className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0] uppercase tracking-wider font-mono">
                  Programming Languages
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skills.programmingLanguages.map((lang, idx) => (
                  <Card3D key={idx} depth={15} maxTilt={10}>
                    <div className="matte-card rounded-2xl p-5 group h-full flex flex-col justify-between hover:border-[#D6AD60]/50 transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/30 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:border-[#D6AD60] transition-all shadow-md">
                            <TechLogo name={lang.name} size={28} className="w-7 h-7" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111416] text-[#D6AD60] border border-[#D6AD60]/20">
                            {lang.category}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors">
                          {lang.name}
                        </h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#D6AD60]/15 text-xs text-[#A7AAA8] font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD60]" />
                        <span>{lang.highlight}</span>
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
              <div className="flex items-center gap-2.5 border-b border-[#D6AD60]/15 pb-3">
                <Layers className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0] uppercase tracking-wider font-mono">
                  Full Stack Development
                </h3>
              </div>

              {/* Sub-sections: Frontend, Backend, Database */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Frontend */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#F5E6C8] font-mono">
                    <Layout className="w-4 h-4 text-[#D6AD60]" />
                    <span>Frontend Engineering</span>
                  </div>
                  <div className="space-y-2.5">
                    {skills.fullStack.frontend.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="matte-card rounded-xl p-3.5 flex items-center justify-between group hover:border-[#D6AD60]/50 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/25 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                              <TechLogo name={item.name} size={20} className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#F5F5F0] text-sm group-hover:text-[#D6AD60] transition-colors">
                                {item.name}
                              </div>
                              <span className="text-[10px] text-[#A7AAA8] font-mono block">
                                {item.level}
                              </span>
                            </div>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD60]/60 group-hover:bg-[#D6AD60] transition-colors" />
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#F5E6C8] font-mono">
                    <Server className="w-4 h-4 text-[#D6AD60]" />
                    <span>Backend Systems</span>
                  </div>
                  <div className="space-y-2.5">
                    {skills.fullStack.backend.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="matte-card rounded-xl p-3.5 flex items-center justify-between group hover:border-[#D6AD60]/50 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/25 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                              <TechLogo name={item.name} size={20} className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#F5F5F0] text-sm group-hover:text-[#D6AD60] transition-colors">
                                {item.name}
                              </div>
                              <span className="text-[10px] text-[#A7AAA8] font-mono block">
                                {item.level}
                              </span>
                            </div>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD60]/60 group-hover:bg-[#D6AD60] transition-colors" />
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#F5E6C8] font-mono">
                    <Database className="w-4 h-4 text-[#D6AD60]" />
                    <span>Database Architecture</span>
                  </div>
                  <div className="space-y-2.5">
                    {skills.fullStack.database.map((item, idx) => (
                      <Card3D key={idx} depth={10} maxTilt={6}>
                        <div className="matte-card rounded-xl p-3.5 flex items-center justify-between group hover:border-[#D6AD60]/50 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/25 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                              <TechLogo name={item.name} size={20} className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#F5F5F0] text-sm group-hover:text-[#D6AD60] transition-colors">
                                {item.name}
                              </div>
                              <span className="text-[10px] text-[#A7AAA8] font-mono block">
                                {item.level}
                              </span>
                            </div>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD60]/60 group-hover:bg-[#D6AD60] transition-colors" />
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 3. DEVELOPER TOOLS */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#D6AD60]/15 pb-3">
                <Wrench className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0] uppercase tracking-wider font-mono">
                  Developer Tools & Environments
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.developerTools.map((tool, idx) => (
                  <Card3D key={idx} depth={12} maxTilt={8}>
                    <div className="matte-card rounded-xl p-4 group h-full flex flex-col justify-between hover:border-[#D6AD60]/50 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/30 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                          <TechLogo name={tool.name} size={22} className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111416] text-[#D6AD60] border border-[#D6AD60]/20">
                          {tool.type}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors">
                          {tool.name}
                        </h4>
                        <span className="text-[11px] text-[#A7AAA8] font-mono mt-0.5 block truncate">
                          {tool.desc}
                        </span>
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* 4. AI AND EMERGING TECHNOLOGIES */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#D6AD60]/15 pb-3">
                <Sparkles className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0] uppercase tracking-wider font-mono">
                  AI & Applied Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {skills.aiAndEmerging.map((ai, idx) => (
                  <Card3D key={idx} depth={15} maxTilt={10}>
                    <div className="matte-card rounded-xl p-5 group h-full hover:border-[#D6AD60]/50 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/30 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                          <TechLogo name={ai.name} size={22} className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-[#D6AD60]">AI STACK</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors mb-1">
                        {ai.name}
                      </h4>
                      <p className="text-xs text-[#A7AAA8] leading-relaxed">
                        {ai.desc}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          )}

          {/* 5. DSA AND COMPUTER SCIENCE */}
          {(activeTab === 'all' || activeTab === 'dsa') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6 border-b border-[#D6AD60]/15 pb-3">
                <Cpu className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0] uppercase tracking-wider font-mono">
                  DSA and Computer Science Foundations
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {skills.dsaAndCS.map((dsa, idx) => (
                  <Card3D key={idx} depth={12} maxTilt={8}>
                    <div className="matte-card rounded-xl p-3.5 group h-full flex items-center gap-3 hover:border-[#D6AD60]/50 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/20 flex items-center justify-center text-[#D6AD60] shrink-0 group-hover:scale-105 transition-transform">
                        <Binary className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors truncate">
                          {dsa.name}
                        </h4>
                        <span className="text-[10px] text-[#A7AAA8]/70 font-mono block truncate">
                          {dsa.focus}
                        </span>
                      </div>
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
