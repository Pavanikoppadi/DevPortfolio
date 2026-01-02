/**
 * =============================================================================
 * FixedSidebar.tsx - Desktop Navigation Sidebar
 * =============================================================================
 * 
 * PURPOSE:
 * A fixed dark sidebar displayed on the left side of the screen.
 * Visible only on desktop (hidden on mobile via MainLayout).
 * 
 * FEATURES:
 * - Profile photo and name display
 * - Role subtitle with availability status
 * - Navigation links with hover effects
 * - "Hire Me" call-to-action button
 * - Social media links (Email, LinkedIn, GitHub, Instagram)
 * - Location tag at bottom
 * 
 * STYLING:
 * - Uses sidebar-specific CSS variables (sidebar-dark, sidebar-foreground, etc.)
 * - Always dark regardless of theme (creates visual contrast)
 * - Fixed positioning with full viewport height
 * 
 * ANIMATIONS:
 * - Profile card slides in from left on page load
 * - Navigation links stagger in with delays
 * 
 * RESPONSIVE:
 * - Desktop only (hidden on mobile via parent component)
 * - Width: 208px (w-52) on medium screens, 224px (w-56) on large
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for entrance animations
import { motion } from "framer-motion";

// Lucide icons for social links
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

// Profile photo asset (imported as ES6 module for bundling)
import profilePhoto from "@/assets/profile-photo.png";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

/**
 * Navigation Links
 * 
 * Array of objects defining sidebar navigation items.
 * Each link targets an anchor ID on the page for smooth scrolling.
 * 
 * @property {string} label - Display text for the link
 * @property {string} href - Anchor target (e.g., "#projects")
 */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Social Media Links
 * 
 * Array of objects for social media icons and URLs.
 * Icons are Lucide React components.
 * 
 * @property {LucideIcon} icon - Icon component to render
 * @property {string} href - External URL or mailto link
 * @property {string} label - Accessibility label for screen readers
 */
const socialLinks = [
  { icon: Mail, href: "mailto:koppadipavani34@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
];

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * FixedSidebar Component
 * 
 * Renders the fixed left sidebar with profile info, navigation, and social links.
 * Uses flexbox with justify-between to push socials to bottom.
 */
export const FixedSidebar = () => {
  return (
    // =========================================================================
    // SIDEBAR CONTAINER
    // Fixed positioning on left side with full height
    // z-50 ensures it stays above all content
    // =========================================================================
    <aside className="fixed left-0 top-0 h-screen w-52 lg:w-56 bg-sidebar-dark flex flex-col justify-between py-8 px-5 z-50">
      
      {/* ===================================================================== */}
      {/* TOP SECTION: Profile & Navigation                                    */}
      {/* ===================================================================== */}
      <div>
        
        {/* ------------------------------------------------------------------- */}
        {/* PROFILE CARD                                                        */}
        {/* Animated entrance from left side                                    */}
        {/* ------------------------------------------------------------------- */}
        <motion.div
          // Slide in from left with fade
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          // Flexbox layout for photo + info side by side
          className="flex items-center gap-3 mb-10"
        >
          {/* Profile Photo - Circular avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Pavani Koppadi" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Text Info */}
          <div>
            {/* Name - Primary sidebar text color */}
            <h1 className="text-sidebar-foreground font-semibold text-caption leading-tight">
              Pavani Koppadi
            </h1>
            
            {/* Role - Muted sidebar text color */}
            <p className="text-sidebar-muted text-micro">
              AI Full Stack Developer
            </p>
            
            {/* Availability Status - Green dot indicator */}
            <p className="text-green-400 text-micro mt-1">
              ● Open to work
            </p>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------------- */}
        {/* NAVIGATION MENU                                                     */}
        {/* List of anchor links with staggered animation                       */}
        {/* ------------------------------------------------------------------- */}
        <nav className="mb-8">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                // Staggered fade-in from left
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                // Delay increases for each item (creates stagger effect)
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                {/* Navigation Link with rounded hover state */}
                <a
                  href={link.href}
                  className="block px-3 py-2 text-caption text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ===================================================================== */}
      {/* BOTTOM SECTION: CTA & Social Links                                   */}
      {/* Pushed to bottom via flex justify-between on parent                  */}
      {/* ===================================================================== */}
      <div>
        
        {/* ------------------------------------------------------------------- */}
        {/* HIRE ME BUTTON                                                      */}
        {/* Primary CTA linking to email                                        */}
        {/* ------------------------------------------------------------------- */}
        <a
          href="mailto:koppadipavani34@gmail.com"
          // Full-width button with inverted colors (light on dark)
          className="block w-full mb-6 px-4 py-2.5 bg-sidebar-foreground text-sidebar-dark text-caption font-medium text-center rounded-full hover:bg-sidebar-foreground/90 hover:scale-[1.02] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* ------------------------------------------------------------------- */}
        {/* SOCIAL LINKS SECTION                                                */}
        {/* Row of icon buttons linking to social profiles                      */}
        {/* ------------------------------------------------------------------- */}
        <div className="mb-6">
          {/* Section Label */}
          <p className="text-sidebar-muted text-micro font-semibold tracking-widest uppercase mb-3">
            Socials
          </p>
          
          {/* Social Icons Row */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                // Open external links in new tab
                target="_blank"
                rel="noopener noreferrer"
                // Accessibility label for screen readers
                aria-label={social.label}
                // Square button with rounded corners and hover effect
                className="w-8 h-8 flex items-center justify-center rounded-lg text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
              >
                {/* Render icon component dynamically */}
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* LOCATION TAG                                                        */}
        {/* Playful location text at very bottom                                */}
        {/* ------------------------------------------------------------------- */}
        <p className="text-sidebar-muted text-micro">From Earth :)</p>
      </div>
    </aside>
  );
};
