/**
 * AboutSection - Personal statement with enhanced animations
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, GraduationCap, Users } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "8.45", label: "CGPA" },
    { value: "2027", label: "Expected Grad" },
    { value: "3+", label: "Internships" },
  ];

  const recognition = [
    { icon: Trophy, label: "Pragati Cohort 4" },
    { icon: Award, label: "Coding Winner" },
    { icon: GraduationCap, label: "Certified Dev" },
    { icon: Users, label: "Campus Lead" },
  ];

  const bullets = [
    { title: "What I build:", text: "Full-stack web apps, AI-powered tools, and automation workflows that solve real problems." },
    { title: "How I work:", text: "End-to-end ownership—from problem discovery to deployment. I ship clean, maintainable code." },
    { title: "How I improve:", text: "Side projects, experiments, and staying current with AI/automation trends." },
    { title: "What I'm open to:", text: "Remote roles, freelance projects, and collaborations in AI/full-stack development." },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              I'm a developer who enjoys turning ideas into working web apps and AI-powered tools. Currently pursuing B.Tech in IT with a 8.45 CGPA.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">— Pavani Koppadi</p>
            
            <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg text-foreground/80">
              {bullets.map((bullet, i) => (
                <motion.li 
                  key={bullet.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <span className="text-foreground-secondary mt-1.5">•</span>
                  <span><strong className="text-foreground font-medium">{bullet.title}</strong> {bullet.text}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Stats */}
            <div className="pt-4 sm:pt-6">
              <div className="flex flex-wrap gap-4 sm:gap-5">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    className="relative rounded-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                  >
                    <GlowingEffect blur={0} borderWidth={1} spread={15} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="relative z-10 card-glass py-4 sm:py-5 px-6 sm:px-8">
                      <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</div>
                      <div className="text-sm sm:text-base text-foreground-secondary">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Recognition */}
            <div className="pt-6 sm:pt-8">
              <p className="text-micro uppercase tracking-[0.2em] text-foreground-secondary mb-4">Recognition</p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {recognition.map((item, i) => (
                  <motion.div 
                    key={item.label}
                    className="flex items-center gap-2 text-foreground/80"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                    whileHover={{ scale: 1.05, x: 2, transition: { duration: 0.15 } }}
                  >
                    <item.icon className="w-5 h-5 text-foreground-secondary" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
