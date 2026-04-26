import type { Metadata } from "next";
import { TbTool } from "react-icons/tb";

import SkillsGroups from "./_components/SkillsGroups";
import { skillGroups } from "./skills.data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "See John Carlo Red's Salesforce, frontend, and development skills across platforms, tools, and implementation areas.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col text-foreground">
      <section className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-center gap-3">
            <TbTool className="h-5 w-5 text-red-300" aria-hidden="true" />
            <h1 className="text-3xl font-semibold tracking-normal text-foreground">
              Skills
            </h1>
          </div>
          <SkillsGroups groups={skillGroups} />
        </div>
      </section>
    </main>
  );
}
