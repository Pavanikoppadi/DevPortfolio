import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Shield, Rocket } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: Sparkles,
    title: "Resumind.ai",
    tagline: "Intelligence meets opportunity",
    description: "An AI-powered resume optimization platform that transforms how candidates present themselves to ATS systems. Real-time suggestions, intelligent scoring, and seamless CI/CD deployment.",
    technologies: ["React", "OpenAI", "Node.js", "CI/CD"],
    accent: "hsl(210 15% 20%)",
  },
  {
    id: 2,
    icon: Shield,
    title: "Secure Voting System",
    tagline: "Democracy, digitized",
    description: "A comprehensive MERN-based online voting platform with military-grade encryption, real-time analytics dashboards, and audit-ready transparency for campus elections.",
    technologies: ["MongoDB", "Express", "React", "Encryption"],
    accent: "hsl(180 10% 20%)",
  },
  {
    id: 3,
    icon: Rocket,
    title: "Spark Launchpad",
    tagline: "Ideas to implementation",
    description: "A modular, enterprise-ready React + TypeScript SPA built for Corgnetrix. Features cloud-native architecture, component library integration, and performance-first design.",
    technologies: ["TypeScript", "React", "Cloud", "Enterprise"],
    accent: "hsl(30 15% 20%)",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative group"
    >
      <div 
        className="card-elevated p-8 md:p-12 transition-all duration-700 group-hover:scale-[1.02]"
        style={{
          background: `linear-gradient(135deg, ${project.accent} 0%, hsl(0 0% 6%) 100%)`,
        }}
      >
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex p-4 rounded-2xl bg-background/50 backdrop-blur-sm">
            <project.icon className="w-8 h-8 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-8">
          <h3 className="text-title">{project.title}</h3>
          <p className="text-subtitle text-foreground-secondary">{project.tagline}</p>
          <p className="text-body text-foreground-secondary/80 max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-caption rounded-full bg-background/30 backdrop-blur-sm text-foreground/80 border border-foreground/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-caption font-medium text-foreground group/link hover:text-foreground-secondary transition-colors"
        >
          View Project
          <ArrowUpRight 
            size={16} 
            className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
          />
        </a>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-section" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display mb-4">Featured Work</h2>
          <p className="text-body-lg text-foreground-secondary max-w-xl mx-auto">
            Select projects that showcase AI integration, scalable architecture, and thoughtful design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
