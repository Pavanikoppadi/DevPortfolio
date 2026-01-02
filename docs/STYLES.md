# Styling Guide

> Complete guide to the design system and styling patterns.

---

## CSS Architecture

### File: `src/index.css`

The main stylesheet organized in Tailwind layers:

1. **@tailwind base** - Reset and base styles
2. **@tailwind components** - Reusable component classes
3. **@tailwind utilities** - Utility classes and animations

---

## Design Tokens

### Core Colors

```css
/* Light Theme (default) */
--background: 0 0% 100%;           /* Pure white */
--foreground: 0 0% 9%;             /* Near black */
--foreground-secondary: 0 0% 40%;  /* Gray text */
--border: 0 0% 88%;                /* Light gray borders */
```

### Sidebar Colors (Always Dark)

```css
--sidebar-dark: 0 0% 8%;           /* Dark background */
--sidebar-foreground: 0 0% 96%;    /* Light text */
--sidebar-muted: 0 0% 50%;         /* Muted text */
```

### Shadow Tokens

```css
--shadow-card: 0 8px 32px hsl(0 0% 0% / 0.08);
--shadow-elevated: 0 25px 50px -12px hsl(0 0% 0% / 0.12);
```

---

## Typography Classes

### Headings (defined in @layer base)

| Element | Mobile | Desktop |
|---------|--------|---------|
| `h1` | 3rem (text-5xl) | 4.5rem (text-7xl) |
| `h2` | 1.875rem (text-3xl) | 3rem (text-5xl) |
| `h3` | 1.5rem (text-2xl) | 1.875rem (text-3xl) |

### Custom Text Classes (Tailwind config)

| Class | Description |
|-------|-------------|
| `text-display` | Large display headings |
| `text-hero` | Hero section headings |
| `text-body` | Body text (base size) |
| `text-body-lg` | Larger body text |
| `text-body-sm` | Smaller body text |
| `text-caption` | Small labels and metadata |
| `text-micro` | Smallest text (tags, badges) |
| `text-subtitle` | Section subtitles |

---

## Component Classes

### Buttons

```css
/* Primary button - filled, dark */
.btn-primary {
  @apply inline-flex items-center justify-center
         px-6 py-3 text-sm font-medium rounded-full
         bg-foreground text-background
         transition-all duration-300
         hover:scale-105 hover:shadow-lg;
}

/* Secondary button - outlined */
.btn-secondary {
  @apply inline-flex items-center justify-center
         px-6 py-3 text-sm font-medium rounded-full
         bg-transparent border border-foreground/30
         text-foreground
         transition-all duration-300
         hover:bg-foreground/10;
}

/* Ghost button - text only */
.btn-ghost {
  @apply inline-flex items-center gap-1
         text-sm font-medium text-primary-foreground/70
         transition-colors duration-300
         hover:text-foreground;
}
```

### Layout Containers

```css
/* Centered container with max-width */
.section-container {
  @apply w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12;
}

/* Consistent section padding */
.section-padding {
  @apply py-16 md:py-24 px-6 md:px-10 lg:px-12;
}

/* Full-height centered section */
.section-full {
  @apply min-h-[80vh] flex flex-col items-center justify-center
         py-16 md:py-24;
}
```

### Cards

```css
/* Glass-morphism card */
.card-glass {
  @apply rounded-2xl p-8 border border-border/50 bg-background;
  box-shadow: var(--shadow-card);
}

/* Elevated card with larger shadow */
.card-elevated {
  @apply rounded-3xl overflow-hidden bg-background;
  box-shadow: var(--shadow-elevated);
}
```

---

## Special Effects

### Gradient Text

```css
.text-gradient {
  background: linear-gradient(135deg, 
    hsl(0 0% 96%) 0%, 
    hsl(0 0% 65%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Gradient Divider

```css
.divider-gradient {
  @apply h-px w-full;
  background: linear-gradient(90deg, 
    transparent 0%, 
    hsl(var(--border)) 50%, 
    transparent 100%
  );
}
```

---

## Animation Utilities

### Keyframe Animations

```css
/* Fade up from below */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Simple fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Animation Classes

```css
.animate-fade-up {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

---

## Scrollbar Styling

```css
/* Hide scrollbar completely */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Custom styled scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--foreground-tertiary));
  border-radius: 4px;
}
```

---

## Responsive Breakpoints

| Prefix | Min-width | Description |
|--------|-----------|-------------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets / switch to desktop layout |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Large screens |
| `2xl` | 1536px | Extra large screens |

---

## Tailwind Config Extensions

Custom values added to `tailwind.config.ts`:

### Colors
- `sidebar-dark` - Dark sidebar background
- `content-container` - White content area
- `background-secondary` - Secondary background
- `foreground-secondary` - Muted text color

### Spacing
- `section-sm` - Small section padding
- `section` - Default section padding

### Font Sizes
- Extended scale with custom line-heights

---

## Usage Guidelines

1. **Never hardcode colors** - Always use CSS variables or Tailwind classes
2. **Prefer semantic tokens** - Use `foreground` not `black`
3. **Use design system classes** - `.btn-primary`, `.card-glass`, etc.
4. **Responsive-first** - Start with mobile, add `md:` and `lg:` modifiers
5. **Consistent spacing** - Use section containers and padding classes
