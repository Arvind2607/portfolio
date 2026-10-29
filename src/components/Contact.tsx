import React, { useState } from 'react';
import { PersonalInfo } from '../types/portfolio';

interface ContactProps {
  personal: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      // Fallback
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 bg-[#080808] border-b border-white/10"
      aria-label="Contact and Collaboration"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Heading, Invitation, Availability Badge
              ========================================================= */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-wide uppercase leading-none">
                LET'S WORK<br />TOGETHER
              </h2>
              <svg className="w-5 h-5 text-[#e50920] shrink-0 self-start mt-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
            </div>

            <p className="text-[#a5a5a5] text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
              I am currently open for summer internships, automotive software research, and engineering collaborations. Let's create something extraordinary that drives results.
            </p>

            {/* Availability Pill with Arrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#e50920] bg-[#e50920]/10 text-white text-xs font-bold tracking-wider uppercase">
              <span className="text-[#e50920]">→</span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* =========================================================
              MIDDLE COLUMN: Contact Details & Social Links
              ========================================================= */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            {/* 1. Email Address & Copy Button */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111111] border border-[#e50920]/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href={`mailto:${personal.email}`}
                  className="text-white hover:text-[#e50920] text-xs sm:text-sm font-semibold tracking-wider transition-colors break-all focus:outline-none focus:underline"
                >
                  {personal.email}
                </a>
              </div>

              {/* Copy Email Button & Confirmation Toast */}
              <div className="pl-12 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#16161c] hover:bg-[#202028] border border-white/10 hover:border-[#e50920] text-[11px] font-bold text-[#cccccc] hover:text-white uppercase tracking-wider transition-all"
                  aria-label="Copy email address"
                >
                  <svg className="w-3.5 h-3.5 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>

                {copied && (
                  <span className="text-[11px] font-bold text-emerald-400 animate-pulse">
                    ✓ Copied to clipboard!
                  </span>
                )}
                {copyError && (
                  <span className="text-[11px] font-bold text-amber-400">
                    Press Ctrl+C to copy
                  </span>
                )}
              </div>
            </div>

            {/* 2. GitHub Profile */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#111111] border border-[#e50920]/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#e50920]" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <a 
                href={personal.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#e50920] text-xs sm:text-sm font-semibold tracking-wider transition-colors focus:outline-none focus:underline"
              >
                github.com/{personal.githubUsername}
              </a>
            </div>

            {/* 3. SPACE FOR LINKEDIN ID */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#111111] border border-[#e50920]/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#e50920]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <a 
                href={personal.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#e50920] text-xs sm:text-sm font-semibold tracking-wider transition-colors focus:outline-none focus:underline"
              >
                {personal.socials.linkedin.includes('YOUR_LINKEDIN_ID') ? (
                  <span className="text-[#e50920] font-bold">[Add LinkedIn Profile URL]</span>
                ) : (
                  personal.socials.linkedin.replace('https://', '')
                )}
              </a>
            </div>

            {/* 4. Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#111111] border border-[#e50920]/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-[#a5a5a5] text-xs sm:text-sm font-semibold tracking-wide">
                {personal.location}
              </span>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Laptop Mockup Displaying Portfolio Screen
              ========================================================= */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] sm:max-w-[420px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
              <img 
                src="/assets/images/laptop-mockup.svg" 
                alt="Arvind SB Portfolio Laptop Mockup"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
