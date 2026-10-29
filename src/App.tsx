import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { EducationWorkflowQuote } from './components/EducationWorkflowQuote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] font-sans antialiased selection:bg-[#e50920] selection:text-white">
      {/* SECTION A — HEADER */}
      <Navbar 
        roleTag={portfolioData.personal.roleTag}
        roleSubtitle={portfolioData.personal.roleSubtitle}
        availability={portfolioData.personal.availability} 
      />

      {/* MAIN CONTENT IN VISUAL ORDER OF REFERENCE */}
      <main id="main-content">
        {/* SECTION B — CINEMATIC HERO */}
        <Hero personal={portfolioData.personal} />

        {/* SECTION C — SELECTED PROJECTS */}
        <Projects 
          projects={portfolioData.projects} 
          githubUsername={portfolioData.personal.githubUsername}
        />

        {/* SECTION D & E — EDUCATION, SKILLS, WORK PROCESS & QUOTE PANEL */}
        <EducationWorkflowQuote 
          education={portfolioData.education}
          skills={portfolioData.skills}
          workProcess={portfolioData.workProcess}
          personalQuote={portfolioData.personalQuote}
        />

        {/* SECTION F — CONTACT / LET'S WORK TOGETHER */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
