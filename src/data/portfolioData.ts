/**
 * ===================================================================
 * ARVIND SB — CENTRAL PORTFOLIO CONFIGURATION DATA
 * ===================================================================
 * Single source of truth for Arvind SB's portfolio.
 * Edit this file to customize links, projects, and personal details.
 * ===================================================================
 */

import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  // =================================================================
  // 1. Personal & Brand Identity
  // =================================================================
  personal: {
    name: 'ARVIND SB',
    initials: 'ASB',
    roleTag: 'AUTOMOTIVE SOFTWARE & CS ENGINEER',
    roleSubtitle: 'STUDENT & EMBEDDED SYSTEMS DEVELOPER',
    title: 'AUTOMOTIVE SOFTWARE & EMBEDDED SYSTEMS',
    headline: 'CODE • DRIVE • INNOVATE',
    subheadline:
      'Passionate Computer Science engineering student at Amrita Vishwa Vidyapeetham with a focused drive in Automotive Software Engineering, Embedded Systems, and ADAS. Crafting reliable, high-performance software at the frontier of smart mobility.',
    bio:
      'I engineer software at the intersection of computer systems and automotive intelligence. Focused on low-level systems programming, telemetry pipelines, and perception algorithms for next-generation mobility.',
    location: 'Amrita Vishwa Vidyapeetham, Nagercoil Campus, Tamil Nadu, India',
    email: 'sbarvind2006@gmail.com',
    phone: '', // OPTIONAL: Add your phone number here, e.g. "+91 98765 43210"
    resumeUrl: '/assets/resume/Arvind_S_Resume.pdf',
    resumeFilename: 'Arvind_SB_Resume.pdf',
    
    // Choose between studio-lit portrait or campus photo:
    photoUrl: '/assets/images/hero-portrait-studio.jpg', // Studio portrait with black background and cinematic crimson rim light
    alternatePhotoUrl: '/assets/images/arvind-portrait.jpg', // Campus portrait recently uploaded
    
    githubUsername: 'Arvind2607',
    
    // Social Links & Space for LinkedIn ID
    socials: {
      email: 'sbarvind2006@gmail.com',
      github: 'https://github.com/Arvind2607',
      // SPACE FOR LINKEDIN ID: Update with your exact LinkedIn username / vanity URL:
      linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_ID', 
      phone: '', // Optional: Phone link
      resume: '/assets/resume/Arvind_S_Resume.pdf',
    },

    availability: {
      enabled: true,
      label: 'AVAILABLE FOR OPPORTUNITIES',
      type: 'open',
    },

    heroStatement: 'Turning ideas into robust, high-performance systems.',

    // Factual statistics and highlights
    stats: [
      {
        value: '3+',
        labelTop: 'FOCUS',
        labelBottom: 'DOMAINS', // Automotive, Embedded, ADAS
      },
      {
        value: 'B.Tech',
        labelTop: 'CSE STUDENT',
        labelBottom: 'AMRITA UNIV',
      },
      {
        value: '100%',
        labelTop: 'COMMITMENT &',
        labelBottom: 'PRECISION',
      },
    ],
  },

  // =================================================================
  // 2. Selected Projects (3 Landscape Cards Matching Reference)
  // =================================================================
  projects: [
    {
      id: 'project-food-delivery',
      number: '01',
      title: 'FOOD DELIVERY TIME PREDICTOR',
      subtitle: 'MACHINE LEARNING & ESTIMATION SUITE',
      category: 'ML REGRESSION & DEPLOYED APP',
      description:
        'A full-stack predictive ML application engineered to forecast food delivery duration in real-time. Features multi-parameter regression models trained on weather conditions, traffic density, courier distance, and dispatch metrics.',
      image: '/assets/images/project-fooddelivery.svg',
      technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'Vercel Deployment'],
      metrics: 'Live deployed model with real-time inference and sub-second prediction latency.',
      // SPACE FOR GITHUB PROJECT REPO:
      githubUrl: 'https://github.com/Arvind2607/food-delivery-time-prediction',
      liveDemoUrl: 'https://food-rosy-nu.vercel.app/',
      statusBadge: 'Deployed / Live',
      featured: true,
    },
    {
      id: 'project-can-telemetry',
      number: '02',
      title: 'CAN BUS TELEMETRY DECODER',
      subtitle: 'EMBEDDED PROTOCOL & ADAS TELEMATICS',
      category: 'AUTOMOTIVE SYSTEMS & C++',
      description:
        'A high-throughput vehicle telemetry packet parser written in modern C++ and C. Engineered for decoding raw binary CAN 2.0B / CAN-FD bus frames, parsing engine PIDs, and logging ADAS sensor payloads with minimal latency.',
      image: '/assets/images/project-telemetry.svg',
      technologies: ['C++', 'C', 'CAN Protocols', 'Embedded Systems', 'Telemetry'],
      metrics: 'Sub-millisecond frame decoding; zero dynamic heap allocation in time-critical loops.',
      // SPACE FOR GITHUB PROJECT REPO:
      githubUrl: 'https://github.com/Arvind2607/can-bus-telemetry-decoder',
      liveDemoUrl: '',
      statusBadge: 'Automotive Tech',
      featured: true,
    },
    {
      id: 'project-ev-powertrain',
      number: '03',
      title: 'EV POWERTRAIN & SENSOR MONITOR',
      subtitle: 'BATTERY MANAGEMENT & TELEMATICS',
      category: 'EMBEDDED SYSTEMS & IOT',
      description:
        'Embedded monitoring architecture for electric vehicle powertrains. Collects real-time telemetry from battery management systems (BMS), cell temperature arrays, and motor RPM sensors with serial interface output.',
      image: '/assets/images/project-evpowertrain.svg',
      technologies: ['Embedded C', 'Microcontrollers', 'CAN Bus', 'Sensors', 'IoT'],
      metrics: 'Continuous cyclic telemetry logging with automated thermal alert thresholds.',
      // SPACE FOR GITHUB PROJECT REPO:
      githubUrl: 'https://github.com/Arvind2607/ev-powertrain-telematics',
      liveDemoUrl: '',
      statusBadge: 'Embedded Systems',
      featured: true,
    },
  ],

  // =================================================================
  // 3. Education & Skills
  // =================================================================
  education: [
    {
      id: 'edu-btech',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Nagercoil Campus',
      period: '2024 – 2028',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java / C++)',
        'Computer Systems Architecture',
        'Operating Systems',
        'Database Management Systems',
      ],
      achievements: [
        'Focus on Automotive Software Engineering, Embedded Systems, and ADAS Architecture',
      ],
    },
  ],

  // Technical Skills in small outlined pill tags (monochrome with crimson hover)
  skills: [
    'JAVA',
    'PYTHON',
    'C / C++',
    'HTML5 / CSS3',
    'REACT',
    'TAILWIND CSS',
    'EMBEDDED SYSTEMS',
    'CAN BUS PROTOCOL',
    'ADAS CONCEPTS',
    'GIT & GITHUB',
    'LINUX / CLI',
    'VS CODE',
  ],

  // =================================================================
  // 4. Work Process (5-Step Timeline Inspired by Reference)
  // =================================================================
  workProcess: [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understanding requirements, ECU constraints, sensor protocols, and project objectives.',
      iconName: 'discover',
    },
    {
      step: '02',
      title: 'PLAN & ARCHITECTURE',
      description: 'Designing modular system architecture, communication bus frames, and telemetry data models.',
      iconName: 'plan',
    },
    {
      step: '03',
      title: 'DEVELOP & CODE',
      description: 'Writing high-efficiency, clean, and structured code across C/C++, Python, Java, and modern web tools.',
      iconName: 'develop',
    },
    {
      step: '04',
      title: 'TEST & VALIDATE',
      description: 'Rigorous validation, sensor edge-case simulation, unit testing, and memory leak checks.',
      iconName: 'validate',
    },
    {
      step: '05',
      title: 'DEPLOY & INTEGRATE',
      description: 'Flashing firmware onto target microcontrollers or deploying cloud-connected web services.',
      iconName: 'deploy',
    },
  ],

  // =================================================================
  // 5. Personal Quote Panel
  // =================================================================
  personalQuote: {
    quote:
      'Engineering software is not just about making code work—it is about crafting safe, high-precision systems that move the world forward.',
    author: 'Arvind SB',
    signature: 'Arvind SB',
    callout: "LET'S CREATE SOMETHING GREAT TOGETHER.",
  },
};
