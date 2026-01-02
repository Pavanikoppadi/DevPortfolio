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
      { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg" },
      { name: "n8n", icon: "https://cdn.jsdelivr.net/gh/n8n-io/n8n/assets/n8n-logo.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "/src/assets/tools/chatgpt.png" },
      { name: "Claude AI", icon: "/src/assets/tools/claude.png" },
      { name: "GitHub Copilot", icon: "/src/assets/tools/copilot.png" },
      { name: "Cursor", icon: "/src/assets/tools/cursor.png" },
      { name: "Lovable", icon: "/src/assets/tools/lovable.png" },
      { name: "Gemini", icon: "/src/assets/tools/gemini.png" },
      { name: "Bolt", icon: "/src/assets/tools/bolt.png" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Warp", icon: "/src/assets/tools/warp.png" },
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
    <section className="py-16 md:py-24 px-6 md:px-12" ref={ref}>
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-display text-foreground">Tech Stack</h2>
      </motion.div>

      {/* Skill Groups */}
      <div className="max-w-4xl mx-auto space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 + groupIndex * 0.1 }}
          >
            {/* Group Title */}
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
              {group.title}
            </h3>
            
            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.2 + groupIndex * 0.1 + index * 0.03 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors duration-200"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      // Hide broken images
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-foreground text-caption font-medium">
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
