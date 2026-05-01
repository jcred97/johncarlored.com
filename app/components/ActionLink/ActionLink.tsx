import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  icon?: IconType;
  newTab?: boolean;
  variant: "primary" | "secondary";
};

const linkStyles = {
  primary:
    "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-red-300 px-4 text-sm font-semibold text-slate-950 shadow-lg shadow-red-950/35 transition-colors hover:bg-red-200",
  secondary:
    "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-red-300/40 bg-red-950/20 px-4 text-sm font-semibold text-red-100 transition-colors hover:border-red-300/70 hover:bg-red-900/30",
} satisfies Record<ActionLinkProps["variant"], string>;

const iconClassName = "h-4 w-4";

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

export default function ActionLink({
  children,
  href,
  icon: Icon,
  newTab = false,
  variant,
}: ActionLinkProps) {
  const className = linkStyles[variant];
  const content = (
    <>
      {Icon ? <Icon className={iconClassName} aria-hidden="true" /> : null}
      {children}
    </>
  );

  if (newTab || isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
