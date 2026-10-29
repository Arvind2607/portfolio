import React from 'react';
import { CertificationItem, AchievementItem } from '../types/portfolio';

interface CertificationsProps {
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications, achievements }) => {
  return (
    <section id="certifications" className="py-24 bg-[#0a0b0e] relative border-b border-white/10" aria-label="Certifications and Achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display font-black text-2xl text-[#e51b24]">05.</span>
          <h2 className="text-white font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase whitespace-nowrap">
            CERTIFICATIONS &amp; ACHIEVEMENTS
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <p className="text-xs sm:text-sm text-[#8e92a0] max-w-2xl mb-14">
          Verified accreditations, hackathon contributions, and continuous learning records.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="p-6 rounded-xl bg-[#14161f] border border-white/10 hover:border-[#e51b24]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#e51b24]">
                    ACCREDITATION
                  </span>
                  <span className="text-xs font-semibold text-[#8e92a0]">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                  {cert.title}
                </h3>

                <h4 className="text-xs font-semibold text-[#8e92a0] mb-4">
                  Issuer: <span className="text-white">{cert.issuer}</span>
                </h4>

                {cert.skillsAcquired && cert.skillsAcquired.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#0e1015] text-[#e4e4e7] border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                {cert.credentialUrl && cert.credentialUrl.trim() !== '' ? (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e51b24] hover:text-[#ff4d55] transition-colors focus:outline-none focus:underline"
                  >
                    <span>Verify Credential</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-[11px] text-[#5c6070] font-semibold uppercase tracking-wider">
                    Certificate on File
                  </span>
                )}
                <span className="text-[10px] text-[#5c6070] font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8e92a0]">
                MILESTONES &amp; COMPETITIONS
              </h3>
              <div className="flex-grow h-px bg-white/5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((ach) => (
                <div 
                  key={ach.id}
                  className="p-5 rounded-lg bg-[#12141c] border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8e92a0] mb-1">
                      <span className="text-[#e51b24] font-bold uppercase tracking-wider text-[10px]">
                        {ach.organization}
                      </span>
                      <span className="font-semibold">{ach.date}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[#8e92a0] leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
