import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, X, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified workshops and specialized skill credentials in Generative AI, prompt engineering, and career development.
          </p>
        </div>

        {/* 4 Premium Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card3D key={cert.id} depth={15} maxTilt={8}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/40 group h-full flex flex-col justify-between relative overflow-hidden">
                
                {/* Certificate Placeholder visual thumbnail */}
                <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#040914] border border-cyan-500/20 mb-5 flex flex-col items-center justify-center p-4 text-center overflow-hidden group-hover:border-cyan-400/50 transition-colors">
                  
                  {/* Watermark badge */}
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full border border-cyan-500/10 flex items-center justify-center pointer-events-none">
                    <Award className="w-16 h-16 text-cyan-500/10" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-900/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-2 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                    Certificate of Completion
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {cert.title}
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-400">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Workshop
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cert.focus}
                  </p>
                </div>

                {/* Footer preview button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {cert.issuer}
                  </span>
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Credential</span>
                  </button>
                </div>

              </div>
            </Card3D>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Credential Verification</h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 p-6 rounded-xl bg-slate-950 border border-cyan-500/30 text-center space-y-3 relative overflow-hidden">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Certificate Awarded To
              </div>
              <div className="text-2xl font-extrabold text-white">
                Prince Kumar
              </div>
              <div className="text-sm font-semibold text-slate-300 pt-1">
                {activeCert.title}
              </div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto pt-2">
                {activeCert.focus}
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-900">
                Issued for professional proficiency & technical competencies.
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

