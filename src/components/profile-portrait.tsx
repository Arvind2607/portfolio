import React from 'react';
import Image from 'next/image';

interface ProfilePortraitProps {
  photoUrl: string;
  cutoutPhotoUrl?: string;
  name: string;
}

export function ProfilePortrait({ photoUrl, cutoutPhotoUrl, name }: ProfilePortraitProps) {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] mx-auto aspect-[4/5] flex items-end justify-center select-none">
      {/* Ambient Crimson Glow behind portrait */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-radial from-[#e50920]/30 to-transparent blur-3xl pointer-events-none rounded-full" 
      />

      {/* Frame Backdrop with subtle gradient */}
      <div className="absolute inset-x-4 bottom-0 top-12 rounded-t-[32px] bg-gradient-to-b from-[#15171d]/80 via-[#0e1015]/90 to-[#080808] border-t border-x border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Portrait Image Layer */}
      <div className="relative z-10 w-full h-[95%] flex items-end justify-center overflow-hidden">
        <Image
          src={cutoutPhotoUrl || photoUrl}
          alt={`Portrait of ${name} — Automotive Software & Embedded Systems Engineer`}
          width={460}
          height={575}
          priority
          className="object-contain object-bottom w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-[1.02]"
        />

        {/* Cinematic gradient fade at bottom to blend smoothly into page */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent pointer-events-none z-20" />
      </div>

      {/* Automotive Telemetry Tag on Portrait */}
      <div className="absolute bottom-4 left-6 z-30 px-3 py-1 rounded bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-gray-300 flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e50920] animate-pulse" />
        <span>SYS // CAN-FD &bull; ADAS</span>
      </div>
    </div>
  );
}

