import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { PersonalQuote } from '../types/portfolio';

interface QuotePanelProps {
  personalQuote: PersonalQuote;
}

export function QuotePanel({ personalQuote }: QuotePanelProps) {
  return (
    <section className="py-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#8a0613] via-[#b8071a] to-[#59040c] p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_60px_rgba(229,9,32,0.35)] border border-[#ff3b4e]/40">
          
          {/* Subtle background light effect */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 shadow-inner">
              <Quote className="w-6 h-6 text-white/90" />
            </div>

            {/* Main Statement */}
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-normal text-white leading-tight mb-8 drop-shadow-md">
              &ldquo;{personalQuote.quote}&rdquo;
            </blockquote>

            {/* Author & Signature */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-script text-3xl sm:text-4xl text-white font-bold drop-shadow">
                {personalQuote.signature}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                {personalQuote.author} &bull; Automotive Systems &amp; Software
              </span>
            </div>

            {/* Callout Pill */}
            <div className="mt-8 px-5 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest text-white/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{personalQuote.callout}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

