import { ReactNode, useState, useEffect } from "react";
import { FixedSidebar } from "./FixedSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-sidebar-dark">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <FixedSidebar />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-dark px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sidebar-foreground font-semibold text-xs">PK</span>
          </div>
          <span className="text-sidebar-foreground font-semibold text-sm">Pavani Koppadi</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-sidebar-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-sidebar-dark/95 backdrop-blur-xl md:hidden pt-16"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {mobileNavLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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

      {/* Main Content Container */}
      <main className="md:ml-52 lg:ml-56 min-h-screen p-3 md:p-4 lg:p-5 pt-16 md:pt-4 lg:pt-5">
        <div className="bg-content-container rounded-3xl min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-40px)] overflow-hidden">
          <div className="h-[calc(100vh-24px)] md:h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
