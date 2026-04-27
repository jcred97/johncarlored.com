import { FaLocationDot } from "react-icons/fa6";

import HeroActions from "./_components/HeroActions";
import HeroProfileImage from "./_components/HeroProfileImage";
import HeroSocialLinks from "./_components/HeroSocialLinks";
import HeroWorkedWith from "./_components/HeroWorkedWith";
import { hero } from "./hero.data";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-6xl gap-x-8 gap-y-14 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,380px)] lg:items-center lg:py-24">
      <div className="order-2 max-w-3xl lg:order-1">
        <h1 className="max-w-3xl text-[2.45rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.35rem]">
          {hero.heading.intro}{" "}
          <span className="text-red-300">{hero.heading.name}</span>
        </h1>

        <h2 className="mt-4 max-w-2xl text-xl font-medium tracking-normal text-zinc-300 sm:text-2xl">
          {hero.role}
        </h2>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-400 sm:text-base">
          <FaLocationDot className="h-4 w-4 text-red-300/80" aria-hidden="true" />
          <span>
            {hero.location.city}, {hero.location.country}
          </span>
          <span className="text-xs font-semibold uppercase text-zinc-500">
            {hero.location.countryCode}
          </span>
        </p>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-8 text-zinc-300 sm:text-lg">
          {hero.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
        <HeroSocialLinks links={hero.socialLinks} />
        <HeroActions
          primaryAction={hero.primaryAction}
          secondaryAction={hero.secondaryAction}
        />
      </div>
      <HeroProfileImage
        alt={hero.image.alt}
        src={hero.image.src}
        width={hero.image.width}
        height={hero.image.height}
      />
      <HeroWorkedWith label={hero.workedWith.label} companies={hero.workedWith.companies} />
    </section>
  );
}
