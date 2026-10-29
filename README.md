# ARVIND SB — CINEMATIC DEVELOPER PORTFOLIO

A personal portfolio website engineered with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Designed in a black-and-crimson editorial aesthetic inspired by high-performance automotive telemetry, featuring layered depth, condensed display typography, responsive project showcases, and system-level engineering workflows.

---

## ⚡ Tech Stack

- **Frontend Framework**: Next.js 14+ (App Router, Server Components by default)
- **UI Library**: React 18 / 19
- **Type Safety**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS with custom crimson glow and telemetry utilities
- **Icons**: Lucide React
- **Asset Optimization**: Next.js `Image` component & Next.js Metadata API for SEO
- **Node Package Manager**: `pnpm` (lockfile: `pnpm-lock.yaml`)
- **Python Tooling**: `uv` for Python dependency and script management (lockfile: `backend/uv.lock`)

---

## 📁 Project Architecture

```text
art protfolio/
├── backend/                         # Python tooling managed via uv
│   ├── pyproject.toml               # Python project configuration
│   ├── uv.lock                      # uv locked dependencies
│   └── validate_portfolio.py        # Asset & data integrity checker
├── public/                          # Public static assets
│   ├── favicon.svg                  # Brand favicon
│   ├── images/
│   │   ├── profile/                 # Studio & cutout portrait photos
│   │   │   ├── hero-portrait-cutout.png
│   │   │   ├── hero-portrait-studio.jpg
│   │   │   └── arvind-portrait.jpg
│   │   ├── projects/                # Project SVG & image previews
│   │   └── laptop-mockup.svg        # Contact visual illustration
│   └── resume/                      # Official downloadable resume PDF
│       └── Arvind_S_Resume.pdf
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout, metadata & viewport
│   │   ├── page.tsx                 # Main single-page portfolio layout
│   │   ├── globals.css              # Custom crimson styles & animations
│   │   └── not-found.tsx            # Cinematic 404 page
│   ├── components/                  # Modular React components
│   │   ├── site-header.tsx          # Top navigation bar
│   │   ├── mobile-navigation.tsx    # Mobile drawer menu
│   │   ├── hero-section.tsx         # Hero section with giant red "PORTFOLIO"
│   │   ├── profile-portrait.tsx     # Central layered portrait component
│   │   ├── projects-section.tsx     # Selected projects section (3 featured)
│   │   ├── project-card.tsx         # Reusable project card
│   │   ├── education-skills.tsx     # Academic foundation & compact skills tags
│   │   ├── workflow-section.tsx     # 5-step engineering process (01 to 05)
│   │   ├── quote-panel.tsx          # Vivid crimson quotation panel
│   │   ├── contact-section.tsx      # "LET'S WORK TOGETHER" contact hub
│   │   ├── site-footer.tsx          # Minimal bottom footer
│   │   └── loading-screen.tsx       # Cinematic startup loader
│   ├── data/
│   │   └── portfolio.ts             # CENTRAL SINGLE SOURCE OF TRUTH
│   └── types/
│       └── portfolio.ts             # Strong TypeScript interfaces
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ / v22+ (v26 LTS recommended)
- **pnpm**: v9+ or v12+ (`npm install -g pnpm`)
- **Python & uv** *(optional for Python tooling)*: Python 3.10+ and [uv](https://docs.astral.sh/uv/)

### 2. Frontend Installation & Commands (using `pnpm`)

All frontend tasks use **pnpm**:

```bash
# Install dependencies
pnpm install

# Start local development server (runs on http://localhost:3000)
pnpm dev

# Type check TypeScript files
pnpm typecheck

# Run ESLint validation
pnpm lint

# Build production bundle
pnpm build

# Run production server
pnpm start
```

### 3. Python Tooling (using `uv`)

Python utilities reside in `backend/` and are strictly managed with **uv**:

```bash
# Navigate to backend directory
cd backend

# Validate asset and file integrity
uv run python validate_portfolio.py

# Add a new Python dependency
uv add <package-name>
```

> **Note**: Frontend dependencies (`pnpm`) and Python dependencies (`uv`) are kept completely separate. Do not mix npm/yarn with pnpm, and do not use pip/requirements.txt directly.

---

## 🛠️ Customization Guide

All personal data, projects, skills, education, and links are centralized in a single typed configuration file:
👉 **`src/data/portfolio.ts`**

### 1. How to Update Personal Information & Contact Details
Open `src/data/portfolio.ts` and modify the `personal` object:
```typescript
personal: {
  fullName: 'Arvind SB',
  displayName: 'ARVIND SB',
  email: 'sbarvind2006@gmail.com',  // Used for mailto: and clipboard copy
  phone: '+91 98765 43210',          // Optional: leave empty '' to hide phone link
  location: 'Amrita Vishwa Vidyapeetham, Nagercoil Campus, Tamil Nadu, India',
  socials: {
    email: 'sbarvind2006@gmail.com',
    github: 'https://github.com/Arvind2607',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    phone: '',
    resume: '/resume/Arvind_S_Resume.pdf',
  },
  // ...
}
```

### 2. How to Replace the Profile Photo
1. Place your new portrait in `public/images/profile/` (e.g., `my-portrait.png`).
2. Transparent cutout portraits look best against the crimson `PORTFOLIO` backdrop.
3. Update `src/data/portfolio.ts`:
```typescript
photoUrl: '/images/profile/my-portrait.png',
cutoutPhotoUrl: '/images/profile/my-portrait.png',
```

### 3. How to Replace or Add Project Cards
Inside `src/data/portfolio.ts`, update the `projects` array:
```typescript
{
  id: 'project-food-delivery',
  number: '01',
  title: 'FOOD DELIVERY PREDICTOR',
  subtitle: 'MACHINE LEARNING & ESTIMATION SUITE',
  category: 'ML REGRESSION & DEPLOYED APP',
  description: 'A predictive ML application deployed to forecast food delivery duration...',
  image: '/images/projects/project-fooddelivery.svg', // Or a screenshot in public/images/projects/
  technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'Vercel Deployment'],
  metrics: 'Live deployed model with real-time inference.',
  githubUrl: 'https://github.com/Arvind2607/food-delivery-time-prediction',
  liveDemoUrl: 'https://food-rosy-una.vercel.app/',
  statusBadge: 'Live Deployed',
  featured: true, // Set to true to display in top 3 desktop cards
}
```

### 4. How to Update Resume
1. Save your updated resume as `Arvind_S_Resume.pdf` into `public/resume/`.
2. The site automatically wires all download buttons to `/resume/Arvind_S_Resume.pdf`.

---

## 🚢 Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub (`git push origin main`).
2. Import your repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and uses `pnpm build`.
4. Deploy with 1 click!

---

## 📄 License
This portfolio is personal property of **Arvind SB**. All rights reserved.
