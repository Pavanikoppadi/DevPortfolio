# Pavani Koppadi - Portfolio Website

> A modern, Apple-inspired portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 📁 Project Structure

```
src/
├── assets/                    # Static assets (images, logos)
│   ├── profile-photo.png      # Profile photo
│   ├── projects/              # Project preview images
│   └── tools/                 # Tool/technology logos
├── components/
│   ├── portfolio/             # Main portfolio sections
│   │   ├── MainLayout.tsx     # Root layout with sidebar
│   │   ├── FixedSidebar.tsx   # Desktop navigation sidebar
│   │   ├── Header.tsx         # Mobile navigation header
│   │   ├── CreativeHeroSection.tsx  # Hero with profile info
│   │   ├── HeroSection.tsx    # Secondary tagline section
│   │   ├── AboutSection.tsx   # Personal statement
│   │   ├── CapabilitiesSection.tsx  # Skills/capabilities
│   │   ├── ProjectsSection.tsx      # Featured projects
│   │   ├── ExperienceSection.tsx    # Work experience
│   │   ├── EducationSection.tsx     # Education details
│   │   ├── SkillsSection.tsx        # Technology badges
│   │   ├── ToolboxSection.tsx       # AI/dev tools grid
│   │   ├── WorkflowSection.tsx      # Development workflow
│   │   ├── LearningSection.tsx      # GitHub-style activity
│   │   ├── LifestyleSection.tsx     # Bento grid photos
│   │   ├── AchievementsSection.tsx  # Awards/recognition
│   │   ├── InterestsSection.tsx     # Interests icons
│   │   ├── VideoSection.tsx         # Embedded video
│   │   ├── ContactSection.tsx       # Contact CTA
│   │   └── Footer.tsx               # Site footer
│   └── ui/                    # Reusable UI components
│       └── ThemeToggle.tsx    # Light/dark mode toggle
├── pages/
│   ├── Index.tsx              # Main page (assembles sections)
│   └── NotFound.tsx           # 404 error page
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── App.tsx                    # Root component with routing
├── main.tsx                   # Entry point
└── index.css                  # Global styles & design tokens
```

---

## 🎨 Design System

### Color Tokens

The design uses a monochrome, Apple-inspired color palette defined in `index.css`:

| Token | Purpose |
|-------|---------|
| `--background` | Main content background (white in light mode) |
| `--foreground` | Primary text color |
| `--foreground-secondary` | Muted text |
| `--sidebar-dark` | Fixed dark sidebar background |
| `--border` | Subtle borders |
| `--accent` | Links and highlights |

### Typography Scale

- `text-display` - Large headings (5xl-7xl)
- `text-hero` - Hero text styling
- `text-body` - Body text (base-lg)
- `text-caption` - Small labels

### Component Classes

- `.section-container` - Centered max-width container with padding
- `.section-padding` - Consistent vertical padding
- `.section-full` - Full-height centered section
- `.card-glass` - Glassmorphism card style
- `.btn-primary` - Filled button
- `.btn-secondary` - Outlined button

---

## 🧩 Component Documentation

See [COMPONENTS.md](./COMPONENTS.md) for detailed documentation of each component.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |

---

## 📱 Responsive Design

- **Desktop**: Fixed dark sidebar on left, scrollable content on right
- **Mobile**: Fixed header with hamburger menu, full-width content below

---

## 🌙 Theme Support

Light and dark themes are supported via CSS variables.
Theme preference is stored in `localStorage` under key `pk_theme`.

---

## 📄 License

© 2025 Pavani Koppadi. All rights reserved.
