import type { IconType } from "react-icons";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import {
  SiAtlassian,
  SiBitbucket,
  SiBootstrap,
  SiC,
  SiConfluence,
  SiCplusplus,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import {
  TbApi,
  TbCode,
  TbComponents,
  TbDatabaseSearch,
  TbFileCode,
  TbGitBranch,
  TbHeadset,
  TbInfinity,
  TbLayersIntersect,
  TbMapPinHeart,
  TbRobot,
  TbUsers,
  TbWorld,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const skillsContent = {
  heading: "Skills",
};

type Skill = {
  name: string;
  Icon: IconType;
  accent: string;
};

export const skillGroups: {
  title: string;
  skills: Skill[];
}[] = [
  {
    title: "Salesforce",
    skills: [
      { name: "Apex", Icon: TbCode, accent: "text-cyan-300" },
      {
        name: "Lightning Web Components",
        Icon: TbComponents,
        accent: "text-blue-300",
      },
      { name: "Flow", Icon: TbGitBranch, accent: "text-teal-300" },
      { name: "Agentforce", Icon: TbRobot, accent: "text-violet-300" },
      { name: "SOQL", Icon: TbDatabaseSearch, accent: "text-emerald-300" },
      { name: "Sales Cloud", Icon: TbUsers, accent: "text-sky-300" },
      { name: "Experience Cloud", Icon: TbWorld, accent: "text-sky-300" },
      { name: "Service Cloud", Icon: TbHeadset, accent: "text-cyan-300" },
      {
        name: "Aura Components",
        Icon: TbLayersIntersect,
        accent: "text-indigo-300",
      },
      { name: "Visualforce", Icon: TbFileCode, accent: "text-blue-300" },
      { name: "Copado", Icon: TbInfinity, accent: "text-cyan-300" },
      { name: "Field Service", Icon: TbMapPinHeart, accent: "text-pink-300" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "HTML", Icon: SiHtml5, accent: "text-orange-300" },
      { name: "CSS", Icon: SiCss, accent: "text-blue-300" },
      { name: "JavaScript", Icon: SiJavascript, accent: "text-yellow-300" },
      { name: "TypeScript", Icon: SiTypescript, accent: "text-blue-300" },
      { name: "Bootstrap", Icon: SiBootstrap, accent: "text-violet-300" },
      { name: "React", Icon: SiReact, accent: "text-cyan-300" },
      { name: "Next.js", Icon: SiNextdotjs, accent: "text-zinc-100" },
      { name: "Tailwind", Icon: SiTailwindcss, accent: "text-teal-300" },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, accent: "text-green-300" },
      { name: "Java", Icon: FaJava, accent: "text-orange-300" },
      { name: "PHP", Icon: SiPhp, accent: "text-indigo-300" },
      { name: "C", Icon: SiC, accent: "text-blue-300" },
      { name: "C++", Icon: SiCplusplus, accent: "text-blue-300" },
      { name: "C#", Icon: SiSharp, accent: "text-violet-300" },
      { name: "REST API", Icon: TbApi, accent: "text-indigo-300" },
      { name: "PostgreSQL", Icon: SiPostgresql, accent: "text-sky-300" },
      { name: "MySQL", Icon: SiMysql, accent: "text-blue-300" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", Icon: SiGit, accent: "text-red-300" },
      { name: "GitHub", Icon: SiGithub, accent: "text-zinc-100" },
      { name: "Bitbucket", Icon: SiBitbucket, accent: "text-blue-300" },
      {
        name: "Visual Studio Code",
        Icon: VscVscode,
        accent: "text-blue-300",
      },
      { name: "Postman", Icon: SiPostman, accent: "text-orange-300" },
      {
        name: "Microsoft Office",
        Icon: FaMicrosoft,
        accent: "text-cyan-300",
      },
      { name: "Atlassian", Icon: SiAtlassian, accent: "text-blue-300" },
      { name: "Jira", Icon: SiJira, accent: "text-blue-300" },
      { name: "Confluence", Icon: SiConfluence, accent: "text-sky-300" },
      { name: "Trello", Icon: SiTrello, accent: "text-blue-300" },
    ],
  },
];
