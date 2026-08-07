import { navLinks, profile } from "@/data/portfolio";
import { SocialIcons } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-glass-border px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <SocialIcons />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}