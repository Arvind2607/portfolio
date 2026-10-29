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
    alternatePhotoUrl: '/assets/images/arvind-portrait.jpg', // Campus portrait
    
    githubUsername: 'Arvind2607',
    
    // Social Links & Space for LinkedIn ID
    socials: {
      email: 'sbarvind2006@gmail.com',
      github: 'https://github.com/Arvind2607',
      // SPACE FOR LINKEDIN ID: Update with your exact LinkedIn username / vanity URL:
      linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_ID', 
      phone: '', 
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
        value: '7+',
        labelTop: 'GITHUB',
        labelBottom: 'PROJECTS',
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
  // 2. Selected Projects (Updated Order: 5 & 6 swapped)
  // =================================================================
  projects: [
    {
      id: 'project-food-delivery',
      number: '01',
      title: 'FOOD DELIVERY PREDICTOR',
      subtitle: 'MACHINE LEARNING & ESTIMATION SUITE',
      category: 'ML REGRESSION & DEPLOYED APP',
      description:
        'A full-stack predictive ML application deployed to forecast food delivery duration in real-time. Features multi-parameter regression models trained on weather conditions, traffic density, courier distance, and dispatch metrics.',
      image: '/assets/images/project-fooddelivery.svg',
      technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'Vercel Deployment'],
      metrics: 'Live deployed model with real-time inference and sub-second prediction latency.',
      githubUrl: 'https://github.com/Arvind2607/food-delivery-time-prediction',
      liveDemoUrl: 'https://food-rosy-nu.vercel.app/',
      statusBadge: 'Live Deployed',
      featured: true,
    },
    {
      id: 'project-yhack26',
      number: '02',
      title: 'YHACK26 LASTMINUTE',
      subtitle: 'RAPID PROTOTYPE & SPRINT ENGINE',
      category: 'HACKATHON INNOVATION',
      description:
        'High-intensity hackathon sprint project built for YHACK26 (Team YS532). Engineered with modular full-stack architecture, rapid real-time state synchronization, and collaborative engineering.',
      image: '/assets/images/project-yhack.svg',
      technologies: ['Full-Stack', 'Hackathon Sprint', 'TypeScript', 'Node.js', 'Team YS532'],
      metrics: 'Rapid MVP deployment under competitive 36-hour hackathon constraints.',
      githubUrl: 'https://github.com/Arvind2607/YHACK26_YS532_LastMinute',
      liveDemoUrl: '',
      statusBadge: 'Hackathon YHACK',
      featured: true,
    },
    {
      id: 'project-smartmap',
      number: '03',
      title: 'SMARTMAP NAVIGATOR',
      subtitle: 'GEOSPATIAL ROUTING & WAYPOINT HUD',
      category: 'MAPPING & PATHFINDING',
      description:
        'An interactive vector mapping and routing application. Computes optimal graph pathfinding algorithms, live road telemetry overlays, geospatial waypoint coordinate mapping, and navigation HUD.',
      image: '/assets/images/project-smartmap.svg',
      technologies: ['Geospatial GPS', 'Algorithms', 'Pathfinding', 'JavaScript', 'GIS API'],
      metrics: 'Dynamic route re-calculation and turn-by-turn waypoint visual guidance.',
      githubUrl: 'https://github.com/Arvind2607/smartmap-navigator',
      liveDemoUrl: '',
      statusBadge: 'Navigation & GIS',
      featured: true,
    },
    {
      id: 'project-door-lock',
      number: '04',
      title: 'AUTOMATIC DOOR LOCKING SYSTEM',
      subtitle: 'SMART ACCESS & SENSOR SECURITY',
      category: 'EMBEDDED SYSTEMS & IOT',
      description:
        'An automated smart access control system featuring proximity sensor detection, micro-controller servo latching, secure credential verification, and real-time tamper protection protocols.',
      image: '/assets/images/project-doorlock.svg',
      technologies: ['Embedded C', 'Microcontrollers', 'Sensors', 'Servo Actuators', 'IoT'],
      metrics: 'Instant sub-second latching with auto-lock timer verification.',
      githubUrl: 'https://github.com/Arvind2607/automatic-door-locking-system',
      liveDemoUrl: '',
      statusBadge: 'Embedded / IoT',
      featured: true,
    },
    {
      id: 'project-haskell-kiosk',
      number: '05',
      title: 'SELF ORDERING KIOSK SYSTEM',
      subtitle: 'FUNCTIONAL ARCHITECTURE IN HASKELL',
      category: 'FUNCTIONAL ARCHITECTURE (λ)',
      description:
        'A purely functional self-ordering kiosk terminal system engineered in Haskell. Implemented using immutable state transformations, algebraic data types for menu catalogs, and receipt dispatch.',
      image: '/assets/images/project-haskellkiosk.svg',
      technologies: ['Haskell', 'Functional Programming', 'State Monad', 'Algebraic Types'],
      metrics: '100% pure computational logic with zero runtime exceptions.',
      githubUrl: 'https://github.com/Arvind2607/haskell-self-ordering-kiosk',
      liveDemoUrl: '',
      statusBadge: 'Haskell (λ)',
      featured: true,
    },
    {
      id: 'project-tcu-page',
      number: '06',
      title: 'TCU TELEMATICS CONSOLE',
      subtitle: 'TELEMATICS CONTROL UNIT WEB DASHBOARD',
      category: 'AUTOMOTIVE SYSTEMS & TELEMETRY',
      description:
        'In-vehicle Telematics Control Unit (TCU) management portal aggregating real-time CAN bus telemetry, GPS positioning, cellular modem connectivity status, and vehicle health diagnostics.',
      image: '/assets/images/project-tcupage.svg',
      technologies: ['Automotive Telematics', 'CAN Bus', 'Web Dashboard', 'Telemetry', 'IoT'],
      metrics: 'Real-time CAN-FD packet stream monitoring and uplink status indicators.',
      githubUrl: 'https://github.com/Arvind2607/tcu-telematics-page',
      liveDemoUrl: '',
      statusBadge: 'Automotive Tech',
      featured: true,
    },
    {
      id: 'project-music-player',
      number: '07',
      title: 'MUSIC PLAYER & SPECTRUM',
      subtitle: 'AUDIO STREAMING & EQUALIZER SUITE',
      category: 'WEB AUDIO & MEDIA',
      description:
        'A responsive digital audio player built with real-time frequency spectrum analysis, dynamic waveforms, customizable equalizer presets, and seamless queue management.',
      image: '/assets/images/project-musicplayer.svg',
      technologies: ['Web Audio API', 'JavaScript', 'Canvas', 'Equalizer DSP'],
      metrics: 'High-fidelity audio playback with interactive 60 FPS spectrum visualizer.',
      githubUrl: 'https://github.com/Arvind2607/music-player',
      liveDemoUrl: '',
      statusBadge: 'Audio Web App',
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
        'Functional Programming (Haskell)',
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
    'HASKELL (λ)',
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
      description: 'Writing high-efficiency, clean, and structured code across C/C++, Python, Java, Haskell, and modern web tools.',
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
