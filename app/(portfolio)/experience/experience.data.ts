export type ExperienceTabId = "work" | "education";

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: readonly string[];
};

export type ExperienceEntry = {
  organization: string;
  placeholder: string;
  location?: string;
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
              period: "Nov 2024 - Jul 2026",
              bullets: [
                "Implemented and customized a Salesforce managed package across multiple client orgs using Apex, Lightning Web Components, and Flow automations to support client-specific business processes.",
                "Expanded the managed package's feature set through new Lightning Web Components, Apex functionality, REST APIs, and payment workflows with Elavon and NMI integrations.",
                "Led development of Agentforce-powered capabilities for invoice reminders, secure payment links, and contextual in-app guidance, expanding customer self-service and reducing routine support work.",
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
                "Led the migration of legacy Visualforce pages to Lightning Web Components and refactored supporting Apex controllers, improving interface responsiveness and maintainability.",
                "Replaced legacy Process Builder automations with record-triggered Flows, reducing technical debt and aligning automation with current Salesforce platform standards.",
                "Reviewed Apex and Lightning Web Components and supported Salesforce deployments, strengthening code quality and release readiness.",
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
                "Migrated Salesforce Classic and Visualforce functionality to Lightning Experience, improving usability and reducing reliance on legacy components.",
                "Built Lightning Web Components for an Experience Cloud portal, improving interface responsiveness and long-term maintainability.",
                "Developed Apex enhancements, resolved application defects, and supported Salesforce deployments, restoring affected functionality and supporting stable releases.",
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
                "Built an Einstein Bot and supporting Lightning Web Components to automate inquiry handling, lead creation, and conversation tracking, enabling more consistent customer follow-up.",
                "Automated sales workflows using Validation Rules, Approval Processes, Salesforce Flow, Apex, and Triggers, improving data consistency and reducing manual effort.",
                "Built a custom application form using Aura Components and Apex to replace Screen Flows, improving performance and supporting complex user interactions.",
              ],
            },
            {
              title: "Associate Salesforce Developer",
              period: "Feb 2020 - Jun 2021",
              bullets: [
                "Designed and implemented Screen Flows for multiple application forms, enabling administrators to update logic and fields with less developer intervention and reducing maintenance effort.",
                "Built Visualforce pages to generate structured CSV exports, reducing manual Excel entry and streamlining reporting.",
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
          location: "España, Manila",
          logo: "/images/experience/university-of-santo-tomas.svg",
          roles: [
            {
              title: "BS, Information Technology",
              period: "2014 - 2018",
              bullets: [
                "Relevant coursework: Object-Oriented Programming, Data Structures & Algorithms, Software Engineering, Web Development.",
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;
