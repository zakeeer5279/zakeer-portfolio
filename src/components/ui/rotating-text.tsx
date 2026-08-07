import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function RotatingText({
  items,
  interval = 2400,
  className,
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={cn("relative inline-flex h-[1.4em] overflow-hidden align-bottom", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap font-medium"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
