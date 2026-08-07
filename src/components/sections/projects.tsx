import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected programs"
          description="A few initiatives where scope, delivery and measurable impact came together."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <GlassCard className="group h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-foreground">
                  {project.impact}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}