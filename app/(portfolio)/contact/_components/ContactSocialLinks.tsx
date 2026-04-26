import type { IconType } from "react-icons";

import type { SocialLink } from "../contact.data";

type ContactSocialLinksProps = {
  links: readonly SocialLink[];
  icons: Record<SocialLink["label"], IconType>;
};

export default function ContactSocialLinks({
  links,
  icons,
}: ContactSocialLinksProps) {
  return (
    <div className="mt-8 flex items-center gap-3">
      {links.map((link) => {
        const Icon = icons[link.label];

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noreferrer" : undefined}
            aria-label={link.label}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-zinc-300 transition hover:border-red-200/35 hover:text-red-200"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
