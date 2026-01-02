/**
 * =============================================================================
 * ProjectsSection.tsx - Featured Projects Showcase
 * =============================================================================
 * 
 * PURPOSE:
 * Displays featured projects in a responsive grid layout.
 * Each project card includes an image, title, description, and external link.
 * 
 * LAYOUT:
 * - Header row with title and "View all" link
 * - 3-column grid on large screens, 2 on medium, 1 on mobile
 * - Cards with image hover zoom effect
 * 
 * ANIMATIONS:
 * - Header fades up when section enters viewport
 * - Grid fades up with delay
 * - Individual cards stagger in with increasing delays
 * 
 * DATA STRUCTURE:
 * Each project has: id, title, tagline, description, image, and external link
 * 
 * ACCESSIBILITY:
 * - Section has ID for navigation anchoring
 * - External links have proper rel attributes
 * - Images have descriptive alt text
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// React hook for refs
import { useRef } from "react";

// Lucide icons for links
import { ArrowUpRight, ChevronRight } from "lucide-react";

// Project preview images (imported for bundling optimization)
import resumindPreview from "@/assets/projects/resumind-preview.jpg";
import votingPreview from "@/assets/projects/voting-system-preview.jpg";
import sparkPreview from "@/assets/projects/spark-launchpad-preview.jpg";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Projects Array
 * 
 * Contains featured project data for display.
 * Each project object includes all information needed to render a card.
 * 
 * @property {number} id - Unique identifier for React keys
 * @property {string} title - Project name
 * @property {string} tagline - Short catchy description
 * @property {string} description - Detailed project description
 * @property {string} image - Imported image asset
 * @property {string} link - GitHub or live project URL
 */
const projects = [
  {
    id: 1,
    title: "Resumind.ai",
    tagline: "Intelligence meets opportunity",
    description: "An AI-powered resume optimization platform that transforms how candidates present themselves to ATS systems. Real-time suggestions, intelligent scoring, and seamless CI/CD deployment.",
    image: resumindPreview,
    link: "https://github.com/Pavanikoppadi/ai-resumebulider-demo",
  },
  {
    id: 2,
    title: "Secure Voting System",
    tagline: "Democracy, digitized",
    description: "A comprehensive MERN-based online voting platform with military-grade encryption, real-time analytics dashboards, and audit-ready transparency for campus elections.",
    image: votingPreview,
    link: "https://github.com/Pavanikoppadi/CollegeOnlineVoting",
  },
  {
    id: 3,
    title: "Corgnetrix Spark Launchpad",
    tagline: "Ideas to implementation",
    description: "A modular, enterprise-ready React + TypeScript SPA built for Corgnetrix. Features cloud-native architecture, component library integration, and performance-first design.",
    image: sparkPreview,
    link: "https://github.com/Pavanikoppadi/corgnetrix-spark-launchpad",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * ProjectsSection Component
 * 
 * Renders a grid of featured project cards with animations.
 * Each card links to the project's GitHub repository.
 */
export const ProjectsSection = () => {
  // ===========================================================================
  // REFS & ANIMATION STATE
  // ===========================================================================
  
  /**
   * Ref attached to section for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Tracks if section is visible in viewport
   * margin: "-100px" triggers animation slightly before section enters view
   */
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    // Section with ID for navigation anchoring
    <section id="projects" className="py-section" ref={ref}>
      
      {/* ===================================================================== */}
      {/* SECTION HEADER                                                        */}
      {/* Title and "View all" link in a row                                    */}
      {/* ===================================================================== */}
      <div className="section-container">
        <motion.div
          // Fade up animation
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          // Apple-style easing curve
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          // Flex row with items at opposite ends
          className="flex items-end justify-between mb-12"
        >
          {/* Section Title */}
          <div>
            <h2 className="text-display">Featured Work.</h2>
          </div>
          
          {/* View All Link - Hidden on mobile */}
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-body font-medium"
          >
            View all projects
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* PROJECTS GRID                                                         */}
      {/* Responsive grid with staggered card animations                        */}
      {/* ===================================================================== */}
      <motion.div
        // Container fade up
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* ------------------------------------------------------------------- */}
        {/* GRID CONTAINER                                                      */}
        {/* 1 column mobile → 2 columns tablet → 3 columns desktop              */}
        {/* ------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 pb-8">
          
          {/* Map through projects to render cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // Individual card fade up
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              // Staggered delay based on card index
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              // Group class enables child hover effects
              className="group"
            >
              
              {/* ============================================================= */}
              {/* PROJECT IMAGE                                                  */}
              {/* Container with aspect ratio and hover zoom effect              */}
              {/* ============================================================= */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-surface">
                {/* Project preview image */}
                <img
                  src={project.image}
                  alt={project.title}
                  // Smooth zoom on parent hover
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay on hover for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* ============================================================= */}
              {/* PROJECT INFO                                                   */}
              {/* Title, description, and view link                              */}
              {/* ============================================================= */}
              <div className="space-y-3">
                {/* Title and Description combined */}
                <p className="text-subtitle text-foreground">
                  {/* Bold project title */}
                  <span className="font-semibold">{project.title}.</span>{" "}
                  {/* Muted description text */}
                  <span className="text-foreground-secondary font-normal">
                    {project.description}
                  </span>
                </p>
                
                {/* ----------------------------------------------------------- */}
                {/* VIEW PROJECT LINK                                            */}
                {/* External link to GitHub with hover arrow animation           */}
                {/* ----------------------------------------------------------- */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Nested group for link-specific hover effects
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors text-body-sm font-medium group/link"
                >
                  View Project
                  {/* Arrow moves diagonally on hover */}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
