import React from 'react';
import { portfolioData } from '../data/portfolio';
import { LoadingScreen } from '../components/loading-screen';
import { SiteHeader } from '../components/site-header';
import { HeroSection } from '../components/hero-section';
import { ProjectsSection } from '../components/projects-section';
import { EducationSkills } from '../components/education-skills';
import { WorkflowSection } from '../components/workflow-section';
import { QuotePanel } from '../components/quote-panel';
import { ContactSection } from '../components/contact-section';
import { SiteFooter } from '../components/site-footer';

export default function HomePage() {
  return (
    <>
      {/* Cinematic Entrance Loading Screen */}
      <LoadingScreen />

      {/* Main Container */}
      <div className="min-h-screen bg-[#080808] text-[#f5f5f5] flex flex-col font-sans selection:bg-[#e50920] selection:text-white">
        
        {/* Site Header & Navigation */}
        <SiteHeader personal={portfolioData.personal} />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          {/* Section 1: Hero with Layered Portrait & Giant Crimson PORTFOLIO Background */}
          <HeroSection personal={portfolioData.personal} />

          {/* Section 2: Selected Projects Grid (3 desktop cards) */}
          <ProjectsSection
            projects={portfolioData.projects}
            githubUsername={portfolioData.personal.githubUsername}
          />

          {/* Section 3: Academic Education, Internship & Technical Skills */}
          <EducationSkills
            education={portfolioData.education}
            skills={portfolioData.skills}
            internships={portfolioData.internships}
            achievements={portfolioData.achievements}
          />

          {/* Section 4: Engineering Workflow (01 Understand -> 05 Deliver) */}
          <WorkflowSection workflow={portfolioData.workProcess} />

          {/* Section 5: Vivid Crimson Quote Panel */}
          <QuotePanel personalQuote={portfolioData.personalQuote} />

          {/* Section 6: Contact Section ("LET'S WORK TOGETHER") with Laptop Mockup */}
          <ContactSection personal={portfolioData.personal} />
        </main>

        {/* Footer */}
        <SiteFooter personal={portfolioData.personal} />
      </div>
    </>
  );
}

