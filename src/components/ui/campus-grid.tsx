import { motion, useReducedMotion } from "motion/react";

// 32 managed campuses: amber = active follow-up, sage = stable / SLA current.
const tiles = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  active: [2, 5, 9, 14, 18, 23, 27, 30].includes(i),
}));

export function CampusGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="glass-panel rounded-lg p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="mono-label text-muted-foreground">Campus network · 32 sites</p>
        <ul className="flex items-center gap-4">
          <li className="mono-label flex items-center gap-2 text-muted-foreground">
            <span className="h-2 w-2 bg-primary" aria-hidden="true" /> Active follow-up
          </li>
          <li className="mono-label flex items-center gap-2 text-muted-foreground">
            <span className="h-2 w-2 bg-sage" aria-hidden="true" /> SLA current
          </li>
        </ul>
      </div>

      <ul className="mt-5 grid grid-cols-8 gap-2" aria-label="32 managed university campuses">
        {tiles.map((tile, i) => (
          <motion.li
            key={tile.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduced ? 0.2 : 0.45,
              delay: reduced ? 0 : 0.4 + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={
              "relative aspect-square rounded-sm border transition-transform duration-300 hover:scale-110 " +
              (tile.active
                ? "border-primary/60 bg-primary/25 shadow-[0_0_16px_-4px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                : "border-sage/50 bg-sage/20")
            }
          >
            <span className="sr-only">
              Campus {tile.id + 1}: {tile.active ? "active follow-up" : "SLA current"}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
