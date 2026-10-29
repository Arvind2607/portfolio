'use client';

import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './project-card';
import { Github, ArrowUpRight, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  githubUsername: string;
}

export function ProjectsSection({ projects, githubUsername }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'featured' | 'all'>('featured');

  const displayedProjects =
    filter === 'featured'
      ? projects.filter((p) => p.featured).slice(0, 3)
      : projects;

  return (
    <section id="projects" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative accent glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#e50920]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-tight">
              SELECTED PROJECTS
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mt-2">
              Highlighting real-time machine learning inference, geospatial routing HUDs, and automotive telemetry consoles.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Filter Toggle */}
            <div className="flex p-1 rounded-full bg-[#111318] border border-white/10 text-xs font-mono">
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  filter === 'featured'
                    ? 'bg-[#e50920] text-white font-semibold shadow-[0_0_12px_rgba(229,9,32,0.4)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Featured (3)
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  filter === 'all'
                    ? 'bg-[#e50920] text-white font-semibold shadow-[0_0_12px_rgba(229,9,32,0.4)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All Projects ({projects.length})
              </button>
            </div>

            {/* GitHub Profile Button */}
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#e50920]/40 text-xs font-mono uppercase tracking-wider text-gray-200 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#e50920]" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid (3 cards in desktop layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

