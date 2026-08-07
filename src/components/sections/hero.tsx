import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SocialIcons } from "@/components/ui/social-icons";
import { GlassCard } from "@/components/ui/glass-card";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-36 sm:pt-44">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Open to new programs · {profile.role}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.tagline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href="#projects">
              View selected work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton href={profile.resumeUrl} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </SecondaryButton>
            <SocialIcons className="ml-1" />
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </dd>
            </GlassCard>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}