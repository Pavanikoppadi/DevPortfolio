/**
 * =============================================================================
 * Header.tsx - Mobile Navigation Header
 * =============================================================================
 * 
 * PURPOSE:
 * Mobile-only fixed header with profile information and hamburger menu.
 * Hidden on desktop where FixedSidebar is used instead.
 * 
 * FEATURES:
 * - Profile photo and name display
 * - Role subtitle and availability status
 * - Hamburger menu toggle
 * - Full-screen navigation overlay
 * - Theme toggle button
 * 
 * RESPONSIVE:
 * - Visible: Mobile only (hidden on md: breakpoint and above)
 * - Desktop uses: FixedSidebar component instead
 */

// =============================================================================
// IMPORTS
// =============================================================================

// React hooks for state and lifecycle
import { useState, useEffect } from "react";

// Framer Motion for animations
import { motion, AnimatePresence } from "framer-motion";

// Lucide icons for menu toggle
import { Menu, X } from "lucide-react";

// Theme toggle component
import { ThemeToggle } from "../ui/ThemeToggle";

// Profile photo asset
import profilePhoto from "@/assets/profile-photo.png";

// =============================================================================
// DATA
// =============================================================================

/**
 * Navigation links for mobile menu
 * Each link has a label (display text) and href (anchor target)
 */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/pavanideveloperesume.pdf", external: true },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * Header Component
 * 
 * Fixed header for mobile devices with profile info and navigation.
 * Changes background opacity on scroll for better readability.
 */
export const Header = () => {
  // ==========================================================================
  // STATE
  // ==========================================================================
  
  /**
   * Track if user has scrolled past threshold (50px)
   * Used to add backdrop blur effect
   */
  const [isScrolled, setIsScrolled] = useState(false);
  
  /**
   * Track mobile menu open/closed state
   * Controls visibility of full-screen navigation overlay
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================
  
  /**
   * Scroll listener for header background effect
   * 
   * Adds backdrop blur when scrolled past 50px for better contrast.
   * Cleanup removes listener on unmount to prevent memory leaks.
   */
  useEffect(() => {
    // Handler to check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================================================================
  // RENDER
  // ==========================================================================
  
  return (
    <>
      {/* ================================================================== */}
      {/* MOBILE HEADER BAR - Fixed at top, hidden on desktop              */}
      {/* ================================================================== */}
      <motion.header
        // Slide in from top on page load
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        // Conditional background based on scroll position
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:hidden ${
          isScrolled ? "bg-black/95 backdrop-blur-xl" : "bg-black"
        }`}
      >
        <nav className="px-4 flex items-center justify-between h-16">
          
          {/* -------------------------------------------------------------- */}
          {/* LEFT: Profile Section                                          */}
          {/* -------------------------------------------------------------- */}
          <div className="flex items-center gap-3">
            
            {/* Profile Photo - Circular avatar with optimized loading */}
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Pavani Koppadi" 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={40}
                height={40}
              />
            </div>
            
            {/* Profile Info - Name, role, and status */}
            <div className="flex flex-col">
              {/* Name */}
              <span className="text-white font-semibold text-sm tracking-tight">
                Pavani Koppadi
              </span>
              {/* Role */}
              <span className="text-gray-400 text-xs tracking-normal">
                AI Full Stack Developer
              </span>
              {/* Availability status with green dot */}
              <span className="text-green-400 text-[10px] tracking-normal">
                ● Open to work
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* RIGHT: Menu Controls                                           */}
          {/* -------------------------------------------------------------- */}
          <div className="flex items-center gap-2">
            {/* Theme toggle button */}
            <ThemeToggle />
            
            {/* Hamburger menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {/* Show X when open, Menu when closed */}
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ================================================================== */}
      {/* MOBILE NAVIGATION OVERLAY - Full-screen menu                      */}
      {/* ================================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            // Fade in/out animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Full-screen overlay with blur
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            {/* Centered navigation links */}
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={(link as any).external ? "_blank" : undefined}
                  rel={(link as any).external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-foreground hover:text-foreground-secondary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
