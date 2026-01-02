/**
 * =============================================================================
 * CapabilitiesSection.tsx - Technical Skills Overview
 * =============================================================================
 * 
 * PURPOSE:
 * Displays technical capabilities in a 2x2 grid of cards.
 * Each card shows an icon, title, description, and skill tags.
 * 
 * LAYOUT:
 * - Centered section with title
 * - 2-column grid (stacks to 1 column on mobile)
 * - Cards with icon, title, description, and skill pills
 * 
 * ANIMATIONS:
 * - Title fades up on scroll
 * - Cards stagger in with increasing delays
 * - Hover effects on cards (border color, icon color)
 * 
 * CATEGORIES:
 * 1. AI & Intelligence - ML, OpenAI, Computer Vision
 * 2. Front-End Experience - React, Next.js, TypeScript
 * 3. Back-End & Cloud - Node.js, APIs, AWS/Azure
 * 4. Engineering Foundations - DSA, OOP, DBMS
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// React hook for refs
import { useRef } from "react";

// Lucide icons for capability categories
import { Brain, Layout, Server, Code2 } from "lucide-react";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Capabilities Array
 * 
 * Each capability represents a technical skill category.
 * 
 * @property {LucideIcon} icon - Icon component representing the category
 * @property {string} title - Category name
 * @property {string} description - Brief explanation of the capability
 * @property {string[]} skills - Related technologies/skills
 */
const capabilities = [
  {
    icon: Brain,
    title: "AI & Intelligence",
    description: "Building systems that think, learn, and adapt.",
    skills: ["OpenAI APIs", "Machine Learning", "Computer Vision", "Automation"],
  },
  {
    icon: Layout,
    title: "Front-End Experience",
    description: "Crafting interfaces that feel intuitive and alive.",
    skills: ["React", "Next.js", "TypeScript", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Back-End & Cloud",
    description: "Engineering infrastructure that scales effortlessly.",
    skills: ["Node.js", "REST APIs", "AWS/Azure", "CI/CD"],
  },
  {
    icon: Code2,
    title: "Engineering Foundations",
    description: "Solid fundamentals powering every solution.",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * CapabilitiesSection Component
 * 
 * Renders a grid of capability cards with icons and skill tags.
 * Cards feature subtle hover effects for interactivity.
 */
export const CapabilitiesSection = () => {
  // ===========================================================================
  // REFS & ANIMATION STATE
  // ===========================================================================
  
  /**
   * Ref for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Track if section is visible
   */
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    // Section with ID for navigation
    <section id="capabilities" className="section-full" ref={ref}>
      <div className="section-container">
        
        {/* ================================================================== */}
        {/* SECTION HEADER                                                     */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display">Capabilities</h2>
        </motion.div>

        {/* ================================================================== */}
        {/* CAPABILITIES GRID                                                  */}
        {/* 2x2 grid on desktop, single column on mobile                       */}
        {/* ================================================================== */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              // Staggered fade up animation
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              // Card with border, hover effect on border and icon
              className="p-8 rounded-2xl border border-border bg-background group hover:border-foreground/20 transition-all duration-500"
            >
              {/* ------------------------------------------------------------ */}
              {/* CARD CONTENT LAYOUT                                          */}
              {/* Icon on left, text on right                                  */}
              {/* ------------------------------------------------------------ */}
              <div className="flex items-start gap-6">
                
                {/* Icon Container with hover effect */}
                <div className="p-3 rounded-xl bg-background-secondary group-hover:bg-foreground/5 transition-colors duration-500">
                  <cap.icon className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                  
                  {/* Category Description */}
                  <p className="text-body text-foreground-secondary mb-4">
                    {cap.description}
                  </p>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-micro rounded-full bg-background-secondary text-foreground-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
