import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import type { Project } from "../../../projects.data";

type ProjectHeroActionsProps = {
  project: Project;
  actionLinks: Project["links"];
};

export default function ProjectHeroActions({
  project,
  actionLinks,
}: ProjectHeroActionsProps) {
  if (actionLinks.length === 0 && !project.githubUrl) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {actionLinks.map((link) => {
        const isExternalLink = link.href.startsWith("http");
        const className = "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-xs font-semibold text-slate-950 transition-colors hover:bg-red-100";

        return isExternalLink ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={className}
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={link.href} className={className}>
            <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}

      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/12 bg-white/4 px-4 text-xs font-semibold text-zinc-100 transition-colors hover:border-red-200/40 hover:text-red-100"
        >
          <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
          GitHub
        </a>
      ) : null}
    </div>
  );
}
