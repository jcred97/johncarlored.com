import Image from "next/image";

import type { Project } from "../../../projects.data";
import { publicImageExists } from "../../../../../components/ProjectCard/public-image-exists";
import { previewStyles } from "../../../../../components/ProjectCard/preview-styles";

type ProjectHeroPreviewProps = {
  project: Project;
};

export default function ProjectHeroPreview({ project }: ProjectHeroPreviewProps) {
  const previewStyle = previewStyles[project.accent];
  const hasCoverImage = publicImageExists(project.image.src);

  if (hasCoverImage) {
    return (
      <div className="mx-auto mt-10 w-full max-w-3xl">
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
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl">
      <div className="rounded-md border border-white/10 bg-slate-950 p-4 shadow-md shadow-black/20 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <p className="text-sm text-zinc-400">{project.owner}</p>
        </div>

        <p className={`mt-6 text-lg font-semibold ${previewStyle.title}`}>
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
    </div>
  );
}
