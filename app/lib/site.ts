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
    url: "/og",
    width: 1200,
    height: 630,
    alt: "John Carlo Red Salesforce Developer portfolio",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
