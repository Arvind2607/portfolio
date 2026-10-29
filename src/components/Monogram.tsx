import React from 'react';

interface MonogramProps {
  size?: number;
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({ size = 38, className = '' }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center relative font-display select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width={size} height={size} className="w-full h-full drop-shadow-[0_0_12px_rgba(229,27,36,0.4)]">
        <defs>
          <linearGradient id="monoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2a34" />
            <stop offset="100%" stopColor="#c9141d" />
          </linearGradient>
          <linearGradient id="monoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c1e27" />
            <stop offset="100%" stopColor="#0d0e12" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#monoBg)" stroke="#e51b24" strokeWidth="3" />
        <text 
          x="50" 
          y="66" 
          fontFamily="'Plus Jakarta Sans', sans-serif" 
          fontWeight="900" 
          fontSize="46" 
          fill="url(#monoGrad)" 
          textAnchor="middle" 
          letterSpacing="1"
        >
          AS
        </text>
        <circle cx="82" cy="20" r="5" fill="#e51b24" />
      </svg>
    </div>
  );
};
