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
    title: "AI Interview Agent",
    subtitle: "60% faster screening • 500+ interviews processed",
    problem: "Manual interview screening took 30+ minutes per candidate.",
    solution: "Built AI agent that conducts initial screenings via voice/chat, scores responses, and generates structured reports.",
    techStack: "Next.js | Node.js | Supabase | LangChain | OpenAI | Pinecone",
    image: resumindPreview,
    liveDemo: "#",
    github: "https://github.com/Pavanikoppadi/ai-resumebulider-demo",
    video: "#",
  },
  {
    id: 2,
    title: "RAG Knowledge Base Platform",
    subtitle: "80% faster internal search queries",
    problem: "Teams wasted hours searching scattered documentation.",
    solution: "Created vector-powered knowledge base with semantic search and contextual answers from company docs.",
    techStack: "Next.js | FastAPI | PostgreSQL | LangChain | Pinecone | OpenAI",
    image: votingPreview,
    liveDemo: "#",
    github: "https://github.com/Pavanikoppadi/CollegeOnlineVoting",
    video: "#",
  },
  {
    id: 3,
    title: "AI Content Engine",
    subtitle: "10× content velocity for growth teams",
    problem: "Marketing teams bottlenecked on content creation.",
    solution: "Built automated pipeline that generates, edits, and schedules SEO-optimized content at scale.",
    techStack: "React | Node.js | Supabase | OpenAI | Redis | Vercel",
    image: sparkPreview,
    liveDemo: "#",
    github: "https://github.com/Pavanikoppadi/corgnetrix-spark-launchpad",
    video: "#",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28" ref={ref}>
      
      {/* Section Header */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10 sm:mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Featured Work.</h2>
          </div>
          
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors text-lg font-medium"
          >
            View all projects
            <ChevronRight size={20} />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-5 sm:px-6 md:px-12 lg:px-24 pb-6 sm:pb-8">
          
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
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-surface">
                <img
                  src={project.image}
                  alt={`${project.title} - AI Full-Stack Project by Pavani Koppadi showcasing ${project.techStack.split(' | ').slice(0, 3).join(', ')}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info - Left-aligned vertical stack */}
              <div className="space-y-2 sm:space-y-3">
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                
                {/* Outcome Headline */}
                <p className="text-base sm:text-lg text-foreground-secondary font-medium">
                  {project.subtitle}
                </p>
                
                {/* Problem → Solution */}
                <div className="space-y-1.5 text-sm sm:text-base text-foreground/80 pt-1">
                  <p><span className="font-medium text-foreground">Problem:</span> {project.problem}</p>
                  <p><span className="font-medium text-foreground">Solution:</span> {project.solution}</p>
                </div>
                
                {/* Tech Stack */}
                <p className="text-xs sm:text-sm text-foreground-secondary pt-2">
                  {project.techStack}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-foreground/70 transition-colors text-sm sm:text-base font-medium group/link"
                  >
                    Live Demo
                    <ArrowUpRight size={14} className="sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors text-sm sm:text-base font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors text-sm sm:text-base font-medium"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
