import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
  githubUsername: string;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, githubUsername }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 bg-[#080808] border-b border-white/10"
      aria-label="Selected Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title, Thin Extending Line, View All Link */}
        <div className="flex items-center justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase whitespace-nowrap">
            SELECTED PROJECTS
          </h2>

          <div className="flex-grow h-px bg-white/15 hidden sm:block" />

          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#a5a5a5] hover:text-[#e50920] transition-colors whitespace-nowrap"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* 3 Landscape Project Cards (Desktop 3 Columns, Mobile 1 Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
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
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080808]/80 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#f5f5f5] tracking-wider uppercase">
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

      </div>

      {/* Interactive Modal Dialog */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
