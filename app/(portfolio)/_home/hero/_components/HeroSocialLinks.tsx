import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

type HeroSocialLinksProps = {
  links: readonly SocialLink[];
};

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

export default function HeroSocialLinks({ links }: HeroSocialLinksProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const Icon = socialIcons[link.label];
        const opensInNewTab = !link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={opensInNewTab ? "_blank" : undefined}
            rel={opensInNewTab ? "noreferrer" : undefined}
            aria-label={link.label}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-4 text-sm font-medium text-zinc-300 transition-colors hover:border-red-300/50 hover:text-red-300"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
