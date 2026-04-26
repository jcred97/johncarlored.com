import { FaRegCalendarAlt, FaTag } from "react-icons/fa";

import type { Project } from "../../../projects.data";
import ProjectHeroActions from "./ProjectHeroActions";
import ProjectHeroPreview from "./ProjectHeroPreview";

type ProjectHeroProps = {
  project: Project;
  actionLinks: Project["links"];
};

export default function ProjectHero({ project, actionLinks }: ProjectHeroProps) {
  return (
    <>
      <ProjectHeroPreview project={project} />

      <header className="mt-10">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          {project.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <FaRegCalendarAlt className="h-4 w-4" aria-hidden="true" />
            {project.timeline}
          </span>
        </div>

        <ProjectHeroActions project={project} actionLinks={actionLinks} />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <FaTag className="mr-2 h-4 w-4 text-zinc-500" aria-hidden="true" />
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
    </>
  );
}
