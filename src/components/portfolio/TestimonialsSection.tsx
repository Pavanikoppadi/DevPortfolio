/**
 * =============================================================================
 * TestimonialsSection.tsx - Social Proof
 * =============================================================================
 * 
 * PURPOSE:
 * Displays testimonials focused on reliability, problem-solving, and shipping.
 * Short, specific quotes from colleagues and collaborators.
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// =============================================================================
// DATA - Focused on reliability and shipping
// =============================================================================

const testimonials = [
  {
    id: 1,
    quote: "Pavani consistently delivered ahead of schedule with clean, production-ready code. She's the kind of developer you can trust to own a project from start to finish.",
    name: "Ravi Kumar",
    role: "Technical Lead, Electricon Wiz",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "Her ability to translate complex requirements into working solutions is impressive. She communicates clearly and ships reliably—exactly what you want in a developer.",
    name: "Priya Sharma",
    role: "Project Manager, Pilot Mobility",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "Pavani took ownership of our web platform and improved both performance and accessibility. She's proactive, reliable, and easy to work with.",
    name: "Ananya Reddy",
    role: "Founder, AaraLearn",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];
  
  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">What People Say</h2>
        </motion.div>

        {/* Testimonial Card - Swipeable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Avatar */}
              <motion.div 
                className="mb-8 sm:mb-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden ring-4 ring-border ring-offset-4 ring-offset-background">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Quote */}
              <blockquote className="mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
                  "{activeTestimonial.quote}"
                </p>
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="font-semibold text-base sm:text-lg md:text-xl text-foreground">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary">
                  {activeTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Swipe hint on mobile */}
          <p className="text-xs text-foreground-secondary/60 mt-6 sm:hidden">
            Swipe to see more
          </p>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-foreground scale-110" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
