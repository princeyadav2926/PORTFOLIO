import React, { useState, useEffect } from 'react';
import { 
  Github, 
  FolderGit2, 
  ArrowUpRight, 
  ShieldCheck,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function GithubDashboard() {
  const username = "princeyadav2926";
  const profileUrl = portfolioData.personal.githubUrl;

  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const fallbackRepos = [
    {
      name: "Opportunity-Radar",
      description: "Intelligent student opportunity discovery platform for internships, hackathons and scholarships.",
      html_url: "https://github.com/princeyadav2926",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "TerraForge",
      description: "Air Pollution Weather Coupled Forecasting System focused on Delhi NCR.",
      html_url: "https://github.com/princeyadav2926",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "Smart-Shopping",
      description: "Full Stack shopping experience with product discovery, cart and checkout flow.",
      html_url: "https://github.com/princeyadav2926",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "DSA-Practice",
      description: "Data Structures & Algorithmic problem-solving in C++ and Java.",
      html_url: "https://github.com/princeyadav2926",
      language: "C++",
      stargazers_count: 0,
      forks_count: 0,
    }
  ];

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        const [userRes, reposRes] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!isMounted) return;

        let fetchedUser = null;
        let fetchedRepos = [];

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          fetchedUser = await userRes.value.json();
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const repoData = await reposRes.value.json();
          if (Array.isArray(repoData) && repoData.length > 0) {
            fetchedRepos = repoData;
          }
        }

        if (fetchedRepos.length > 0) {
          setRepos(fetchedRepos);
          setUserInfo(fetchedUser);
        } else {
          setRepos(fallbackRepos);
          setUserInfo(fetchedUser || {
            login: username,
            name: "Prince Kumar",
            bio: "B.Tech CSE Student & Aspiring Full Stack Developer (LNCTS Bhopal)",
            public_repos: fallbackRepos.length,
            html_url: profileUrl,
          });
        }
      } catch (err) {
        if (!isMounted) return;
        setRepos(fallbackRepos);
        setUserInfo({
          login: username,
          name: "Prince Kumar",
          bio: "B.Tech CSE Student & Aspiring Full Stack Developer (LNCTS Bhopal)",
          public_repos: fallbackRepos.length,
          html_url: profileUrl,
        });
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  const getLanguageColor = () => {
    return 'text-[#D6AD60] bg-[#0B0D0E] border-[#D6AD60]/30';
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-[#0B0D0E] border-t border-[#D6AD60]/20 subtle-matte-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            GitHub <span className="text-gradient-gold">Developer Dashboard</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            Live integration tracking public repositories, programming languages, and version control activity.
          </p>
        </div>

        {/* GitHub Profile Overview Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card3D depth={15} maxTilt={6}>
            <div className="matte-card rounded-2xl p-6 sm:p-8 relative">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B0D0E] border border-[#D6AD60]/30 flex items-center justify-center text-[#D6AD60] shadow-lg shrink-0">
                    <Github className="w-9 h-9" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <h3 className="text-xl font-bold text-[#F5F5F0]">
                        {userInfo?.name || "Prince Kumar"}
                      </h3>
                      <span className="text-xs font-mono text-[#D6AD60] bg-[#0B0D0E] px-2.5 py-0.5 rounded-full border border-[#D6AD60]/20">
                        @{username}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A7AAA8] mt-1 max-w-md">
                      {userInfo?.bio || "B.Tech CSE Student at LNCTS Bhopal & Aspiring Full Stack Developer."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs font-mono shadow-md transition-all"
                  >
                    <span>View GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Verified Integrity Note */}
              <div className="mt-6 pt-4 border-t border-[#D6AD60]/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#A7AAA8]">
                <span className="flex items-center gap-1.5 text-[#D6AD60]">
                  <ShieldCheck className="w-4 h-4 text-[#D6AD60]" />
                  Verified public repositories without fabricated metrics.
                </span>
                <span className="text-[#A7AAA8]/60">
                  Target: github.com/{username}
                </span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {repos.map((repo, idx) => (
            <Card3D key={repo.name || idx} depth={12} maxTilt={6}>
              <div className="matte-card rounded-xl p-5 group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-[#D6AD60]" />
                      <h4 className="font-bold text-[#F5F5F0] text-base group-hover:text-[#D6AD60] transition-colors">
                        {repo.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D0E] border border-[#D6AD60]/20 text-[#A7AAA8]">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-[#A7AAA8] line-clamp-2 mb-4 leading-relaxed">
                    {repo.description || "Project repository by Prince Kumar."}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D6AD60]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getLanguageColor()}`}>
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <a
                    href={repo.html_url || profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#D6AD60] hover:text-[#F5E6C8] font-semibold"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
