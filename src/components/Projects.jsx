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
  Info,
  RotateCcw
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Opportunity Radar Simulator State
  const [opportunityFilter, setOpportunityFilter] = useState('All');

  // TerraForge Simulator State
  const [pm25Value, setPm25Value] = useState(160);

  // Smart Shopping Simulator State
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Mechanical Keyboard (Cherry MX)", price: 89, qty: 1 }
  ]);

  // DSA Visualizer State
  const sampleArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const targetVal = 23;
  const [lowPtr, setLowPtr] = useState(0);
  const [highPtr, setHighPtr] = useState(sampleArray.length - 1);
  const [midPtr, setMidPtr] = useState(Math.floor((0 + sampleArray.length - 1) / 2));
  const [dsaFound, setDsaFound] = useState(false);
  const [dsaStep, setDsaStep] = useState(0);

  const handleNextDsaStep = () => {
    if (dsaFound || lowPtr > highPtr) return;
    const currentMid = Math.floor((lowPtr + highPtr) / 2);
    setMidPtr(currentMid);
    setDsaStep((s) => s + 1);

    if (sampleArray[currentMid] === targetVal) {
      setDsaFound(true);
    } else if (sampleArray[currentMid] < targetVal) {
      setLowPtr(currentMid + 1);
    } else {
      setHighPtr(currentMid - 1);
    }
  };

  const handleResetDsa = () => {
    setLowPtr(0);
    setHighPtr(sampleArray.length - 1);
    setMidPtr(Math.floor((0 + sampleArray.length - 1) / 2));
    setDsaFound(false);
    setDsaStep(0);
  };

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

  const mockOpportunities = [
    { title: "Summer Engineering Fellowship", type: "Fellowships", deadline: "In 14 Days", match: "94% Skill Match", stipend: "Verified" },
    { title: "National Smart Hackathon 2026", type: "Hackathons", deadline: "In 6 Days", match: "Eligible (Batch 2026)", stipend: "Grand Prize" },
    { title: "Global Cloud Innovation Challenge", type: "Competitions", deadline: "In 21 Days", match: "Open to Students", stipend: "Mentorship" },
    { title: "Undergraduate STEM Scholarship", type: "Scholarships", deadline: "In 30 Days", match: "Eligible Criteria", stipend: "Merit Grant" }
  ];

  const filteredOpportunities = opportunityFilter === 'All' 
    ? mockOpportunities 
    : mockOpportunities.filter(o => o.type === opportunityFilter);

  const getAqiStatus = (pm) => {
    if (pm <= 60) return { label: 'Moderate', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
    if (pm <= 120) return { label: 'Poor', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
    if (pm <= 250) return { label: 'Very Poor', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' };
    return { label: 'Severe / Hazardous', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' };
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090b10] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-carbon-900 border border-zinc-800 text-amber-400 text-xs font-mono tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Architected and developed solutions focusing on career intelligence, environmental analytics, and core algorithmic problem solving.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const Icon = getProjectIcon(proj.id);
            return (
              <Card3D key={proj.id} depth={20} maxTilt={7}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-amber-500/40 group flex flex-col justify-between h-full relative overflow-hidden">
                  
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-all" />

                  {/* Top Meta info */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-carbon-950 border border-zinc-800 text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block">
                            {proj.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                            {proj.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-carbon-900 border border-zinc-800 text-zinc-300 shrink-0">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Feature Cards */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-mono text-amber-400/90 uppercase tracking-wider">
                        Core Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {proj.features.slice(0, 4).map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-2.5 rounded-lg bg-carbon-950 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                            <div>
                              <span className="font-semibold text-zinc-200 block">{feat.title}</span>
                              <span className="text-[11px] text-zinc-400 line-clamp-1">{feat.desc}</span>
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
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-carbon-950 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>Inspect Details & Demo</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-900 border border-zinc-700 hover:border-amber-400 text-xs text-zinc-200 hover:text-amber-400 font-mono transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-amber-400" />
                      </a>
                    </div>
                  </div>

                </div>
              </Card3D>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal with Interactive Simulator */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-carbon-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-carbon-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-1">Project Synopsis</h4>
                <p className="leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* INTERACTIVE DEMO SIMULATOR */}
              <div className="p-4 rounded-xl bg-carbon-950 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Feature Simulation
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    Live Prototype
                  </span>
                </div>

                {/* 1. OPPORTUNITY RADAR */}
                {selectedProject.id === 'opportunity-radar' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {['All', 'Hackathons', 'Fellowships', 'Scholarships'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setOpportunityFilter(cat)}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                            opportunityFilter === cat ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-carbon-900 text-zinc-300 border border-zinc-800'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {filteredOpportunities.map((opp, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-carbon-900 border border-zinc-800 text-xs">
                          <div className="font-semibold text-white">{opp.title}</div>
                          <div className="flex items-center justify-between text-[11px] text-amber-400 font-mono mt-1">
                            <span>{opp.deadline}</span>
                            <span className="text-zinc-400">{opp.match}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. TERRAFORGE */}
                {selectedProject.id === 'terraforge' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>Simulate Delhi NCR PM2.5 (µg/m³):</span>
                      <span className="text-amber-400 font-bold">{pm25Value} µg/m³</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="450"
                      value={pm25Value}
                      onChange={(e) => setPm25Value(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    {(() => {
                      const stat = getAqiStatus(pm25Value);
                      return (
                        <div className={`p-3 rounded-lg ${stat.bg} ${stat.border} border flex items-center justify-between text-xs`}>
                          <div>
                            <span className="font-mono text-zinc-400 block">Forecasted Risk:</span>
                            <span className={`font-bold ${stat.color} text-sm`}>{stat.label}</span>
                          </div>
                          <div className="text-right text-[11px] font-mono text-zinc-400">
                            Wind: 14 km/h NW<br />Smog Inversion: {pm25Value > 150 ? 'High' : 'Low'}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* 3. SMART SHOPPING */}
                {selectedProject.id === 'smart-shopping' && (
                  <div className="space-y-3">
                    <div className="text-xs text-zinc-300">
                      Simulated Instant Cart Calculation:
                    </div>
                    <div className="space-y-2">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-2 rounded bg-carbon-900 text-xs border border-zinc-800">
                          <span className="text-white font-medium">{item.name}</span>
                          <span className="font-mono text-amber-400">${item.price} &times; {item.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs font-mono">
                      <span className="text-zinc-400">Total Price:</span>
                      <span className="font-bold text-white text-sm">
                        ${cartItems.reduce((acc, i) => acc + i.price * i.qty, 0)}.00
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. DSA BINARY SEARCH */}
                {selectedProject.id === 'dsa-programming' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>Search target: <strong className="text-amber-400">{targetVal}</strong></span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleNextDsaStep}
                          disabled={dsaFound || lowPtr > highPtr}
                          className="px-2 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs disabled:opacity-40"
                        >
                          {dsaFound ? "Target Found!" : "Step >"}
                        </button>
                        <button
                          onClick={handleResetDsa}
                          className="p-1 rounded bg-carbon-800 text-zinc-400 hover:text-white"
                          title="Reset Search"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sampleArray.map((val, idx) => {
                        const isMid = idx === midPtr;
                        const isTarget = dsaFound && val === targetVal;
                        return (
                          <div
                            key={idx}
                            className={`px-2 py-1.5 rounded text-xs font-mono border text-center transition-all ${
                              isTarget
                                ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 ring-2 ring-emerald-400'
                                : isMid
                                ? 'bg-amber-500/20 text-amber-300 border-amber-400 font-bold'
                                : idx >= lowPtr && idx <= highPtr
                                ? 'bg-carbon-900 text-white border-zinc-700'
                                : 'bg-carbon-950 text-zinc-600 border-zinc-900'
                            }`}
                          >
                            {val}
                            {isMid && <span className="block text-[8px] text-amber-400">mid</span>}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      Step {dsaStep}: low={lowPtr}, mid={midPtr}, high={highPtr} &bull; Time Complexity: O(log n)
                    </div>
                  </div>
                )}

              </div>

              {selectedProject.coreConcept && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-amber-400 mb-2">Core Concept & Architecture</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.coreConcept.map((concept, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase text-amber-400 mb-2">Feature Breakdown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-carbon-950 border border-zinc-800">
                      <div className="font-semibold text-white text-xs mb-1">{feat.title}</div>
                      <div className="text-zinc-400 text-xs leading-normal">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-carbon-950 text-amber-300 font-mono text-xs border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Verified developer repository
              </span>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all"
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
