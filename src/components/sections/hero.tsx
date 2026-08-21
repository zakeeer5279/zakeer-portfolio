import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Download, FileText, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { CampusGrid } from "@/components/ui/campus-grid";
import { useResume } from "@/components/ui/resume";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 60]);
  const { open } = useResume();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-36">
      <motion.div
        aria-hidden="true"
        style={{ y: drift }}
        className="blueprint-grid pointer-events-none absolute inset-0 -top-24 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mono-label inline-flex items-center gap-2 rounded-sm border border-sage/50 bg-sage/10 px-2.5 py-1 text-sage">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" aria-hidden="true" />
            Operations · Live
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mono-label mt-3 text-primary">{profile.title}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {profile.linkedinLabel}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={open}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View Resume
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="glass-panel inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <CampusGrid />
        </motion.div>
      </div>
    </section>
  );
}
