import React from 'react';
import { AvailabilityStatus } from '../types/portfolio';

interface NavbarProps {
  roleTag: string;
  roleSubtitle: string;
  availability: AvailabilityStatus;
}

export const Navbar: React.FC<NavbarProps> = ({ roleTag, roleSubtitle, availability }) => {
  return (
    <header className="w-full bg-[#080808] border-b border-white/10 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Left: Role in small crimson uppercase text + secondary descriptor */}
        <div className="flex flex-col">
          <span className="text-[#e50920] text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase font-sans">
            {roleTag}
          </span>
          <span className="text-[#888888] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5 font-sans">
            {roleSubtitle}
          </span>
        </div>

        {/* Right: Availability indicator + subtle crimson sparkle */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e50920] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e50920]"></span>
            </span>
            <span className="text-white text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase font-sans">
              {availability.label}
            </span>
          </div>

          {/* Crimson 4-point decorative star */}
          <svg className="w-3.5 h-3.5 text-[#e50920] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
          </svg>
        </div>

      </div>
    </header>
  );
};
