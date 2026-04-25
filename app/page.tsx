import FeaturedProjects from "./(portfolio)/_home/featured-projects/FeaturedProjects";
import Hero from "./(portfolio)/_home/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col text-foreground">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
