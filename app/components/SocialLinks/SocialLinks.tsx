import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export type SocialLinkLabel = "GitHub" | "LinkedIn" | "Email";

export type SocialLink = {
  label: SocialLinkLabel;
  href: string;
  isExternal?: boolean;
};

type SocialLinksProps = {
  links: readonly SocialLink[];
  variant?: "labelled" | "iconOnly" | "footer";
};

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
} satisfies Record<SocialLinkLabel, IconType>;

const containerStyles = {
  labelled: "mt-6 flex flex-wrap items-center gap-3",
  iconOnly: "mt-8 flex items-center gap-3",
  footer: "flex items-center justify-center gap-3 sm:gap-4",
} satisfies Record<NonNullable<SocialLinksProps["variant"]>, string>;

const linkStyles = {
  labelled:
    "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-4 text-sm font-medium text-zinc-300 transition-colors hover:border-red-300/50 hover:text-red-300",
  iconOnly:
    "grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-zinc-300 transition hover:border-red-200/35 hover:text-red-200",
  footer: "text-zinc-400 transition-colors hover:text-red-300",
} satisfies Record<NonNullable<SocialLinksProps["variant"]>, string>;

const iconStyles = {
  labelled: "h-5 w-5",
  iconOnly: "h-4 w-4",
  footer: "h-5 w-5",
} satisfies Record<NonNullable<SocialLinksProps["variant"]>, string>;

export default function SocialLinks({
  links,
  variant = "labelled",
}: SocialLinksProps) {
  return (
    <div className={containerStyles[variant]}>
      {links.map((link) => {
        const Icon = socialIcons[link.label];
        const opensInNewTab = link.isExternal ?? !link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={opensInNewTab ? "_blank" : undefined}
            rel={opensInNewTab ? "noreferrer" : undefined}
            aria-label={link.label}
            className={linkStyles[variant]}
          >
            <Icon className={iconStyles[variant]} aria-hidden="true" />
            {variant === "labelled" ? <span>{link.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
