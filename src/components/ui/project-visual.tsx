import { motion } from "motion/react";

/** Abstract, animated infrastructure visuals — no photography. */
export function ProjectVisual({ variant }: { variant: "grid" | "orbit" | "layers" | "pulse" | "beam" }) {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-xl border border-glass-border bg-surface/40">
      <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-6 top-4 h-24 w-24 rounded-full bg-primary/25 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/20 blur-2xl"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 200 100"
        className="relative h-full w-full text-primary"
        fill="none"
        aria-hidden="true"
      >
        {variant === "grid" ? (
          <g stroke="currentColor" strokeWidth="1.2" opacity="0.85">
            {[30, 60, 90, 120, 150].map((x, i) => (
              <motion.rect
                key={x}
                x={x}
                y={70 - i * 8}
                width="18"
                height={20 + i * 8}
                rx="3"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
            <line x1="10" y1="90" x2="190" y2="90" />
          </g>
        ) : null}

        {variant === "orbit" ? (
          <g stroke="currentColor" strokeWidth="1.2">
            <circle cx="100" cy="50" r="16" opacity="0.9" />
            {[28, 40].map((r, i) => (
              <motion.ellipse
                key={r}
                cx="100"
                cy="50"
                rx={r}
                ry={r / 2.2}
                opacity="0.6"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "100px 50px" }}
                transition={{ duration: 14 + i * 6, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </g>
        ) : null}

        {variant === "layers" ? (
          <g stroke="currentColor" strokeWidth="1.2" opacity="0.85">
            {[0, 1, 2].map((i) => (
              <motion.polygon
                key={i}
                points="100,20 160,45 100,70 40,45"
                transform={`translate(0 ${i * 14})`}
                initial={{ opacity: 0.25 }}
                animate={{ opacity: [0.25, 0.85, 0.25] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </g>
        ) : null}

        {variant === "pulse" ? (
          <g stroke="currentColor" strokeWidth="1.2">
            {[14, 26, 38, 50].map((r, i) => (
              <motion.circle
                key={r}
                cx="100"
                cy="50"
                r={r}
                opacity="0.5"
                initial={{ scale: 0.85, opacity: 0.15 }}
                animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.15, 0.7, 0.15] }}
                style={{ transformOrigin: "100px 50px" }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.35 }}
              />
            ))}
          </g>
        ) : null}

        {variant === "beam" ? (
          <g stroke="currentColor" strokeWidth="1.2" opacity="0.85">
            <path d="M20 80 L60 30 L100 80 L140 30 L180 80" />
            {[20, 60, 100, 140, 180].map((x, i) => (
              <motion.circle
                key={x}
                cx={x}
                cy={i % 2 === 0 ? 80 : 30}
                r="4"
                fill="currentColor"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
              />
            ))}
          </g>
        ) : null}
      </svg>
    </div>
  );
}