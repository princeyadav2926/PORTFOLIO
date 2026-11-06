import React from 'react';
import { X, Download, Printer, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, intro, projects, education } = portfolioData;

  const handleDownload = () => {
    const content = `=====================================================
PRINCE KUMAR - RESUME
Role: ${personal.role}
Education: Lakshami Narayan College Of Technology And Science, Bhopal (LNCTS)
Degree: ${education.degree} in ${education.branch}
Location: ${personal.location}
LinkedIn: ${personal.linkedinUrl}
GitHub: ${personal.githubUrl}
Email: ${personal.email}
=====================================================

PROFESSIONAL SUMMARY
${intro.aboutMeFull}

EDUCATION
- Institution: Lakshami Narayan College Of Technology And Science, Bhopal
- Program: ${education.degree} - ${education.branch}
- Status: ${education.status}

TECHNICAL CORE
- Programming Languages: C++, Java, Python, JavaScript
- Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL, SQLite
- DSA & Computer Science: Arrays, Strings, Linked Lists, Stack, Queue, Trees, Searching, Sorting, Recursion, OOP, DBMS
- Developer Tools: Git, GitHub, VS Code, Google Antigravity, Vercel
- AI & Emerging: Generative AI, Prompt Engineering, AI Tools

FEATURED PROJECTS
1. Opportunity Radar
   Category: Full Stack & Opportunity Discovery Platform
   Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS
   Description: Intelligent student opportunity discovery platform for internships, hackathons, and scholarships.

2. TerraForge
   Category: Environmental Forecasting & Atmospheric Analysis
   Stack: Python, React.js, Data Modeling, Environmental APIs
   Description: Air Pollution Weather Coupled Forecasting System focused on Delhi NCR.

3. Smart Shopping
   Category: Full Stack Web Application
   Stack: React.js, JavaScript, Node.js, CSS3, REST APIs
   Description: E-commerce product discovery and shopping cart platform.

4. DSA and Programming Practice
   Category: Algorithmic Problem Solving
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
    link.download = 'Prince_Kumar_Resume_LNCTS.txt';
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
      <div className="relative w-full max-w-3xl bg-[#15191B] border border-[#D6AD60]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0D0E] border-b border-[#D6AD60]/20">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D6AD60]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F0]">
              Prince Kumar &mdash; Resume Preview (LNCTS Bhopal)
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-[#15191B] text-[#A7AAA8] hover:text-[#F5F5F0] transition-colors hidden sm:flex"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#15191B] text-[#A7AAA8] hover:text-[#F5F5F0] transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#A7AAA8] text-xs sm:text-sm bg-[#0B0D0E] font-sans">
          
          {/* Header */}
          <div className="border-b border-[#D6AD60]/15 pb-4">
            <h1 className="text-2xl font-extrabold text-[#F5F5F0]">Prince Kumar</h1>
            <p className="text-[#D6AD60] font-mono text-xs mt-0.5">{personal.role}</p>
            <p className="text-[#A7AAA8] font-medium text-xs mt-1">
              Lakshami Narayan College Of Technology And Science, Bhopal
            </p>
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#A7AAA8]/60 font-mono">
              <span>{personal.location}</span>
              <span>&bull;</span>
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D6AD60]">
                LinkedIn Profile
              </a>
              <span>&bull;</span>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#D6AD60]">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-wider font-mono text-[#D6AD60] mb-1">
              Professional Summary
            </h4>
            <p className="text-[#A7AAA8] leading-relaxed text-xs">
              {intro.aboutMeFull}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-wider font-mono text-[#D6AD60] mb-1">
              Education
            </h4>
            <div className="bg-[#15191B] p-3.5 rounded-lg border border-[#D6AD60]/20">
              <div className="font-bold text-[#F5F5F0] text-sm">
                Lakshami Narayan College Of Technology And Science, Bhopal
              </div>
              <div className="text-[#D6AD60] font-mono text-xs mt-0.5">
                {education.degree} in {education.branch}
              </div>
              <div className="text-[#A7AAA8] text-xs mt-1">{education.status}</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-wider font-mono text-[#D6AD60] mb-2">
              Technical Core
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#15191B] border border-[#D6AD60]/15">
                <span className="font-semibold text-[#F5F5F0] block">Languages:</span>
                <span className="text-[#A7AAA8]">C++, Java, Python, JavaScript (ES6+)</span>
              </div>
              <div className="p-2.5 rounded bg-[#15191B] border border-[#D6AD60]/15">
                <span className="font-semibold text-[#F5F5F0] block">Full Stack:</span>
                <span className="text-[#A7AAA8]">React.js, Tailwind CSS, Node.js, Express.js, REST APIs</span>
              </div>
              <div className="p-2.5 rounded bg-[#15191B] border border-[#D6AD60]/15">
                <span className="font-semibold text-[#F5F5F0] block">Databases:</span>
                <span className="text-[#A7AAA8]">MongoDB, MySQL, SQLite</span>
              </div>
              <div className="p-2.5 rounded bg-[#15191B] border border-[#D6AD60]/15">
                <span className="font-semibold text-[#F5F5F0] block">DSA & Tools:</span>
                <span className="text-[#A7AAA8]">Data Structures, Algorithms, Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-wider font-mono text-[#D6AD60] mb-2">
              Key Projects
            </h4>
            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-[#15191B] border border-[#D6AD60]/15">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#F5F5F0]">{proj.title}</span>
                    <span className="text-[10px] font-mono text-[#D6AD60]">{proj.category}</span>
                  </div>
                  <p className="text-[#A7AAA8] text-xs mt-1 leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
