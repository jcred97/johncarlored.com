import type { Project } from "../../projects.data";

type ProjectOverviewProps = {
  project: Project;
};

function renderIntroParagraph(paragraph: string) {
  const labelMatch = paragraph.match(/^(Problem|Solution|Impact):\s(.+)$/);

  if (!labelMatch) {
    return paragraph;
  }

  const [, label, content] = labelMatch;

  return (
    <>
      <span className="font-semibold text-red-200">{label}:</span>{" "}
      <span>{content}</span>
    </>
  );
}

function renderClosingParagraph(paragraph: string) {
  const privacyNoteMatch = paragraph.match(/^Privacy note:\s(.+)$/);

  if (!privacyNoteMatch) {
    return <p>{paragraph}</p>;
  }

  const [, content] = privacyNoteMatch;

  return (
    <p className="border-l border-red-300/30 pl-4 text-sm italic leading-7 text-zinc-400">
      <span className="font-semibold not-italic text-zinc-300">
        Privacy note:
      </span>{" "}
      <span>{content}</span>
    </p>
  );
}

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
              <p key={paragraph}>{renderIntroParagraph(paragraph)}</p>
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
                <div key={paragraph}>{renderClosingParagraph(paragraph)}</div>
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
