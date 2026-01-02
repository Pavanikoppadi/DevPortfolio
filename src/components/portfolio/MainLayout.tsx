/**
 * =============================================================================
 * MainLayout.tsx - Root Layout Wrapper
 * =============================================================================
 * 
 * PURPOSE:
 * The main layout wrapper that creates the distinctive Apple-style framed design.
 * Handles responsive layout switching between desktop sidebar and mobile header.
 * 
 * LAYOUT STRUCTURE:
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    SIDEBAR-DARK BACKGROUND                   │
 * │  ┌──────────┐  ┌─────────────────────────────────────────┐  │
 * │  │          │  │                                         │  │
 * │  │  FIXED   │  │     WHITE ROUNDED CONTENT CONTAINER     │  │
 * │  │ SIDEBAR  │  │          (scrollable area)              │  │
 * │  │          │  │                                         │  │
 * │  └──────────┘  └─────────────────────────────────────────┘  │
 * └─────────────────────────────────────────────────────────────┘
 * 
 * RESPONSIVE BEHAVIOR:
 * - Desktop (md+): Fixed sidebar on left, content area on right
 * - Mobile (<md): Fixed header at top, full-width content below
 * 
 * FEATURES:
 * - Scroll locking when mobile menu is open
 * - Smooth scrolling within content container
 * - Hidden scrollbar for clean aesthetics
 * 
 * PROPS:
 * @param {ReactNode} children - Page content to render inside the layout
 */

// =============================================================================
// IMPORTS
// =============================================================================

// React types and hooks
import { ReactNode, useState, useEffect } from "react";

// Desktop sidebar component
import { FixedSidebar } from "./FixedSidebar";

// Framer Motion for mobile menu animations
import { motion, AnimatePresence } from "framer-motion";

// Lucide icons for hamburger menu toggle
import { Menu, X } from "lucide-react";

// Profile photo for mobile header
import profilePhoto from "@/assets/profile-photo.png";

// =============================================================================
// TYPES
// =============================================================================

/**
 * Props interface for MainLayout component
 */
interface MainLayoutProps {
  /** Page content to render inside the scrollable container */
  children: ReactNode;
}

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Mobile Navigation Links
 * 
 * Simplified navigation for mobile menu overlay.
 * Links to main sections of the portfolio.
 */
const mobileNavLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * MainLayout Component
 * 
 * Root layout that wraps all page content.
 * Provides the framed design with sidebar/header based on screen size.
 */
export const MainLayout = ({ children }: MainLayoutProps) => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  
  /**
   * Controls mobile menu visibility
   * When true, full-screen overlay navigation is shown
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ===========================================================================
  // EFFECTS
  // ===========================================================================
  
  /**
   * Scroll Lock Effect
   * 
   * Prevents body scrolling when mobile menu is open.
   * This ensures the overlay stays fixed and doesn't scroll with content.
   * Cleanup restores normal scrolling on unmount or menu close.
   */
  useEffect(() => {
    // Lock scroll when menu opens
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when menu closes
      document.body.style.overflow = "";
    }
    
    // Cleanup function - always restore scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    // =========================================================================
    // OUTER CONTAINER
    // Full-screen dark background that shows around the content
    // =========================================================================
    <div className="min-h-screen bg-sidebar-dark">
      
      {/* ===================================================================== */}
      {/* DESKTOP SIDEBAR                                                       */}
      {/* Only visible on md breakpoint and above                               */}
      {/* Hidden via CSS to prevent render on mobile                            */}
      {/* ===================================================================== */}
      <div className="hidden md:block">
        <FixedSidebar />
      </div>

      {/* ===================================================================== */}
      {/* MOBILE HEADER                                                         */}
      {/* Fixed at top on mobile only (hidden on desktop)                       */}
      {/* Contains profile info and hamburger menu toggle                       */}
      {/* ===================================================================== */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-dark px-4 py-3 flex items-center justify-between">
        
        {/* ------------------------------------------------------------------- */}
        {/* LEFT: Profile Info                                                  */}
        {/* ------------------------------------------------------------------- */}
        <div className="flex items-center gap-2">
          {/* Profile Photo - Smaller on mobile */}
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Pavani Koppadi" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name text */}
          <span className="text-sidebar-foreground font-semibold text-sm">
            Pavani Koppadi
          </span>
        </div>
        
        {/* ------------------------------------------------------------------- */}
        {/* RIGHT: Menu Toggle Button                                           */}
        {/* ------------------------------------------------------------------- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-sidebar-foreground"
          aria-label="Toggle menu"
        >
          {/* Show X when open, hamburger Menu icon when closed */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ===================================================================== */}
      {/* MOBILE MENU OVERLAY                                                   */}
      {/* Full-screen navigation when hamburger is clicked                      */}
      {/* AnimatePresence enables exit animations                               */}
      {/* ===================================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            // Fade in/out animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Full-screen overlay with blur effect
            className="fixed inset-0 z-40 bg-sidebar-dark/95 backdrop-blur-xl md:hidden pt-16"
          >
            {/* Centered navigation links */}
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {mobileNavLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  // Staggered entrance animation
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  // Close menu when link is clicked
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-sidebar-foreground hover:text-sidebar-muted transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================================== */}
      {/* MAIN CONTENT CONTAINER                                                */}
      {/* The white rounded area where page content lives                       */}
      {/* ===================================================================== */}
      <main className="md:ml-52 lg:ml-56 min-h-screen p-3 md:p-4 lg:p-5 pt-16 md:pt-4 lg:pt-5">
        {/* ------------------------------------------------------------------- */}
        {/* CONTENT CARD                                                        */}
        {/* White rounded container that creates the "framed" effect            */}
        {/* Height calculations account for padding on each breakpoint          */}
        {/* ------------------------------------------------------------------- */}
        <div className="bg-content-container rounded-3xl min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-40px)] overflow-hidden">
          
          {/* ----------------------------------------------------------------- */}
          {/* SCROLLABLE CONTENT AREA                                           */}
          {/* This is where all page sections render                            */}
          {/* scrollbar-hide creates clean look without visible scrollbars      */}
          {/* ----------------------------------------------------------------- */}
          <div className="h-[calc(100vh-24px)] md:h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden scrollbar-hide smooth-scroll">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
