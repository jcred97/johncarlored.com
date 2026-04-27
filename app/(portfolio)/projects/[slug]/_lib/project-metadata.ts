import type { Metadata } from "next";

import type { Project } from "../../projects.data";
import { publicImageExists } from "../../../../components/ProjectCard/public-image-exists";
import { siteConfig } from "../../../../lib/site";

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

  const imageUrl = publicImageExists(project.image.src)
    ? project.image.src
    : siteConfig.ogImage.url;

  return {
    title: {
      absolute: project.title,
    },
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          alt: project.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [imageUrl],
    },
  };
}
