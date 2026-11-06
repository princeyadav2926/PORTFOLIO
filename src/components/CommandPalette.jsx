import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Terminal, 
  FileText, 
  Code2, 
  FolderGit2, 
  Cpu, 
  Mail, 
  Github, 
  Linkedin, 
  Award, 
  Copy, 
  Check, 
  School 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'View & Download Resume',
      subtitle: 'Prince Kumar - LNCTS Bhopal Resume',
      category: 'Actions',
      icon: FileText,
      run: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address (prince.cse.dev@gmail.com)',
      category: 'Actions',
      icon: Copy,
      run: () => {
        navigator.clipboard.writeText('prince.cse.dev@gmail.com');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'sec-education',
      title: 'Lakshami Narayan College Of Technology And Science, Bhopal',
      subtitle: 'B.Tech CSE undergraduate academic details',
      category: 'Education',
      icon: School,
      run: () => {
        onClose();
        window.location.hash = '#education';
      }
    },
    {
      id: 'sec-projects',
      title: 'Jump to Featured Projects',
      subtitle: 'Opportunity Radar, TerraForge, Smart Shopping, DSA',
      category: 'Navigation',
      icon: FolderGit2,
      run: () => {
        onClose();
        window.location.hash = '#projects';
      }
    },
    {
      id: 'sec-skills',
      title: 'Jump to Technical Skills',
      subtitle: 'C++, Java, React, Node.js, MongoDB, DSA',
      category: 'Navigation',
      icon: Code2,
      run: () => {
        onClose();
        window.location.hash = '#skills';
      }
    },
    {
      id: 'sec-fullstack',
      title: 'Jump to Full Stack Development Journey',
      subtitle: 'Frontend, Backend, Database & Workflow stages',
      category: 'Navigation',
      icon: Terminal,
      run: () => {
        onClose();
        window.location.hash = '#fullstack';
      }
    },
    {
      id: 'sec-dsa',
      title: 'Jump to Data Structures & Algorithms',
      subtitle: '10 Core CS topics & algorithmic complexities',
      category: 'Navigation',
      icon: Cpu,
      run: () => {
        onClose();
        window.location.hash = '#dsa';
      }
    },
    {
      id: 'sec-github',
      title: 'Jump to GitHub Dashboard',
      subtitle: 'Live repository metrics and public code',
      category: 'Navigation',
      icon: Github,
      run: () => {
        onClose();
        window.location.hash = '#github';
      }
    },
    {
      id: 'sec-certifications',
      title: 'Jump to Professional Certifications',
      subtitle: 'Generative AI & technical workshop credentials',
      category: 'Navigation',
      icon: Award,
      run: () => {
        onClose();
        window.location.hash = '#certifications';
      }
    },
    {
      id: 'sec-contact',
      title: 'Jump to Contact Form',
      subtitle: "Send a message or initiate collaboration",
      category: 'Navigation',
      icon: Mail,
      run: () => {
        onClose();
        window.location.hash = '#contact';
      }
    },
    {
      id: 'external-github',
      title: 'Open GitHub Profile in new tab',
      subtitle: 'https://github.com/princeyadav2926',
      category: 'Links',
      icon: Github,
      run: () => {
        window.open(portfolioData.personal.githubUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'external-linkedin',
      title: 'Open LinkedIn Profile in new tab',
      subtitle: 'https://www.linkedin.com/in/prince-kumar-8897a8368/',
      category: 'Links',
      icon: Linkedin,
      run: () => {
        window.open(portfolioData.personal.linkedinUrl, '_blank');
        onClose();
      }
    }
  ];

  const filtered = actions.filter((item) => {
    const text = `${item.title} ${item.subtitle || ''} ${item.category}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#15191B] border border-[#D6AD60]/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#D6AD60]/15 bg-[#0B0D0E]">
          <Search className="w-5 h-5 text-[#D6AD60] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands or sections (e.g. 'LNCTS', 'DSA', 'Resume')..."
            className="w-full bg-transparent text-[#F5F5F0] placeholder-[#A7AAA8]/40 text-sm focus:outline-none font-mono"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-[#A7AAA8] hover:text-[#F5F5F0]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111416] text-[#A7AAA8] border border-[#D6AD60]/20 hidden sm:inline-block">
            ESC
          </span>
        </div>

        {/* Action List */}
        <div className="overflow-y-auto p-2 divide-y divide-[#D6AD60]/10">
          {copied && (
            <div className="p-3 mx-2 my-1 rounded-xl bg-[#111416] border border-[#D6AD60]/40 text-[#D6AD60] text-xs font-mono flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D6AD60]" />
              <span>Email copied to clipboard: prince.cse.dev@gmail.com</span>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="p-8 text-center text-[#A7AAA8] text-sm font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.run}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#111416] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0B0D0E] border border-[#D6AD60]/20 text-[#D6AD60] group-hover:border-[#D6AD60] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#F5F5F0] group-hover:text-[#D6AD60] transition-colors">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-[#A7AAA8] line-clamp-1">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#A7AAA8] px-2 py-0.5 rounded bg-[#0B0D0E] border border-[#D6AD60]/15 shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-[#0B0D0E] border-t border-[#D6AD60]/15 flex items-center justify-between text-[11px] font-mono text-[#A7AAA8]">
          <span>Prince Kumar &bull; LNCTS Bhopal</span>
          <span>Press ↵ to select</span>
        </div>

      </div>
    </div>
  );
}
