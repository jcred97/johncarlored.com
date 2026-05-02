import type { Metadata } from "next";

import { createPageMetadata } from "../../lib/metadata";
import ExperienceTabs from "./_components/ExperienceTabs";
import { experience } from "./experience.data";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "View John Carlo Red's Salesforce development experience, education timeline, and roles across multiple organizations.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <ExperienceTabs tabs={experience.tabs} />
      </div>
    </section>
  );
}
