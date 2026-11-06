import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#07080b] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-carbon-900 border border-zinc-800 text-amber-400 text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-gold">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Verified workshops and specialized skill credentials in Generative AI, prompt engineering, and career development.
          </p>
        </div>

        {/* 4 Premium Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card3D key={cert.id} depth={15} maxTilt={8}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-zinc-800 hover:border-amber-500/40 group h-full flex flex-col justify-between relative overflow-hidden">
                
                {/* Certificate Placeholder visual thumbnail */}
                <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-[#10121a] via-[#090b10] to-[#07080b] border border-zinc-800 mb-5 flex flex-col items-center justify-center p-4 text-center overflow-hidden group-hover:border-amber-500/40 transition-colors">
                  
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full border border-amber-500/10 flex items-center justify-center pointer-events-none">
                    <Award className="w-16 h-16 text-amber-500/10" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-carbon-950 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono text-amber-300 font-semibold tracking-wider uppercase">
                    Certificate of Completion
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {cert.title}
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-carbon-950 border border-zinc-800 text-amber-400">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Program
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {cert.focus}
                  </p>
                </div>

                {/* Footer preview button */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    {cert.issuer}
                  </span>
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-carbon-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Credential Verification</h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded-lg bg-carbon-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 p-6 rounded-xl bg-carbon-950 border border-zinc-800 text-center space-y-3 relative overflow-hidden">
              <div className="w-14 h-14 mx-auto rounded-full bg-carbon-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                Certificate Awarded To
              </div>
              <div className="text-2xl font-extrabold text-white">
                Prince Kumar
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Lakshami Narayan College Of Technology And Science, Bhopal
              </div>
              <div className="text-sm font-semibold text-zinc-300 pt-1">
                {activeCert.title}
              </div>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto pt-2">
                {activeCert.focus}
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-zinc-900">
                Issued for verified technical competency and hands-on participation.
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
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
