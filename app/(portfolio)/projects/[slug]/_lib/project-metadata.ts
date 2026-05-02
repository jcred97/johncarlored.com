import type { Metadata } from "next";

import type { Project } from "../../projects.data";
import { createPageMetadata } from "../../../../lib/metadata";

export function getProjectMetadata(project: Project | undefined): Metadata {
  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: {
      absolute: project.title,
    },
    description: project.description,
    path: `/projects/${project.slug}`,
    image: `/og/projects/${project.slug}`,
    imageAlt: `${project.title} project by John Carlo Red`,
    type: "article",
  });
}
