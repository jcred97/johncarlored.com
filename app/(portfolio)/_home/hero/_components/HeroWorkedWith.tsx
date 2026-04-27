import Image from "next/image";

type WorkedWithCompany = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

type HeroWorkedWithProps = {
  label: string;
  companies: readonly WorkedWithCompany[];
};

export default function HeroWorkedWith({
  label,
  companies,
}: HeroWorkedWithProps) {
  return (
    <div className="order-3 w-full rounded-[1.75rem] border border-white/7 bg-white/[0.015] px-5 py-7 sm:px-7 lg:col-span-2 lg:mt-2">
      <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-zinc-500/90">
        {label}
      </p>
      <div className="mt-6 grid grid-cols-2 items-start gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex min-h-22 flex-col items-center justify-center gap-3 px-3 py-3 text-center"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={company.width}
              height={company.height}
              sizes="(min-width: 1024px) 144px, (min-width: 640px) 30vw, 45vw"
              className="max-h-11 w-auto object-contain opacity-88"
            />
            <p className="text-xs font-medium text-zinc-400/90">
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
