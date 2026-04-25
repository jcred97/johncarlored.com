import { FaRegFolderOpen } from "react-icons/fa";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "./projects.data";

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 px-6 py-24 sm:px-8">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-3">
          <FaRegFolderOpen className="h-6 w-6 text-red-300" aria-hidden="true" />
          <h1 className="text-4xl font-semibold tracking-normal text-foreground">
            Projects
          </h1>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
