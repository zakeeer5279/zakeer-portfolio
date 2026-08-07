import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassCard({
  className,
  interactive = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-2xl p-6 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.45)]",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--primary)_45%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}