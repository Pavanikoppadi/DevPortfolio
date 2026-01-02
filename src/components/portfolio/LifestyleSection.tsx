/**
 * =============================================================================
 * LifestyleSection.tsx - Bento Grid Navigation Component
 * =============================================================================
 * 
 * PURPOSE:
 * A visually striking bento-grid style section inspired by the reference design.
 * Features colorful cards with icons and labels for quick navigation/preview.
 * 
 * DESIGN INSPIRATION:
 * - Apple's bento grid layouts
 * - Colorful, bold card design with rounded corners
 * - Icon + label pattern for each card
 * - Asymmetric grid layout for visual interest
 * 
 * LAYOUT:
 * - Large hero card (2x2) on the left
 * - Smaller cards stacked on the right
 * - Responsive: stacks on mobile
 * 
 * ANIMATIONS:
 * - Staggered fade-in on scroll
 * - Hover lift and scale effects
 * - Icon animations on hover
 */

// =============================================================================
// IMPORTS
// =============================================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  User, 
  Send,
  Sparkles 
} from "lucide-react";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Bento grid items configuration
 * Each item has: id, label, icon, color scheme, and grid span
 */
const bentoItems = [
  {
    id: 1,
    label: "Featured Work",
    icon: Sparkles,
    // Primary blue card - largest, spans 2 columns and 2 rows
    bgColor: "bg-[hsl(240,80%,60%)]",
    textColor: "text-white",
    iconBg: "bg-white/20",
    href: "#projects",
    span: "col-span-2 row-span-2",
    size: "large",
  },
  {
    id: 2,
    label: "Work",
    icon: Briefcase,
    // White/light card
    bgColor: "bg-white",
    textColor: "text-foreground",
    iconBg: "bg-foreground/10",
    href: "#experience",
    span: "col-span-1 row-span-1",
    size: "small",
  },
  {
    id: 3,
    label: "About Me",
    icon: User,
    // Dark card
    bgColor: "bg-[hsl(0,0%,12%)]",
    textColor: "text-white",
    iconBg: "bg-white/10",
    href: "#about",
    span: "col-span-1 row-span-1",
    size: "small",
  },
  {
    id: 4,
    label: "Contact",
    icon: Send,
    // Accent yellow card - spans 2 columns
    bgColor: "bg-[hsl(48,96%,76%)]",
    textColor: "text-foreground",
    iconBg: "bg-foreground/10",
    href: "#contact",
    span: "col-span-2 row-span-1",
    size: "wide",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const LifestyleSection = () => {
  // Ref for scroll detection
  const ref = useRef(null);
  
  // Track visibility for animations
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        
        {/* ================================================================== */}
        {/* SECTION HEADER                                                     */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-display">Quick Links</h2>
        </motion.div>

        {/* ================================================================== */}
        {/* BENTO GRID LAYOUT                                                  */}
        {/* 3 columns on desktop, 2 on mobile                                  */}
        {/* Auto rows with fixed height for consistent sizing                  */}
        {/* ================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[160px] max-w-4xl mx-auto">
          
          {bentoItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              // Staggered animation based on index
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1] 
              }}
              // Dynamic classes based on item configuration
              className={`
                ${item.span} 
                ${item.bgColor} 
                ${item.textColor}
                relative overflow-hidden rounded-3xl p-6
                flex flex-col justify-between
                group cursor-pointer
                hover-lift press-scale
                transition-all duration-300
              `}
            >
              
              {/* --------------------------------------------------------------- */}
              {/* DECORATIVE SHAPES (for large card only)                         */}
              {/* Creates visual interest with floating geometric shapes          */}
              {/* --------------------------------------------------------------- */}
              {item.size === "large" && (
                <>
                  {/* Circle decoration */}
                  <motion.div 
                    className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/10"
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Triangle decoration */}
                  <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white/10"
                    animate={{ 
                      rotate: [0, 10, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Large hero text */}
                  <div className="relative z-10 flex-1 flex items-center">
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      Explore My<br />Featured Work
                    </h3>
                  </div>
                </>
              )}
              
              {/* --------------------------------------------------------------- */}
              {/* CARD CONTENT: Label and Icon                                    */}
              {/* Positioned at bottom of card                                    */}
              {/* --------------------------------------------------------------- */}
              <div className={`
                flex items-center justify-between 
                ${item.size === "large" ? "relative z-10" : "mt-auto"}
              `}>
                
                {/* Card label */}
                <span className={`
                  font-medium 
                  ${item.size === "large" ? "text-lg" : "text-base"}
                `}>
                  {item.size !== "large" && item.label}
                </span>
                
                {/* Icon container with hover animation */}
                <motion.div 
                  className={`
                    ${item.iconBg} 
                    p-2 rounded-full
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
              </div>
              
              {/* Label for large card at bottom left */}
              {item.size === "large" && (
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <span className="text-sm font-medium opacity-80">
                    See our services
                  </span>
                  <motion.span 
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </div>
              )}
              
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};