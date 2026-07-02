import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExpand, FaXmark } from "react-icons/fa6";

import type { Project } from "../../../projects.data";
import { previewStyles } from "../../../_lib/preview-styles";

type ProjectHeroPreviewProps = {
  project: Project;
  hasCoverImage: boolean;
  activeDemoIndex: number | null;
  activeGalleryIndex: number | null;
  onSelectPreview: () => void;
  onSelectGalleryImage: (index: number) => void;
  onSelectDemo: (index: number) => void;
};

export default function ProjectHeroPreview({
  project,
  hasCoverImage,
  activeDemoIndex,
  activeGalleryIndex,
  onSelectPreview,
  onSelectGalleryImage,
  onSelectDemo,
}: ProjectHeroPreviewProps) {
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  const [loadedImageSources, setLoadedImageSources] = useState<Set<string>>(
    () => new Set(),
  );
  const previewStyle = previewStyles[project.accent];
  const activeDemo = activeDemoIndex === null ? undefined : project.demoVideos?.[activeDemoIndex];
  const activeGalleryImage =
    activeGalleryIndex === null ? undefined : project.galleryImages?.[activeGalleryIndex];
  const hasMediaControls = Boolean(
    project.galleryImages?.length || project.demoVideos?.length,
  );
  const mediaControls = hasMediaControls ? (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onSelectPreview}
        className={`inline-flex h-9 cursor-pointer items-center justify-center rounded-md px-3 text-xs font-semibold transition-colors ${
          activeDemoIndex === null && activeGalleryIndex === null
            ? "bg-white text-slate-950"
            : "border border-white/12 bg-white/4 text-zinc-100 hover:border-red-200/40 hover:text-red-100"
        }`}
      >
        Preview
      </button>
      {project.galleryImages?.map((galleryImage, index) => (
        <button
          key={galleryImage.src}
          type="button"
          onClick={() => onSelectGalleryImage(index)}
          className={`inline-flex h-9 cursor-pointer items-center justify-center rounded-md px-3 text-xs font-semibold transition-colors ${
            activeGalleryIndex === index
              ? "bg-white text-slate-950"
              : "border border-white/12 bg-white/4 text-zinc-100 hover:border-red-200/40 hover:text-red-100"
          }`}
        >
          {galleryImage.title}
        </button>
      ))}
      {project.demoVideos?.map((demoVideo, index) => (
        <button
          key={demoVideo.embedUrl}
          type="button"
          onClick={() => onSelectDemo(index)}
          className={`inline-flex h-9 cursor-pointer items-center justify-center rounded-md px-3 text-xs font-semibold transition-colors ${
            activeDemoIndex === index
              ? "bg-white text-slate-950"
              : "border border-white/12 bg-white/4 text-zinc-100 hover:border-red-200/40 hover:text-red-100"
          }`}
        >
          {demoVideo.title}
        </button>
      ))}
    </div>
  ) : null;

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExpandedImage(null);
      }
    }

    if (!expandedImage) {
      return;
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedImage]);

  const expandedImageDialog = expandedImage ? (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/92 px-4 py-6 backdrop-blur-sm sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${expandedImage.title} enlarged preview`}
    >
      <button
        type="button"
        aria-label="Close enlarged preview"
        className="absolute inset-0 cursor-zoom-out"
        onClick={() => setExpandedImage(null)}
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-7xl flex-col">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="min-w-0 truncate text-sm font-semibold text-zinc-100">
            {expandedImage.title}
          </p>
          <button
            type="button"
            aria-label="Close enlarged preview"
            title="Close preview"
            className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/8 text-zinc-100 transition-colors hover:border-red-200/40 hover:text-red-100"
            onClick={() => setExpandedImage(null)}
          >
            <FaXmark className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-2xl shadow-black/50">
          <Image
            src={expandedImage.src}
            alt={expandedImage.alt}
            width={1920}
            height={1080}
            sizes="100vw"
            className="max-h-[84vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  ) : null;

  function imagePreviewButton({
    src,
    alt,
    title,
  }: {
    src: string;
    alt: string;
    title: string;
  }) {
    const isImageLoading = !loadedImageSources.has(src);

    return (
      <>
        <button
          type="button"
          aria-label={`Open ${title} enlarged preview`}
          title="Open larger preview"
          className="group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-md shadow-black/20"
          onClick={() => setExpandedImage({ src, alt, title })}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
            onLoad={() => {
              setLoadedImageSources((currentSources) => {
                if (currentSources.has(src)) {
                  return currentSources;
                }

                const nextSources = new Set(currentSources);
                nextSources.add(src);
                return nextSources;
              });
            }}
          />
          {isImageLoading ? (
            <span className="absolute inset-0 grid place-items-center bg-slate-950/70 text-xs font-semibold text-zinc-200 backdrop-blur-sm">
              <span className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-slate-950/80 px-4 py-2 shadow-md shadow-black/20">
                <span
                  className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-red-200"
                  aria-hidden="true"
                />
                Loading preview
              </span>
            </span>
          ) : null}
          <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-md border border-white/10 bg-slate-950/80 text-zinc-100 opacity-0 shadow-md shadow-black/20 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <FaExpand className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </button>
        {expandedImageDialog}
      </>
    );
  }

  if (activeDemo) {
    return (
      <div className="mx-auto mt-10 w-full max-w-3xl">
        <div className="overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-md shadow-black/20">
          <iframe
            src={activeDemo.embedUrl}
            title={activeDemo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
        {mediaControls}
      </div>
    );
  }

  if (activeGalleryImage) {
    return (
      <div className="mx-auto mt-10 w-full max-w-3xl">
        {imagePreviewButton({
          src: activeGalleryImage.src,
          alt: activeGalleryImage.alt,
          title: activeGalleryImage.title,
        })}
        {mediaControls}
      </div>
    );
  }

  if (hasCoverImage) {
    return (
      <div className="mx-auto mt-10 w-full max-w-3xl">
        {imagePreviewButton({
          src: project.image.src,
          alt: project.image.alt,
          title: "Preview",
        })}
        {mediaControls}
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl">
      <div className="flex aspect-video flex-col justify-between rounded-md border border-white/10 bg-slate-950 p-4 shadow-md shadow-black/20 sm:p-6">
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
      {mediaControls}
    </div>
  );
}
