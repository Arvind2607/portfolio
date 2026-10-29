import React from 'react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className="py-24 bg-[#0d0e12] relative border-b border-white/10" aria-label="Technical Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display font-black text-2xl text-[#e51b24]">02.</span>
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase whitespace-nowrap">
            TECHNICAL CAPABILITIES
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <p className="text-xs sm:text-sm text-[#8e92a0] max-w-2xl mb-14">
          Structured by domain. Grounded in actual engineering and exploration. No misleading percentage bars or arbitrary scores.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="p-6 rounded-xl bg-[#14161f] border border-white/10 hover:border-[#e51b24]/40 hover:shadow-[0_12px_30px_rgba(229,27,36,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    {category.title}
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e51b24]"></span>
                </div>
                <p className="text-xs text-[#8e92a0] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1015] border border-white/10 text-xs text-[#e4e4e7] hover:text-white hover:border-[#e51b24]/50 transition-colors cursor-default"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#e51b24]/15 text-[#ff4d55] font-semibold uppercase tracking-wider">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-[#5c6070] font-semibold uppercase tracking-wider">
                {category.skills.length} Technologies Listed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
