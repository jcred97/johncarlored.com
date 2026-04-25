import type { Project } from "../../(portfolio)/projects/projects.data";

export const previewStyles = {
  portfolio: {
    frame: "from-red-300/12 via-slate-950 to-red-950/18",
    title: "text-red-300",
    graph: "bg-red-300",
  },
  crm: {
    frame: "from-sky-300/10 via-slate-950 to-red-950/14",
    title: "text-sky-200",
    graph: "bg-sky-200",
  },
  app: {
    frame: "from-emerald-300/10 via-slate-950 to-emerald-950/12",
    title: "text-emerald-200",
    graph: "bg-emerald-200",
  },
} satisfies Record<
  Project["accent"],
  {
    frame: string;
    title: string;
    graph: string;
  }
>;
