import React from 'react';
import { GraduationCap, Award, BookOpen, Cpu, CheckCircle2, Briefcase, Trophy } from 'lucide-react';
import { EducationItem, InternshipItem } from '../types/portfolio';

interface EducationSkillsProps {
  education: EducationItem[];
  skills: string[];
  internships?: InternshipItem[];
  achievements?: string[];
}

export function EducationSkills({
  education,
  skills,
  internships,
  achievements,
}: EducationSkillsProps) {
  return (
    <section id="education" className="py-20 bg-[#0a0b0e] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Academic Foundation, Education & Internship */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
                <GraduationCap className="w-4 h-4 text-[#e50920]" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight mb-8">
                EDUCATION &amp; SPECIALIZATION
              </h2>

              <div className="space-y-6">
                {education.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-[#111318] border border-white/10 relative overflow-hidden group hover:border-[#e50920]/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-[#e50920] uppercase tracking-wider font-semibold">
                        {item.period}
                      </span>
                      {item.cgpa && (
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 self-start sm:self-auto">
                          {item.cgpa}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-1">
                      {item.degree}
                    </h3>

                    <div className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                      <span>{item.institution}</span>
                    </div>

                    {/* Coursework list */}
                    {item.coursework && (
                      <div className="mb-4">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#e50920]" />
                          <span>Core Engineering Coursework:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                          {item.coursework.map((course, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e50920]" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Focus Highlights */}
                    {item.achievements && (
                      <div className="pt-4 border-t border-white/5 space-y-2">
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#e50920] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Internship Experience */}
            {internships && internships.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
                  <Briefcase className="w-4 h-4 text-[#e50920]" />
                  <span>INDUSTRY EXPERIENCE</span>
                </div>
                <h3 className="font-display text-3xl text-white tracking-tight mb-6">
                  INTERNSHIP
                </h3>

                <div className="space-y-4">
                  {internships.map((intern) => (
                    <div
                      key={intern.id}
                      className="p-6 rounded-2xl bg-[#111318] border border-white/10 hover:border-[#e50920]/40 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="font-display text-2xl text-white">
                          {intern.role}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          {intern.period}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-[#e50920] mb-4">
                        {intern.company}
                      </div>

                      <div className="space-y-2">
                        {intern.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e50920] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Technical Skills & Achievements */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
                <Cpu className="w-4 h-4 text-[#e50920]" />
                <span>TECHNICAL COMPETENCY</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight mb-8">
                SKILLS &amp; CONCEPTS
              </h2>

              <div className="p-6 rounded-2xl bg-[#111318] border border-white/10 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    Practical fluency across object-oriented design, core Java systems, data structures, and modern web technologies:
                  </p>

                  {/* Compact Outlined Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/[0.02] hover:bg-[#e50920]/10 hover:border-[#e50920] text-gray-200 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Award className="w-4 h-4 text-[#e50920]" />
                    <span>Verified through university coursework &amp; competitive hackathons.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Achievements */}
            {achievements && achievements.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
                  <Trophy className="w-4 h-4 text-[#e50920]" />
                  <span>NOTABLE MILESTONES</span>
                </div>
                <h3 className="font-display text-3xl text-white tracking-tight mb-6">
                  ACHIEVEMENTS
                </h3>

                <div className="p-6 rounded-2xl bg-[#111318] border border-white/10 space-y-3">
                  {achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e50920]/30 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#e50920]/10 border border-[#e50920]/30 flex items-center justify-center text-[#e50920] shrink-0">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-gray-200 font-medium">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
