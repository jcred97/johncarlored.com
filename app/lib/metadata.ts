import type { Metadata } from "next";

import { siteConfig } from "./site";

type PageMetadataOptions = {
  title: string | { absolute: string };
  socialTitle?: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  socialTitle,
  description,
  path,
  image = siteConfig.ogImage.url,
  imageAlt,
  type = "website",
}: PageMetadataOptions): Metadata {
  const titleText = typeof title === "string" ? title : title.absolute;
  const resolvedSocialTitle = socialTitle ?? `${titleText} | ${siteConfig.name}`;
  const imageMetadata = image
    ? {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: imageAlt ?? `${titleText} - ${siteConfig.siteName}`,
          },
        ],
      }
    : {};
  const twitterImageMetadata = image ? { images: [image] } : {};

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedSocialTitle,
      description,
      url: path,
      siteName: siteConfig.siteName,
      type,
      ...imageMetadata,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSocialTitle,
      description,
      ...twitterImageMetadata,
    },
  };
}
