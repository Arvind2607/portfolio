import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { ProfilePortrait } from './profile-portrait';

interface HeroSectionProps {
  personal: PersonalInfo;
}

export function HeroSection({ personal }: HeroSectionProps) {
  // Stat values strictly from verified existing data
  const statsList = [
    { value: '7.0', label: 'CGPA' },
    { value: '3rd', label: 'YEAR CSE • AMRITA UNIV' },
    { value: '100%', label: 'COMMITMENT & PRECISION' },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#080808] text-[#f5f5f5]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(217, 15, 28, 0.22) 0%, rgba(138, 6, 19, 0.08) 50%, transparent 80%)',
      }}
    >
      {/* 1. GIANT "PORTFOLIO" TEXT AS THE HERO BACKDROP (Anchored to top, vertical gradient fade) */}
      <div
        aria-hidden="true"
        className="absolute top-16 md:top-12 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0 overflow-hidden leading-none"
      >
        <span
          className="font-display font-black text-[24vw] sm:text-[26vw] lg:text-[28vw] tracking-wider block whitespace-nowrap bg-gradient-to-b from-[#d90f1c] via-[#d90f1c]/70 to-transparent bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(217,15,28,0.35)]"
          style={{ letterSpacing: '0.04em' }}
        >
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col flex-1 justify-between">
        
        {/* 5. TOP BAR INSIDE HERO WITH HAIRLINE DIVIDER (Does not touch navbar) */}
        <div className="w-full pt-4 pb-3 border-b border-white/10 flex items-center justify-between text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d90f1c]" />
            <span>SOFTWARE ENGINEER &bull; ADAS</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-300">
            <span className="text-[#d90f1c] text-xs">★</span>
            <span className="tracking-wider">OPEN TO INTERNSHIPS</span>
          </div>
        </div>

        {/* MAIN 3-COLUMN DESKTOP / STACKED MOBILE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
          
          {/* 3. LEFT COLUMN (Slimmed down, clean hierarchy) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1 z-20">
            
            {/* Small "Hi, I'm" script label */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-script text-2xl sm:text-3xl text-[#d90f1c] font-semibold">
                Hi, I&apos;m
              </span>
              <div className="h-[1px] w-8 bg-[#d90f1c]/50" />
            </div>

            {/* Big Name "ARVIND SB" */}
            <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.92] mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {personal.displayName}
            </h1>

            {/* Red Uppercase Role Line */}
            <div className="text-xs sm:text-sm font-mono tracking-widest text-[#d90f1c] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d90f1c]" />
              <span>Software Engineer &amp; ADAS Developer</span>
            </div>

            {/* Shortened Bio (1-2 sentences using existing verified wording) */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mb-5 drop-shadow">
              Results-driven Computer Science undergraduate with practical experience in Java development, object-oriented programming, and scalable systems. Passionate about building robust software architectures.
            </p>

            {/* Location Line */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#d90f1c] shrink-0" />
              <span>{personal.location}</span>
            </div>

            {/* Action Buttons + Optional Tagline */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d90f1c] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(217,15,28,0.4)] group"
                >
                  <span>Explore Work</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#d90f1c]/50 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d90f1c]" />
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Tiny Tagline near buttons */}
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                CODE &bull; SOLVE &bull; SCALE
              </span>
            </div>
          </div>

          {/* 2. CENTER / CENTER-RIGHT: PHOTO OVERLAPPING TEXT (Card container removed) */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 z-10 relative">
            <ProfilePortrait
              photoUrl={personal.photoUrl}
              cutoutPhotoUrl={personal.cutoutPhotoUrl}
              name={personal.fullName}
            />
          </div>

          {/* 4. RIGHT SIDE: PLAIN STACKED STATS COLUMN (No boxed cards) */}
          <div className="lg:col-span-3 flex flex-col justify-center order-3 z-20 gap-6 lg:pl-4">
            
            {/* Specialization line with small star icon */}
            <div className="flex items-start gap-2 text-xs font-mono text-gray-300 leading-snug">
              <span className="text-[#d90f1c] text-sm shrink-0 mt-0.5">★</span>
              <span>Turning ideas into powerful digital experiences.</span>
            </div>

            {/* Plain Stacked Stats separated by thin hairline dividers */}
            <div className="flex flex-col border-y border-white/10 divide-y divide-white/10">
              {statsList.map((stat, idx) => (
                <div key={idx} className="py-3 flex flex-col">
                  <span className="font-display text-4xl sm:text-5xl text-[#d90f1c] font-black leading-none mb-1 drop-shadow-[0_2px_12px_rgba(217,15,28,0.3)]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV Link */}
            <div className="pt-1">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white transition-colors group"
              >
                <span className="underline underline-offset-4 decoration-[#d90f1c]/60 group-hover:decoration-[#d90f1c]">
                  Download CV
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d90f1c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

        {/* Subtle Bottom Ambient Anchor */}
        <div className="w-full pt-8 pb-2 flex items-center justify-between text-[10px] font-mono text-gray-600">
          <span>PORTFOLIO // ARVIND SB</span>
          <span>SCROLL DOWN</span>
        </div>

      </div>
    </section>
  );
}
