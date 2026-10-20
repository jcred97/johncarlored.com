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
                "Designed and developed scheduled Batch Apex automation to recheck eligibility for overdue reassignment requests, cancel ineligible requests, and process eligible reassignments, reducing manual review and clearing stale requests from active processing.",
                "Led Salesforce production releases, reviewing code changes and coordinating component dependencies to ensure intended changes were included.",
                "Designed a Salesforce integration using External Client App OAuth authorization, Apex REST APIs, and Named Credentials, validating incoming data and applying creation, update, and exclusion rules to ensure accurate downstream data.",
                "Designed the integration’s asynchronous processing, automatic retries, persistent error logs, and job-status tracking, simplifying failure investigation and reducing reliance on debug logs.",
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
                "Customized customer Salesforce orgs to support workflows built on Kulturra's payment processing managed package using Apex, Lightning Web Components, and Flow, tailoring payment workflows to business needs and eliminating manual steps.",
                "Integrated new payment processors into the managed package using Apex and REST APIs, expanding payment processing options for all customers.",
                "Led design and development of an Agentforce managed package for Payment Center, building Apex-backed actions for setup, invoice assistance, reminders, and payment links, expanding customer self-service and reducing routine support work.",
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
                "Designed an LWC and Apex power dialer workspace that unified prioritized call queues, customer context, and follow-up scheduling, enabling sales representatives to manage outreach from a single interface.",
                "Consolidated multiple Process Builder automations into fewer record-triggered Flows, simplifying maintenance and troubleshooting for administrators and developers.",
                "Reviewed and merged developers’ Apex and Lightning Web Component changes, resolved merge conflicts, and validated deployments to higher environments, ensuring all intended changes were included in each release.",
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
                "Rebuilt legacy Visualforce interfaces and JavaScript button functionality using Lightning Web Components and refactored supporting Apex classes, preserving existing UI behavior while improving page load times and maintainability.",
                "Built Lightning Web Components for an Experience Cloud website, including a self-service case submission form that enabled customers to report issues directly, reducing reliance on phone and email support requests.",
                "Refactored duplicated Apex logic into reusable, documented methods shared across multiple classes and components, reducing code duplication and simplifying maintenance.",
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
                "Built an Einstein Bot and supporting Lightning Web Components to answer common product, delivery, and support-case questions, reducing manual inquiry handling while capturing leads and conversation history.",
                "Automated submission of sales records for manager approval when defined field criteria were met, eliminating the need for sales representatives to manually submit approval requests.",
                "Replaced Screen Flows with a vaccination management form built using Aura Components and Apex to meet expanded requirements and provide a customized interface for nurses.",
                "Mentored three associate developers through code reviews and technical guidance, reinforcing Salesforce best practices and code quality.",
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
