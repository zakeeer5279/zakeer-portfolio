import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const primary =
  "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-0.5 hover:brightness-110";

const secondary =
  "glass-panel text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary";

type CommonProps = { children: ReactNode; className?: string };

type PolyProps = CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

function Poly({ variant, className, children, ...props }: PolyProps & { variant: string }) {
  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={cn(base, variant, className)} {...anchorProps}>
        {children}
      </a>
    );
  }
  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={cn(base, variant, className)} {...buttonProps}>
      {children}
    </button>
  );
}

export const PrimaryButton = (props: PolyProps) => <Poly variant={primary} {...props} />;
export const SecondaryButton = (props: PolyProps) => <Poly variant={secondary} {...props} />;