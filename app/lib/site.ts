export const siteConfig = {
  name: "John Carlo Red",
  role: "Salesforce Developer",
  siteName: "John Carlo Red Portfolio",
  url: "https://www.johncarlored.com",
  description:
    "John Carlo Red is a Salesforce Developer building portfolio sites, automation workflows, Lightning Web Components, and business-focused Salesforce solutions.",
  keywords: [
    "John Carlo Red",
    "Salesforce Developer",
    "Salesforce Portfolio",
    "Lightning Web Components",
    "Apex",
    "Flow Automation",
    "Experience Cloud",
    "Philippines Developer",
  ],
  location: "Antipolo, Philippines",
  email: "john.carlo.d.red@gmail.com",
  social: {
    github: "https://github.com/jcred97",
    linkedin: "https://www.linkedin.com/in/jcdred/",
  },
  ogImage: {
    url: "/images/profile/john-carlo-red-hero-portrait-v2.jpg",
    width: 1149,
    height: 1368,
    alt: "Portrait of John Carlo Red",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
