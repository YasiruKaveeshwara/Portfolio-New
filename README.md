# Yasiru Kaveeshwara — Portfolio

🌐 **Live:** [yasirukaveeshwara.dev](https://yasirukaveeshwara.dev)

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, a dark glassmorphism theme, and a fully mobile-friendly layout.

## About Me

**Yasiru Kaveeshwara** — Software Engineer | Full-Stack Developer

Software Engineering Undergraduate and MERN Stack Developer based in Gampaha, Sri Lanka. I build scalable web applications and explore the intersection of full-stack development and emerging AI trends.

- **Email:** kaveeshwaray@gmail.com
- **LinkedIn:** [linkedin.com/in/kaveeshwaray](https://linkedin.com/in/kaveeshwaray)
- **GitHub:** [github.com/YasiruKaveeshwara](https://github.com/YasiruKaveeshwara)

## About the Project

This portfolio showcases my projects, skills, experience, and education with a polished dark-themed UI. It includes:

- **Hero** section with profile photo and animated entrance
- **About** section with highlights and stats
- **Skills** page with categorized tech stack (devicons)
- **Experience** timeline with alternating layout
- **Education** & certifications
- **Projects** gallery with live demo / GitHub links
- **Contact** form powered by EmailJS
- **Resume** page with PDF viewer

## Tech Stack

| Category          | Technologies                   |
| ----------------- | ------------------------------ |
| **Framework**     | React 19, TypeScript           |
| **Build Tool**    | Vite 7                         |
| **Styling**       | Tailwind CSS 4, tw-animate-css |
| **Animations**    | Framer Motion                  |
| **Routing**       | React Router DOM               |
| **UI Components** | Radix UI, Lucide Icons         |
| **Email**         | EmailJS                        |
| **Particles**     | tsparticles                    |
| **Testing**       | Vitest, Testing Library        |

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or Bun)

### Installation

```sh
# Clone the repository
git clone https://github.com/YasiruKaveeshwara/Portfolio-New.git

# Navigate to the project
cd Portfolio-New

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Available Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start dev server         |
| `npm run build`      | Production build         |
| `npm run preview`    | Preview production build |
| `npm run lint`       | Run ESLint               |
| `npm run test`       | Run tests                |
| `npm run test:watch` | Run tests in watch mode  |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/           # shadcn-ui primitives
├── constants/        # All configurable data (personal, projects, skills, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route pages (Index, Skills, Projects, Resume, NotFound)
└── test/             # Test setup and specs
public/
├── photo.svg         # Profile photo
├── Resume.pdf        # Downloadable resume
└── particleConfig.json
```

## Customization

All personal data is centralized in `src/constants/`. Update these files to make the portfolio your own:

- **personal.ts** — Name, bio, social links, contact info
- **about.ts** — Stats, highlights, descriptions
- **skills.ts** — Skill categories with devicon classes
- **experience.ts** — Work experience entries
- **education.ts** — Education & certifications
- **projects.ts** — Project cards with tags, images, links
- **contact.ts** — Contact info & form messages


---

Built with ❤️ by [Yasiru Kaveeshwara](https://github.com/YasiruKaveeshwara)
