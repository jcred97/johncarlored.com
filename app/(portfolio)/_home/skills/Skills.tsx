import { TbTool } from "react-icons/tb";

import { skillGroups, skillsContent } from "./skills.data";

export default function Skills() {
  return (
    <section
      className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <TbTool className="h-5 w-5 text-red-300" aria-hidden="true" />
          <h1 className="text-3xl font-semibold tracking-normal text-foreground">
            {skillsContent.heading}
          </h1>
        </div>
        <div className="mt-10 grid gap-8">
          {skillGroups.map((group) => (
            <section key={group.title}>
              <h2 className="text-base font-semibold tracking-normal text-foreground">
                {group.title}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:[grid-template-columns:repeat(auto-fit,minmax(13.5rem,1fr))]">
                {group.skills.map(({ name, Icon, accent }) => (
                  <div
                    key={name}
                    className="flex min-h-16 items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-left shadow-sm shadow-black/10"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-zinc-950/70 ring-1 ring-white/10">
                      <Icon aria-hidden="true" className={`size-5 ${accent}`} />
                    </span>
                    <span className="min-w-0 break-words text-sm font-medium leading-snug text-zinc-200">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
