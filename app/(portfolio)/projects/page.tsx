import type { Metadata } from "next";
import { FaRegFolderOpen } from "react-icons/fa";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { createPageMetadata } from "../../lib/metadata";
import ProjectCard from "./_components/ProjectCard/ProjectCard";
import { projects } from "./projects.data";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse Salesforce projects by John Carlo Red, including portfolio builds, Lightning Web Components, and automation-focused app work.",
  path: "/projects",
  image: "/og/projects",
  imageAlt: "Projects by John Carlo Red",
});

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 px-6 py-24 sm:px-8">
      <section className="mx-auto w-full max-w-7xl">
        <SectionHeader
          icon={FaRegFolderOpen}
          title="Projects"
          level={1}
          size="lg"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
