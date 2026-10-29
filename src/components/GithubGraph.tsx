import React, { useState } from 'react';

interface GithubGraphProps {
  username: string;
  profileUrl: string;
}

export const GithubGraph: React.FC<GithubGraphProps> = ({ username, profileUrl }) => {
  const [imgError, setImgError] = useState(false);
  const isPlaceholder = username === 'YOUR_GITHUB_USERNAME' || username === 'arvind-s';

  // Reliable public GitHub contribution chart embed (Crimson theme #e51b24)
  const chartUrl = `https://ghchart.rshah.org/e51b24/${username}`;

  return (
    <section id="github" className="py-24 bg-[#0d0e12] relative border-b border-white/10" aria-label="GitHub Activity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display font-black text-2xl text-[#e51b24]">06.</span>
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase whitespace-nowrap">
            OPEN SOURCE &amp; GITHUB
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <p className="text-xs sm:text-sm text-[#8e92a0] max-w-2xl mb-10">
          Continuous coding activity and version-controlled repositories. Configurable via <code className="text-[#e51b24] bg-white/5 px-1.5 py-0.5 rounded">githubUsername</code> in <code className="text-[#e51b24] bg-white/5 px-1.5 py-0.5 rounded">portfolioData.ts</code>.
        </p>

        {/* Heatmap Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#14161f] border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              {/* GitHub SVG Icon */}
              <div className="w-10 h-10 rounded-full bg-[#0e1015] border border-white/10 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  GitHub Contribution Heatmap
                </h3>
                <span className="text-xs text-[#8e92a0]">
                  User: <span className="text-[#e51b24] font-semibold">@{username}</span>
                </span>
              </div>
            </div>

            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1e27] hover:bg-[#e51b24] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#e51b24]"
            >
              <span>Visit GitHub Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Heatmap Graphic or Graceful Fallback Banner */}
          <div className="w-full overflow-x-auto py-2 bg-[#0a0b0e] rounded-lg p-4 border border-white/5">
            {!imgError && !isPlaceholder ? (
              <img 
                src={chartUrl} 
                alt={`${username}'s GitHub Contribution Graph`}
                onError={() => setImgError(true)}
                className="w-full min-w-[700px] filter contrast-125"
                loading="lazy"
              />
            ) : (
              /* Informative, honest fallback banner when username is still a placeholder */
              <div className="py-8 px-4 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#e51b24]/10 border border-[#e51b24]/30 flex items-center justify-center text-[#e51b24] mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-sm mb-1">
                  GitHub Profile Integration Ready
                </h4>
                <p className="text-xs text-[#8e92a0] max-w-md leading-relaxed mb-4">
                  Set your actual GitHub handle in <code className="text-[#e51b24]">src/data/portfolioData.ts</code> (`githubUsername`) to automatically display your real live contribution heatmap.
                </p>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#e51b24] hover:underline"
                >
                  Explore Repositories on GitHub →
                </a>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#5c6070] font-semibold uppercase tracking-wider">
            <span>Verified Public Commits &amp; Pull Requests</span>
            <span>Real-time GitHub Graph Embed</span>
          </div>
        </div>

      </div>
    </section>
  );
};
