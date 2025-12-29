import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    institution: "Malla Reddy Engineering College",
    degree: "B.Tech, Computer Science",
    iconLetter: "M",
    iconBg: "bg-red-600",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate, MPC",
    iconLetter: "N",
    iconBg: "bg-blue-600",
  },
  {
    institution: "Krishnaveni Talent School",
    degree: "SSC",
    iconLetter: "K",
    iconBg: "bg-purple-600",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-full" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Education</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-4">
            Academic foundation and continuous learning
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 border-b border-border/60 last:border-b-0"
            >
              <div className="flex gap-4 items-center">
                {/* Icon */}
                <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${edu.iconBg} flex items-center justify-center`}>
                  <span className="text-lg md:text-xl font-bold text-white">
                    {edu.iconLetter}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-0.5">
                    {edu.degree}
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
