'use client';

import React from 'react';
import Image from 'next/image';

interface ProfilePortraitProps {
  photoUrl: string;
  cutoutPhotoUrl?: string;
  name: string;
}

export function ProfilePortrait({ photoUrl, cutoutPhotoUrl, name }: ProfilePortraitProps) {
  // Use /assets/arvind-cutout.png if available, fallback to cutoutPhotoUrl or photoUrl
  // TODO: Ensure /assets/arvind-cutout.png has clean background removal around shoulders
  const imageSrc = '/assets/arvind-cutout.png';

  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[540px] mx-auto flex items-end justify-center select-none z-10">
      {/* Soft warm red radial glow behind portrait */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(229,9,32,0.28)_0%,rgba(217,15,28,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none rounded-full"
      />

      {/* Layered Portrait Image (no card box, no border) */}
      <div
        className="relative z-10 w-full flex items-end justify-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        <Image
          src={imageSrc}
          alt={`Portrait of ${name} — Automotive AI Engineer & Software Developer`}
          width={540}
          height={680}
          priority
          onError={(e) => {
            // Fallback to original photo if cutout is missing
            const target = e.target as HTMLImageElement;
            if (target && photoUrl) {
              target.src = photoUrl;
            }
          }}
          className="object-contain object-bottom w-full h-auto max-h-[75vh] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(229,9,32,0.25)]"
        />
      </div>

    </div>
  );
}
