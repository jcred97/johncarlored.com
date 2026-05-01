import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import ActionLink from "../../../../../components/ActionLink/ActionLink";
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
      {actionLinks.map((link) => (
        <ActionLink
          key={link.label}
          href={link.href}
          icon={FaExternalLinkAlt}
          variant="primary"
        >
          {link.label}
        </ActionLink>
      ))}

      {project.githubUrl ? (
        <ActionLink
          href={project.githubUrl}
          icon={FaGithub}
          variant="secondary"
        >
          GitHub
        </ActionLink>
      ) : null}
    </div>
  );
}
