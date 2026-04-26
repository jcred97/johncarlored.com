import { siteConfig } from "../../lib/site";

export type ContactDetail = {
  label: "Timezone" | "Location";
  value: string;
  description: string;
};

export type SocialLink = {
  label: "LinkedIn" | "GitHub" | "Email";
  href: string;
  isExternal?: boolean;
};

export const contactContent: {
  heading: string;
  intro: string;
  details: readonly ContactDetail[];
  socialLinks: readonly SocialLink[];
} = {
  heading: "Get In Touch",
  intro: "Let's discuss your project and create something amazing together. I'm open to Salesforce Developer and Web Developer roles.",
  details: [
    {
      label: "Timezone",
      value: "UTC+8 (Asia/Manila)",
      description: "Available for async collaboration and scheduled calls.",
    },
    {
      label: "Location",
      value: siteConfig.location,
      description: "Based in the Philippines and comfortable collaborating remotely to any timezone",
    },
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      isExternal: true,
    },
    {
      label: "GitHub",
      href: siteConfig.social.github,
      isExternal: true,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
    },
  ],
};
