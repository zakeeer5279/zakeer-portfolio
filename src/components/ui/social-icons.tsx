import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const items = [
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "X", href: profile.socials.x, Icon: Twitter },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="glass-panel grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}