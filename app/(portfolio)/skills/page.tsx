import type { Metadata } from "next";

import Skills from "../_home/skills/Skills";

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
      <Skills />
    </main>
  );
}
