import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-display text-foreground mb-4">My Development Workflow</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          How I design, build, and deliver reliable digital products end to end.
        </p>
      </motion.div>

      {/* Desktop Layout - Zigzag Flow */}
      <div className="hidden lg:block">
        <div className="relative max-w-6xl mx-auto">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="flex justify-between items-end mb-4">
            {/* Step 1 - Circle at bottom */}
            <div className="flex flex-col items-center w-48">
              <div className="h-16" /> {/* Spacer for alignment */}
            </div>
            
            {/* Step 2 - Label at top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mb-4">
                System & Tech Stack Design
              </p>
            </motion.div>
            
            {/* Step 3 - Circle at bottom */}
            <div className="flex flex-col items-center w-48">
              <div className="h-16" /> {/* Spacer for alignment */}
            </div>
          </div>

          {/* Row 2: Circles and arrows for steps 1-3 */}
          <div className="flex justify-between items-center mb-4">
            {/* Step 1 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">01</span>
              </div>
            </motion.div>

            {/* Arrow 1->2 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <svg className="w-full h-8" viewBox="0 0 100 40">
                <path
                  d="M 0 35 Q 50 35 50 5 Q 50 -25 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="text-muted-foreground"
                />
                <polygon points="95,2 100,8 93,8" fill="currentColor" className="text-muted-foreground" />
              </svg>
            </div>

            {/* Step 2 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">02</span>
              </div>
            </motion.div>

            {/* Arrow 2->3 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <svg className="w-full h-8" viewBox="0 0 100 40">
                <path
                  d="M 0 5 Q 50 5 50 35 Q 50 65 100 35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="text-muted-foreground"
                />
                <polygon points="95,38 100,32 93,32" fill="currentColor" className="text-muted-foreground" />
              </svg>
            </div>

            {/* Step 3 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">03</span>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Labels for steps 1 and 3 */}
          <div className="flex justify-between items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mt-4">
                Problem Understanding & Planning
              </p>
            </motion.div>
            
            <div className="flex-1" />
            
            <div className="w-48" />
            
            <div className="flex-1" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mt-4">
                Agile Development & Implementation
              </p>
            </motion.div>
          </div>

          {/* Row 4: Labels for steps 4 and 6 at top */}
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col items-center w-48">
              <div className="h-16" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mb-4">
                Testing & Quality Assurance
              </p>
            </motion.div>
            
            <div className="flex flex-col items-center w-48">
              <div className="h-16" />
            </div>
          </div>

          {/* Row 5: Circles and arrows for steps 4-6 */}
          <div className="flex justify-between items-center mb-4">
            {/* Step 4 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">04</span>
              </div>
            </motion.div>

            {/* Arrow 4->5 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <svg className="w-full h-8" viewBox="0 0 100 40">
                <path
                  d="M 0 35 Q 50 35 50 5 Q 50 -25 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="text-muted-foreground"
                />
                <polygon points="95,2 100,8 93,8" fill="currentColor" className="text-muted-foreground" />
              </svg>
            </div>

            {/* Step 5 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">05</span>
              </div>
            </motion.div>

            {/* Arrow 5->6 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <svg className="w-full h-8" viewBox="0 0 100 40">
                <path
                  d="M 0 5 Q 50 5 50 35 Q 50 65 100 35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="text-muted-foreground"
                />
                <polygon points="95,38 100,32 93,32" fill="currentColor" className="text-muted-foreground" />
              </svg>
            </div>

            {/* Step 6 Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-col items-center w-48"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">06</span>
              </div>
            </motion.div>
          </div>

          {/* Row 6: Labels for steps 4 and 6 */}
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mt-4">
                Deployment & Optimization
              </p>
            </motion.div>
            
            <div className="flex-1" />
            
            <div className="w-48" />
            
            <div className="flex-1" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-col items-center w-48"
            >
              <p className="text-foreground font-medium text-center text-sm leading-tight mt-4">
                Continuous Improvement
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Vertical Flow */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center space-y-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-lg mb-3">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <p className="text-foreground font-medium text-center text-sm leading-tight max-w-[180px]">
                {step.label}
              </p>
              {index < workflowSteps.length - 1 && (
                <div className="w-px h-8 border-l border-dashed border-muted-foreground mt-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
