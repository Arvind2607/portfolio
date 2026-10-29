/**
 * Portfolio Data Models & Type Definitions
 * Tailored for Arvind SB — Competitive Programming, Software Engineering & Systems
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
  linkedin?: string;
  phone?: string;
  resume?: string;
  twitter?: string;
}

export interface StatItem {
  value: string;
  labelTop: string;
  labelBottom: string;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  fullName: string;
  displayName: string;
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
  cutoutPhotoUrl?: string;
  alternatePhotoUrl?: string;
  socials: SocialLinks;
  githubUsername: string;
  availability: AvailabilityStatus;
  heroStatement: string;
  stats: StatItem[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  statusBadge?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  coursework?: string[];
  achievements?: string[];
}

export interface WorkProcessStep {
  step: string;
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
  internships?: InternshipItem[];
  achievements?: string[];
  skills: string[];
  certifications?: CertificationItem[];
  workProcess: WorkProcessStep[];
  personalQuote: PersonalQuote;
}
