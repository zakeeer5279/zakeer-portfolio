import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Toolkit"
          description="The practices and platforms I use to keep delivery predictable."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
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