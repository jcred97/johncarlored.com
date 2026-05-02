import { createPortfolioOgImage } from "../lib/og-image";
import { siteConfig } from "../lib/site";

export function GET() {
  return createPortfolioOgImage({
    title: siteConfig.name,
    description: siteConfig.description,
  });
}
