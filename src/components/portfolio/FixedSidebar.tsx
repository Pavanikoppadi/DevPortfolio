import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
];

export const FixedSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 lg:w-56 bg-sidebar-dark flex flex-col justify-between py-8 px-5 z-50">
      {/* Profile Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Pavani Koppadi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-sidebar-foreground font-semibold text-sm leading-tight">
              Pavani Koppadi
            </h1>
            <p className="text-sidebar-muted text-xs">AI Full Stack Developer</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="mb-8">
          <p className="text-sidebar-muted text-[10px] font-semibold tracking-widest uppercase mb-3">
            Creations
          </p>
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <a
                  href={link.href}
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Hire Me Button */}
        <a
          href="mailto:hello@example.com"
          className="block w-full mb-6 px-4 py-2.5 bg-sidebar-foreground text-sidebar-dark text-sm font-medium text-center rounded-lg hover:bg-sidebar-foreground/90 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Socials */}
        <div className="mb-6">
          <p className="text-sidebar-muted text-[10px] font-semibold tracking-widest uppercase mb-3">
            Socials
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Location tag */}
        <p className="text-sidebar-muted text-xs">From Earth :)</p>
      </div>
    </aside>
  );
};
