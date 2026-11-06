import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Compass, 
  CloudRain, 
  ShoppingCart, 
  Terminal, 
  ArrowUpRight, 
  Layers, 
  Check, 
  X,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'opportunity-radar':
        return Compass;
      case 'terraforge':
        return CloudRain;
      case 'smart-shopping':
        return ShoppingCart;
      case 'dsa-programming':
        return Terminal;
      default:
        return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Architected and developed solutions focusing on career intelligence, environmental analytics, and core algorithmic problem solving.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const Icon = getProjectIcon(proj.id);
            return (
              <Card3D key={proj.id} depth={20} maxTilt={7}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-cyan-500/40 group flex flex-col justify-between h-full relative overflow-hidden">
                  
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

                  {/* Top Meta info */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block">
                            {proj.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {proj.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 shrink-0">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Feature Cards or Core Concept tags */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-mono text-cyan-400/90 uppercase tracking-wider">
                        Core Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {proj.features.slice(0, 4).map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                            <div>
                              <span className="font-semibold text-slate-200 block">{feat.title}</span>
                              <span className="text-[11px] text-slate-400 line-clamp-1">{feat.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>Inspect Project Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs text-slate-200 hover:text-cyan-400 font-mono transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                      </a>
                    </div>
                  </div>

                </div>
              </Card3D>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">Overview</h4>
                <p className="leading-relaxed">{selectedProject.description}</p>
              </div>

              {selectedProject.coreConcept && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-cyan-400 mb-2">Core Concept & Architecture</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.coreConcept.map((concept, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.targetOpportunities && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-cyan-400 mb-2">Target Opportunities Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.targetOpportunities.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.topics && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-cyan-400 mb-2">Algorithmic Topics</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.topics.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 mb-2">Feature Breakdown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1">{feat.title}</div>
                      <div className="text-slate-400 text-xs leading-normal">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-slate-800 text-cyan-300 font-mono text-xs border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Verified developer repository
              </span>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Open On GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

