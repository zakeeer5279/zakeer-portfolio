import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've delivered"
          description="Roles across product delivery, PMO operations and client implementation."
        />
        <ol className="mt-12 space-y-4">
          {experience.map((job, i) => (
            <li key={job.company}>
              <Reveal delay={i * 0.06}>
                <GlassCard>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                      <p className="mt-1 text-sm text-primary">{job.company}</p>
                    </div>
                    <p className="shrink-0 text-right text-xs text-muted-foreground sm:text-sm">
                      {job.period}
                      <span className="block">{job.location}</span>
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}