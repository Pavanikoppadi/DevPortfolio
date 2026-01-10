"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  blur?: number;
  spread?: number;
  glow?: boolean;
  borderWidth?: number;
  variant?: "default" | "white";
}

export function GlowCard({
  children,
  className,
  glowClassName,
  blur = 0,
  spread = 20,
  glow = true,
  borderWidth = 1,
  variant = "default",
}: GlowCardProps) {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <GlowingEffect
        blur={blur}
        borderWidth={borderWidth}
        spread={spread}
        glow={glow}
        variant={variant}
        className={glowClassName}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
