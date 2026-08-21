import { motion } from "motion/react";
import {
  MapPin,
  Briefcase,
  Building2,
  Target,
  Cpu,
  BookOpen,
  ClipboardList,
  Rocket,
  TrendingUp,
  Flag,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import aboutProfileAsset from "@/assets/about-profile.png.asset.json";

const quickInfo = [
  { Icon: MapPin, label: "Location", value: "India" },
  { Icon: Briefcase, label: "Current Role", value: "Associate Project Manager" },
  { Icon: Building2, label: "Domain", value: "Infrastructure & Facilities Operations" },
  { Icon: Target, label: "Interests", value: "Project Management, Technology, AI, Data Analytics" },
];

const features = [
  {
    Icon: Target,
    title: "Project Leadership",
    description: "Planning, execution, coordination, and successful project delivery.",
  },
  {
    Icon: Building2,
    title: "Infrastructure Operations",
    description: "Managing facilities, campus infrastructure, maintenance, and operational excellence.",
  },
  {
    Icon: Cpu,
    title: "Technology",
    description: "Using digital tools, automation, AI, and analytics to improve workflows.",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and modern project management practices.",
  },
];

const milestones = [
  { Icon: ClipboardList, label: "Planning" },
  { Icon: Rocket, label: "Execution" },
  { Icon: TrendingUp, label: "Optimization" },
  { Icon: Flag, label: "Delivery" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[360px] w-[360px] rounded-full bg-primary/15 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          description="Get to know who I am, how I work, and what drives me."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/25 to-primary/20 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-90" />
                <GlassCard className="relative overflow-hidden rounded-[1.75rem] p-2 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_40%,transparent)] transition-all duration-500 hover:shadow-[0_40px_100px_-30px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                  <div className="overflow-hidden rounded-[1.35rem]">
                    <img
                      src={aboutProfileAsset.url}
                      alt="Zakeer — Associate Project Manager"
                      width={1254}
                      height={1254}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {quickInfo.map(({ Icon, label, value }, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <GlassCard className="h-full p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{value}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:pt-4">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
                Turning Complex Projects into{" "}
                <span className="text-gradient">Measurable Results.</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I am an Associate Project Manager passionate about delivering infrastructure and operational projects with precision. My work combines project planning, stakeholder coordination, vendor management, facilities operations, and technology to create efficient, scalable solutions. I enjoy improving processes, solving operational challenges, and delivering measurable outcomes.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ Icon, title, description }, i) => (
                <Reveal key={title} delay={0.15 + i * 0.08}>
                  <GlassCard className="h-full p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 text-base font-semibold tracking-tight text-foreground">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <GlassCard className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">My Process</p>
                <div className="mt-6 flex items-center justify-between gap-2">
                  {milestones.map(({ Icon, label }, i) => (
                    <div key={label} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.12, ease }}
                          className="grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                        <span className="text-xs font-medium text-foreground sm:text-sm">{label}</span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="mx-1 flex-1 border-t border-dashed border-border/60 sm:mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <PrimaryButton href="#experience">
                  View Experience
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PrimaryButton>
                <SecondaryButton href="#contact">Let's Connect</SecondaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
