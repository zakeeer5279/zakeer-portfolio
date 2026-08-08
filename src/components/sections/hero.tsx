import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Download,
  Handshake,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import { profile, roles, stats } from "@/data/portfolio";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SocialIcons } from "@/components/ui/social-icons";
import { GlassCard } from "@/components/ui/glass-card";
import { RotatingText } from "@/components/ui/rotating-text";
import { Counter } from "@/components/ui/counter";
import profileAsset from "@/assets/about-profile.png.asset.json";

const icons: Record<string, LucideIcon> = {
  ClipboardCheck,
  Building2,
  Handshake,
  Users,
};

const ease = [0.22, 1, 0.36, 1] as const;

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease }}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
    >
      {/* gradient glow */}
      <div
        className="pointer-events-none absolute inset-6 rounded-full bg-primary/25 blur-[90px]"
        aria-hidden="true"
      />
      {/* rotating rings */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-primary/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_4px_color-mix(in_oklab,var(--primary)_60%,transparent)]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-[9%] rounded-full border border-accent/25 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_4px_color-mix(in_oklab,var(--accent)_60%,transparent)]" />
      </motion.div>

      {/* profile frame */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[18%] overflow-hidden rounded-full border border-border/60 bg-card shadow-[0_30px_90px_-30px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
      >
        <img
          src={profileImage}
          alt={`${profile.name}, ${profile.role}`}
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* floating geometric shapes */}
      <motion.span
        aria-hidden="true"
        className="absolute -left-2 top-1/3 h-10 w-10 rotate-12 rounded-lg border border-primary/40 bg-primary/10 backdrop-blur-sm"
        animate={{ y: [0, 14, 0], rotate: [12, -8, 12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute right-2 top-8 h-6 w-6 rounded-full border border-accent/50 bg-accent/10"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* glass cards */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -left-3 bottom-10 rounded-2xl px-4 py-3 sm:-left-8"
      >
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">On-time delivery</p>
        <p className="text-lg font-semibold tracking-tight text-foreground">98%</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -right-2 top-1/2 rounded-2xl px-4 py-3 sm:-right-6"
      >
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Active sites</p>
        <p className="text-lg font-semibold tracking-tight text-foreground">12</p>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-28 sm:pt-32">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col justify-center">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Open to new programs
            </span>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-foreground/80 sm:text-xl">{profile.role}</p>

            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
              <RotatingText items={roles} />
            </p>

            <p className="text-gradient mt-6 max-w-xl text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
              {profile.tagline}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.summary}
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton href={profile.resumeUrl} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </SecondaryButton>
            </div>

            <SocialIcons className="mt-6" />
          </motion.div>

          <HeroVisual />
        </div>
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = icons[stat.icon] ?? ClipboardCheck;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <GlassCard className="p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <dd className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
              </GlassCard>
            </motion.div>
          );
        })}
      </dl>
    </section>
  );
}
