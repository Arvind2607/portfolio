import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl bg-[#0f1117] border border-white/10 hover:border-[#e50920]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(229,9,32,0.15)] focus-within:ring-2 focus-within:ring-[#e50920]">
      {/* Top Media / Thumbnail Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161822]">
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-[10px] tracking-widest text-[#e50920] bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#e50920]/30 uppercase font-semibold">
            {project.number} &bull; {project.category}
          </span>
          {project.statusBadge && (
            <span className="font-mono text-[10px] tracking-wider text-emerald-400 bg-[#080808]/80 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/30">
              {project.statusBadge}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle */}
          <div className="text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1">
            {project.subtitle}
          </div>

          {/* Project Title */}
          <h3 className="font-display text-2xl tracking-wide text-white group-hover:text-[#e50920] transition-colors mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics / Key result if available */}
          {project.metrics && (
            <div className="mb-4 text-[11px] font-mono text-gray-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e50920] shrink-0" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono tracking-wider text-gray-300 bg-[#161822] border border-white/10 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-1.5 focus:outline-none focus:underline"
            >
              <Github className="w-4 h-4 text-[#e50920]" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="text-[11px] text-gray-500 font-mono">Academic Project</span>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-[0_0_12px_rgba(229,9,32,0.3)] focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
