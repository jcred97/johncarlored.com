import { createPortfolioOgImage } from "../../lib/og-image";

export function GET() {
  return createPortfolioOgImage({
    title: "Certifications",
    eyebrow: "Credentials",
    description:
      "Salesforce credentials and supporting PDF certificates from John Carlo Red's developer portfolio.",
  });
}
