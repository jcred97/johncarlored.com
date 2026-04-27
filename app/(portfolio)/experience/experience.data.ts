export type ExperienceTabId = "work" | "education";

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: readonly string[];
};

export type ExperienceEntry = {
  organization: string;
  placeholder: string;
  logo?: string;
  roles: readonly ExperienceRole[];
};

export type ExperienceTab = {
  id: ExperienceTabId;
  label: string;
  items: readonly ExperienceEntry[];
};

export const experience = {
  tabs: [
    {
      id: "work",
      label: "Work",
      items: [
        {
          organization: "Kulturra",
          placeholder: "KU",
          logo: "/images/experience/kulturra.png",
          roles: [
            {
              title: "Salesforce Implementation Specialist",
              period: "Nov 2024 - Present",
              bullets: [
                "Implemented and customized the company's Salesforce managed package across multiple client orgs using Lightning Web Components, Apex classes, and Flow automations aligned to business requirements.",
                "Developed feature upgrades that improved package scalability and REST API integration capabilities for external payment systems and faster customer onboarding.",
                "Led development of the Salesforce Agentforce managed package to replace manual customer processes with automation and improve onboarding and product adoption.",
              ],
            },
          ],
        },
        {
          organization: "Quantrics Enterprises",
          placeholder: "QE",
          logo: "/images/experience/quantrics.png",
          roles: [
            {
              title: "Salesforce Developer",
              period: "Jul 2024 - Nov 2024",
              bullets: [
                "Led migration of legacy Visualforce and Apex solutions to Lightning Web Components to improve UI responsiveness, component reuse, and long-term maintainability.",
                "Re-architected Process Builder automations into record-triggered Flows to reduce technical debt and improve performance, governance compliance, and enhancement speed.",
              ],
            },
          ],
        },
        {
          organization: "Cloudstaff",
          placeholder: "CS",
          logo: "/images/experience/cloudstaff.png",
          roles: [
            {
              title: "Salesforce Developer",
              period: "Oct 2023 - Jun 2024",
              bullets: [
                "Migrated legacy Salesforce Classic and Visualforce functionality to Lightning Experience to improve maintainability and overall user experience.",
                "Developed Lightning Web Components integrated into an Experience Cloud client portal to improve UI responsiveness and long-term system maintainability.",
              ],
            },
          ],
        },
        {
          organization: "Accenture",
          placeholder: "AC",
          logo: "/images/experience/accenture.png",
          roles: [
            {
              title: "Salesforce Developer",
              period: "Jun 2021 - Sep 2023",
              bullets: [
                "Developed a chatbot using Einstein Bots and Lightning Web Components to manage customer inquiries, automate lead creation, and log conversation history.",
                "Automated complex sales workflows using validation rules, Approval Processes, Flows, Apex, and Triggers to improve data consistency and reduce manual work.",
                "Designed and built a custom application form using Aura Components and Apex to replace Screen Flows for better performance and more complex user interfaces.",
                "Mentored three associate developers through code reviews, technical guidance, and Salesforce best practices.",
              ],
            },
            {
              title: "Associate Salesforce Developer",
              period: "Feb 2020 - Jun 2021",
              bullets: [
                "Designed and implemented Screen Flows as dynamic application interfaces so administrators could modify logic and fields without developer intervention.",
                "Built Visualforce pages that generated structured CSV exports, reducing manual Excel work and improving reporting efficiency.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "education",
      label: "Education",
      items: [
        {
          organization: "University of Santo Tomas",
          placeholder: "UST",
          logo: "/images/experience/university-of-santo-tomas.svg",
          roles: [
            {
              title: "BS, Information Technology",
              period: "2014 - 2018",
              bullets: [
                "Studied web development, object-oriented programming, software engineering, data structures and algorithms, Cisco, and Agile methodology.",
                "Built the technical foundation that later supported my move into Salesforce development, application design, and automation work.",
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;
