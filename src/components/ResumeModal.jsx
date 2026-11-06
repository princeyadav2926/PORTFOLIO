import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, intro, skills, projects, education, certifications } = portfolioData;

  const handleDownload = () => {
    // Generate clean text-based formatted resume file
    const content = `=====================================================
PRINCE KUMAR - RESUME
Role: ${personal.role}
Location: ${personal.location}
LinkedIn: ${personal.linkedinUrl}
GitHub: ${personal.githubUrl}
=====================================================

PROFESSIONAL SUMMARY
${intro.aboutMeFull}

EDUCATION
${education.degree} in ${education.branch}
Status: ${education.status}

TECHNICAL SKILLS
- Programming Languages: C++, Java, Python, JavaScript
- Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL, SQLite
- DSA & CS: Arrays, Strings, Linked Lists, Stack, Queue, Trees, Searching, Sorting, Recursion, OOP, DBMS
- Developer Tools: Git, GitHub, VS Code, Google Antigravity, Vercel
- AI & Emerging: Generative AI, Prompt Engineering, AI Tools

FEATURED PROJECTS
1. Opportunity Radar
   Category: AI | Full Stack Development | Career Intelligence
   Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS
   Description: Intelligent student opportunity discovery platform for internships, hackathons, and scholarships.

2. TerraForge
   Category: AI | Environmental Technology
   Stack: Python, React.js, Data Modeling, Environmental APIs
   Description: Air Pollution Weather Coupled Forecasting System focused on Delhi NCR.

3. Smart Shopping
   Category: Full Stack Web Development
   Stack: React.js, JavaScript, Node.js, CSS3, REST APIs
   Description: E-commerce product discovery and shopping cart platform.

4. DSA and Programming Practice
   Category: Problem Solving
   Stack: C++, Java, Algorithms
   Description: Implementation of fundamental data structures and algorithmic problems.

CERTIFICATIONS
- Prompt Engineering
- ChatGPT and AI Tools Workshop
- Data Analytics with Generative AI
- Professional Networking for Career Growth
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prince_Kumar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Prince Kumar &mdash; Resume Preview
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors hidden sm:flex"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm bg-[#060a12] font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <h1 className="text-2xl font-extrabold text-white">Prince Kumar</h1>
            <p className="text-cyan-400 font-mono text-xs mt-0.5">{personal.role}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-400 font-mono">
              <span>{personal.location}</span>
              <span>&bull;</span>
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                LinkedIn Profile
              </a>
              <span>&bull;</span>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono text-cyan-400 mb-1">
              Professional Summary
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              {intro.aboutMeFull}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono text-cyan-400 mb-1">
              Education
            </h4>
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              <div className="font-semibold text-white text-xs">{education.degree} - {education.branch}</div>
              <div className="text-slate-400 text-xs mt-0.5">{education.status}</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono text-cyan-400 mb-2">
              Technical Core
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Languages:</span>
                <span className="text-slate-400">C++, Java, Python, JavaScript (ES6+)</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Full Stack:</span>
                <span className="text-slate-400">React.js, Tailwind CSS, Node.js, Express.js, REST APIs</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Databases:</span>
                <span className="text-slate-400">MongoDB, MySQL, SQLite</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">DSA & Tools:</span>
                <span className="text-slate-400">Data Structures, Algorithms, Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider font-mono text-cyan-400 mb-2">
              Key Projects
            </h4>
            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

