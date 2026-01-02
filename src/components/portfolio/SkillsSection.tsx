/**
 * =============================================================================
 * SkillsSection.tsx - Technology Skills Display
 * =============================================================================
 * 
 * PURPOSE:
 * Displays technology skills as pill-shaped badges with icons.
 * Features a responsive flexbox layout with hover effects.
 * 
 * DATA SOURCE:
 * Technology icons are loaded from DevIcons CDN for consistent, high-quality SVGs.
 * 
 * ANIMATIONS:
 * - Section header fades up on scroll
 * - Individual skill badges scale in with staggered delays
 * 
 * LAYOUT:
 * - Centered flex container with wrapping
 * - Maximum width of 4xl for readability
 * - Responsive gap spacing (4 on mobile, 6 on desktop)
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion, useInView } from "framer-motion";

// React hook for refs
import { useRef } from "react";

// =============================================================================
// DATA
// =============================================================================

/**
 * Skills array with technology names and DevIcons URLs
 * 
 * Each skill has:
 * - name: Display name of the technology
 * - icon: URL to SVG icon from DevIcons CDN
 */
const skills = [
  // Frontend Technologies
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  
  // Backend Technologies
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  
  // Databases
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  
  // Styling & Design
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  
  // Version Control
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  
  // DevOps & Tools
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  
  // State Management & Frameworks
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  
  // Web Fundamentals
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  
  // Cloud Services
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * SkillsSection Component
 * 
 * Renders a centered grid of technology skill badges.
 * Each badge shows an icon and name with hover effect.
 */
export const SkillsSection = () => {
  // ==========================================================================
  // REFS & ANIMATION STATE
  // ==========================================================================
  
  /**
   * Ref for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Track if section is visible
   * amount: 0.1 → Trigger when 10% of section is visible
   */
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // ==========================================================================
  // RENDER
  // ==========================================================================
  
  return (
    <section className="py-16 md:py-24 px-6 md:px-12" ref={ref}>
      
      {/* -------------------------------------------------------------------- */}
      {/* SECTION HEADER                                                       */}
      {/* -------------------------------------------------------------------- */}
      <motion.div
        // Fade up animation
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-display text-foreground">Technologies I work with</h2>
      </motion.div>

      {/* -------------------------------------------------------------------- */}
      {/* SKILLS GRID                                                          */}
      {/* -------------------------------------------------------------------- */}
      <motion.div
        // Container fade up
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        // Centered flex with wrapping
        className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
      >
        {/* Map through each skill */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            // Scale-in animation for each badge
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            // Staggered delay based on index
            transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
            // Pill-shaped badge styling
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors duration-200"
          >
            {/* ============================================================ */}
            {/* Skill Icon - Loaded from DevIcons CDN                        */}
            {/* ============================================================ */}
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-5 h-5 object-contain"
            />
            
            {/* ============================================================ */}
            {/* Skill Name                                                    */}
            {/* ============================================================ */}
            <span className="text-foreground text-caption font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
