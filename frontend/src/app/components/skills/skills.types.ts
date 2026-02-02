export type SkillType = "frontend" | "backend" | "tools" | "other";

export interface DisplayIconsProps {
  skillType: SkillType;
  skillIcon: string[];
}

export interface DisplaySkillsProps {
  skillType: SkillType;
  skillIcons: string[];
  className?: string;
}