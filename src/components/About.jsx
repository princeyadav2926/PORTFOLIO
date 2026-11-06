import React from 'react';
import { User, Code, Cpu, Target, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function About() {
  const { intro } = portfolioData;

  const corePillars = [
    {
      title: "Full Stack Engineering",
      desc: "Creating intuitive frontend interfaces in React and linking them to scalable REST APIs and resilient database backends.",
      icon: Code,
      badge: "Web Systems"
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Developing strong analytical problem-solving patterns in C++ and Java with rigorous attention to time and space complexity.",
      icon: Cpu,
      badge: "Core CS"
    },
    {
      title: "AI & Emerging Tooling",
      desc: "Exploring generative AI integration, prompt design principles, and modern developer productivity environments.",
      icon: Sparkles,
      badge: "Modern Tech"
    },
    {
      title: "Impact-Driven Engineering",
      desc: "Committed to practical applications like Opportunity Radar and TerraForge that address genuine community and environmental challenges.",
      icon: Target,
      badge: "Real-World Focus"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#111416] border-t border-b border-[#D6AD60]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            About <span className="text-gradient-gold">Prince Kumar</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            B.Tech Computer Science Engineering student at Lakshami Narayan College Of Technology And Science, Bhopal.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="matte-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D6AD60]" />
                <span>My Background & Vision</span>
              </h3>

              <div className="space-y-4 text-[#A7AAA8] text-sm sm:text-base leading-relaxed">
                <p>
                  {intro.greeting} I am a Computer Science Engineering student at <strong className="text-[#D6AD60]">Lakshami Narayan College Of Technology And Science, Bhopal (LNCTS)</strong>, passionate about Full Stack Development, Data Structures and Algorithms, and scalable software systems.
                </p>
                <p>
                  I enjoy developing practical applications, solving programming problems, and exploring innovative ideas. My goal is to become an accomplished software engineer and build impactful real-world solutions.
                </p>
                <p className="p-4 rounded-xl bg-[#0B0D0E] border-l-4 border-[#D6AD60] text-[#F5F5F0] font-medium">
                  {intro.aboutMeFull}
                </p>
              </div>

              {/* Developer Philosophy checklist */}
              <div className="pt-4 border-t border-[#D6AD60]/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#A7AAA8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
                  <span>C++ & Java Core Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
                  <span>React.js & Node.js Full Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
                  <span>Continuous Algorithmic Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
                  <span>Lakshami Narayan College (LNCTS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars 3D Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card3D key={idx} depth={15} maxTilt={8}>
                  <div className="matte-card rounded-xl p-5 group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/20 text-[#D6AD60] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#111416] text-[#D6AD60] border border-[#D6AD60]/20">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#F5F5F0] mb-1.5 group-hover:text-[#D6AD60] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#A7AAA8] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </Card3D>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
