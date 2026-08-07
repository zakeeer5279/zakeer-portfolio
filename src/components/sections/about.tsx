import { Compass, GitBranch, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    Icon: Compass,
    title: "Clarity first",
    body: "Every program starts with a written scope, a decision log and a definition of done that the whole team can point to.",
  },
  {
    Icon: GitBranch,
    title: "Predictable delivery",
    body: "Small batches, visible WIP and honest forecasts beat heroic pushes at the end of a quarter.",
  },
  {
    Icon: Users,
    title: "Teams over tickets",
    body: "I protect focus time, unblock fast and keep stakeholders informed so engineers can do their best work.",
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="A project manager who writes things down"
          description="Four years coordinating software delivery across product, engineering, design and client stakeholders — with a bias for clear documentation and measurable outcomes."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <GlassCard className="h-full">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}