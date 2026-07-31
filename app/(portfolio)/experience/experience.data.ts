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
              period: "Nov 2024 - Jul 2026",
              bullets: [
                "Implemented and customized a Salesforce managed package across multiple client orgs, developing Lightning Web Components, Apex, and Flow automations to deliver scalable, maintainable solutions tailored to each customer's business requirements.",
                "Developed feature enhancements that improved the scalability and REST API capabilities of the managed package, enabling seamless integrations with payment providers such as Elavon and NMI while streamlining customer onboarding.",
                "Led development of the Salesforce Agentforce managed package, building AI-powered agents for invoice reminders, secure payment links, and in-app user guidance, improving customer self-service and reducing support workload.",
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
                "Led migration of legacy Visualforce pages to Lightning Web Components, refactoring supporting Apex controllers where needed to improve maintainability and UI responsiveness.",
                "Re-architected legacy Process Builder automations into record-triggered Flows, reducing technical debt while improving performance, maintainability, and Salesforce governance compliance.",
                "Performed code reviews for Apex and Lightning Web Components and supported Salesforce deployments, ensuring code quality and reliable application releases.",
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
                "Migrated legacy Salesforce Classic and Visualforce functionality to Lightning Experience, improving maintainability and user experience.",
                "Developed Lightning Web Components for the client's Experience Cloud portal, improving UI responsiveness and long-term maintainability.",
                "Developed Apex solutions, resolved application defects, and supported Salesforce deployments, ensuring reliable application functionality and successful releases.",
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
                "Developed an Einstein Bot with Lightning Web Components to automate customer inquiries, lead creation, and conversation tracking, improving customer engagement and follow-up efficiency.",
                "Automated sales workflows using Validation Rules, Approval Processes, Flows, Apex, and Triggers, improving data consistency and reducing manual effort.",
                "Developed a custom application form using Aura Components and Apex, replacing Screen Flows to improve performance and support complex user interactions.",
              ],
            },
            {
              title: "Associate Salesforce Developer",
              period: "Feb 2020 - Jun 2021",
              bullets: [
                "Designed and implemented Screen Flows for multiple application forms, enabling administrators to modify logic and fields without developer intervention while reducing technical debt and maintenance effort.",
                "Developed Visualforce pages to generate and export structured data to CSV, eliminating manual Excel data entry and improving reporting efficiency.",
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
                "Coursework included web development, object-oriented programming, software engineering, data structures and algorithms, Cisco, and Agile methodology.",
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;
