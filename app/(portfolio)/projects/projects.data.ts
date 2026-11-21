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
    slug: "salesforce-email-composer",
    title: "Salesforce - Multi-Record Email Composer",
    owner: "salesforce-email-composer",
    accent: "crm",
    featured: true,
    description:
      "A configurable Lightning email composer for personalizing, reviewing, attaching files to, and sending emails across multiple recipient-record combinations, with Salesforce Activity logging for Contact and Lead recipients.",
    summary:
      "Salesforce Multi-Record Email Composer is a configurable Lightning workflow for selecting multiple recipients and optional related records, choosing a Salesforce Email Template and customizing its loaded subject and content or writing a message without a template, attaching Salesforce Files, and optionally reviewing every personalized recipient-record combination before sending.",
    overview: {
      intro: [
        "Problem: Creating personalized emails becomes repetitive when users need to contact several people about several related Salesforce records. Each recipient-record combination can produce different merge-field values, making it difficult to verify the final messages, manage attachments, and maintain CRM activity visibility after delivery.",
        "Solution: Built a configurable Lightning email composer that lets users select multiple recipients and optional related records, choose a Salesforce Email Template and customize its loaded subject and content or write a message without a template, attach Salesforce Files, and optionally review every compiled message before sending.",
        "Impact: Consolidated message composition, personalization, attachment selection, preview, delivery, and activity logging into one Lightning workflow. This reduces repetitive copying, helps users catch incorrect merge context before delivery, and preserves sent-email visibility for Contact and Lead recipients.",
      ],
      featureHeading: "Key features",
      features: [
        {
          title: "Multi-record composition",
          description:
            "Selects multiple recipients and optional related Salesforce records using removable record pills.",
        },
        {
          title: "Recipient-record pairing",
          description:
            "Generates one personalized email per recipient, or per recipient-and-related-record combination when related records are selected.",
        },
        {
          title: "Compiled message review",
          description:
            "Displays the resolved subject and body for each combination before anything is sent.",
        },
        {
          title: "Dynamic merge fields",
          description:
            "Resolves Recipient, Sender, Organization, and related-record fields, including supported relationship paths such as account information.",
        },
        {
          title: "Salesforce Email Templates",
          description:
            "Loads active template subject and content into the composer for the current email, or lets users write a message without selecting a template; the saved template is not modified.",
        },
        {
          title: "Rich-text authoring",
          description:
            "Allows users to edit the subject and formatted message whether starting from a Salesforce Email Template or writing without one.",
        },
        {
          title: "Salesforce Files integration",
          description:
            "Supports searching existing files, browsing libraries, uploading new files, and attaching multiple files to the generated emails.",
        },
        {
          title: "Salesforce activity history",
          description:
            "Records emails sent to Contacts and Leads in Salesforce Activity history; Contact activities can also use a supported selected related record as Related To.",
        },
        {
          title: "Configurable Lightning component",
          description:
            "Lets administrators configure recipient objects, related objects, email fields, and HTML or plain-text delivery through Lightning App Builder.",
        },
        {
          title: "Native Salesforce delivery",
          description:
            "Sends messages through Salesforce's standard email services without requiring an external email provider.",
        },
        {
          title: "Security and validation",
          description:
            "Validates merge paths and record access, queries personalization data in user context, and places limits on excessive message combinations.",
        },
      ],
      closing: [
        "I built the Lightning Web Component interface, compiled-review experience, attachment picker, and Apex service layer responsible for template retrieval, secure merge-field resolution, recipient-record combination generation, Salesforce Files handling, send validation, native email delivery, and Contact and Lead activity logging.",
        "Privacy note: The portfolio preview uses recreated Contacts, Opportunities, email templates, addresses, and files. No client records, customer information, or proprietary email content is shown.",
      ],
    },
    galleryImages: [
      {
        title: "Compiled Review",
        src: "/images/projects/salesforce-email-composer/cover.png",
        alt: "Compiled email review showing four personalized recipient and related-record combinations",
      },
      {
        title: "File Attachments",
        src: "/images/projects/salesforce-email-composer/attachmen-picker.png",
        alt: "Salesforce Files picker with search, upload, library navigation, and a selected attachment",
      },
      {
        title: "Activity History",
        src: "/images/projects/salesforce-email-composer/received-email.png",
        alt: "Salesforce Contact Activity timeline showing sent emails associated with related opportunities",
      },
      {
        title: "Email Template",
        src: "/images/projects/salesforce-email-composer/template.png",
        alt: "Salesforce Project Follow-Up email template with subject and merge-field content",
      },
    ],
    status: "Completed",
    tags: [
      "Salesforce",
      "Lightning Web Components",
      "Apex",
      "SOQL",
      "Sales Cloud",
      "Email Templates",
      "Salesforce Files",
      "CRM Workflow",
    ],
    role: "Salesforce Developer",
    links: [],
    image: {
      src: "/images/projects/salesforce-email-composer/compose.png",
      alt: "Salesforce Multi-Record Email Composer with recipients, related records, template, rich-text editor, and attachment action",
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
    slug: "salesforce-budget-expense-manager",
    title: "Budget & Expense Manager for Salesforce",
    owner: "finance-dashboard",
    accent: "app",
    featured: true,
    description:
      "Track spending against monthly budgets, record foreign purchases at their historical exchange rates, and automate recurring expenses in Salesforce Lightning.",
    summary:
      "I built a Salesforce Lightning app that tracks expenses in Philippine pesos (PHP). Its dashboard shows how much each expense group has spent and how much of its monthly budget remains.",
    overview: {
      intro: [
        "An expense list tells me what I bought. When planning the next purchase, I also want to know how much money is left for the month.",
        "For example, a household with a ₱5,000 monthly budget records its first ₱250 grocery purchase under Food. The dashboard then shows ₱4,750 remaining for the household. Opening the expense list and filtering by Food reveals the purchase behind that total.",
      ],
      featureHeading: "How the app works",
      features: [
        {
          title: "Monthly budgets by group",
          description:
            "Set an optional monthly target for each expense group. The dashboard compares spending with the target and breaks down purchases by category and bank.",
        },
        {
          title: "Historical exchange rates",
          description:
            "A foreign purchase keeps its original amount and currency, the rate used, its effective date and source, and the resulting PHP amount. Later rate changes leave earlier reports consistent.",
        },
        {
          title: "Recurring bills across short months",
          description:
            "A monthly bill due on January 31 falls on the last day of February and returns to March 31. Scheduled or manually queued Batch Apex generates due expenses and tracks the next date to process.",
        },
        {
          title: "Payment methods by bank",
          description:
            "Each expense group can choose which payment methods a bank supports. The expense and recurring bill forms show those choices when the bank is selected.",
        },
        {
          title: "Expense review and reporting",
          description:
            "Add, edit, or duplicate a purchase, filter the ledger by group, category, or date, and export the matching rows to CSV or a print-friendly report.",
        },
      ],
      closing: [
        "In October 2026, I packaged the app as a second-generation Salesforce managed beta. Version 0.1.0.1 passed package validation with 97% Apex coverage and installed successfully in a clean scratch org.",
        "The gallery shows an earlier version of the app, then called Spendly, with recreated sample records.",
      ],
    },
    galleryImages: [
      {
        title: "Expenses",
        src: "/images/projects/salesforce-budget-expense-manager/expenses-view.png",
        alt: "Spendly expenses view with filters, summaries, charts, and expense records",
      },
      {
        title: "Add Expense Modal",
        src: "/images/projects/salesforce-budget-expense-manager/add-expense-modal.png",
        alt: "Spendly add expense modal with expense details and categorized entry fields",
      },
      {
        title: "Recurring Expense",
        src: "/images/projects/salesforce-budget-expense-manager/recurring-view.png",
        alt: "Spendly recurring expenses view with template and automation controls",
      },
      {
        title: "Settings",
        src: "/images/projects/salesforce-budget-expense-manager/settings.png",
        alt: "Spendly settings view for recurring automation and app configuration",
      },
      {
        title: "Print Report",
        src: "/images/projects/salesforce-budget-expense-manager/print-or-pdf.png",
        alt: "Spendly print-friendly expense report preview with filtered expense details",
      },
      {
        title: "CSV Export",
        src: "/images/projects/salesforce-budget-expense-manager/csv.png",
        alt: "Spendly CSV export output for filtered expense records",
      },
    ],
    status: "Managed beta",
    timeline: "April 2026 – October 2026 beta",
    tags: [
      "Salesforce",
      "Lightning Web Components",
      "Apex",
      "SOQL",
      "Personal Project",
      "Budgeting",
      "Batch Apex",
      "Managed 2GP",
    ],
    role: "Salesforce Developer",
    links: [],
    image: {
      src: "/images/projects/salesforce-budget-expense-manager/cover.png",
      alt: "Salesforce Spendly expense management app cover",
    },
  },
];

const projectDisplayOrder = new Map([
  ["salesforce-email-composer", 0],
  ["salesforce-power-dialer-workspace", 1],
  ["salesforce-budget-expense-manager", 2],
  ["salesforce-portfolio-website", 3],
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
