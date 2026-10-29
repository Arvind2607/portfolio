/**
 * ===================================================================
 * ARVIND SB — CENTRAL PORTFOLIO CONFIGURATION DATA
 * ===================================================================
 * Single source of truth for Arvind SB's personal portfolio.
 * Synchronized with official CV / Resume.
 * ===================================================================
 */

import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  // =================================================================
  // 1. Personal & Brand Identity
  // =================================================================
  personal: {
    fullName: 'Arvind SB',
    displayName: 'ARVIND SB',
    initials: 'ASB',
    roleTag: 'COMPETITIVE PROGRAMMING & SOFTWARE ENGINEERING',
    roleSubtitle: 'CSE UNDERGRADUATE & JAVA DEVELOPER',
    title: 'SOFTWARE ENGINEERING & COMPETITIVE PROBLEM SOLVING',
    headline: 'CODE • SOLVE • SCALE',
    subheadline:
      'Results-driven Computer Science & Engineering undergraduate entering 3rd year at Amrita Vishwa Vidyapeetham, with practical experience in Java development and object-oriented programming. Proven track record in competitive problem-solving and national-level hackathons like VISA @ IIT Madras.',
    bio:
      'Results-driven Computer Science & Engineering undergraduate with practical experience in Java development, object-oriented programming, and scalable systems. Passionate about building robust software applications and optimizing data structures.',
    location: 'Tiruppur, Tamil Nadu',
    email: 'sbarvind2006@gmail.com',
    phone: '+91 9345568060',
    resumeUrl: '/resume/Arvind_SB_Resume.pdf',
    resumeFilename: 'Arvind_SB_Resume.pdf',
    
    photoUrl: '/images/profile/hero-portrait-studio.jpg',
    cutoutPhotoUrl: '/images/profile/hero-portrait-cutout.png',
    alternatePhotoUrl: '/images/profile/arvind-portrait.jpg',
    
    githubUsername: 'Arvind2607',
    
    socials: {
      email: 'sbarvind2006@gmail.com',
      github: 'https://github.com/Arvind2607',
      linkedin: 'https://www.linkedin.com/in/arvind-sb-185033365/',
      phone: '+91 9345568060',
      resume: '/resume/Arvind_SB_Resume.pdf',
    },

    availability: {
      enabled: true,
      label: 'AVAILABLE FOR OPPORTUNITIES',
      type: 'open',
    },

    heroStatement: 'Turning ideas into robust, high-performance systems.',

    stats: [
      {
        value: '3rd',
        labelTop: 'YEAR CSE',
        labelBottom: 'AMRITA UNIV',
      },
      {
        value: '6+',
        labelTop: 'FEATURED',
        labelBottom: 'PROJECTS',
      },
      {
        value: '100%',
        labelTop: 'COMMITMENT &',
        labelBottom: 'PRECISION',
      },
    ],
  },

  // =================================================================
  // 2. Selected Projects (Top 3 featured in desktop layout)
  // =================================================================
  projects: [
    {
      id: 'project-food-delivery',
      number: '01',
      title: 'FOOD DELIVERY PREDICTOR',
      subtitle: 'MACHINE LEARNING & ESTIMATION SUITE',
      category: 'ML REGRESSION & DEPLOYED APP',
      description:
        'A predictive ML application deployed to forecast food delivery duration in real-time. Features multi-parameter regression models trained on weather conditions, traffic density, courier distance, and dispatch metrics.',
      image: '/images/projects/project-fooddelivery.svg',
      technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'Vercel Deployment'],
      metrics: 'Live deployed model with real-time inference and sub-second prediction latency.',
      githubUrl: 'https://github.com/Arvind2607/food-delivery-time-prediction',
      liveDemoUrl: 'https://food-rosy-nu.vercel.app/',
      statusBadge: 'Live Deployed',
      featured: true,
    },
    {
      id: 'project-door-lock',
      number: '02',
      title: 'AUTOMATIC DOOR LOCKING SYSTEM',
      subtitle: 'SMART SECURITY & SENSOR AUTOMATION',
      category: 'EMBEDDED SYSTEMS & IOT',
      description:
        'Designed an automated smart security-based locking system featuring proximity sensor detection, automated access control latching, and real-time security verification (Jun – Oct, 2025).',
      image: '/images/projects/project-doorlock.svg',
      technologies: ['Embedded C', 'Microcontrollers', 'Sensors', 'Access Control'],
      metrics: 'Instant sub-second latching with auto-lock timer verification.',
      githubUrl: 'https://github.com/Arvind2607/automatic-door-locking-system',
      liveDemoUrl: '',
      statusBadge: 'Security Tech',
      featured: true,
    },
    {
      id: 'project-smartmap',
      number: '03',
      title: 'SMARTMAP NAVIGATOR',
      subtitle: 'GEOSPATIAL ROUTING & WAYPOINT HUD',
      category: 'MAPPING & PATHFINDING',
      description:
        'An interactive vector mapping and routing application deployed on Vercel. Computes optimal graph pathfinding algorithms, live road telemetry overlays, geospatial waypoint coordinate mapping, and navigation HUD.',
      image: '/images/projects/project-smartmap.svg',
      technologies: ['Geospatial GPS', 'Algorithms', 'Pathfinding', 'JavaScript', 'Vercel Deployment'],
      metrics: 'Live deployed geospatial app with dynamic route re-calculation and waypoint HUD.',
      githubUrl: 'https://github.com/Arvind2607/smartmap-navigator',
      liveDemoUrl: 'https://smartmap-navigator.vercel.app/',
      statusBadge: 'Live Deployed',
      featured: true,
    },
    {
      id: 'project-emedical',
      number: '04',
      title: 'E-MEDICAL MANAGEMENT SYSTEM',
      subtitle: 'HEALTHCARE RECORDS & APPOINTMENT SUITE',
      category: 'SOFTWARE APPLICATION',
      description:
        'Developed a comprehensive system to manage patient records, doctor schedules, and clinical appointments efficiently with structured data storage (Jan – Apr, 2025).',
      image: '/images/projects/project-tcupage.svg',
      technologies: ['Java', 'Database Systems', 'OOP', 'Data Management'],
      metrics: 'Optimized patient record lookup and appointment scheduling workflows.',
      githubUrl: 'https://github.com/Arvind2607',
      liveDemoUrl: '',
      statusBadge: 'Clinical App',
      featured: false,
    },
    {
      id: 'project-tcu-club',
      number: '05',
      title: 'TCU CLUB WEB PORTAL',
      subtitle: 'RESPONSIVE WEB PLATFORM',
      category: 'WEB DEVELOPMENT',
      description:
        'Built a clean, responsive community web page using structured semantic HTML and modern CSS layouts with optimized multi-device presentation (Jan – Apr, 2025).',
      image: '/images/projects/project-tcupage.svg',
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'UI Layouts'],
      metrics: 'Cross-browser responsive UI design with 100% fluid mobile layout.',
      githubUrl: 'https://github.com/Arvind2607',
      liveDemoUrl: '',
      statusBadge: 'Club Portal',
      featured: false,
    },
    {
      id: 'project-music-player',
      number: '06',
      title: 'MUSIC PLAYER APPLICATION',
      subtitle: 'AUDIO PLAYBACK & TRACK MANAGEMENT',
      category: 'MEDIA APPLICATION',
      description:
        'Developed an interactive digital music player application featuring play, pause, seek, playlist queueing, and track management controls (Sep – Dec, 2024).',
      image: '/images/projects/project-musicplayer.svg',
      technologies: ['Java / JS', 'Audio Systems', 'UI Controls', 'Track Management'],
      metrics: 'Seamless low-latency audio playback and playlist state management.',
      githubUrl: 'https://github.com/Arvind2607',
      liveDemoUrl: '',
      statusBadge: 'Media App',
      featured: false,
    },
  ],

  // =================================================================
  // 3. Education
  // =================================================================
  education: [
    {
      id: 'edu-btech',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Nagercoil',
      period: '2024 – Present',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java / C++)',
        'Database Management Systems',
        'Operating Systems',
        'Computer Systems Architecture',
        'Exception Handling & Collections Framework',
      ],
      achievements: [
        'Entering 3rd Year CSE Undergraduate',
        'Focus on Scalable Software Applications, Data Structures, and Competitive Problem Solving',
      ],
    },
    {
      id: 'edu-school',
      degree: 'Higher Secondary Education (12th: 72% | 10th: 83%)',
      institution: 'Sri Chaitanya Techno School, HSR Layout, Bangalore',
      period: 'Completed',
      achievements: ['Strong academic foundation in Mathematics and Sciences.'],
    },
  ],

  // =================================================================
  // 4. Internship & Industry Experience
  // =================================================================
  internships: [
    {
      id: 'intern-hanodale',
      role: 'Java Development Intern',
      company: 'Hanodale Solutions Pvt. Ltd.',
      period: 'Nov 17, 2025 – Dec 2, 2025',
      highlights: [
        'Worked on Core Java fundamentals and Object-Oriented Programming (OOP) concepts.',
        'Implemented Exception Handling and Collections Framework in structured modules.',
        'Practiced Java I/O, File Handling, and basic JDBC database connectivity operations.',
        'Completed real-time coding tasks and problem-solving assignments during internship.',
      ],
    },
    {
      id: 'intern-deloitte',
      role: 'Cyber Job Simulation',
      company: 'Deloitte (via Forage)',
      period: 'April 2026',
      highlights: [
        'Completed practical simulation tasks in enterprise Cybersecurity protocols and analysis.',
        'Investigated cybersecurity threats, formulated incident defense, and evaluated risk postures.',
        'Verified Credential ID: MiQonRKDQCC5nmuhq (Certificate of Completion).',
      ],
    },
    {
      id: 'intern-third-bridge',
      role: 'Client Service Delivery Simulation',
      company: 'Third Bridge (via Forage)',
      period: 'April 2026',
      highlights: [
        'Conducted structured analysis to break down complex client requests and pinpoint specialist experts.',
        'Drafted high-impact expert consultation profiles and delivered persuasive client pitches.',
        'Verified Credential ID: 8M5hK5iw342DXMNxc (Certificate of Completion).',
      ],
    },
  ],

  // =================================================================
  // 5. Verified Achievements
  // =================================================================
  achievements: [
    "Participant — Y'HACK '26 National Level 24-Hour Hackathon (IEEE Robotics & Automation Society / KPRIET)",
    'Participant — VISA 24-Hour AI Hackathon (IIT Madras)',
    'Participant — AI Safety Conclave 2025',
    'Student Poster Presentation — IEEE ICRM 2025',
  ],

  certifications: [
    {
      id: 'cert-yhack26',
      title: "Y'HACK '26 National Level 24-Hour Hackathon",
      issuer: 'IEEE Robotics & Automation Society / KPRIET',
      issueDate: 'Sep 2026',
    },
    {
      id: 'cert-deloitte-cyber',
      title: 'Cyber Job Simulation (Cybersecurity)',
      issuer: 'Deloitte / Forage',
      issueDate: 'Apr 2026',
    },
    {
      id: 'cert-third-bridge',
      title: 'Client Service Delivery Job Simulation',
      issuer: 'Third Bridge / Forage',
      issueDate: 'Apr 2026',
    },
  ],

  // =================================================================
  // 6. Technical Skills
  // =================================================================
  skills: [
    'JAVA',
    'PYTHON',
    'C',
    'OBJECT-ORIENTED PROGRAMMING (OOP)',
    'DATA STRUCTURES',
    'COLLECTIONS FRAMEWORK',
    'EXCEPTION HANDLING',
    'JDBC',
    'HTML5 & CSS3',
    'REACT',
    'NEXT.JS',
    'TAILWIND CSS',
    'GIT & GITHUB',
    'VS CODE',
  ],

  // =================================================================
  // 7. Numbered Development Workflow (01 to 05)
  // =================================================================
  workProcess: [
    {
      step: '01',
      title: 'UNDERSTAND',
      description: 'Analyzing requirements, problem constraints, input boundaries, and algorithmic complexity.',
      iconName: 'discover',
    },
    {
      step: '02',
      title: 'PLAN',
      description: 'Architecting modular class hierarchies, OOP design patterns, and efficient data structures.',
      iconName: 'plan',
    },
    {
      step: '03',
      title: 'BUILD',
      description: 'Writing clean, idiomatic code in Java, Python, C, Next.js, and modern software stacks.',
      iconName: 'develop',
    },
    {
      step: '04',
      title: 'TEST & REFINE',
      description: 'Edge-case validation, exception handling, memory profiling, and unit test execution.',
      iconName: 'validate',
    },
    {
      step: '05',
      title: 'DELIVER & LEARN',
      description: 'Deploying applications, tracking runtime performance, and continuously expanding technical depth.',
      iconName: 'deploy',
    },
  ],

  // =================================================================
  // 8. Crimson Personal Quote Panel
  // =================================================================
  personalQuote: {
    quote:
      'Writing scalable software is not just about solving today’s test cases—it is about building clean, efficient architectures that endure.',
    author: 'Arvind SB',
    signature: 'Arvind SB',
    callout: "LET'S CREATE SOMETHING GREAT TOGETHER.",
  },
};

export default portfolioData;
