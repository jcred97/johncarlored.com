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
          organization: "Ascendion",
          placeholder: "AS",
          roles: [
            {
              title: "Salesforce Technical Lead",
              period: "Aug 2026 - Present",
              bullets: [
                "Built scheduled Batch Apex to recheck overdue reassignment eligibility, cancel ineligible requests, and process eligible requests.",
                "Led production releases, reviewed code, and managed component dependencies to support reliable Salesforce deployments.",
                "Designed an integration using External Client App OAuth, Apex REST APIs, and Named Credentials, with data validation and rules for creating, updating, and excluding records.",
                "Implemented asynchronous processing with retries, persistent error logs, and job-status tracking to support integration monitoring and recovery.",
              ],
            },
          ],
        },
        {
          organization: "Kulturra",
          placeholder: "KU",
          logo: "/images/experience/kulturra.png",
          roles: [
            {
              title: "Senior Salesforce Developer",
              period: "Nov 2024 - Jul 2026",
              bullets: [
                "Customized customer payment workflows using Apex, Lightning Web Components, and Salesforce Flow to support client-specific business processes.",
                "Integrated payment processors using Apex and REST APIs to support customer payment workflows.",
                "Led development of an Agentforce managed package for Payment Center, including Apex-backed setup, invoice assistance, reminders, and payment links.",
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
                "Built a power dialer using Lightning Web Components and Apex, with prioritized calling queues, customer context, and follow-up workflows.",
                "Consolidated legacy Process Builder automations into record-triggered Flows to simplify maintenance and troubleshooting.",
                "Reviewed and merged Apex and Lightning Web Components, resolved conflicts, and validated deployments to higher environments.",
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
                "Migrated Visualforce pages and JavaScript buttons to Lightning Web Components and refactored supporting Apex to modernize legacy Salesforce functionality.",
                "Built Lightning Web Components for an Experience Cloud portal, including a self-service case submission form.",
                "Developed reusable, documented Apex methods to support maintainable Salesforce functionality.",
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
                "Built an Einstein Bot and supporting Lightning Web Components to reduce manual inquiry handling and capture leads and conversation history.",
                "Automated submission of sales records for manager approval when defined field criteria were met.",
                "Built a vaccination management application form using Aura Components and Apex to replace Screen Flows.",
                "Mentored three associate developers on Salesforce development practices.",
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
