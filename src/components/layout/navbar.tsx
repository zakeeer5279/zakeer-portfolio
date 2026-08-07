import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Download } from "lucide-react";
import { motion } from "motion/react";
import { navLinks, profile } from "@/data/portfolio";
import { useTheme } from "@/components/theme-provider";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5] },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300",
          scrolled ? "glass-panel shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)]" : "border border-transparent",
        )}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-sm text-primary-foreground">
            AM
          </span>
          <span className="truncate text-sm sm:text-base">{profile.name}</span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  active === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="glass-panel grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <SecondaryButton href={profile.resumeUrl} download className="hidden sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </SecondaryButton>
          <PrimaryButton href="#contact" className="hidden sm:inline-flex">
            Contact
          </PrimaryButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="glass-panel grid h-9 w-9 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden">
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
            <SecondaryButton href={profile.resumeUrl} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </SecondaryButton>
            <PrimaryButton href="#contact" onClick={() => setOpen(false)}>
              Contact
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}