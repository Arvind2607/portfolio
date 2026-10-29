'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Github, Mail, FileText } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  personal: PersonalInfo;
}

export function MobileNavigation({ isOpen, onClose, personal }: MobileNavigationProps) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EDUCATION & SKILLS', href: '#education' },
    { label: 'WORKFLOW', href: '#workflow' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden transition-all duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#15171d] border border-[#e50920]/40 flex items-center justify-center font-display text-white text-lg">
            {personal.initials}
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wider text-white">{personal.displayName}</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">AUTOMOTIVE & CS</div>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#e50920] hover:border-[#e50920]/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 my-auto py-6">
        {navLinks.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between text-2xl font-display tracking-wider text-white hover:text-[#e50920] transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#e50920] opacity-60">0{idx + 1}</span>
              {link.label}
            </span>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#e50920] group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </nav>

      {/* Bottom Info & Quick Actions */}
      <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:border-[#e50920]/40 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-[#e50920]" />
            GitHub
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:border-[#e50920]/40 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4 text-[#e50920]" />
            Resume
          </a>
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="w-full py-3 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(229,9,32,0.35)]"
        >
          <Mail className="w-4 h-4" />
          Get In Touch
        </a>
      </div>
    </div>
  );
}

