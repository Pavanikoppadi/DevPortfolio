import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const FloatingCard = ({
  children,
  className,
  rotation = 0,
  mouseX,
  mouseY,
  depth = 1,
}: {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  mouseX: any;
  mouseY: any;
  depth?: number;
}) => {
  const x = useTransform(mouseX, (val: number) => val * depth * 0.02);
  const y = useTransform(mouseY, (val: number) => val * depth * 0.02);

  return (
    <motion.div
      style={{ x, y, rotate: rotation }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Sparkle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
      fill="currentColor"
    />
  </svg>
);

export const CreativeHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Floating Cards - Hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block">
        {/* Floating Cards - Left Side */}
        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.5}
          rotation={-6}
          className="top-[12%] left-[5%] z-10"
        >
          <div className="bg-card rounded-[24px] p-4 shadow-xl w-44 border border-border">
            <p className="text-foreground font-semibold text-sm">AI Full Stack Intern</p>
            <p className="text-muted-foreground text-xs mt-1">Electricon Wiz</p>
          </div>
        </FloatingCard>

        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.2}
          rotation={4}
          className="top-[35%] left-[3%] z-10"
        >
          <div className="bg-card rounded-[20px] p-3 shadow-xl w-40 border border-border">
            <p className="text-foreground font-semibold text-sm">Resumind.ai</p>
            <p className="text-muted-foreground text-xs mt-1">AI Resume Builder</p>
          </div>
        </FloatingCard>

        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.8}
          rotation={-3}
          className="bottom-[15%] left-[8%] z-10"
        >
          <div className="bg-card rounded-[20px] p-4 shadow-xl w-44 border border-border">
            <p className="text-foreground font-semibold text-sm">Tech Stack</p>
            <p className="text-muted-foreground text-xs mt-1">React • Node • AI</p>
          </div>
        </FloatingCard>

        {/* Floating Cards - Right Side */}
        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.4}
          rotation={5}
          className="top-[12%] right-[5%] z-10"
        >
          <div className="bg-card rounded-[24px] p-4 shadow-xl w-44 border border-border">
            <p className="text-foreground font-semibold text-sm">Coding Winner</p>
            <p className="text-muted-foreground text-xs mt-1">AlgoZenith</p>
          </div>
        </FloatingCard>

        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.6}
          rotation={-4}
          className="bottom-[18%] right-[5%] z-10"
        >
          <div className="bg-card rounded-[24px] p-4 shadow-xl w-48 border border-border">
            <p className="text-foreground font-semibold text-sm">Online Voting App</p>
            <p className="text-muted-foreground text-xs mt-1">MERN Stack</p>
          </div>
        </FloatingCard>

        {/* Sparkles */}
        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={2}
          className="top-[28%] left-[22%] text-foreground/20"
        >
          <Sparkle className="w-5 h-5" />
        </FloatingCard>

        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={2.5}
          className="top-[55%] right-[22%] text-foreground/15"
        >
          <Sparkle className="w-4 h-4" />
        </FloatingCard>

        <FloatingCard
          mouseX={springX}
          mouseY={springY}
          depth={1.8}
          className="bottom-[40%] left-[30%] text-foreground/10"
        >
          <Sparkle className="w-4 h-4" />
        </FloatingCard>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl mb-2 font-light italic"
        >
          Hi! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Pavani Koppadi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-8"
        >
          <span className="bg-secondary border border-border text-foreground px-6 py-3 rounded-full text-sm md:text-base">
            AI Full Stack Developer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          AI-focused full stack developer building scalable, real-world web products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-muted border border-border text-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
          >
            View Works
            <ArrowDown size={18} />
          </a>
          <a
            href="/pavanideveloperesume.pdf"
            download
            className="inline-flex items-center gap-2 bg-secondary hover:bg-muted border border-border text-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Resume
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
