import type { Metadata } from "next";

import FeaturedProjects from "./(portfolio)/_home/featured-projects/FeaturedProjects";
import Hero from "./(portfolio)/_home/hero/Hero";
import { createPageMetadata } from "./lib/metadata";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = createPageMetadata({
  title: {
    absolute: `${siteConfig.name}`,
  },
  socialTitle: `${siteConfig.name} | ${siteConfig.role}`,
  description:
    "Explore John Carlo Red's portfolio, featured Salesforce projects, technical strengths, and developer profile.",
  path: "/",
  image: "/og",
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col text-foreground">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
