import type { ExperienceRole } from "../experience.data";

type RoleLinksProps = {
  links: NonNullable<ExperienceRole["links"]>;
};

export default function RoleLinks({ links }: RoleLinksProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-semibold text-zinc-100 transition-colors hover:border-red-200/40 hover:text-red-100"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
