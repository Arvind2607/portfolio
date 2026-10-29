import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0e0e10] border border-white/15 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141418]">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-2xl text-[#e50920] leading-none">
              {project.number}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e50920]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#e50920]"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Thumbnail preview */}
          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#16161c] border border-white/10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 id="modal-title" className="font-display font-black text-3xl sm:text-4xl text-white tracking-wide uppercase mb-1">
              {project.title}
            </h3>
            <p className="text-[#a5a5a5] text-xs font-bold tracking-widest uppercase">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e50920]">
              SYSTEM OVERVIEW &amp; OBJECTIVE
            </h4>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics / Highlights */}
          {project.metrics && (
            <div className="p-3.5 rounded-lg bg-[#141418] border border-[#e50920]/30 text-xs text-[#f5f5f5] flex items-start gap-2.5">
              <svg className="w-4 h-4 text-[#e50920] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#888888] mb-2.5">
              TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded bg-[#18181e] border border-white/10 text-xs font-semibold text-white tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#141418] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e50920] hover:bg-[#ff263b] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(229,9,32,0.4)]"
              >
                <span>Live Demo</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e1e24] hover:bg-[#282832] text-white border border-white/15 hover:border-[#e50920] text-xs font-bold tracking-wider uppercase transition-all"
              >
                <svg className="w-4 h-4 text-[#e50920]" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-[#888888] hover:text-white uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
