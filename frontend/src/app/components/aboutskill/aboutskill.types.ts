export type SkillName =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "tailwindCSS"
  | "nextjs"
  | "mysql"
  | "node"
  | "c++"
  | "c"
  | "python"
  | "matlab"
  | "verilog"
  | "webpack"
  | "git";

export type SkillDescriptionMap = Record<SkillName, string>;

export type RouteParams = Record<"SkillName", string | undefined>;