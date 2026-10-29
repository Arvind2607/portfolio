'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';

interface SiteFooterProps {
  personal: PersonalInfo;
}

export function SiteFooter({ personal }: SiteFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060709] border-t border-white/5 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#111318] border border-[#e50920]/40 flex items-center justify-center font-display text-white text-sm">
              {personal.initials}
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wider font-mono">
                {personal.displayName} &bull; PORTFOLIO
              </div>
              <div className="text-[10px] text-gray-500 font-mono">
                ENGINEERED WITH NEXT.JS APP ROUTER &bull; TAILWIND CSS
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-gray-400">
            <Link href="#about" className="hover:text-[#e50920] transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#e50920] transition-colors">
              Projects
            </Link>
            <Link href="#education" className="hover:text-[#e50920] transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-[#e50920] transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#e50920]/40 text-xs font-mono uppercase text-gray-300 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e50920]" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-2">
          <div>
            &copy; {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Automotive Software &bull; Embedded Systems &bull; ADAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

