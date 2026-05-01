export type Certification = {
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  summary: string;
  pdfHref: string;
};

export const certifications: Certification[] = [
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    issuedDate: "Issued May 12, 2020",
    credentialId: "21189811",
    summary:
      "Certified Platform Administrators are Salesforce pros who are always looking for ways to help their companies get even more out of the Salesforce Platform through additional features and capabilities.",
    pdfHref: "/certifications/administrator.pdf",
  },
  {
    title: "Salesforce Certified Associate",
    issuer: "Salesforce",
    issuedDate: "Issued May 12, 2023",
    credentialId: "3394975",
    summary:
      "The Salesforce Associate Certification is designed for individuals who may have up to 6 months of user experience.",
    pdfHref: "/certifications/associate.pdf",
  },
  {
    title: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    issuedDate: "Issued September 03, 2023",
    credentialId: "3641134",
    summary:
      "Certified Platform App Builders have the skills and knowledge to design, build, and implement custom applications using the declarative customization capabilities of the Salesforce Platform.",
    pdfHref: "/certifications/platform-app-builder.pdf",
  },
  {
    title: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    issuedDate: "Issued September 01, 2023",
    credentialId: "3639222",
    summary:
      "Certified Platform Developers understand how to develop and deploy custom business logic and custom interfaces using the programmatic capabilities of the Lightning Platform. They know when to use declarative versus programmatic methods, and can extend the Lightning Platform using Apex and Visualforce.",
    pdfHref: "/certifications/platform-developer-1.pdf",
  },
    {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    issuedDate: "Issued February 06, 2026",
    credentialId: "7438316",
    summary:
      "Certified Agentforce Specialists are responsible for managing and optimizing Agentforce and have deep understanding of both Salesforce platform configuration and Agentforce capabilities.",
    pdfHref: "/certifications/agentforce-specialist.pdf",
  },
];
