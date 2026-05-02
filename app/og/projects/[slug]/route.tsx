import { createPortfolioOgImage } from "../../../lib/og-image";
import { getProjectBySlug } from "../../../(portfolio)/projects/projects.data";

type ProjectOgRouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: ProjectOgRouteContext) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return createPortfolioOgImage({
    title: project?.title ?? "Project",
    eyebrow: project?.role ?? "Salesforce Project",
    description:
      project?.description ??
      "A Salesforce project by John Carlo Red, focused on practical business workflows and developer experience.",
  });
}
