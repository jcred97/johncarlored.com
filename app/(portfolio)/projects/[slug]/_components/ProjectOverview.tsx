import type { Project } from "../../projects.data";

type ProjectOverviewProps = {
  project: Project;
};

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-foreground">
        {project.title}
      </h2>
      {project.overview ? (
        <div className="mt-8 max-w-3xl space-y-8 text-base leading-8 text-zinc-300">
          <div className="space-y-5">
            {project.overview.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.overview.features?.length ? (
            <div>
              {project.overview.featureHeading ? (
                <h3 className="text-lg font-semibold text-foreground">
                  {project.overview.featureHeading}
                </h3>
              ) : null}
              <ul className="mt-4 grid gap-3 pl-5 text-sm leading-7 text-zinc-300 sm:text-base">
                {project.overview.features.map((feature) => (
                  <li key={feature.title} className="list-disc">
                    <span className="font-semibold text-zinc-100">
                      {feature.title}
                    </span>{" "}
                    <span>{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.overview.closing?.length ? (
            <div className="space-y-5">
              {project.overview.closing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300">
          {project.summary}
        </p>
      )}
    </section>
  );
}
