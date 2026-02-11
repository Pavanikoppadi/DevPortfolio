/**
 * FixedSidebar - Desktop navigation with enhanced micro-animations
 */

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import profilePhoto from "@/assets/profile-photo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:koppadipavani34@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/pavanikoppadi", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Pavanikoppadi", label: "GitHub" },
];

export const FixedSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 lg:w-56 bg-sidebar-dark flex flex-col justify-between py-8 px-5 z-50">
      <div>
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <motion.div 
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={profilePhoto} alt="Pavani Koppadi" className="w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" width={40} height={40} />
          </motion.div>
          
          <div>
            <h1 className="text-sidebar-foreground font-semibold text-caption leading-tight">Pavani Koppadi</h1>
            <p className="text-sidebar-muted text-micro">AI Full Stack Developer</p>
            <p className="text-green-400 text-micro mt-1">● Open to work</p>
          </div>
        </motion.div>

        {/* Nav */}
        <nav className="mb-8">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <motion.a
                  href={link.href}
                  className="block px-3 py-2 text-caption text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-full transition-all duration-200"
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        {/* Hire Me */}
        <motion.a 
          href="mailto:koppadipavani34@gmail.com" 
          className="block w-full mb-6"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <RainbowButton className="w-full text-caption py-2.5 text-white [text-shadow:0_0_8px_rgba(255,255,255,0.3)]">
            Hire Me
          </RainbowButton>
        </motion.a>

        {/* Socials */}
        <div className="mb-6">
          <p className="text-sidebar-muted text-micro font-semibold tracking-widest uppercase mb-3">Socials</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <p className="text-sidebar-muted text-micro">From Earth :)</p>
      </div>
    </aside>
  );
};
