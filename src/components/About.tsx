import React from 'react';
import { AboutItem } from '../types/portfolio';

interface AboutProps {
  bio: string[];
  focusAreas: AboutItem[];
}

export const About: React.FC<AboutProps> = ({ bio, focusAreas }) => {
  return (
    <section id="about" className="py-24 bg-[#0a0b0e] relative border-b border-white/10" aria-label="About Me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-display font-black text-2xl text-[#e51b24]">01.</span>
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase whitespace-nowrap">
            ABOUT &amp; IDENTITY
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Top Grid: Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              A DRIVEN DEVELOPER BRIDGING <span className="text-[#e51b24]">SOFTWARE</span> &amp; <span className="text-[#e51b24]">MOBILITY</span>.
            </h3>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#8e92a0]">
              STUDENT • BUILDER • AUTOMOTIVE-TECH ENTHUSIAST
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[#8e92a0] text-sm sm:text-base leading-relaxed">
            {bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Focus Areas / Recruiter-Targeted Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div 
              key={area.id}
              className="p-6 rounded-xl bg-[#14161f] border border-white/10 hover:border-[#e51b24]/40 hover:shadow-[0_10px_30px_rgba(229,27,36,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#e51b24] uppercase block mb-2">
                  {area.label}
                </span>
                <h4 className="text-white font-bold text-base sm:text-lg mb-3 group-hover:text-white transition-colors">
                  {area.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#5c6070] font-semibold uppercase tracking-wider">
                <span>CONFIGURABLE FIELD</span>
                <span className="text-[#e51b24] opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
