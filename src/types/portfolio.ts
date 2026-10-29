/**
 * Portfolio Data Models & Type Definitions
 * Tailored for Arvind SB — Automotive Software, Embedded & ADAS Developer
 */

export type AvailabilityType = 'open' | 'collaborate' | 'busy';

export interface AvailabilityStatus {
  enabled: boolean;
  label: string;
  type: AvailabilityType;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  phone?: string;
  resume?: string;
}

export interface StatItem {
  value: string;
  labelTop: string;
  labelBottom: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  roleTag: string;
  roleSubtitle: string;
  title: string;
  headline: string;
  subheadline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  resumeFilename: string;
  photoUrl: string;
  alternatePhotoUrl?: string;
  socials: SocialLinks;
  githubUsername: string;
  availability: AvailabilityStatus;
  heroStatement: string;
  stats: StatItem[];
}

export interface Project {
  id: string;
  number: string; // e.g. "01", "02", "03"
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: string;
  githubUrl: string; // Repository URL or placeholder
  liveDemoUrl?: string; // Live URL if deployed
  statusBadge?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  coursework?: string[];
  achievements?: string[];
}

export interface WorkProcessStep {
  step: string; // "01", "02", ...
  title: string;
  description: string;
  iconName: 'discover' | 'plan' | 'develop' | 'validate' | 'deploy';
}

export interface PersonalQuote {
  quote: string;
  author: string;
  signature: string;
  callout: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  education: EducationItem[];
  skills: string[];
  workProcess: WorkProcessStep[];
  personalQuote: PersonalQuote;
}
