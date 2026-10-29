# ARVIND SB — CINEMATIC DEVELOPER PORTFOLIO
### *CODE • DRIVE • INNOVATE*

A premium, agency-grade developer portfolio inspired by high-performance automotive engineering and cinematic editorial design. Engineered for **Arvind SB** — Computer Science & Engineering student at **Amrita Vishwa Vidyapeetham, Nagercoil Campus**, specializing in **Automotive Software Engineering, Embedded Systems, and ADAS**.

---

## 🏎️ Brand & Visual Identity
- **Name**: Arvind SB
- **Monogram**: ASB
- **Headline**: `CODE • DRIVE • INNOVATE`
- **Identity**: B.Tech CSE Student, Automotive Software & Embedded Systems Engineer
- **Institution**: Amrita Vishwa Vidyapeetham, Nagercoil Campus
- **Email**: `sbarvind2006@gmail.com`
- **GitHub**: [github.com/Arvind2607](https://github.com/Arvind2607)
- **LinkedIn Space**: Configurable in `src/data/portfolioData.ts`
- **Aesthetic**: Deep matte black (`#080808`), dark charcoal (`#111111`), and precision crimson red (`#E50920`) with giant condensed background typography and editorial multi-column composition.

---

## ⚡ Instant Preview (Zero Dependencies Needed)

You have **two distinct ways** to run and preview your website immediately:

### Option A: Direct Browser Preview
Double-click **`standalone-preview.html`** in your Windows file manager to open it immediately in Chrome, Edge, Brave, or Firefox!
- 100% self-contained with no server or node modules required.
- Interactive project architecture modals for all 3 projects.
- Functional "Copy Email" button with instant toast notification.
- Working `mailto:` integration to `sbarvind2006@gmail.com`.
- Studio / Campus portrait toggle button.
- Live demo link to your deployed Food Delivery Time Predictor: [food-rosy-nu.vercel.app](https://food-rosy-nu.vercel.app/).

### Option B: Local Development Server with Python
Since Python 3.11 is installed on your computer, you can run a local test server anytime:
```powershell
python -m http.server 3000
```
Then open:
👉 **`http://localhost:3000/standalone-preview.html`**

---

## 📝 Personalization Guide: Updating Your Information

All personal details, project URLs, and social links are centralized in:
👉 **`src/data/portfolioData.ts`**

| Field | Location in `portfolioData.ts` | Notes |
| :--- | :--- | :--- |
| **LinkedIn URL** | `personal.socials.linkedin` | Replace `YOUR_LINKEDIN_ID` with your actual vanity URL |
| **Food Delivery Repo** | `projects[0].githubUrl` | Set your exact GitHub repository URL |
| **CAN Bus Telemetry Repo** | `projects[1].githubUrl` | Set your exact GitHub repository URL |
| **EV Powertrain Repo** | `projects[2].githubUrl` | Set your exact GitHub repository URL |
| **Phone Number** | `personal.phone` | Optional: add phone number or leave empty to hide |
| **Portrait Photo** | `personal.photoUrl` | Switch between `/assets/images/hero-portrait-studio.jpg` and `/assets/images/arvind-portrait.jpg` |

---

## 📂 Project Architecture

```
art-portfolio/
├── index.html                           # Production Vite HTML entry point
├── package.json                         # Project dependencies and build scripts
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Tailwind theme with crimson & fonts
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite build configuration
├── standalone-preview.html              # Instant zero-dependency browser preview
├── README.md                            # Comprehensive documentation
├── public/
│   ├── favicon.svg                      # Custom ASB monogram favicon
│   └── assets/
│       ├── images/
│       │   ├── hero-portrait-studio.jpg # Studio portrait on black background with crimson rim light
│       │   ├── arvind-portrait.jpg      # Arvind's campus portrait
│       │   ├── project-fooddelivery.svg # Food delivery ETA ML dashboard illustration
│       │   ├── project-telemetry.svg    # CAN bus telemetry decoder illustration
│       │   ├── project-evpowertrain.svg # EV powertrain & BMS telematics illustration
│       │   ├── laptop-mockup.svg        # Custom laptop mockup displaying Arvind SB portfolio
│       │   └── template-reference.jpg   # Primary design reference guide
│       └── resume/
│           └── Arvind_S_Resume.pdf      # Resume download document
└── src/
    ├── App.tsx                          # Master portfolio layout (matching reference layout)
    ├── index.css                        # Global styles, fonts, and animations
    ├── main.tsx                         # React entry point
    ├── components/
    │   ├── Navbar.tsx                   # SECTION A: Editorial role & availability header
    │   ├── Hero.tsx                     # SECTION B: Cinematic hero with giant PORTFOLIO typography
    │   ├── Projects.tsx                 # SECTION C: 3 landscape project cards
    │   ├── ProjectModal.tsx             # Interactive project detail dialog
    │   ├── EducationWorkflowQuote.tsx   # SECTION D & E: 3-column layout (Education/Skills, 5-Step Process, Crimson Quote)
    │   ├── Contact.tsx                  # SECTION F: Let's Work Together, email, copy button & laptop mockup
    │   └── Footer.tsx                   # Minimal footer with copyright & back-to-top
    ├── data/
    │   └── portfolioData.ts             # Central single source of truth for all content
    └── types/
        └── portfolio.ts                 # Strict TypeScript data models
```

---

## 🚀 Deployment to Vercel

To deploy your portfolio to Vercel for free with automatic SSL:
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: cinematic black and crimson developer portfolio for Arvind SB"
   git remote add origin https://github.com/Arvind2607/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import `Arvind2607/portfolio`.
4. Click **Deploy**. Vercel will build and assign you a fast, production URL (e.g. `arvind-sb.vercel.app`).
