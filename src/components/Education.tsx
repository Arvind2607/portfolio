import React from 'react';
import { EducationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 bg-[#0d0e12] relative border-b border-white/10" aria-label="Education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display font-black text-2xl text-[#e51b24]">04.</span>
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase whitespace-nowrap">
            ACADEMIC BACKGROUND
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <p className="text-xs sm:text-sm text-[#8e92a0] max-w-2xl mb-14">
          Formal university foundations and academic coursework. Easily configurable in <code className="text-[#e51b24] bg-white/5 px-1.5 py-0.5 rounded">portfolioData.ts</code>.
        </p>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div 
              key={item.id}
              className="p-7 rounded-xl bg-[#14161f] border border-white/10 hover:border-[#e51b24]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e51b24]">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0e1015] border border-white/10 text-xs font-bold text-[#ff4d55]">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                  {item.degree}
                </h3>

                <h4 className="text-sm font-semibold text-[#8e92a0] mb-5">
                  {item.institution}
                </h4>

                {item.coursework && item.coursework.length > 0 && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5c6070] block mb-2">
                      Key Subjects &amp; Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span 
                          key={cIdx}
                          className="text-[11px] px-2.5 py-1 rounded bg-[#0e1015] text-[#e4e4e7] border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8e92a0] block mb-1">
                    Academic Focus / Notes:
                  </span>
                  <ul className="list-disc list-inside text-xs text-[#8e92a0] space-y-1">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
