/**
 * Header Component
 * 
 * Mobile-only fixed header with profile information and navigation.
 * Displays on mobile devices as a dark header bar with profile photo,
 * name, role, availability status, and hamburger menu.
 * Hidden on desktop where FixedSidebar is used instead.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import profilePhoto from "@/assets/profile-photo.png";

/** Navigation links for mobile menu */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for header background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header - Hidden on Desktop */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:hidden ${
          isScrolled ? "bg-black/95 backdrop-blur-xl" : "bg-black"
        }`}
      >
        <nav className="px-4 flex items-center justify-between h-16">
          {/* Profile Section */}
          <div className="flex items-center gap-3">
            {/* Profile Photo */}
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Pavani Koppadi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm tracking-tight">
                Pavani Koppadi
              </span>
              <span className="text-gray-400 text-xs tracking-normal">
                AI Full Stack Developer
              </span>
              <span className="text-green-400 text-[10px] tracking-normal">
                ● Open to work
              </span>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
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
