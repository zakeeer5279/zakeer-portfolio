import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  FileSpreadsheet,
  Handshake,
  LayoutList,
  MapPin,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  caseStudyProjects,
  caseStudyWorkflow,
  commonResponsibilities,
  projectFilters,
  technologyAndAi,
  valueCards,
  PROJECT_DETAILS_PLACEHOLDER,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const valueIcons = { FileSpreadsheet, Handshake, Users, LayoutList, Sparkles } as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? caseStudyProjects
        : caseStudyProjects.filter((p) => p.filters.includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects & Case Studies"
          description="Coordinating university infrastructure, operations, stakeholders, vendors, budgets, and technology-driven workflows."
        />

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-all duration-300",
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-14px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                    : "glass-panel text-muted-foreground hover:-translate-y-0.5 hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm tabular-nums text-muted-foreground">
              <span className="text-foreground">
                {String(visible.length).padStart(2, "0")}
              </span>{" "}
              Projects
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <GlassCard className="group flex h-full flex-col">
                <ProjectVisual variant={project.visual} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{project.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {project.location}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {project.category}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {project.role}
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-all duration-300 hover:gap-3"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <GlassCard interactive={false} className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Common project responsibilities
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {commonResponsibilities.map((item) => (
                <li
                  key={item}
                  className="glass-panel cursor-default rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <div className="mt-20">
          <SectionTitle
            eyebrow="Capabilities"
            title="How I add value"
            description="The repeatable practices I bring to every university infrastructure and operations project."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((card, i) => {
              const Icon = valueIcons[card.icon as keyof typeof valueIcons];
              return (
                <Reveal key={card.number} delay={i * 0.06}>
                  <GlassCard className="h-full">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm tabular-nums text-muted-foreground">
                        {card.number}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="#projects">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton href="#contact">Let&apos;s Discuss a Project</SecondaryButton>
          </div>
        </Reveal>
      </div>

      <CaseStudyDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function CaseStudyDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => (open ? null : onClose())}>
      <DialogContent className="glass-panel max-h-[88vh] max-w-4xl overflow-y-auto rounded-2xl p-0">
        {project ? (
          <div className="p-6 sm:p-8">
            <DialogHeader className="text-left">
              <span className="inline-flex w-fit rounded-full border border-glass-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                Case Study
              </span>
              <DialogTitle className="mt-3 text-2xl font-semibold tracking-tight">
                {project.name}
              </DialogTitle>
            </DialogHeader>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {project.location}
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {project.category}
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {project.role}
              </li>
            </ul>

            <div className="mt-6">
              <ProjectVisual variant={project.visual} />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.caseStudy.map((section) => (
                <div
                  key={section.number}
                  className="rounded-2xl border border-glass-border bg-surface/40 p-5"
                >
                  <p className="text-xs tabular-nums text-primary">{section.number}</p>
                  <h4 className="mt-1 text-sm font-semibold tracking-tight">{section.title}</h4>
                  {section.points.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm italic text-muted-foreground">
                      {PROJECT_DETAILS_PLACEHOLDER}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-glass-border bg-surface/40 p-5">
              <h4 className="text-sm font-semibold tracking-tight">Project Workflow</h4>
              <ol className="mt-4 grid gap-1">
                {caseStudyWorkflow.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex flex-col"
                  >
                    <span className="inline-flex items-center gap-3 text-sm text-foreground">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-[10px] tabular-nums text-primary">
                        {i + 1}
                      </span>
                      {step}
                    </span>
                    {i < caseStudyWorkflow.length - 1 ? (
                      <ChevronDown
                        className="ml-1.5 h-3.5 w-3.5 text-primary/50"
                        aria-hidden="true"
                      />
                    ) : null}
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-glass-border bg-surface/40 p-5">
              <h4 className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                Technology & AI
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {technologyAndAi.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {technologyAndAi.description}
              </p>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}