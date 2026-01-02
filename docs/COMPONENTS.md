# Component Documentation

> Detailed documentation for all portfolio components.

---

## Table of Contents

1. [Layout Components](#layout-components)
2. [Hero Sections](#hero-sections)
3. [Content Sections](#content-sections)
4. [UI Components](#ui-components)

---

## Layout Components

### MainLayout.tsx

**Purpose**: Root layout wrapper creating the distinctive framed design.

**Features**:
- Desktop: Fixed dark sidebar + rounded white content area
- Mobile: Fixed header + full-width content
- Scroll locking when mobile menu is open

**Props**:
| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content to render |

**Usage**:
```tsx
<MainLayout>
  <YourPageContent />
</MainLayout>
```

---

### FixedSidebar.tsx

**Purpose**: Desktop navigation sidebar (hidden on mobile).

**Features**:
- Profile photo and name
- "Open to work" status badge
- Navigation links with rounded hover states
- Social links (LinkedIn, GitHub, Email)
- Theme toggle button
- Download resume button

**Animation**: Fade-in on page load with staggered delays.

---

### Header.tsx

**Purpose**: Mobile-only navigation header.

**Features**:
- Compact profile display
- Hamburger menu toggle
- Full-screen overlay navigation
- Theme toggle

**State**:
- `isScrolled` - Tracks scroll for background opacity
- `isMobileMenuOpen` - Controls menu visibility

---

## Hero Sections

### CreativeHeroSection.tsx

**Purpose**: Primary hero with profile photo and introduction.

**Structure**:
1. Profile photo (animated circle)
2. Location badge ("India")
3. Main name heading
4. Role subtitle
5. Call-to-action buttons (Get in Touch, View Resume)

**Animation**: Staggered fade-up using Framer Motion.

---

### HeroSection.tsx

**Purpose**: Secondary tagline section below main hero.

**Content**: "Designing intelligent systems where AI meets usability"

**Animation**: Fade-up with gradient text effect.

---

## Content Sections

### AboutSection.tsx

**Purpose**: Personal statement with two-column layout.

**Left Column**: Bold statement headline
**Right Column**: Bio paragraphs + stat cards (CGPA, Grad Year, Mindset)

**Animation**: Horizontal slide-in from opposite directions.

---

### CapabilitiesSection.tsx

**Purpose**: Technical capabilities in a 2x2 grid.

**Data Structure**:
```typescript
{
  icon: LucideIcon,    // Lucide icon component
  title: string,       // Capability name
  description: string, // Brief description
  skills: string[]     // Related technologies
}
```

**Animation**: Staggered fade-up for each card.

---

### ProjectsSection.tsx

**Purpose**: Featured project showcase in 3-column grid.

**Each Project**:
- Preview image with hover zoom
- Title and description
- External link to GitHub

**Animation**: Staggered reveal on scroll.

---

### ExperienceSection.tsx

**Purpose**: Work experience timeline.

**Each Entry**:
- Company logo
- Role title
- Company name, type, period, location
- Description paragraph

**Layout**: Vertical list with dividers.

---

### EducationSection.tsx

**Purpose**: Educational background.

**Content**: Institution logo, degree, CGPA.

**Layout**: Simple horizontal card with logo.

---

### SkillsSection.tsx

**Purpose**: Technology badges in flexbox layout.

**Each Skill**:
- DevIcons CDN icon
- Technology name

**Animation**: Staggered scale-in on scroll.

---

### ToolboxSection.tsx

**Purpose**: AI and development tools in 3x3 grid.

**Features**:
- Custom logo images from assets
- Tool name appears on hover
- Scale animation on hover

**Tools**: ChatGPT, Claude, Copilot, Cursor, Lovable, VS Code, Warp, Bolt, Gemini

---

### WorkflowSection.tsx

**Purpose**: Development process visualization.

**Layout**:
- Desktop: 3x2 grid with dashed connectors
- Mobile: Vertical timeline

**Steps**: 6 numbered steps from planning to deployment.

---

### LearningSection.tsx

**Purpose**: GitHub-style contribution graph.

**Features**:
- Generated activity data (52 weeks × 7 days)
- Monochrome color palette
- Stats: Days Active, Courses, Projects, Technologies

**Functions**:
- `generateContributionData()` - Creates random activity levels
- `getContributionColor()` - Returns CSS class for level

---

### LifestyleSection.tsx

**Purpose**: Bento grid of lifestyle photos.

**Layout**: 4-6 columns with varying row spans.

**Images**: Unsplash placeholders for coding, travel, music, reading.

---

### AchievementsSection.tsx

**Purpose**: Recognition and awards in 4-column grid.

**Each Achievement**:
- Icon
- Title
- Brief description

---

### InterestsSection.tsx

**Purpose**: Personal interests icons row.

**Interests**: AI Productivity, Photography, Blogging, Content Creation

**Animation**: Staggered fade-up with hover color transitions.

---

### VideoSection.tsx

**Purpose**: Embedded YouTube video.

**Features**:
- 16:9 aspect ratio container
- Autoplay, muted, looped
- Controls hidden for clean look

---

### ContactSection.tsx

**Purpose**: Final call-to-action.

**Content**:
- Heading: "Let's build intelligent products together"
- Email CTA button

**Animation**: Fade-up on scroll.

---

### Footer.tsx

**Purpose**: Simple copyright footer.

**Content**: Dynamic year + name.

---

## UI Components

### ThemeToggle.tsx

**Purpose**: Light/dark mode switcher.

**Storage**: `localStorage.pk_theme`

**Icons**: Sun (dark mode) / Moon (light mode) from Lucide.

---

## Animation Patterns

All sections use consistent Framer Motion patterns:

```typescript
// Fade up on scroll
initial={{ opacity: 0, y: 40 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

// Staggered children
transition={{ delay: index * 0.1 }}

// View detection
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

---

## Best Practices

1. **Semantic HTML**: Use appropriate section, nav, header, footer tags
2. **Accessibility**: Include aria-labels, alt text, focus states
3. **Performance**: Lazy-load images, use once: true for animations
4. **Responsive**: Mobile-first with md/lg breakpoints
5. **Theming**: Use CSS variables from design system, never hardcode colors
