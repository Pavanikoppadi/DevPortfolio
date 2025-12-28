import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Electricon Wiz",
    period: "2024",
    description: "Architected intelligent automation pipelines and AI-integrated web applications. Led front-end development with React while implementing machine learning models for predictive analytics.",
    highlights: ["AI Integration", "Full-Stack Development", "Automation"],
  },
  {
    role: "Software Developer Intern",
    company: "Pilot Mobility",
    period: "2023",
    description: "Built and optimized cloud-native applications with focus on performance and scalability. Collaborated on API development and database optimization for mobile-first platforms.",
    highlights: ["Cloud Native", "API Development", "Mobile-First"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-full" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-display mb-4">Experience</h2>
          <p className="text-body-lg text-foreground-secondary max-w-xl mx-auto">
            A journey of continuous growth and impactful contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Mobile: simple list (no cards) */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-border/60 pb-6 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground truncate">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{exp.period}</span>
                </div>

                <p className="text-sm text-muted-foreground/80 mt-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Desktop: timeline cards */}
          <div className="hidden md:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-px" />

            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative pb-16 last:pb-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute w-3 h-3 rounded-full bg-foreground-secondary top-2 ${
                      index % 2 === 0
                        ? "right-0 translate-x-1/2 mr-[-6px]"
                        : "left-0 -translate-x-1/2 ml-[-6px]"
                    }`}
                  />

                  <div className="card-glass">
                    <span className="text-micro text-foreground-secondary uppercase tracking-wider">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-body text-foreground-secondary mt-1">{exp.company}</p>
                    <p className="text-body text-foreground-secondary/70 mt-4 text-left">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-micro rounded-full bg-background-secondary text-foreground-secondary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
