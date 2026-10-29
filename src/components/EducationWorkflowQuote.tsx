import React from 'react';
import { EducationItem, WorkProcessStep, PersonalQuote } from '../types/portfolio';

interface EducationWorkflowQuoteProps {
  education: EducationItem[];
  skills: string[];
  workProcess: WorkProcessStep[];
  personalQuote: PersonalQuote;
}

export const EducationWorkflowQuote: React.FC<EducationWorkflowQuoteProps> = ({
  education,
  skills,
  workProcess,
  personalQuote,
}) => {
  // Helper to render process step icons
  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'discover':
        return (
          <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'plan':
        return (
          <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'develop':
        return (
          <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'validate':
        return (
          <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'deploy':
      default:
        return (
          <svg className="w-4 h-4 text-[#e50920]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
    }
  };

  return (
    <section 
      id="education-process" 
      className="py-16 sm:py-20 bg-[#080808] border-b border-white/10"
      aria-label="Education, Work Process, and Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* =========================================================
              COLUMN 1 (Left): EDUCATION & SKILLS (lg:col-span-4)
              ========================================================= */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase mb-8 pb-3 border-b border-white/10">
              EDUCATION &amp; SKILLS
            </h2>

            {/* Subsection: Education */}
            <div className="mb-8">
              <span className="text-[#e50920] text-[11px] font-black tracking-[0.2em] uppercase block mb-4">
                EDUCATION
              </span>

              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.id} className="flex justify-between items-start gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-white font-extrabold text-sm sm:text-[15px] leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-[#a5a5a5] text-xs font-medium mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-[#e50920] text-xs font-bold shrink-0 tracking-wider">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            {/* Subsection: Skills */}
            <div>
              <span className="text-[#e50920] text-[11px] font-black tracking-[0.2em] uppercase block mb-4">
                SKILLS
              </span>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-sm bg-[#111111] border border-white/15 hover:border-[#e50920] text-[11px] font-bold tracking-wider text-[#e4e4e7] hover:text-[#e50920] transition-colors cursor-default select-none uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              COLUMN 2 (Middle): WORK PROCESS (lg:col-span-5)
              ========================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase mb-8 pb-3 border-b border-white/10">
              WORK PROCESS
            </h2>

            <div className="relative flex flex-col space-y-6 sm:space-y-7">
              {/* Connecting vertical line */}
              <div 
                className="absolute left-[39px] sm:left-[43px] top-6 bottom-6 w-px bg-white/15 -z-0"
                aria-hidden="true" 
              />

              {workProcess.map((step) => (
                <div key={step.step} className="relative z-10 flex items-start gap-4 sm:gap-5">
                  {/* Step Number in Crimson */}
                  <span className="font-display font-black text-lg sm:text-xl text-[#e50920] leading-none shrink-0 w-6 pt-2">
                    {step.step}
                  </span>

                  {/* Circular Outlined Icon Container */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#080808] border border-white/20 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                    {renderStepIcon(step.iconName)}
                  </div>

                  {/* Step Title & Compact Description */}
                  <div className="flex flex-col pt-0.5">
                    <h3 className="text-white font-black text-xs sm:text-sm tracking-wider uppercase">
                      {step.title}
                    </h3>
                    <p className="text-[#a5a5a5] text-xs leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              COLUMN 3 (Right): CRIMSON PERSONAL QUOTE PANEL (lg:col-span-3)
              ========================================================= */}
          <div className="lg:col-span-3 flex flex-col justify-between p-7 sm:p-8 rounded-sm bg-gradient-to-b from-[#240609] via-[#170406] to-[#0c0203] border border-[#e50920]/40 shadow-[0_15px_40px_rgba(229,9,32,0.15)] min-h-[460px]">
            {/* Top: Oversized Crimson Quotation Mark */}
            <div>
              <div 
                className="text-6xl sm:text-7xl font-serif text-[#e50920] font-black leading-none select-none mb-4"
                aria-hidden="true"
              >
                “
              </div>

              {/* Personal Quote Statement */}
              <p className="text-white text-sm sm:text-base font-medium leading-relaxed mb-6">
                {personalQuote.quote}
              </p>

              {/* Handwritten Signature Script */}
              <div className="font-cursive text-3xl sm:text-4xl text-white tracking-wide">
                {personalQuote.signature}
              </div>
            </div>

            {/* Bottom Callout with Star */}
            <div className="pt-8 border-t border-[#e50920]/30 mt-8">
              <p className="text-[#ff949d] text-[10px] font-black tracking-[0.2em] uppercase leading-tight">
                {personalQuote.callout}
              </p>
              <span className="text-[#e50920] text-sm font-bold block mt-1">✦</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
