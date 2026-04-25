import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaRegCalendarAlt,
  FaTag,
} from "react-icons/fa";

import { getProjectBySlug, projects } from "../projects.data";
import { publicImageExists } from "../../../components/ProjectCard/public-image-exists";
import { previewStyles } from "../../../components/ProjectCard/preview-styles";
import { siteConfig } from "../../../lib/site";

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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
    title: project.title,
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const actionLinks = project.links.filter(
    (link) => link.href !== `/projects/${project.slug}`,
  );
  const previewStyle = previewStyles[project.accent];
  const hasCoverImage = publicImageExists(project.image.src);

  return (
    <main className="flex flex-1 px-6 py-20 sm:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-200 transition-colors hover:text-red-100"
        >
          <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mx-auto mt-10 w-full max-w-3xl">
          {hasCoverImage ? (
            <div className="relative aspect-[1361/913] overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-md shadow-black/20">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="rounded-md border border-white/10 bg-slate-950 p-4 shadow-md shadow-black/20 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-sm text-zinc-400">
                  {project.owner}
                </p>
              </div>

              <p
                className={`mt-6 text-lg font-semibold ${previewStyle.title}`}
              >
                {project.owner} / {project.slug}
              </p>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-200">
                {project.description}
              </p>

              <div className="mt-10 flex items-end justify-between gap-8">
                <div className="flex -space-x-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="grid h-10 w-10 place-items-center rounded-full border border-slate-950 bg-white text-xs font-bold text-slate-950"
                    >
                      {tag.slice(0, 1)}
                    </span>
                  ))}
                </div>
                <div className="hidden h-24 flex-1 items-end justify-end gap-2 sm:flex">
                  {[48, 68, 56, 86, 64].map((height) => (
                    <span
                      key={height}
                      className={`w-8 rounded-t-sm ${previewStyle.graph}`}
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

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

          {actionLinks.length > 0 || project.githubUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {actionLinks.map((link) => {
                const isExternalLink = link.href.startsWith("http");

                return isExternalLink ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-xs font-semibold text-slate-950 transition-colors hover:bg-red-100"
                  >
                    <FaExternalLinkAlt
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-xs font-semibold text-slate-950 transition-colors hover:bg-red-100"
                  >
                    <FaExternalLinkAlt
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
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
          ) : null}

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

        <hr className="my-12 border-white/10" />

        <section>
          <h2 className="text-3xl font-semibold text-foreground">
            {project.title}
          </h2>
          {project.overview ? (
            <div className="mt-8 max-w-3xl space-y-8 text-base leading-8 text-zinc-300">
              <div className="space-y-5">
                {project.overview.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {project.overview.features?.length ? (
                <div>
                  {project.overview.featureHeading ? (
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.overview.featureHeading}
                    </h3>
                  ) : null}
                  <ul className="mt-4 grid gap-3 pl-5 text-sm leading-7 text-zinc-300 sm:text-base">
                    {project.overview.features.map((feature) => (
                      <li key={feature.title} className="list-disc">
                        <span className="font-semibold text-zinc-100">
                          {feature.title}
                        </span>{" "}
                        <span>{feature.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.overview.closing?.length ? (
                <div className="space-y-5">
                  {project.overview.closing.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300">
              {project.summary}
            </p>
          )}
        </section>
      </article>
    </main>
  );
}
