import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, GraduationCap, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Pragati Cohort 4",
    description: "Selected for elite tech mentorship program",
  },
  {
    icon: Award,
    title: "Coding Competition Winner",
    description: "First place in collegiate programming challenge",
  },
  {
    icon: GraduationCap,
    title: "Certified Developer",
    description: "Multiple industry-recognized certifications",
  },
  {
    icon: Users,
    title: "Campus Leadership",
    description: "Technical club coordination and mentorship",
  },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-display mb-4">Recognition</h2>
          <p className="text-body-lg text-foreground-secondary max-w-xl mx-auto">
            Milestones that reflect dedication and excellence
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="p-8 rounded-2xl border border-border bg-background text-center group hover:border-foreground/20 transition-all duration-500"
            >
              <div className="inline-flex p-4 rounded-2xl bg-background-secondary mb-4 group-hover:bg-foreground/5 transition-colors duration-500">
                <achievement.icon className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-semibold mb-2">{achievement.title}</h3>
              <p className="text-caption text-foreground-secondary">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
