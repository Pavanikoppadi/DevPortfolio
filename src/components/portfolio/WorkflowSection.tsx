/**
 * WorkflowSection Component
 * 
 * Displays the development workflow process in numbered steps.
 * Desktop: 3x2 grid with connecting lines
 * Mobile: Vertical timeline layout
 * Features hover animations on step circles.
 */

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

/** Workflow steps with numbers and labels */
const workflowSteps = [
  { number: "01", label: "Problem Understanding & Planning" },
  { number: "02", label: "System & Tech Stack Design" },
  { number: "03", label: "Agile Development & Implementation" },
  { number: "04", label: "Testing & Quality Assurance" },
  { number: "05", label: "Deployment & Optimization" },
  { number: "06", label: "Continuous Improvement" },
];

export const WorkflowSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-display text-foreground">My Development Workflow</h2>
      </motion.div>

      {/* Workflow Timeline */}
      <div className="max-w-5xl mx-auto">
        {/* Desktop: 3x2 Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="relative group"
            >
              {/* Connector Line (horizontal) */}
              {index % 3 !== 2 && (
                <div className="absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-1rem)] h-px border-t border-dashed border-muted-foreground/30 hidden lg:block" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full border-2 border-foreground/80 flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <span className="text-sm font-semibold">{step.number}</span>
                </div>
                
                {/* Step Label */}
                <p className="text-foreground font-medium text-sm leading-relaxed max-w-[160px]">
                  {step.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-center gap-4"
            >
              {/* Number Circle */}
              <div className="w-10 h-10 rounded-full border-2 border-foreground/80 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold">{step.number}</span>
              </div>
              
              {/* Step Label */}
              <p className="text-foreground font-medium text-sm">
                {step.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
