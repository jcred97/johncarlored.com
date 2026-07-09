import { FaLocationDot } from "react-icons/fa6";

import SocialLinks from "../../../components/SocialLinks/SocialLinks";
import HeroActions from "./_components/HeroActions";
import HeroProfileImage from "./_components/HeroProfileImage";
import { hero } from "./hero.data";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-x-8 gap-y-10 px-6 py-12 sm:px-8 sm:py-14 lg:min-h-[560px] lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,340px)] lg:items-center lg:py-16">
      <div className="order-2 max-w-3xl lg:order-1">
        <h1 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[2.7rem] lg:text-[2.95rem] xl:text-[3.2rem]">
          <span className="text-red-300">{hero.heading}</span>
        </h1>

        <h2 className="mt-3 max-w-2xl text-xl font-medium tracking-normal text-zinc-300 sm:text-2xl">
          {hero.role}
        </h2>
        <p className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs font-medium text-zinc-400 sm:text-sm">
          <FaLocationDot className="h-4 w-4 text-red-300/80" aria-hidden="true" />
          <span>
            {hero.location.city}, {hero.location.country}
          </span>
          <span className="font-semibold uppercase text-zinc-500">
            {hero.location.countryCode}
          </span>
        </p>
        <div className="mt-6 max-w-2xl space-y-3 text-base leading-8 text-zinc-300 sm:text-lg">
          {hero.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
        <SocialLinks links={hero.socialLinks} />
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
    </section>
  );
}
