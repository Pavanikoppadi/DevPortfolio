/**
 * =============================================================================
 * SkillsSection.tsx - Grouped Technology Skills
 * =============================================================================
 * 
 * PURPOSE:
 * Displays skills in 3 clear categories for easy scanning.
 * Core Technologies, AI & Automation, Tools & Workflow.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import local tool assets
import chatgptLogo from "@/assets/tools/chatgpt.png";
import claudeLogo from "@/assets/tools/claude.png";
import copilotLogo from "@/assets/tools/copilot.png";
import cursorLogo from "@/assets/tools/cursor.png";
import lovableLogo from "@/assets/tools/lovable.png";
import geminiLogo from "@/assets/tools/gemini.png";
import boltLogo from "@/assets/tools/bolt.png";
import warpLogo from "@/assets/tools/warp.png";
import vscodeLogo from "@/assets/tools/vscode.png";

// =============================================================================
// DATA - Grouped by category
// =============================================================================

const skillGroups = [
  {
    title: "Core Technologies",
    skills: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI API", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png" },
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "n8n", icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: chatgptLogo },
      { name: "Claude AI", icon: claudeLogo },
      { name: "GitHub Copilot", icon: copilotLogo },
      { name: "Cursor", icon: cursorLogo },
      { name: "Lovable", icon: lovableLogo },
      { name: "Gemini", icon: geminiLogo },
      { name: "Bolt", icon: boltLogo },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: vscodeLogo },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Warp", icon: warpLogo },
    ],
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-12" ref={ref}>
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">Tech Stack</h2>
        <p className="text-foreground-secondary text-base sm:text-lg mt-3">Production-ready tools I use end-to-end</p>
      </motion.div>

      {/* Skill Groups */}
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 + groupIndex * 0.1 }}
          >
            {/* Group Title */}
            <h3 className="text-sm sm:text-base font-medium text-foreground-secondary uppercase tracking-widest mb-4 sm:mb-5 text-center">
              {group.title}
            </h3>
            
            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.2 + groupIndex * 0.1 + index * 0.03 }}
                  className="flex items-center gap-2 sm:gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors duration-200"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    onError={(e) => {
                      // Hide broken images
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-foreground text-sm sm:text-base font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
