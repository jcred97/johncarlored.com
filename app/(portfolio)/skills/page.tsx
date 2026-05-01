import type { Metadata } from "next";
import { TbTool } from "react-icons/tb";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
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
          <SectionHeader icon={TbTool} title="Skills" level={1} />
          <SkillsGroups groups={skillGroups} />
        </div>
      </section>
    </main>
  );
}
