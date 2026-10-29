'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ArrowUpRight, Terminal } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { MobileNavigation } from './mobile-navigation';

interface SiteHeaderProps {
  personal: PersonalInfo;
}

export function SiteHeader({ personal }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#111318] border border-[#e50920]/40 group-hover:border-[#e50920] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(229,9,32,0.2)]">
              <span className="font-display text-lg tracking-wider text-white group-hover:text-[#e50920] transition-colors">
                {personal.initials}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-widest text-white leading-tight">
                {personal.displayName}
              </span>
              <span className="text-[10px] tracking-wider text-gray-400 font-mono uppercase">
                {personal.roleSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-gray-300">
            <Link href="#about" className="hover:text-white transition-colors relative py-1">
              About
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors relative py-1">
              Projects
            </Link>
            <Link href="#education" className="hover:text-white transition-colors relative py-1">
              Education
            </Link>
            <Link href="#workflow" className="hover:text-white transition-colors relative py-1">
              Workflow
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors relative py-1">
              Contact
            </Link>
          </nav>

          {/* Right Action & Status Pill */}
          <div className="hidden lg:flex items-center gap-4">
            {personal.availability.enabled && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personal.availability.label}
              </div>
            )}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(229,9,32,0.35)]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#e50920] hover:border-[#e50920]/40 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        personal={personal}
      />
    </>
  );
}

