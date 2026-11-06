import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#111416] border-t border-[#D6AD60]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Professional <span className="text-gradient-gold">Certifications</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            Verified workshops and specialized skill credentials in Generative AI, prompt engineering, and career development.
          </p>
        </div>

        {/* 4 Premium Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card3D key={cert.id} depth={15} maxTilt={8}>
              <div className="matte-card rounded-2xl p-6 sm:p-7 group h-full flex flex-col justify-between relative overflow-hidden">
                
                {/* Certificate Placeholder visual thumbnail */}
                <div className="relative w-full h-36 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 mb-5 flex flex-col items-center justify-center p-4 text-center overflow-hidden group-hover:border-[#D6AD60]/40 transition-colors">
                  
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full border border-[#D6AD60]/10 flex items-center justify-center pointer-events-none">
                    <Award className="w-16 h-16 text-[#D6AD60]/10" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#15191B] border border-[#D6AD60]/40 flex items-center justify-center text-[#D6AD60] mb-2 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono text-[#D6AD60] font-semibold tracking-wider uppercase">
                    Certificate of Completion
                  </span>
                  <span className="text-[11px] text-[#A7AAA8] font-mono mt-0.5">
                    {cert.title}
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#0B0D0E] border border-[#D6AD60]/20 text-[#D6AD60]">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-[#A7AAA8] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AD60]" /> Verified Program
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#A7AAA8] leading-relaxed mb-4">
                    {cert.focus}
                  </p>
                </div>

                {/* Footer preview button */}
                <div className="pt-4 border-t border-[#D6AD60]/15 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#A7AAA8]">
                    {cert.issuer}
                  </span>
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D6AD60] hover:text-[#F5E6C8] font-semibold"
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
          <div className="relative w-full max-w-lg bg-[#15191B] border border-[#D6AD60]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#D6AD60]/20">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D6AD60]" />
                <h3 className="text-lg font-bold text-[#F5F5F0]">Credential Verification</h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded-lg bg-[#0B0D0E] text-[#A7AAA8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 p-6 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-center space-y-3 relative overflow-hidden">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#15191B] border-2 border-[#D6AD60] flex items-center justify-center text-[#D6AD60] shadow-[0_0_15px_rgba(214,173,96,0.2)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono text-[#D6AD60] uppercase tracking-widest">
                Certificate Awarded To
              </div>
              <div className="text-2xl font-extrabold text-[#F5F5F0]">
                Prince Kumar
              </div>
              <div className="text-xs font-mono text-[#A7AAA8]">
                Lakshami Narayan College Of Technology And Science, Bhopal
              </div>
              <div className="text-sm font-semibold text-[#F5E6C8] pt-1">
                {activeCert.title}
              </div>
              <p className="text-xs text-[#A7AAA8] max-w-sm mx-auto pt-2">
                {activeCert.focus}
              </p>
              <div className="text-[11px] font-mono text-[#A7AAA8]/60 pt-3 border-t border-[#D6AD60]/10">
                Issued for verified technical competency and hands-on participation.
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs"
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
