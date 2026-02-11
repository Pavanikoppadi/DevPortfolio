/**
 * MainLayout - Enhanced mobile menu animations
 */

import { ReactNode, useState, useEffect } from "react";
import { FixedSidebar } from "./FixedSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

interface MainLayoutProps {
  children: ReactNode;
}

const mobileNavLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-sidebar-dark">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <FixedSidebar />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-dark px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0">
            <img src={profilePhoto} alt="Pavani Koppadi" className="w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" width={36} height={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-sidebar-foreground font-semibold text-sm sm:text-base leading-tight">Pavani Koppadi</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sidebar-muted text-xs sm:text-sm leading-tight">AI Full-Stack Developer</span>
              <span className="flex items-center gap-1 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open to work
              </span>
            </div>
          </div>
        </div>
        
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 sm:p-2 text-sidebar-foreground"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.85, rotate: 90 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} className="sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} className="sm:w-7 sm:h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-sidebar-dark/95 md:hidden pt-16"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {mobileNavLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-sidebar-foreground hover:text-sidebar-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <main className="md:ml-52 lg:ml-56 min-h-screen p-2 sm:p-3 md:p-4 lg:p-5 pt-16 sm:pt-[72px] md:pt-4 lg:pt-5">
        <div className="bg-content-container rounded-2xl sm:rounded-3xl min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-40px)] overflow-hidden">
          <div className="h-[calc(100vh-16px)] sm:h-[calc(100vh-24px)] md:h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden scrollbar-hide smooth-scroll">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
