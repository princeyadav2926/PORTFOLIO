import React from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function LinkedInCard() {
  const { personal } = portfolioData;

  return (
    <section className="py-16 relative overflow-hidden bg-[#090b10] border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Card3D depth={20} maxTilt={7}>
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-amber-500/30 hover:border-amber-400/50 shadow-2xl relative overflow-hidden group">
            
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              
              <div className="flex items-center gap-5 text-center md:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-carbon-950 border border-zinc-800 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all shrink-0">
                  <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-carbon-950 border border-zinc-800 text-xs font-mono text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Collaborations
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Let's Connect Professionally.
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md">
                    Connect with Prince Kumar (LNCTS Bhopal) on LinkedIn for engineering internships, software roles, and project collaborations.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto text-center">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Visit My LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] font-mono text-zinc-500 mt-2">
                  Opens in new tab &bull; Verified link
                </p>
              </div>

            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
}
