import { Career, SkillPoint, SkillPointCategory } from "@/models";

const careers: Career[] = [new Career("cybersecurityResearcher")];

const skillPoints: SkillPoint[] = [
  new SkillPoint("malwareAnalysis", SkillPointCategory.product, -0.8, -0.8),
];

export { careers, skillPoints };
