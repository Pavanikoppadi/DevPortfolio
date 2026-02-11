/**
 * =============================================================================
 * TestimonialsSection.tsx - Social Proof
 * =============================================================================
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Pavani consistently delivered ahead of schedule with clean, production-ready code. She's the kind of developer you can trust to own a project from start to finish.",
    name: "Ravi Kumar",
    designation: "Technical Lead, Electricon Wiz",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
  },
  {
    quote: "Her ability to translate complex requirements into working solutions is impressive. She communicates clearly and ships reliably—exactly what you want in a developer.",
    name: "Priya Sharma",
    designation: "Project Manager, Pilot Mobility",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
  },
  {
    quote: "Pavani took ownership of our web platform and improved both performance and accessibility. She's proactive, reliable, and easy to work with.",
    name: "Ananya Reddy",
    designation: "Founder, AaraLearn",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">What People Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </motion.div>
      </div>
    </section>
  );
};
