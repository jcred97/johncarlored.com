import type { MetadataRoute } from "next";

import { publicImageExists } from "./(portfolio)/projects/_lib/public-image-exists";
import { projects } from "./(portfolio)/projects/projects.data";
import { absoluteUrl } from "./lib/site";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/images/profile/john-carlo-red-hero-portrait-v2.jpg")],
    },
    {
      url: absoluteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/experience"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/certifications"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
    const images = publicImageExists(project.image.src)
      ? [absoluteUrl(project.image.src)]
      : undefined;

    return {
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
