import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Bot, Sparkles, Code2, Cpu, Braces, Terminal, Zap, Brain, Layers, Database, Cloud } from "lucide-react";

const tools = [
  { icon: Bot, name: "ChatGPT" },
  { icon: Sparkles, name: "Claude AI" },
  { icon: Github, name: "GitHub Copilot" },
  { icon: Code2, name: "Cursor" },
  { icon: Cpu, name: "Lovable" },
  { icon: Braces, name: "VS Code" },
  { icon: Terminal, name: "Warp" },
  { icon: Zap, name: "Bolt" },
  { icon: Brain, name: "Gemini" },
  { icon: Layers, name: "Figma" },
  { icon: Database, name: "Supabase" },
  { icon: Cloud, name: "Vercel" },
];

export const ToolboxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="toolbox" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Toolbox
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the preferred tools that I've been working on to streamline my creative process. 
            I'm always open to learning new methodologies, approaches and strategies to hone my craft.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                <tool.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" strokeWidth={1.5} />
              </div>
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
