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
  timeline: string;
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

export const projects: Project[] = [
  {
    slug: "sf-portfolio-website",
    title: "Salesforce Portfolio Website",
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
      src: "/images/projects/sf-workfolio/cover.png",
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
    timeline: "June 1, 2026 - June 26, 2026",
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
    slug: "sf-spendly",
    title: "Spendly",
    owner: "finance-dashboard",
    accent: "app",
    featured: true,
    description:
      "A Salesforce LWC expense tracking app with dashboards, filtering, charts, datatable workflows, and CSV or PDF export support.",
    summary:
      "Spendly is a Salesforce app for tracking personal spending across spendings, categories, and expense records. It combines a dashboard-style Lightning experience with charts, summaries, filters, datatable actions, and export-friendly reporting.",
    overview: {
      intro: [
        "Spendly is a Salesforce Lightning Web Components app for managing personal expenses through a simple data model: Spending__c to Category__c to Expense__c.",
        "The app combines a dashboard-style UI with reactive filters, summary cards, charts, a datatable, and an accessible modal workflow for creating and editing expenses.",
      ],
      featureHeading: "Key features",
      features: [
        {
          title: "Expense management workflow",
          description:
            "Create, edit, duplicate, delete, and bulk delete expenses from a single Lightning app experience.",
        },
        {
          title: "Reactive filtering and search",
          description:
            "Filter by spending, category, and date range while searching across expense name, category, bank, and transaction type.",
        },
        {
          title: "Dashboard summaries",
          description:
            "Surface total spent, average expense, top category, and top bank from the currently filtered dataset.",
        },
        {
          title: "Chart-driven insights",
          description:
            "Visualize category totals, bank breakdowns, and monthly spending trends directly in the app.",
        },
        {
          title: "Datatable usability",
          description:
            "Support sorting, infinite loading, column visibility controls, and row-level actions for faster review workflows.",
        },
        {
          title: "Export and print support",
          description:
            "Generate CSV exports and open a print or PDF-friendly report view from the interface.",
        },
        {
          title: "Accessible modal patterns",
          description:
            "Use focus trapping, Escape-to-close, scroll locking, and focus restoration for cleaner keyboard interaction.",
        },
        {
          title: "Apex-backed data flows",
          description:
            "Load filtered expenses, category options, monthly trend aggregates, and delete actions through a dedicated controller.",
        },
      ],
      closing: [
        "From an implementation standpoint, Spendly includes Apex controller logic, Lightning Web Components for the dashboard and modal flows, custom objects for the finance data model, and deployment support for replacing older TrackSpend metadata with the renamed Spendly app.",
      ],
    },
    demoVideos: [
      {
        title: "Spendly Demo",
        embedUrl: "https://www.youtube.com/embed/SC94P9kjwPM",
      },
    ],
    status: "Completed",
    timeline: "February 14, 2026 - April 8, 2026",
    githubUrl: "https://github.com/jcred97/sf-spendly",
    tags: [
      "Salesforce",
      "Lightning Web Components",
      "Apex",
      "Dashboard",
      "Data Table",
      "Charts",
    ],
    role: "Salesforce Developer",
    links: [],
    image: {
      src: "/images/projects/sf-spendly/cover-v2.png",
      alt: "Spendly expense tracking app preview",
    },
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 2);

// Keep lookups constant-time as the project list grows.
const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

export function getProjectBySlug(slug: string) {
  return projectsBySlug.get(slug);
}
