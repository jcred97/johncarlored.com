export const skillsContent = {
  heading: "Skills",
};

export type SkillIconKey =
  | "apex"
  | "lightningWebComponents"
  | "flow"
  | "agentforce"
  | "soql"
  | "salesCloud"
  | "experienceCloud"
  | "serviceCloud"
  | "auraComponents"
  | "visualforce"
  | "copado"
  | "fieldService"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "bootstrap"
  | "react"
  | "nextjs"
  | "tailwind"
  | "nodejs"
  | "java"
  | "php"
  | "c"
  | "cplusplus"
  | "csharp"
  | "restApi"
  | "postgresql"
  | "mysql"
  | "git"
  | "github"
  | "bitbucket"
  | "vscode"
  | "postman"
  | "microsoftOffice"
  | "atlassian"
  | "jira"
  | "confluence"
  | "trello";

export type Skill = {
  name: string;
  iconKey: SkillIconKey;
  accent: string;
};

export const skillGroups: {
  title: string;
  skills: Skill[];
}[] = [
  {
    title: "Salesforce",
    skills: [
      { name: "Apex", iconKey: "apex", accent: "text-cyan-300" },
      {
        name: "Lightning Web Components",
        iconKey: "lightningWebComponents",
        accent: "text-blue-300",
      },
      { name: "Flow", iconKey: "flow", accent: "text-teal-300" },
      { name: "Agentforce", iconKey: "agentforce", accent: "text-violet-300" },
      { name: "SOQL", iconKey: "soql", accent: "text-emerald-300" },
      { name: "Sales Cloud", iconKey: "salesCloud", accent: "text-sky-300" },
      { name: "Experience Cloud", iconKey: "experienceCloud", accent: "text-sky-300" },
      { name: "Service Cloud", iconKey: "serviceCloud", accent: "text-cyan-300" },
      {
        name: "Aura Components",
        iconKey: "auraComponents",
        accent: "text-indigo-300",
      },
      { name: "Visualforce", iconKey: "visualforce", accent: "text-blue-300" },
      { name: "Copado", iconKey: "copado", accent: "text-cyan-300" },
      { name: "Field Service", iconKey: "fieldService", accent: "text-pink-300" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "HTML", iconKey: "html", accent: "text-orange-300" },
      { name: "CSS", iconKey: "css", accent: "text-blue-300" },
      { name: "JavaScript", iconKey: "javascript", accent: "text-yellow-300" },
      { name: "TypeScript", iconKey: "typescript", accent: "text-blue-300" },
      { name: "Bootstrap", iconKey: "bootstrap", accent: "text-violet-300" },
      { name: "React", iconKey: "react", accent: "text-cyan-300" },
      { name: "Next.js", iconKey: "nextjs", accent: "text-zinc-100" },
      { name: "Tailwind", iconKey: "tailwind", accent: "text-teal-300" },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Node.js", iconKey: "nodejs", accent: "text-green-300" },
      { name: "Java", iconKey: "java", accent: "text-orange-300" },
      { name: "PHP", iconKey: "php", accent: "text-indigo-300" },
      { name: "C", iconKey: "c", accent: "text-blue-300" },
      { name: "C++", iconKey: "cplusplus", accent: "text-blue-300" },
      { name: "C#", iconKey: "csharp", accent: "text-violet-300" },
      { name: "REST API", iconKey: "restApi", accent: "text-indigo-300" },
      { name: "PostgreSQL", iconKey: "postgresql", accent: "text-sky-300" },
      { name: "MySQL", iconKey: "mysql", accent: "text-blue-300" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", iconKey: "git", accent: "text-red-300" },
      { name: "GitHub", iconKey: "github", accent: "text-zinc-100" },
      { name: "Bitbucket", iconKey: "bitbucket", accent: "text-blue-300" },
      {
        name: "Visual Studio Code",
        iconKey: "vscode",
        accent: "text-blue-300",
      },
      { name: "Postman", iconKey: "postman", accent: "text-orange-300" },
      {
        name: "Microsoft Office",
        iconKey: "microsoftOffice",
        accent: "text-cyan-300",
      },
      { name: "Atlassian", iconKey: "atlassian", accent: "text-blue-300" },
      { name: "Jira", iconKey: "jira", accent: "text-blue-300" },
      { name: "Confluence", iconKey: "confluence", accent: "text-sky-300" },
      { name: "Trello", iconKey: "trello", accent: "text-blue-300" },
    ],
  },
];
