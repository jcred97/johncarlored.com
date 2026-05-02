import { createPortfolioOgImage } from "../../lib/og-image";

export function GET() {
  return createPortfolioOgImage({
    title: "Projects",
    eyebrow: "Salesforce Work",
    description:
      "Salesforce projects covering Lightning Web Components, Experience Cloud, Apex, Flow, and business-focused app work.",
  });
}
