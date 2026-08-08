import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  LineChart,
  Network,
  Play,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { experience, profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";

const flowSteps = [
  { label: "University Stakeholders", Icon: Building2 },
  { label: "Project Planning", Icon: Target },
  { label: "NxtWave Stakeholders", Icon: Users },
  { label: "Budget Alignment", Icon: LineChart },
  { label: "Execution", Icon: Rocket },
  { label: "Monitoring", Icon: Activity },
  { label: "Successful Delivery", Icon: CheckCircle2 },
];

const howIWork = [
  {
    title: "Plan",
    description: "Align requirements and stakeholders",
    Icon: ClipboardList,
  },
  {
    title: "Coordinate",
    description: "Connect university, internal, and external teams",
    Icon: Network,
  },
  {
    title: "Execute",
    description: "Drive activities according to timeline and budget",
    Icon: Play,
  },
  {
    title: "Monitor",
    description: "Track progress, issues, and deliverables",
    Icon: Activity,
  },
  {
    title: "Deliver",
    description: "Ensure successful completion and stakeholder satisfaction",
    Icon: CheckCircle2,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const job = experience[0]!;

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-20 h-[360px] w-[360px] rounded-full bg-accent/12 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Professional Journey"
          title="Professional Experience"
          description="Driving university partnerships, operations, project execution, and stakeholder collaboration."
        />

        <div className="mt-16">
          <Reveal>
            <div className="relative">
              {/* glowing vertical timeline line */}
              <div
                className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:block lg:left-8"
                aria-hidden="true"
              />

              {/* timeline node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="absolute left-6 top-10 z-10 hidden -translate-x-1/2 md:block lg:left-8"
                aria-hidden="true"
              >
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                  <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-background bg-primary shadow-[0_0_20px_6px_color-mix(in_oklab,var(--primary)_55%,transparent)]" />
                </span>
              </motion.div>

              {/* main experience card */}
              <GlassCard className="md:ml-16 lg:ml-20">
                <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-10">
                  {/* left content */}
                  <div>
                    {/* header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-lg text-primary">{job.company}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{job.department}</p>
                      </div>
                      <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-accent">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        {job.status}
                      </span>
                    </div>

                    <p className="mt-6 leading-relaxed text-muted-foreground">{job.description}</p>

                    {/* key responsibilities */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                        Key Responsibilities
                      </h4>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {job.responsibilities.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* strengths */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                        Key Strengths
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.strengths.map((strength) => (
                          <span
                            key={strength}
                            className="glass-panel rounded-full px-3 py-1 text-xs text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* impact areas */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                        Impact Area
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.impactAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20 transition-colors duration-300 hover:bg-primary/15"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* right content: visual flow + how i work */}
                  <div className="space-y-6">
                    {/* visual flow */}
                    <div className="glass-panel rounded-2xl p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                        Project Flow
                      </h4>
                      <ol className="mt-4 space-y-3">
                        {flowSteps.map((step, i) => (
                          <li key={step.label} className="relative">
                            <div className="flex items-center gap-3">
                              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                                <step.Icon className="h-3.5 w-3.5" aria-hidden="true" />
                              </span>
                              <span className="text-sm font-medium text-foreground">
                                {step.label}
                              </span>
                            </div>
                            {i < flowSteps.length - 1 && (
                              <div
                                className="absolute left-3.5 top-7 h-4 w-px bg-gradient-to-b from-primary/40 to-transparent"
                                aria-hidden="true"
                              />
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* how i work panel */}
                    <div className="glass-panel rounded-2xl p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                        How I Work
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {howIWork.map((item) => (
                          <li key={item.title} className="flex items-start gap-3">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                              <item.Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-sm font-medium text-foreground">{item.title}</p>
                              <p className="text-xs leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* bottom cta */}
                <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border/40 pt-8">
                  <SecondaryButton href={profile.resumeUrl} download>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Resume
                  </SecondaryButton>
                  <PrimaryButton href="#projects">
                    View Projects
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </PrimaryButton>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
