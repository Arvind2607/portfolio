'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Phone,
  FileText,
  MapPin,
  ArrowUpRight,
  Send,
  MessageSquare,
} from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';

interface ContactSectionProps {
  personal: PersonalInfo;
}

export function ContactSection({ personal }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = personal.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0b0e] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e50920]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
            <MessageSquare className="w-4 h-4 text-[#e50920]" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white tracking-tight mb-4">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-gray-400 text-sm">
            Whether you have an internship opportunity, an embedded automotive engineering project, or want to discuss telemetry systems, I&apos;d love to connect.
          </p>
        </div>

        {/* 2-Column Desktop Grid: Left Contact Card & Actions, Right Laptop Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Contact Channels & Quick Action Card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Primary Action Card */}
            <div className="p-8 rounded-2xl bg-[#111318] border border-white/10 relative overflow-hidden shadow-xl">
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase block mb-2">
                PRIMARY EMAIL CHANNEL
              </span>
              <div className="text-xl sm:text-2xl font-mono text-white font-medium mb-6 break-all">
                {personal.email}
              </div>

              {/* Action Buttons: Email Me & Copy Email */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,32,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address to clipboard"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#e50920]/40 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : copyError ? (
                    <>
                      <Mail className="w-4 h-4 text-[#e50920]" />
                      <span>{personal.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Additional Contact Links & Social Handles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub Link */}
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111318] border border-white/10 hover:border-[#e50920]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:text-[#e50920] transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#e50920] transition-colors">
                      GitHub
                    </div>
                    <div className="text-[11px] font-mono text-gray-400">
                      @{personal.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn Link (if supplied) */}
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#111318] border border-white/10 hover:border-[#e50920]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:text-[#e50920] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#e50920] transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] font-mono text-gray-400">
                        in/arvind-sb-185033365
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              )}

              {/* Resume File Download Link */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={personal.resumeFilename}
                className="p-4 rounded-xl bg-[#111318] border border-white/10 hover:border-[#e50920]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#e50920]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#e50920] transition-colors">
                      Resume PDF
                    </div>
                    <div className="text-[11px] font-mono text-gray-400">
                      Official CV
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              {/* Optional Phone Link (Only if supplied) */}
              {personal.phone && personal.phone.trim() !== '' && (
                <a
                  href={`tel:${personal.phone}`}
                  className="p-4 rounded-xl bg-[#111318] border border-white/10 hover:border-[#e50920]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#e50920] transition-colors">
                        Direct Phone
                      </div>
                      <div className="text-[11px] font-mono text-gray-400">
                        {personal.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              )}
            </div>

            {/* Location Notice */}
            {personal.location && (
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono px-2">
                <MapPin className="w-3.5 h-3.5 text-[#e50920]" />
                <span>Base of Operations: {personal.location}</span>
              </div>
            )}
          </div>

          {/* RIGHT: Laptop-Inspired Visual Mockup */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#111318] shadow-2xl p-4 flex items-center justify-center group hover:border-[#e50920]/40 transition-all">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/laptop-mockup.svg"
                  alt="Engineering Console & Code Telemetry Visual Mockup"
                  fill
                  className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Telemetry Status Ribbon on Laptop Mockup */}
              <div className="absolute top-6 left-6 px-3 py-1 rounded bg-[#080808]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYS // ALL SYSTEMS NOMINAL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

