import React, { useState } from 'react';
import { PersonalInfo } from '../types/portfolio';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  // Allow switching between studio portrait and campus portrait if desired
  const [useStudio, setUseStudio] = useState(true);
  const currentPhoto = useStudio ? personal.photoUrl : (personal.alternatePhotoUrl || personal.photoUrl);

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] bg-[#080808] flex flex-col justify-end overflow-hidden border-b border-white/10 pt-8 pb-4 sm:pb-8"
      aria-label="Hero Introduction"
    >
      {/* 1. GIGANTIC CRIMSON CONDENSED "PORTFOLIO" BACKGROUND TYPOGRAPHY */}
      <div 
        className="absolute top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0 flex justify-center items-center"
        aria-hidden="true"
      >
        <span className="font-anton tracking-normal text-[#e50920] opacity-90 text-[clamp(6rem,22vw,22rem)] leading-none uppercase text-center whitespace-nowrap drop-shadow-[0_0_80px_rgba(229,9,32,0.45)]">
          PORTFOLIO
        </span>
      </div>

      {/* Subtle ambient crimson aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e50920]/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 2. MAIN 3-COLUMN HERO COMPOSITION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
          
          {/* =========================================================
              LEFT COLUMN: Script Intro, Stacked Name, Title, Bio, Badge
              ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col items-start pb-4 z-20">
            {/* Handwritten script introduction */}
            <span className="font-cursive text-3xl sm:text-4xl text-[#ff808b] -rotate-2 block leading-none mb-1">
              Hello, I'm
            </span>

            {/* Oversized Stacked Name in Bold Condensed Sans */}
            <h1 className="font-display font-black text-6xl sm:text-7xl xl:text-8xl text-white tracking-wide leading-[0.9] uppercase mb-4">
              ARVIND<br />
              <span className="text-white">SB</span>
            </h1>

            {/* Professional Title in Bold Crimson */}
            <p className="text-[#e50920] text-xs sm:text-sm font-black tracking-[0.2em] uppercase mb-4">
              {personal.title}
            </p>

            {/* Short Compelling Bio */}
            <p className="text-[#a5a5a5] text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              {personal.subheadline}
            </p>

            {/* Availability / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-white/10 text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <svg className="w-3.5 h-3.5 text-[#e50920]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <span>{personal.location.split(',')[0]} • AVAILABLE</span>
            </div>

            {/* Photo Toggle Pill (Switch between Studio Portrait & Campus Portrait) */}
            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-[#666666]">
              <span>Portrait View:</span>
              <button
                type="button"
                onClick={() => setUseStudio(true)}
                className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors ${
                  useStudio ? 'bg-[#e50920] text-white font-bold' : 'bg-white/5 text-[#888888] hover:text-white'
                }`}
              >
                Studio
              </button>
              <button
                type="button"
                onClick={() => setUseStudio(false)}
                className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider transition-colors ${
                  !useStudio ? 'bg-[#e50920] text-white font-bold' : 'bg-white/5 text-[#888888] hover:text-white'
                }`}
              >
                Campus
              </button>
            </div>
          </div>

          {/* =========================================================
              CENTER COLUMN: Visually Dominant Portrait Overlapping Text
              ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-end relative z-10 -mb-2">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] flex justify-center items-end group">
              <img 
                src={currentPhoto}
                alt={`${personal.name} — Portfolio Portrait`}
                className="relative z-10 w-full max-h-[640px] object-contain object-bottom filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Bottom gradient mask for smooth fade into black */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808] to-transparent z-20 pointer-events-none" />
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Creative Statement & Stacked Statistics
              ========================================================= */}
          <div className="order-3 lg:col-span-3 flex flex-col items-start pb-6 z-20">
            {/* Creative Statement with Crimson Star */}
            <div className="flex items-start gap-2.5 mb-8 max-w-[260px]">
              <svg className="w-4 h-4 text-[#e50920] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              <p className="text-xs text-[#f5f5f5] font-medium leading-relaxed">
                {personal.heroStatement}
              </p>
            </div>

            {/* Vertical Stack of 3 Factual Statistics / Highlights */}
            <div className="flex flex-col gap-6 w-full">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-3.5">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#e50920] leading-none min-w-[70px]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black tracking-[0.18em] text-[#f5f5f5] uppercase leading-tight font-sans">
                    {stat.labelTop}<br />{stat.labelBottom}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <a 
              href="#projects"
              className="mt-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#888888] hover:text-[#e50920] transition-colors group"
            >
              <span>VIEW SELECTED WORK</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
