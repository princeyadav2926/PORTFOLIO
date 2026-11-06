import React, { useState } from 'react';
import { GraduationCap, BookOpen, Edit3, Check, MapPin, School, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Education() {
  const { education } = portfolioData;

  const [institution, setInstitution] = useState(() => {
    return localStorage.getItem('pk_education_institution') || education.institution;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempInstitution, setTempInstitution] = useState(institution);

  const handleSave = () => {
    setInstitution(tempInstitution);
    localStorage.setItem('pk_education_institution', tempInstitution);
    setIsEditing(false);
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0B0D0E] border-t border-[#D6AD60]/20 subtle-matte-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Formal <span className="text-gradient-gold">Education</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            Undergraduate foundations in Computer Science and Engineering at LNCTS Bhopal.
          </p>
        </div>

        {/* Education 3D Tilt Card */}
        <div className="max-w-4xl mx-auto">
          <Card3D depth={18} maxTilt={8}>
            <div className="matte-card rounded-2xl p-6 sm:p-8 relative">
              
              {/* Header with edit button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D6AD60]/20">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60] shadow-md">
                    <School className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0]">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#D6AD60] font-mono mt-0.5">
                      {education.branch}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-mono">
                    {education.status}
                  </span>
                  
                  <button
                    onClick={() => {
                      if (isEditing) {
                        handleSave();
                      } else {
                        setTempInstitution(institution);
                        setIsEditing(true);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#A7AAA8] hover:text-[#D6AD60] text-xs flex items-center gap-1 transition-colors"
                    title={isEditing ? 'Save college' : 'Edit college name'}
                  >
                    {isEditing ? <Check className="w-4 h-4 text-emerald-400" /> : <Edit3 className="w-4 h-4" />}
                    <span className="text-[11px] font-mono hidden sm:inline">
                      {isEditing ? 'Save' : 'Edit College'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Institution Row */}
              <div className="mb-6 space-y-2">
                <div className="text-xs font-mono uppercase text-[#A7AAA8]/60">
                  Institution / University:
                </div>
                {isEditing ? (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      value={tempInstitution}
                      onChange={(e) => setTempInstitution(e.target.value)}
                      className="flex-1 bg-[#0B0D0E] border border-[#D6AD60] rounded-lg px-3 py-2 text-[#F5F5F0] text-sm font-mono focus:outline-none ring-1 ring-[#D6AD60]"
                      placeholder="Lakshami Narayan College Of Technology And Science, Bhopal"
                      autoFocus
                    />
                    <button
                      onClick={handleSave}
                      className="px-3.5 py-2 rounded-lg bg-[#D6AD60] text-[#0B0D0E] font-bold text-xs"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20">
                    <div className="flex items-center gap-2.5 text-base sm:text-lg text-[#F5F5F0] font-bold">
                      <Building className="w-5 h-5 text-[#D6AD60] shrink-0" />
                      <span>{institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A7AAA8] mt-2 pl-7">
                      <MapPin className="w-3.5 h-3.5 text-[#D6AD60] shrink-0" />
                      <span>Bhopal, Madhya Pradesh, India &bull; LNCTS Bhopal</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D6AD60] tracking-wider mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Undergraduate Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/15 text-xs font-mono text-[#F5E6C8]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Card3D>
        </div>

      </div>
    </section>
  );
}
