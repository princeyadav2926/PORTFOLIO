import React, { useState } from 'react';
import { Linkedin, ArrowUpRight, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function LinkedInCard() {
  const { personal } = portfolioData;
  const avatar = localStorage.getItem('pk_custom_avatar') || personal.avatarUrl;
  const [avatarErr, setAvatarErr] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden bg-[#111416] border-t border-[#D6AD60]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Card3D depth={20} maxTilt={6}>
          <div className="matte-card rounded-2xl p-6 sm:p-10 relative overflow-hidden group">
            
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D6AD60]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              
              <div className="flex items-center gap-5 text-center md:text-left">
                {/* Photo & LinkedIn Badge */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-[#D6AD60] to-[#F5E6C8] shadow-[0_0_20px_rgba(214,173,96,0.25)]">
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#15191B] flex items-center justify-center">
                      {!avatarErr && avatar ? (
                        <img
                          src={avatar}
                          alt="Prince Kumar LinkedIn"
                          onError={() => setAvatarErr(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-mono font-bold text-lg text-[#D6AD60]">PK</span>
                      )}
                    </div>
                  </div>
                  {/* LinkedIn Logo Tag */}
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/50 text-[#D6AD60] shadow-md">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#0B0D0E] border border-[#D6AD60]/20 text-xs font-mono text-[#D6AD60]">
                    <span className="w-2 h-2 rounded-full bg-[#D6AD60] animate-pulse" />
                    Open to Collaborations
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight">
                    Let's Connect Professionally.
                  </h3>
                  <p className="text-sm text-[#A7AAA8] max-w-md">
                    Connect with Prince Kumar (LNCTS Bhopal) on LinkedIn for engineering internships, software roles, and project collaborations.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto text-center">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-sm shadow-lg shadow-[#D6AD60]/15 hover:shadow-[#D6AD60]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Visit My LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] font-mono text-[#A7AAA8]/60 mt-2">
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
