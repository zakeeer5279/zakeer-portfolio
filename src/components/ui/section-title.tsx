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
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
        <span
          className={cn(
            "mono-label inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
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
