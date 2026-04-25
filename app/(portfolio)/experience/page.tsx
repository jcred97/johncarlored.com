import ExperienceTabs from "./components/ExperienceTabs";
import { experience } from "./experience.data";

export default function ExperiencePage() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <ExperienceTabs tabs={experience.tabs} />
      </div>
    </section>
  );
}
