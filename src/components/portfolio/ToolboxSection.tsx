/**
 * =============================================================================
 * ToolboxSection.tsx - AI & Development Tools Grid
 * =============================================================================
 * 
 * PURPOSE:
 * Displays AI and development tools in a 3-column grid.
 * Features custom logo images with hover effects.
 * 
 * DESIGN:
 * - Clean minimal grid layout
 * - Tool names hidden by default, appear on hover
 * - Subtle shadow and scale effects on hover
 * 
 * ANIMATIONS:
 * - Title fades up on scroll
 * - Tool icons scale in with staggered delays
 * 
 * TOOLS DISPLAYED:
 * ChatGPT, Claude AI, GitHub Copilot, Cursor, Lovable,
 * VS Code, Warp, Bolt, Gemini
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Framer Motion for scroll-triggered animations
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Tool logo assets (imported from assets folder)
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

/**
 * Tools Array
 * 
 * List of development and AI tools with their logo images.
 * 
 * @property {string} image - Imported logo image asset
 * @property {string} name - Tool name (shown on hover)
 */
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

/**
 * ToolboxSection Component
 * 
 * Renders a grid of tool logos with hover-reveal names.
 */
export const ToolboxSection = () => {
  // ===========================================================================
  // REFS & ANIMATION STATE
  // ===========================================================================
  
  /**
   * Ref for scroll detection
   */
  const ref = useRef(null);
  
  /**
   * Track if section is visible
   */
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  
  return (
    <section id="toolbox" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* ================================================================== */}
        {/* SECTION HEADER                                                     */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground">Toolbox</h2>
        </motion.div>

        {/* ================================================================== */}
        {/* TOOLS GRID                                                         */}
        {/* 3 columns with centered alignment                                  */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              // Scale-in animation with stagger
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              // Column container with hover group
              className="flex flex-col items-center justify-center group"
            >
              
              {/* Tool Logo Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 overflow-hidden shadow-md shadow-foreground/10 group-hover:shadow-lg group-hover:shadow-foreground/15">
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Tool Name - Hidden until hover */}
              <span className="mt-3 text-xs md:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
