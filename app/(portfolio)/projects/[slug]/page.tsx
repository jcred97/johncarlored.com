import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectBackLink from "./_components/ProjectBackLink";
import ProjectHero from "./_components/ProjectHero/ProjectHero";
import ProjectOverview from "./_components/ProjectOverview";
import { getProjectMetadata } from "./_lib/project-metadata";
import { getProjectBySlug, projects } from "../projects.data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Prebuild all known project detail routes from the shared project data.
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Reject slugs outside the statically known project list.
export const dynamicParams = false;

export async function generateMetadata({ params, }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  return getProjectMetadata(getProjectBySlug(slug));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-1 px-6 py-20 sm:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <ProjectBackLink />

        <ProjectHero project={project} actionLinks={project.links} />

        <hr className="my-12 border-white/10" />

        <ProjectOverview project={project} />
      </article>
    </main>
  );
}
