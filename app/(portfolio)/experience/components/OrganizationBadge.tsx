import Image from "next/image";

type OrganizationBadgeProps = {
  label: string;
  logo?: string;
  organization: string;
};

export default function OrganizationBadge({
  label,
  logo,
  organization,
}: OrganizationBadgeProps) {
  return (
    <div
      className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/14 bg-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
      aria-label={`${organization} badge`}
    >
      {logo ? (
        <div className="relative h-7 w-7">
          <Image
            src={logo}
            alt={`${organization} logo`}
            fill
            unoptimized
            sizes="28px"
            className="object-contain"
          />
        </div>
      ) : (
        <span className="text-[0.65rem] font-bold tracking-[0.18em] text-zinc-100">
          {label}
        </span>
      )}
    </div>
  );
}
