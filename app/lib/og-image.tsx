import { ImageResponse } from "next/og";

import { siteConfig } from "./site";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

type PortfolioOgImageOptions = {
  title: string;
  eyebrow?: string;
  description: string;
};

export function createPortfolioOgImage({
  title,
  eyebrow = siteConfig.role,
  description,
}: PortfolioOgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #090a18 0%, #21070b 55%, #020617 100%)",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fda4af",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>{siteConfig.name}</span>
          <span>{eyebrow}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              margin: 0,
              maxWidth: 900,
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 850,
              color: "#d4d4d8",
              fontSize: 34,
              lineHeight: 1.35,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
            color: "#a1a1aa",
            fontSize: 28,
          }}
        >
          <span>johncarlored.com</span>
          <span>Salesforce Developer Portfolio</span>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
