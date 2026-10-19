# R.S. Midhun — Python Full-Stack Developer 3D Portfolio

A modern, interactive 3D developer portfolio website for **R.S. Midhun**, built with React, Vite, TypeScript, Tailwind CSS, Three.js, React Three Fiber, and Drei.

All personal information, education, skills, internship, experience, and projects are strictly derived from R.S. Midhun's official resume as the **single source of truth**.

---

## 🚀 Key Features

- **Interactive 3D Hero Scene**: Custom React Three Fiber scene with interactive orbital rings, holographic core, particle constellation, and mouse-parallax tracking.
- **Eco / Low-Power Mode**: Automatic fallback for low-power and non-WebGL devices.
- **6 Verified Live Applications**:
  1. **Ever Green Cabs** (`https://evergreencabs.co.in`) — Kanyakumari taxi booking platform.
  2. **Nakshatra Coimbatore Travels** (`https://nakshatracoimbatoretravels.com`) — 24-hour agency with WhatsApp-first booking.
  3. **DataExtractPRO** (`https://webscrap-ui.vercel.app`) — AI-powered spreadsheet contact extraction tool.
  4. **TalentATS** (`https://resume-analyzer-mauve-beta.vercel.app`) — AI resume analyzer and candidate scoring platform.
  5. **Pastry Hut** (`https://pastryhut.netlify.app`) — Online bakery ordering application.
  6. **Xtaken** (`https://xtaken.in`) — Full-stack document management service with Django & MongoDB/SQL.
- **Experience Timeline**: Highlights 6-month Full Stack Developer Internship (Python) at **Schoenen DIS LLP** (with 4 live web apps deployed during internship).
- **Interactive Skill Cards**: 3D tilt interaction categorized across Languages, Frontend, Backend, Databases, Tools, and Core Development Practices.
- **Live Resume Viewer & Generator**: In-app ATS-formatted resume viewer with one-click print and direct download.
- **SEO & Structured Data**: OpenGraph, Twitter Cards, and schema.org JSON-LD Person markup.
- **Vercel Free Tier Ready**: Zero server overhead, static Vite production build.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Glassmorphism, Custom Theme Tokens
- **3D & Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons & Animation**: Lucide React, Canvas Confetti
- **Deployment**: Vercel

---

## 💻 Local Development Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel (Free Tier)

### Method A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of 3D portfolio"
   git branch -M main
   git remote add origin https://github.com/itsmidhun-r-s/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your GitHub repository.
5. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your portfolio will be live in seconds!

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```
Follow the interactive prompts to deploy directly.
