"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  variant?: "primary" | "secondary";
  blur?: number;
  spread?: number;
  glow?: boolean;
  borderWidth?: number;
  glowVariant?: "default" | "white";
}

export function GlowButton({
  children,
  className,
  variant = "primary",
  blur = 0,
  spread = 20,
  glow = true,
  borderWidth = 1,
  glowVariant = "default",
  ...props
}: GlowButtonProps) {
  return (
    <button
      className={cn(
        "relative rounded-full overflow-visible",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-[2px] rounded-full overflow-hidden">
        <GlowingEffect
          blur={blur}
          borderWidth={borderWidth}
          spread={spread}
          glow={glow}
          variant={glowVariant}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
      </div>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
