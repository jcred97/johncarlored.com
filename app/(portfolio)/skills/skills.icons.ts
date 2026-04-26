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
  SiMysql,
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

export const skillIcons: Record<SkillIconKey, IconType> = {
  apex: TbCode,
  lightningWebComponents: TbComponents,
  flow: TbGitBranch,
  agentforce: TbRobot,
  soql: TbDatabaseSearch,
  salesCloud: TbUsers,
  experienceCloud: TbWorld,
  serviceCloud: TbHeadset,
  auraComponents: TbLayersIntersect,
  visualforce: TbFileCode,
  copado: TbInfinity,
  fieldService: TbMapPinHeart,
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  bootstrap: SiBootstrap,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  java: FaJava,
  php: SiPhp,
  c: SiC,
  cplusplus: SiCplusplus,
  csharp: SiSharp,
  restApi: TbApi,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  bitbucket: SiBitbucket,
  vscode: VscVscode,
  postman: SiPostman,
  microsoftOffice: FaMicrosoft,
  atlassian: SiAtlassian,
  jira: SiJira,
  confluence: SiConfluence,
  trello: SiTrello,
};
