/**
 * =============================================================================
 * ProjectsSection.tsx - Featured Projects (Mini Case Studies)
 * =============================================================================
 * 
 * PURPOSE:
 * Displays featured projects as mini case studies for recruiters.
 * Each card: title, one-line description, tech stack, key outcome.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

// Project images
import resumindPreview from "@/assets/projects/resumind-preview.jpg";
import votingPreview from "@/assets/projects/voting-system-preview.jpg";
import sparkPreview from "@/assets/projects/spark-launchpad-preview.jpg";

// =============================================================================
// DATA - Structured as mini case studies
// =============================================================================

const projects = [
  {
    id: 1,
    title: "Resumind.ai",
    subtitle: "AI-powered resume optimization platform",
    bullets: [
      "Analyzes resumes against job descriptions using OpenAI API",
      "Built with Next.js, TypeScript, Supabase, and Tailwind",
      "Improved ATS match rates by 40% for test users",
    ],
    image: resumindPreview,
    link: "https://github.com/Pavanikoppadi/ai-resumebulider-demo",
  },
  {
    id: 2,
    title: "Secure Voting System",
    subtitle: "Campus-wide online voting platform",
    bullets: [
      "End-to-end encrypted voting with real-time result dashboards",
      "Built with MERN stack (MongoDB, Express, React, Node.js)",
      "Handled 2,000+ votes with zero downtime during elections",
    ],
    image: votingPreview,
    link: "https://github.com/Pavanikoppadi/CollegeOnlineVoting",
  },
  {
    id: 3,
    title: "Corgnetrix Spark Launchpad",
    subtitle: "Enterprise-ready React SPA for client",
    bullets: [
      "Modular component library with TypeScript and Tailwind",
      "Built with React, Vite, and cloud-native architecture",
      "Delivered production-ready MVP in 4 weeks",
    ],
    image: sparkPreview,
    link: "https://github.com/Pavanikoppadi/corgnetrix-spark-launchpad",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-section" ref={ref}>
      
      {/* Section Header */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-display">Featured Work.</h2>
          </div>
          
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors text-body font-medium"
          >
            View all projects
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 pb-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                
                {/* Title */}
                <h3 className="text-title text-foreground">
                  {project.title}
                </h3>
                
                {/* Subtitle - What it is */}
                <p className="text-body text-foreground-secondary">
                  {project.subtitle}
                </p>
                
                {/* Bullet Points - What it does, tech, outcome */}
                <ul className="space-y-1.5 text-caption text-foreground/80">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-foreground-secondary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors text-caption font-medium group/link pt-2"
                >
                  View Project
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
