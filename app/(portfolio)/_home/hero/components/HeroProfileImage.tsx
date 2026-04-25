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
    <div className="relative order-1 mx-auto w-full max-w-64 sm:max-w-72 lg:order-2 lg:max-w-[23.5rem] lg:justify-self-end">
      <div className="absolute -inset-x-8 -inset-y-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(252,165,165,0.22),transparent_62%)] blur-3xl" />
      <div className="absolute inset-y-8 -left-5 hidden w-px bg-gradient-to-b from-transparent via-red-200/40 to-transparent lg:block" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.38)] ring-1 ring-red-950/30 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-x-4 top-3 z-10 h-10 rounded-full bg-white/8 blur-xl" />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          preload
          sizes="(min-width: 1024px) 376px, (min-width: 640px) 288px, 256px"
          className="relative z-0 h-auto w-full rounded-[1.15rem] border border-white/10 saturate-95 contrast-105"
        />
      </div>
    </div>
  );
}
