import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
  githubUsername: string;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, githubUsername }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // By default show the first 3 matching the reference image layout, or all if toggled
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 bg-[#080808] border-b border-white/10"
      aria-label="Selected Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title, Thin Extending Line, View All Toggle Link */}
        <div className="flex items-center justify-between gap-6 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase whitespace-nowrap">
              SELECTED PROJECTS
            </h2>
            <span className="text-[11px] font-bold text-[#e50920] bg-[#e50920]/10 px-2 py-0.5 rounded">
              {projects.length} Total
            </span>
          </div>

          <div className="flex-grow h-px bg-white/15 hidden sm:block" />

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="text-xs font-bold tracking-[0.18em] uppercase text-[#e50920] hover:text-[#ff263b] transition-colors whitespace-nowrap focus:outline-none"
            >
              {showAll ? 'Show Top 3 Featured' : `View All (${projects.length})`}
            </button>

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#a5a5a5] hover:text-[#e50920] transition-colors whitespace-nowrap"
            >
              <span>GitHub</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Project Cards (3 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-[#e50920] rounded-lg"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`${project.title} - ${project.subtitle}`}
            >
              {/* Landscape Thumbnail with subtle hover zoom */}
              <div className="relative w-full aspect-[16/10] bg-[#111111] border border-white/10 rounded-sm overflow-hidden mb-4 transition-all duration-300 group-hover:border-[#e50920]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Status pill badge on thumbnail */}
                {project.statusBadge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080808]/85 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#f5f5f5] tracking-wider uppercase">
                    {project.statusBadge}
                  </div>
                )}
              </div>

              {/* Bottom Info Row Matching Reference Exactly */}
              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="flex items-baseline gap-3 sm:gap-4">
                  {/* Crimson Large Number */}
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#e50920] leading-none shrink-0">
                    {project.number}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col">
                    <h3 className="font-sans text-white font-extrabold text-sm sm:text-base uppercase tracking-wider group-hover:text-[#e50920] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#a5a5a5] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="text-white/60 group-hover:text-[#e50920] text-sm sm:text-base font-bold transform group-hover:translate-x-1.5 transition-all shrink-0 mt-0.5">
                  →
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button below cards if not showing all */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141418] hover:bg-[#1a1a22] border border-white/15 hover:border-[#e50920] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
            >
              <span>Explore All {projects.length} Projects</span>
              <span className="text-[#e50920]">↓</span>
            </button>
          </div>
        )}

      </div>

      {/* Interactive Modal Dialog */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
