import { Mail, Download } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { SocialIcons } from "@/components/ui/social-icons";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk about your next release"
          description="Available for associate project manager and delivery roles, plus short-term program consulting."
          align="center"
        />
        <Reveal delay={0.08}>
          <GlassCard className="mx-auto mt-12 max-w-3xl p-8 text-center" interactive={false}>
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">{profile.email}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Usually replies within one business day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`mailto:${profile.email}`}>Send an email</PrimaryButton>
              <SecondaryButton href={profile.resumeUrl} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download resume
              </SecondaryButton>
            </div>
            <SocialIcons className="mt-8 justify-center" />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}