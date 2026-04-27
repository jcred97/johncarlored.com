import type { Metadata } from "next";

import FeaturedProjects from "./(portfolio)/_home/featured-projects/FeaturedProjects";
import Hero from "./(portfolio)/_home/hero/Hero";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name}`,
  },
  description:
    "Explore John Carlo Red's portfolio, featured Salesforce projects, technical strengths, and developer profile.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col text-foreground">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
