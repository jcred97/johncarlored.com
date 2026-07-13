export type Project = {
  slug: string;
  title: string;
  owner: string;
  accent: "portfolio" | "crm" | "app";
  featured?: boolean;
  description: string;
  summary: string;
  overview?: {
    intro: string[];
    featureHeading?: string;
    features?: {
      title: string;
      description: string;
    }[];
    closing?: string[];
  };
  demoVideos?: {
    title: string;
    embedUrl: string;
  }[];
  galleryImages?: {
    title: string;
    src: string;
    alt: string;
  }[];
  status: string;
  timeline?: string;
  githubUrl?: string;
  tags: string[];
  role: string;
  links: {
    label: string;
    href: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
};

const projectItems: Project[] = [
  {
    slug: "salesforce-portfolio-website",
    title: "Salesforce - Portfolio Website",
    owner: "experience-cloud",
    accent: "portfolio",
    description:
      "A data-driven personal portfolio built on Salesforce Experience Cloud using Lightning Web Components.",
    summary:
      "This portfolio highlights my work as a Salesforce Developer, featuring projects, professional experience, and technical skills built across Experience Cloud, Lightning Web Components, Apex, Flow, and automation. It showcases how I create scalable, user-focused solutions that solve real business problems across different industries.",
    overview: {
      intro: [
        "This repository is a Salesforce DX personal portfolio app built for Experience Cloud using Lightning Web Components, Apex, Flows, Platform Events, and custom metadata.",
        "It is designed as a data-driven portfolio site where profile details, work experience, projects, skills, certifications, featured companies, and theme settings are managed in Salesforce records instead of being hardcoded.",
      ],
      featureHeading: "Key features",
      features: [
        {
          title: "Portfolio website shell",
          description:
            "Section-based navigation for Home, Experience, Projects, and Skills",
        },
        {
          title: "Dynamic home page",
          description:
            "Profile intro, social links, certifications, and featured companies powered by Salesforce-managed data.",
        },
        {
          title: "Work experience timeline",
          description:
            "Nested projects and detailed experience bullets rendered from structured records.",
        },
        {
          title: "Personal projects showcase",
          description:
            "Image galleries, lightbox navigation, and YouTube embeds for project storytelling.",
        },
        {
          title: "Hierarchical skills section",
          description:
            "Recursive LWC rendering for nested skill categories.",
        },
        {
          title: "Theme customization",
          description:
            "Portfolio settings control colors, text styles, borders, shadows, and radius values.",
        },
        {
          title: "Contact form with async lead capture",
          description:
            "Apex plus platform events for guest-safe submissions.",
        },
        {
          title: "Lead automation flow",
          description:
            "Lead creation or update, notifications, follow-up tasks, and email actions.",
        },
        {
          title: "Seed data import flow",
          description:
            "CSV-based import support with repeatable migration and upsert patterns.",
        },
        {
          title: "Permission-set based access model",
          description:
            "Separate access paths for admin users and Experience Cloud guest users.",
        },
      ],
      closing: [
        "From a repo structure standpoint, it includes LWCs for the frontend, Apex controllers and tests for server logic, Flows for automation, custom objects and metadata for content and configuration, and scripts for seed-data import and deployment support.",
      ],
    },
    demoVideos: [
      {
        title: "Portfolio Demo",
        embedUrl: "https://www.youtube.com/embed/wj4wXNmiUbw",
      },
      {
        title: "Form-to-Lead Demo",
        embedUrl: "https://www.youtube.com/embed/STil-gj3jU8",
      },
    ],
    status: "Completed",
    timeline: "March 2, 2026 - April 24, 2026",
    githubUrl: "https://github.com/jcred97/sf-workfolio",
    tags: [
      "Salesforce",
      "Apex",
      "Lightning Web Components",
      "Experience Cloud",
      "Flow",
      "Platform Events",
    ],
    role: "Salesforce Developer",
    links: [
      {
        label: "Go to Website",
        href: "https://johncarlored-dev-ed.develop.my.site.com/",
      },
    ],
    image: {
      src: "/images/projects/salesforce-portfolio-website/cover.png",
      alt: "Salesforce Portfolio Website preview",
    },
  },
  {
    slug: "salesforce-power-dialer-workspace",
    title: "Salesforce - Power Dialer Workspace",
    owner: "salesforce-dialer",
    accent: "crm",
    featured: true,
    description:
      "A custom Salesforce Lightning workspace for managing lead and opportunity follow-ups through prioritized queues, record previews, filters, click-to-dial actions, and integrated sales context.",
    summary:
      "Salesforce Power Dialer Workspace is a confidential client project built to help sales reps work through lead and opportunity follow-ups more efficiently. It brings queue management, owner and priority filtering, selected-record context, guided click-to-dial sessions, notes, task scheduling, integrated customer signals, and sales stage controls into a focused Lightning interface.",
    overview: {
      intro: [
        "Problem: Sales reps had to move between lead and opportunity list views, full Salesforce records, Shopify checkout/order details, marketing engagement history, live chat context, notes, tasks, and phone actions to prepare for follow-up calls.",
        "Solution: Built a custom Lightning Web Components workspace that centralizes lead and opportunity queues, owner and priority filters, selected-record quick views, guided click-to-dial controls, notes, tasks, stage updates, callback handling, and integrated customer context in one Salesforce screen.",
        "Impact: Gave sales reps a single Salesforce workbench for prioritizing open follow-up, calling the current record, reviewing Shopify, Tidio, Klaviyo, and Aircall context, updating notes and stages, scheduling callbacks, and moving through the queue without opening multiple systems or Salesforce record pages.",
      ],
      featureHeading: "Key features",
      features: [
        {
          title: "Lead and opportunity queues",
          description:
            "Displayed open follow-up records with owner, readiness status, stage, source, next task, and activity context.",
        },
        {
          title: "Owner and priority filters",
          description:
            "Helped users narrow the workspace by owner, record type, priority, and queue readiness.",
        },
        {
          title: "Selected-record quick view",
          description:
            "Showed important lead or opportunity details without requiring users to open the full Salesforce record.",
        },
        {
          title: "Integrated customer context",
          description:
            "Surfaced Shopify order and checkout details, Klaviyo engagement signals, Tidio or livechat context, Aircall call summaries, product context, source timing, notes, and readiness gaps beside the call action.",
        },
        {
          title: "Quick call workflow",
          description:
            "Provided click-to-dial actions from the selected record to support faster outbound follow-up.",
        },
        {
          title: "Guided call session",
          description:
            "Supported an active outbound workflow with current-record position, call-current action, skip and next-call controls, stop-dialing state, and live queue progress.",
        },
        {
          title: "Stage and status controls",
          description:
            "Allowed users to update sales progress and readiness state from the workspace.",
        },
        {
          title: "Callback and task handling",
          description:
            "Displayed overdue task details and supported scheduling follow-up callbacks without leaving the dialer.",
        },
        {
          title: "Dialer queue management",
          description:
            "Supported adding and removing records from the active calling workflow.",
        },
        {
          title: "Notes visibility",
          description:
            "Displayed notes and customer context alongside the call action.",
        },
        {
          title: "Callback and reminder handling",
          description:
            "Supported scheduled follow-up tasks, timed callback reminders, and calendar events so reps could return to records at the right time.",
        },
      ],
      closing: [
        "I built the LWC workspace, Apex-backed queue loading, pagination, owner scoping, priority sorting, filtering, selected-record state, guided dialing controls, record actions, callback handling, and stage/status updates that powered the lead and opportunity follow-up flow.",
        "Privacy note: Because the original implementation contains client records, contact details, and business data, the portfolio preview uses recreated sample data while preserving the interface structure and workflow.",
      ],
    },
    status: "Completed",
    galleryImages: [
      {
        title: "Active Dialing",
        src: "/images/projects/salesforce-power-dialer-workspace/active-dialing.png",
        alt: "Active dialing mode in the Salesforce Power Dialer Workspace",
      },
      {
        title: "Record Preview",
        src: "/images/projects/salesforce-power-dialer-workspace/record-preview.png",
        alt: "Selected opportunity preview with contact details, task context, and callback scheduling controls",
      },
      {
        title: "Callback Reminders",
        src: "/images/projects/salesforce-power-dialer-workspace/notification.png",
        alt: "Salesforce callback reminder from the Power Dialer follow-up workflow",
      },
    ],
    tags: [
      "Salesforce",
      "Lightning Web Components",
      "Apex",
      "SOQL",
      "Sales Cloud",
      "CRM Workflow",
      "Integrations",
    ],
    role: "Salesforce Developer",
    links: [],
    image: {
      src: "/images/projects/salesforce-power-dialer-workspace/cover.png",
      alt: "Salesforce Power Dialer Workspace preview",
    },
  },
  {
    slug: "salesforce-spendly",
    title: "Salesforce - Spendly Expense Management App",
    owner: "finance-dashboard",
    accent: "app",
    featured: true,
    description:
      "A personal Salesforce expense workspace with dashboards, recurring automation, filters, charts, exports, and print-friendly reporting.",
    summary:
      "Spendly is a personal Salesforce Lightning app for managing expenses through a structured finance data model, dashboard summaries, reactive filters, chart-driven insights, recurring expense automation, settings controls, modal workflows, and export-friendly reporting.",
    overview: {
      intro: [
        "Problem: Personal expense tracking was scattered across manual records, categories, recurring payments, date filters, summaries, and exports, making it harder to review spending patterns or keep recurring expenses up to date from one Salesforce workspace.",
        "Solution: Built a custom Lightning Web Components expense workspace that centralizes expense groups, categories, filtered expense records, dashboard summaries, charts, recurring expense automation, settings, exports, and print-friendly reporting in one Salesforce app.",
        "Impact: Created a structured personal finance workspace for reviewing spending by group, category, bank, transaction type, and date range, while supporting faster expense entry, editing, duplication, deletion, recurring generation, and reporting without leaving Salesforce.",
      ],
      featureHeading: "Key features",
      features: [
        {
          title: "Expense hierarchy",
          description:
            "Organized spending with Expense Group -> Category -> Expense records.",
        },
        {
          title: "Dashboard summaries",
          description:
            "Displayed total spent, average expense, top category, top bank, recent activity, and filtered insights.",
        },
        {
          title: "Reactive filters",
          description:
            "Helped narrow expenses by expense group, category, date range, and search text.",
        },
        {
          title: "Visual breakdowns",
          description:
            "Showed category, bank, and monthly trend charts for easier spending review.",
        },
        {
          title: "Expense workspace",
          description:
            "Supported add, edit, duplicate, delete, bulk delete, sorting, infinite loading, and column visibility controls.",
        },
        {
          title: "Recurring expenses",
          description:
            "Added recurring template handling with daily scheduled processing and manual run support.",
        },
        {
          title: "Settings controls",
          description:
            "Provided recurring automation settings, last-run status, and enable or disable controls.",
        },
        {
          title: "Export and print reporting",
          description:
            "Generated CSV exports and print or PDF-friendly filtered expense reports.",
        },
        {
          title: "Salesforce permissions",
          description:
            "Included app metadata, custom tabs, flexipages, and permission sets for user and admin access.",
        },
        {
          title: "Accessible modal workflow",
          description:
            "Used a focused add/edit modal with keyboard-friendly close behavior and focus restoration.",
        },
      ],
      closing: [
        "I built the LWC workspace, Apex-backed data loading, scoped filters, dashboard aggregation, chart components, custom expense list, modal workflows, recurring expense services, scheduled and batch processing, settings controls, export, print, and Salesforce metadata that power the Spendly app.",
        "Privacy note: Because the app can contain personal financial records, portfolio screenshots use recreated sample data while preserving the interface structure and workflow.",
      ],
    },
    galleryImages: [
      {
        title: "Expenses",
        src: "/images/projects/salesforce-spendly/expenses-view.png",
        alt: "Spendly expenses view with filters, summaries, charts, and expense records",
      },
      {
        title: "Add Expense Modal",
        src: "/images/projects/salesforce-spendly/add-expense-modal.png",
        alt: "Spendly add expense modal with expense details and categorized entry fields",
      },
      {
        title: "Recurring Expense",
        src: "/images/projects/salesforce-spendly/recurring-view.png",
        alt: "Spendly recurring expenses view with template and automation controls",
      },
      {
        title: "Settings",
        src: "/images/projects/salesforce-spendly/settings.png",
        alt: "Spendly settings view for recurring automation and app configuration",
      },
      {
        title: "Print Report",
        src: "/images/projects/salesforce-spendly/print-or-pdf.png",
        alt: "Spendly print-friendly expense report preview with filtered expense details",
      },
      {
        title: "CSV Export",
        src: "/images/projects/salesforce-spendly/csv.png",
        alt: "Spendly CSV export output for filtered expense records",
      },
    ],
    status: "Completed",
    timeline: "April 2, 2026 - June 15, 2026",
    tags: [
      "Salesforce",
      "Lightning Web Components",
      "Apex",
      "SOQL",
      "Personal Project",
      "Expense Tracking",
      "Automation",
      "Data Visualization",
    ],
    role: "Salesforce Developer",
    links: [],
    image: {
      src: "/images/projects/salesforce-spendly/cover.png",
      alt: "Salesforce Spendly expense management app cover",
    },
  },
];

const projectDisplayOrder = new Map([
  ["salesforce-power-dialer-workspace", 0],
  ["salesforce-spendly", 1],
  ["salesforce-portfolio-website", 2],
]);

export const projects = [...projectItems].sort(
  (firstProject, secondProject) =>
    (projectDisplayOrder.get(firstProject.slug) ?? projectItems.length) -
    (projectDisplayOrder.get(secondProject.slug) ?? projectItems.length),
);

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 2);

// Keep lookups constant-time as the project list grows.
const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

export function getProjectBySlug(slug: string) {
  return projectsBySlug.get(slug);
}
