import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

const experiences = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Electricon Wiz",
    type: "Internship",
    period: "2024",
    location: "Remote",
    description: "Architected intelligent automation pipelines and AI-integrated web applications. Led front-end development with React while implementing machine learning models for predictive analytics.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    role: "Software Developer Intern",
    company: "Pilot Mobility",
    type: "Internship",
    period: "2023",
    location: "Remote",
    description: "Built and optimized cloud-native applications with focus on performance and scalability. Collaborated on API development and database optimization for mobile-first platforms.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12"
        >
          Experience
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${exp.iconBg} flex items-center justify-center`}>
                  <Zap className={`w-6 h-6 md:w-7 md:h-7 ${exp.iconColor}`} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-0.5">
                    {exp.company} • {exp.type} | {exp.period} | {exp.location}
                  </p>
                  <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
