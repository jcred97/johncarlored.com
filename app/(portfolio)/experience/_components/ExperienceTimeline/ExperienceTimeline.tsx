import type { ExperienceEntry } from "../../experience.data";
import OrganizationBadge from "./OrganizationBadge";
import RoleBlock from "./RoleBlock";

type ExperienceTimelineProps = {
  entries: readonly ExperienceEntry[];
};

export default function ExperienceTimeline({
  entries,
}: ExperienceTimelineProps) {
  return (
    <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-slate-950/65 px-5 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.3)] sm:px-8 sm:py-10">
      {entries.map((entry, index) => {
        const isLast = index === entries.length - 1;

        return (
          <article
            key={`${entry.organization}-${index}`}
            className="relative pl-[4.5rem] sm:pl-[5.5rem]"
          >
            {!isLast ? (
              <span className="absolute left-[1.35rem] top-14 bottom-0 w-px bg-white/10 sm:left-[1.4rem]" />
            ) : null}

            <div className="absolute left-0 top-1">
              <OrganizationBadge
                label={entry.placeholder}
                logo={entry.logo}
                organization={entry.organization}
              />
            </div>

            <div className="pb-10 sm:pb-12">
              <h3 className="text-2xl font-semibold tracking-normal text-zinc-50">
                {entry.organization}
              </h3>

              <div className="mt-3 space-y-6">
                {entry.roles.map((role) => (
                  <RoleBlock
                    key={`${entry.organization}-${role.title}-${role.period}`}
                    organization={entry.organization}
                    role={role}
                  />
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
