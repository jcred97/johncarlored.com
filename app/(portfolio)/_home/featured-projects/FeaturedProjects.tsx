import Link from "next/link";
import { FaArrowRight, FaRegStar } from "react-icons/fa";

import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { featuredProjects } from "../../projects/projects.data";

const featuredProjectsHeading = "Featured projects";
const viewAllLabel = "View all";
const viewAllHref = "/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <FaRegStar className="h-5 w-5 text-red-300" aria-hidden="true" />
              <h2 className="text-3xl font-semibold tracking-normal text-foreground">
                {featuredProjectsHeading}
              </h2>
            </div>
          </div>
          <Link
            href={viewAllHref}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md text-sm font-semibold text-red-200 transition-colors hover:text-red-100"
          >
            {viewAllLabel}
            <FaArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
