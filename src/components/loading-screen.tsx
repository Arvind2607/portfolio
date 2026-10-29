'use client';

import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    // Dismiss loader after brief cinematic entrance
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 400);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram emblem */}
        <div className="relative w-16 h-16 flex items-center justify-center mb-4">
          <div className="absolute inset-0 rounded-full border border-[#e50920]/40 animate-ping opacity-30" />
          <div className="w-14 h-14 rounded-full border border-[#e50920] bg-[#111318] flex items-center justify-center shadow-[0_0_25px_rgba(229,9,32,0.4)]">
            <span className="font-display text-2xl tracking-wider text-white">ASB</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-36 h-[2px] bg-neutral-800 overflow-hidden rounded-full mb-3">
          <div className="h-full bg-[#e50920] animate-[pulse_1s_ease-in-out_infinite] w-full" />
        </div>

        <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
          INITIALIZING TELEMETRY
        </span>
      </div>
    </div>
  );
}

