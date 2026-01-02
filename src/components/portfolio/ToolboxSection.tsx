/**
 * =============================================================================
 * ToolboxSection.tsx - AI & Development Tools Grid
 * =============================================================================
 * 
 * PURPOSE:
 * Displays AI and development tools in a 3-column grid.
 * Features custom logo images with Apple-style hover effects.
 * 
 * ANIMATIONS:
 * - Title fades up on scroll
 * - Tool icons scale in with staggered delays
 * - Hover: lift, scale, and subtle rotation
 * - Name reveals with smooth fade
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Tool logo assets
import chatgptLogo from "@/assets/tools/chatgpt.png";
import claudeLogo from "@/assets/tools/claude.png";
import copilotLogo from "@/assets/tools/copilot.png";
import cursorLogo from "@/assets/tools/cursor.png";
import lovableLogo from "@/assets/tools/lovable.png";
import vscodeLogo from "@/assets/tools/vscode.png";
import warpLogo from "@/assets/tools/warp.png";
import boltLogo from "@/assets/tools/bolt.png";
import geminiLogo from "@/assets/tools/gemini.png";

// =============================================================================
// DATA CONFIGURATION
// =============================================================================

const tools = [
  { image: chatgptLogo, name: "ChatGPT" },
  { image: claudeLogo, name: "Claude AI" },
  { image: copilotLogo, name: "GitHub Copilot" },
  { image: cursorLogo, name: "Cursor" },
  { image: lovableLogo, name: "Lovable" },
  { image: vscodeLogo, name: "VS Code" },
  { image: warpLogo, name: "Warp" },
  { image: boltLogo, name: "Bolt" },
  { image: geminiLogo, name: "Gemini" },
];

// =============================================================================
// COMPONENT
// =============================================================================

export const ToolboxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="toolbox" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground">Toolbox</h2>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col items-center justify-center group"
            >
              
              {/* Tool Logo with Apple-style hover */}
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl overflow-hidden shadow-md shadow-foreground/10 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-foreground/15"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotate: 3,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Tool Name - fade in on hover */}
              <motion.span 
                className="mt-3 text-xs md:text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tool.name}
                </span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};