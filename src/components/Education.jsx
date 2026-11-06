import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Calendar, Edit3, Check, MapPin, School } from 'lucide-react';
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
    <section id="education" className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Undergraduate foundations in Computer Science Engineering principles and applied computing.
          </p>
        </div>

        {/* Education 3D Tilt Card */}
        <div className="max-w-3xl mx-auto">
          <Card3D depth={18} maxTilt={8}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 relative">
              
              {/* Header with edit button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <School className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                      {education.branch}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
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
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-cyan-400 text-xs flex items-center gap-1 transition-colors"
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
              <div className="mb-6">
                <div className="text-xs font-mono uppercase text-slate-500 mb-1">
                  Institution / University:
                </div>
                {isEditing ? (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      value={tempInstitution}
                      onChange={(e) => setTempInstitution(e.target.value)}
                      className="flex-1 bg-slate-950 border border-cyan-500 rounded-lg px-3 py-2 text-white text-sm font-mono focus:outline-none ring-1 ring-cyan-400"
                      placeholder="Enter your college / university name"
                      autoFocus
                    />
                    <button
                      onClick={handleSave}
                      className="px-3 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-base text-slate-200 font-medium">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{institution}</span>
                  </div>
                )}
                <p className="text-[11px] font-mono text-slate-500 mt-1 italic">
                  * Editable notice: Accurate academic details kept editable per guidelines. No fabricated CGPA or ranks.
                </p>
              </div>

              {/* Relevant Academic Coursework */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Undergraduate Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
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

