'use client';

import React, { useState, useRef } from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './project-card';
import { Github, ArrowUpRight, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  githubUsername: string;
}

export function ProjectsSection({ projects, githubUsername }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'featured' | 'all'>('featured');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const displayedProjects =
    filter === 'featured'
      ? projects.filter((p) => p.featured).slice(0, 3)
      : projects;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), displayedProjects.length - 1));
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative accent glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#e50920]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-6">
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

            {/* Mobile Carousel Arrow Controls */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous project"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#e50920]/60 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next project"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#e50920]/60 active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop GitHub Profile Button */}
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

        {/* Mobile Swipe Guidance Notice */}
        <div className="flex md:hidden items-center justify-between text-[11px] font-mono text-gray-500 mb-3 px-1">
          <span>&larr; SWIPE CARDS HORIZONTALLY &rarr;</span>
          <span className="text-[#e50920] font-semibold">{activeIndex + 1} / {displayedProjects.length}</span>
        </div>

        {/* PROJECTS CAROUSEL (Mobile side-by-side swipeable carousel / Desktop 3-column grid) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-4 pt-1 snap-x snap-mandatory gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center flex flex-col flex-shrink-0 md:flex-shrink"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {displayedProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.clientWidth * 0.85;
                  scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                }
              }}
              aria-label={`Jump to project ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-[#e50920] shadow-[0_0_8px_#e50920]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
