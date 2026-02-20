

# 🚀 Giri Dhar — 3D Interactive Portfolio Website

## Overview
A premium, dark-themed 3D interactive portfolio for a pre-final year Engineering student specializing in MERN Stack, Cloud & DevOps. Silicon Valley-level aesthetics with glassmorphism, smooth animations, and professional minimalism.

## Design System
- **Theme**: Dark default with deep blue (#0f172a), neon cyan (#00f5ff), electric purple (#7c3aed)
- **Style**: Glassmorphism cards, subtle glow effects, gradient accents
- **Typography**: Bold futuristic headings, clean sans-serif body
- **Responsive**: Mobile-first, fully responsive across all breakpoints

## Libraries
- **React Three Fiber + Three.js** — 3D hero background (rotating mesh/globe)
- **Framer Motion** — Scroll-triggered animations, page transitions, staggered reveals
- **GSAP** — Smooth scrolling, parallax effects, timeline animations

---

## Sections

### 1. Hero Section (Full-screen 3D)
- 3D animated abstract neural mesh background using React Three Fiber
- Animated floating text: "Hi, I'm Giri Dhar" with gradient animation
- Typing effect subtitle: "Full Stack Developer | Cloud & DevOps Enthusiast"
- Two CTA buttons (View Projects, Download Resume) with magnetic hover + ripple
- GitHub & LinkedIn social icons with neon glow hover
- Scroll-down indicator

### 2. About Section
- Glassmorphism card with scroll-triggered reveal
- Professional summary (pre-final year, 3-month internship, MERN/Cloud/CI-CD experience)
- Animated skill progress bars
- Floating 3D-styled tech stack icons (MongoDB, Express, React, Node, AWS, Docker, Jenkins, Kubernetes)

### 3. Skills Section
- Interactive grid of skill cards organized by category (Frontend, Backend, Database, Cloud, DevOps)
- 3D tilt hover effect on each card
- Animated gradient borders and glow-on-hover elevation
- Icons for each technology

### 4. Projects Section
- Three premium glass cards with 3D tilt hover and gradient overlays:
  - **SmartUzhavan** — Agri Yield Prediction (MERN + ML + Cloud + CI/CD)
  - **Social Fitness Platform** — Community fitness app with auth
  - **CI/CD Generator Cloud Tool** — Automated pipeline creation
- Each card: tech stack badges, Live Demo + GitHub buttons, smooth staggered reveal

### 5. Experience Section
- Vertical animated timeline with glowing pulse nodes
- 3-month internship details: development, cloud deployment, collaboration, version control
- Scroll-triggered node animations

### 6. Achievements & Certifications
- Cloud certifications, internship completion, technical workshops
- Animated counter numbers on scroll
- Glass card layout with icons

### 7. Contact Section
- Glassmorphism contact form with floating animated labels
- Name, email, message fields (frontend only — no backend)
- Subtle animated particle background
- Social media links

### 8. Footer
- Minimal design with subtle glow divider line
- Smooth scroll-to-top button
- Copyright text

---

## Advanced UI Features
- **Custom cursor** with glow trail effect
- **Scroll progress indicator** bar at top of page
- **Magnetic buttons** that subtly follow cursor on hover
- **Smooth scrolling** via GSAP/Lenis
- **Lazy loading** for sections and 3D components
- **Parallax scroll effects** on background elements
- **Floating glowing particles** as ambient decoration

## Architecture
- Clean modular component structure under `src/components/sections/` and `src/components/ui/`
- Reusable animation hooks and utility components
- Single-page app with smooth scroll navigation
- Navbar with section links and active state indicator

