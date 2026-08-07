import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
        <span className="glass-panel inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}