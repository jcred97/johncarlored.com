import Image from "next/image";

type HeroProfileImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

export default function HeroProfileImage({
  alt,
  src,
  width,
  height,
}: HeroProfileImageProps) {
  return (
    <div className="relative order-1 mx-auto w-full max-w-60 sm:max-w-68 lg:order-2 lg:max-w-[21.25rem] lg:justify-self-end">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-2 shadow-[0_18px_56px_rgba(0,0,0,0.34)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 272px, 240px"
          className="relative z-0 h-auto w-full rounded-[1.15rem] border border-white/10 saturate-95 contrast-105"
        />
      </div>
    </div>
  );
}
