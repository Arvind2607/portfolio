import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, Mail, Sparkles, MapPin, Cpu, Activity } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { ProfilePortrait } from './profile-portrait';

interface HeroSectionProps {
  personal: PersonalInfo;
}

export function HeroSection({ personal }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] pt-28 pb-16 lg:py-0 lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* GIANT CRIMSON "PORTFOLIO" LETTERING BEHIND HERO */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0 overflow-hidden leading-none opacity-25"
      >
        <span className="font-display font-black text-[18vw] tracking-wider text-[#e50920] block whitespace-nowrap drop-shadow-[0_0_80px_rgba(229,9,32,0.4)]">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 3-Column Desktop Grid / Stacked Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Intro, Name, Headline, Call to Action */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Handwritten intro badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-script text-2xl sm:text-3xl text-[#e50920] font-semibold">
                Hi, I&apos;m
              </span>
              <div className="h-[1px] w-12 bg-[#e50920]/40" />
            </div>

            {/* Oversized Condensed Display Name */}
            <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.9] mb-4">
              {personal.displayName}
            </h1>

            {/* Professional Headline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-3">
              <Activity className="w-4 h-4 text-[#e50920] animate-pulse" />
              <span>{personal.headline}</span>
            </div>

            {/* Subtitle / Focus */}
            <h2 className="text-sm sm:text-base font-semibold tracking-wider text-gray-200 uppercase mb-4">
              {personal.title}
            </h2>

            {/* Short Bio */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-6">
              {personal.bio}
            </p>

            {/* Location / Campus Label */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-8">
              <MapPin className="w-3.5 h-3.5 text-[#e50920] shrink-0" />
              <span className="truncate">{personal.location}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,32,0.4)] group"
              >
                <span>Explore Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#e50920]/50 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5 text-[#e50920]" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* CENTER COLUMN: Central Portrait with Layered Depth */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2">
            <ProfilePortrait
              photoUrl={personal.photoUrl}
              cutoutPhotoUrl={personal.cutoutPhotoUrl}
              name={personal.fullName}
            />
          </div>

          {/* RIGHT COLUMN: Focus Panel, Automotive Systems, and Stats */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-center order-3">
            {/* Current Focus Panel */}
            <div className="p-5 rounded-2xl bg-[#111318]/90 border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-[#e50920]/40 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#e50920]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>PRIMARY SPECIALIZATION</span>
              </div>
              
              <p className="text-white font-medium text-xs sm:text-sm leading-snug mb-3">
                Automotive Software Engineering, Telematics &amp; ADAS Perception.
              </p>

              <div className="text-[11px] text-gray-400 leading-relaxed">
                Engineering real-time micro-controller firmware, CAN-FD communication protocols, and predictive web systems.
              </div>
            </div>

            {/* Factual Stats from Central Config */}
            <div className="grid grid-cols-3 gap-3">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#111318]/60 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#e50920]/30 transition-colors"
                >
                  <span className="font-display text-2xl sm:text-3xl text-white font-bold leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 leading-tight">
                    {stat.labelTop}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#e50920] leading-tight">
                    {stat.labelBottom}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Resume Link Card */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#e50920]/40 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#e50920]/10 border border-[#e50920]/30 flex items-center justify-center text-[#e50920]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white group-hover:text-[#e50920] transition-colors">
                    Download Verified Resume
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">PDF &bull; Official Document</span>
                </div>
              </div>
              <ArrowDownRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

