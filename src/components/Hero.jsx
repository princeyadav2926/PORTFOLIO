import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  School, 
  Terminal, 
  Code2, 
  Sparkles, 
  Camera, 
  Upload, 
  Check, 
  Cpu, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';
import Hero3DCanvas from './Hero3DCanvas';
import TechLogo from './TechLogo';

export default function Hero({ onOpenResume }) {
  const { hero, personal } = portfolioData;
  const roles = hero.animatedRoles;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Avatar Photo state: checks localStorage, fallback to GitHub/LinkedIn avatar URL
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem('pk_custom_avatar') || personal.avatarUrl;
  });
  const [avatarError, setAvatarError] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoUrlInput, setPhotoUrlInput] = useState('');
  const fileInputRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  // Handle local image file upload (e.g. downloading from LinkedIn and uploading here)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result && typeof result === 'string') {
          setAvatar(result);
          localStorage.setItem('pk_custom_avatar', result);
          setAvatarError(false);
          setShowPhotoModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image URL submission
  const handleSavePhotoUrl = () => {
    if (photoUrlInput.trim()) {
      setAvatar(photoUrlInput.trim());
      localStorage.setItem('pk_custom_avatar', photoUrlInput.trim());
      setAvatarError(false);
      setShowPhotoModal(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0B0D0E] subtle-matte-grid ambient-champagne-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] bg-[#D6AD60]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Roles, Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* College & Status Banner */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#D6AD60]/20 text-[#A7AAA8] text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex items-center gap-1.5 text-[#D6AD60] font-mono font-semibold">
                <School className="w-3.5 h-3.5" />
                LNCTS Bhopal
              </span>
              <span className="text-[#A7AAA8]/40 hidden sm:inline">&bull;</span>
              <span className="text-[#A7AAA8] hidden sm:inline">{personal.college}</span>
              <span className="text-[#A7AAA8]/40">&bull;</span>
              <span className="flex items-center gap-1 text-[#F5E6C8] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#D6AD60] animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading: White heading with Champagne Gold name highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F0] leading-tight">
              Hi, I'm <span className="text-gradient-gold">Prince Kumar</span>
            </h1>

            {/* Animated Dynamic Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-[#F5F5F0] min-h-[44px]">
              <span className="text-[#D6AD60]">&gt;</span>
              <span className="text-[#F5F5F0] border-b-2 border-[#D6AD60]/80 pb-0.5">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-[#D6AD60] inline-block animate-pulse ml-0.5" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A7AAA8] max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* College Info Box */}
            <div className="p-3.5 rounded-xl bg-[#15191B] border border-[#D6AD60]/20 text-xs sm:text-sm text-[#A7AAA8] flex items-start gap-2.5">
              <School className="w-4 h-4 text-[#D6AD60] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F5F5F0]">Lakshami Narayan College Of Technology And Science, Bhopal</strong>
                <span className="block text-xs text-[#A7AAA8] font-mono mt-0.5">
                  B.Tech in Computer Science and Engineering (Pursuing)
                </span>
              </div>
            </div>

            <p className="text-sm font-mono text-[#F5E6C8] italic border-l-2 border-[#D6AD60]/60 pl-3">
              "{personal.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-sm shadow-lg shadow-[#D6AD60]/15 hover:shadow-[#D6AD60]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#15191B] border border-[#D6AD60]/40 hover:border-[#D6AD60] text-[#F5F5F0] hover:text-[#D6AD60] font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#D6AD60]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent border border-[#D6AD60]/30 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-[#D6AD60]" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Tech Stack Badges with Official Logos */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[#A7AAA8]">
              <span className="text-[#A7AAA8]/60 mr-1">Core Tech:</span>
              {[
                { name: 'C++', label: 'C++' },
                { name: 'Java', label: 'Java' },
                { name: 'Python', label: 'Python' },
                { name: 'JavaScript', label: 'JavaScript' },
                { name: 'React.js', label: 'React.js' },
                { name: 'Node.js', label: 'Node.js' },
                { name: 'MongoDB', label: 'MongoDB' },
                { name: 'Git', label: 'Git' }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 text-[#F5E6C8] hover:border-[#D6AD60]/50 transition-colors shadow-sm"
                >
                  <TechLogo name={tech.name} size={14} className="w-3.5 h-3.5 shrink-0" />
                  <span>{tech.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Levitating Gyroscope + Floating 3D Badges + LinkedIn Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* --- 3D FLOATING / LEVITATING BADGES ("Udane Wale" 3D Elements) --- */}
            
            {/* Floating Badge 1 (Top Left) */}
            <div className="absolute -top-6 -left-6 z-30 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#15191B]/95 border border-[#D6AD60]/40 shadow-floating-3d backdrop-blur-md animate-float-1 pointer-events-none">
              <div className="p-1.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60]">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#F5F5F0] block">Full Stack Developer</span>
                <span className="text-[10px] font-mono text-[#D6AD60]">MERN & REST APIs</span>
              </div>
            </div>

            {/* Floating Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 z-30 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#15191B]/95 border border-[#D6AD60]/40 shadow-floating-3d backdrop-blur-md animate-float-2 pointer-events-none">
              <div className="p-1.5 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#F5F5F0] block">LNCTS Bhopal</span>
                <span className="text-[10px] font-mono text-[#D6AD60]">B.Tech CSE Pursuing</span>
              </div>
            </div>

            {/* Floating Badge 3 (Top Right) */}
            <div className="absolute top-10 -right-8 z-30 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#15191B]/95 border border-[#D6AD60]/30 shadow-floating-3d backdrop-blur-md animate-float-3 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-[#D6AD60]" />
              <span className="text-xs font-mono text-[#F5E6C8]">DSA in C++ & Java</span>
            </div>

            {/* Main 3D Card */}
            <Card3D className="w-full max-w-md relative z-20" depth={25} maxTilt={8}>
              <div className="matte-card rounded-2xl p-6 relative overflow-hidden">
                
                {/* 3D Canvas embedded inside dark charcoal viewport */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden bg-[#111416] border border-[#D6AD60]/20 flex items-center justify-center">
                  <Hero3DCanvas />
                </div>

                {/* Profile Card Footer with Prince Kumar's Photo */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    
                    {/* Name & College details */}
                    <div>
                      <h2 className="text-base font-bold text-[#F5F5F0] tracking-tight flex items-center gap-2">
                        Prince Kumar
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-[#111416] border border-[#D6AD60]/30 text-[#D6AD60]">
                          LNCTS
                        </span>
                      </h2>
                      <p className="text-xs text-[#A7AAA8] mt-0.5">
                        B.Tech Computer Science Engineering
                      </p>
                    </div>

                    {/* Prince Kumar's Profile Photo Frame */}
                    <div className="relative group shrink-0">
                      <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-[#D6AD60] to-[#F5E6C8] shadow-[0_0_15px_rgba(214,173,96,0.3)]">
                        <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#15191B] flex items-center justify-center relative">
                          {!avatarError && avatar ? (
                            <img
                              src={avatar}
                              alt="Prince Kumar"
                              onError={() => setAvatarError(true)}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-mono font-bold text-base text-[#D6AD60] bg-[#111416]">
                              PK
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Online Status Dot */}
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D6AD60] border-2 border-[#15191B]" />

                      {/* Photo change hover button */}
                      <button
                        onClick={() => setShowPhotoModal(true)}
                        className="absolute inset-0 rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#D6AD60] transition-opacity cursor-pointer"
                        title="Change / Upload Photo"
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                  {/* Terminal snippet */}
                  <div className="bg-[#0B0D0E] border border-[#D6AD60]/20 rounded-lg p-2.5 font-mono text-xs text-[#A7AAA8] space-y-1">
                    <div className="flex items-center justify-between text-[#A7AAA8] text-[11px] pb-1 border-b border-[#D6AD60]/15">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-[#D6AD60]" />
                        <span>developer_identity.json</span>
                      </div>
                      <button
                        onClick={() => setShowPhotoModal(true)}
                        className="text-[10px] text-[#D6AD60] hover:underline"
                      >
                        Upload Photo
                      </button>
                    </div>
                    <div className="pt-1 text-[11px]">
                      <span className="text-[#D6AD60] font-semibold">institution:</span> "Lakshami Narayan College, Bhopal"
                    </div>
                    <div className="text-[11px]">
                      <span className="text-[#D6AD60] font-semibold">profile:</span> "Full Stack &amp; Algorithms"
                    </div>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

        </div>
      </div>

      {/* Upload / Change Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#15191B] border border-[#D6AD60]/30 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-[#F5F5F0] mb-2">
              Update Profile Photo
            </h3>
            <p className="text-xs text-[#A7AAA8] mb-5">
              Upload your LinkedIn profile picture or enter an image URL to display on your portfolio.
            </p>

            {/* Current photo preview */}
            <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#D6AD60]/40 shrink-0 bg-[#15191B] flex items-center justify-center">
                {!avatarError && avatar ? (
                  <img src={avatar} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-[#D6AD60] font-bold">PK</span>
                )}
              </div>
              <div className="text-xs text-[#A7AAA8]">
                <strong className="text-[#F5F5F0] block">Current Photo</strong>
                <span>Photo will be saved in your browser storage.</span>
              </div>
            </div>

            {/* File Upload Option */}
            <div className="space-y-4">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/30 hover:border-[#D6AD60] text-xs font-mono text-[#F5F5F0] hover:text-[#D6AD60] flex items-center justify-center gap-2 transition-colors"
                >
                  <Upload className="w-4 h-4 text-[#D6AD60]" />
                  <span>Choose Photo File from Device</span>
                </button>
              </div>

              {/* Or URL input */}
              <div className="pt-2">
                <label className="block text-xs font-mono text-[#A7AAA8] mb-1">
                  Or paste Photo URL (LinkedIn / GitHub CDN):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={photoUrlInput}
                    onChange={(e) => setPhotoUrlInput(e.target.value)}
                    placeholder="https://.../profile-photo.jpg"
                    className="flex-1 bg-[#0B0D0E] border border-[#D6AD60]/30 rounded-lg px-3 py-2 text-xs text-[#F5F5F0] font-mono focus:outline-none focus:border-[#D6AD60]"
                  />
                  <button
                    onClick={handleSavePhotoUrl}
                    className="px-3.5 py-2 rounded-lg bg-[#D6AD60] text-[#0B0D0E] font-bold text-xs"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-[#D6AD60]/15 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPhotoModal(false)}
                className="px-4 py-2 rounded-xl bg-[#0B0D0E] text-[#A7AAA8] hover:text-[#F5F5F0] text-xs font-mono"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
