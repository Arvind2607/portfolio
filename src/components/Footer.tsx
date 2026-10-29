import React from 'react';

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080808] py-8 text-[#888888]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wider">
        
        {/* Left: Name and Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[#e50920] font-black font-display text-base">ASB</span>
          <span className="text-white/80">
            ARVIND SB © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center: Moto */}
        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#666666]">
          CODE • DRIVE • INNOVATE
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={handleScrollTop}
          className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#e50920] transition-colors uppercase font-bold"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <svg className="w-3.5 h-3.5 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
};
