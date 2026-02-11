/**
 * Reusable scroll-triggered animation variants for Framer Motion.
 * Reduces boilerplate across all portfolio sections.
 */

import { useRef } from "react";
import { useInView, type Variants } from "framer-motion";

interface ScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: (options.margin ?? "-80px") as any,
    amount: options.amount,
  });
  return { ref, isInView };
};

// Shared animation variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

// Shared transition presets
export const smoothSpring = { type: "spring" as const, stiffness: 300, damping: 30 };
export const appleEase = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as number[] };
export const staggerChildren = (stagger = 0.08) => ({
  visible: { transition: { staggerChildren: stagger } },
});

// Hover presets
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: "easeOut" } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } },
  whileTap: { scale: 0.95 },
};

export const hoverGlow = {
  whileHover: { 
    y: -4, 
    boxShadow: "0 12px 40px -8px hsl(0 0% 0% / 0.15)",
    transition: { duration: 0.3, ease: "easeOut" } 
  },
  whileTap: { scale: 0.98 },
};
