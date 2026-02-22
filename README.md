# Giri Dhar — Portfolio

A modern, interactive developer portfolio built with React, TypeScript, and Three.js featuring smooth animations and a custom cursor.

## Live Demo

[View Portfolio](https://github.com/dharg6718/portfolio)

## Features

- **Interactive 3D Hero Scene** — Powered by React Three Fiber & Drei
- **Custom Cursor** — Unique cursor animation on desktop
- **Scroll Progress Indicator** — Visual scroll tracking
- **Smooth Animations** — Built with Framer Motion & GSAP
- **Responsive Design** — Mobile-first with Tailwind CSS
- **Sections** — Hero, About, Skills, Projects, Experience, Achievements, Contact

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 18, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS, shadcn/ui |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Animations | Framer Motion, GSAP |
| Routing | React Router DOM |
| Testing | Vitest, Testing Library |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/dharg6718/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── components/
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── CustomCursor.tsx
│   ├── HeroScene.tsx
│   ├── NavLink.tsx
│   └── ScrollProgress.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route pages
└── test/               # Test files
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Giri Dhar**
