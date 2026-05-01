import Image from "next/image";
import Link from "next/link";

import TagList from "../../../../components/TagList/TagList";
import { previewStyles } from "../../_lib/preview-styles";
import { publicImageExists } from "../../_lib/public-image-exists";
import type { Project } from "../../projects.data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewStyle = previewStyles[project.accent];
  const hasCoverImage = publicImageExists(project.image.src);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block cursor-pointer overflow-hidden rounded-md border border-white/10 bg-slate-950/70 transition-colors hover:border-red-300/30"
    >
      <div
        className={`border-b border-white/10 bg-gradient-to-br p-6 ${previewStyle.frame}`}
      >
        {hasCoverImage ? (
          <div className="relative aspect-[1361/913] overflow-hidden rounded-md border border-white/10 bg-slate-950/95 shadow-md shadow-black/20">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-contain"
            />
          </div>
        ) : (
          // Show a styled mock preview when a project doesn't have a real cover
          // image yet.
          <div className="rounded-md border border-white/10 bg-slate-950/95 p-4 shadow-md shadow-black/20">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="text-xs text-zinc-500">{project.owner}</span>
            </div>
            <div className="mt-5 grid min-h-36 gap-4 sm:grid-cols-[1fr_140px]">
              <div>
                <p className={`text-sm font-semibold ${previewStyle.title}`}>
                  {project.owner} / {project.title.toLowerCase()}
                </p>
                <div className="mt-4 space-y-2">
                  <span className="block h-2 w-full rounded-full bg-white/15" />
                  <span className="block h-2 w-10/12 rounded-full bg-white/10" />
                  <span className="block h-2 w-7/12 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="hidden items-end gap-2 sm:flex">
                {[48, 76, 58, 96, 68].map((height) => (
                  <span
                    key={height}
                    className={`w-full rounded-t-sm ${previewStyle.graph}`}
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <TagList tags={project.tags} />
        </div>
      </div>
    </Link>
  );
}
