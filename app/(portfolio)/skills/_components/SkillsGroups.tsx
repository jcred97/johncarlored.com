import type { SkillGroup } from "../skills.data";
import { skillIcons } from "../skills.icons";

type SkillsGroupsProps = {
  groups: readonly SkillGroup[];
};

export default function SkillsGroups({ groups }: SkillsGroupsProps) {
  return (
    <div className="mt-10 grid gap-8">
      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="text-base font-semibold tracking-normal text-foreground">
            {group.title}
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:[grid-template-columns:repeat(auto-fit,minmax(13.5rem,1fr))]">
            {group.skills.map(({ name, iconKey, accent }) => {
              const Icon = skillIcons[iconKey];

              return (
                <div
                  key={name}
                  className="flex min-h-16 items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-left shadow-sm shadow-black/10"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-zinc-950/70 ring-1 ring-white/10">
                    <Icon
                      aria-hidden="true"
                      className={`size-5 ${accent}`}
                    />
                  </span>
                  <span className="min-w-0 break-words text-sm font-medium leading-snug text-zinc-200">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
