import { Career, SkillPoint, SkillPointCategory } from "@/models";

const careers: Career[] = [
  new Career("cybersecurityResearcher"),
  new Career("cybersecurityAuditor"),
  new Career("chiefCybersecurityOfficer"),
];

const skillPoints: SkillPoint[] = [
  // Quadrant 1
  new SkillPoint("stressTesting", SkillPointCategory.network, 2, 1),
  new SkillPoint("phishing", SkillPointCategory.user, 3, 2),
  new SkillPoint("vulnerabilityScanning", SkillPointCategory.software, 4, 4),
  new SkillPoint("digitalForensics", SkillPointCategory.organization, 8, 9),
  new SkillPoint("redTeam", SkillPointCategory.organization, 10, 10),

  // Quadrant 2
  new SkillPoint("vulnerabilityResearch", SkillPointCategory.software, -8, 8),
  new SkillPoint("penetrationTesting", SkillPointCategory.software, -7, 7),

  // Quadrant 3
  new SkillPoint("benchmarkAuditing", SkillPointCategory.organization, -1, -6),
  new SkillPoint("malwareAnalysis", SkillPointCategory.software, -6, -7),
  new SkillPoint(
    "benchmarkFormulating",
    SkillPointCategory.organization,
    -10,
    -10
  ),

  // Quadrant 4
  new SkillPoint("dataBackup", SkillPointCategory.software, 4, -2),
  new SkillPoint("assetManagement", SkillPointCategory.organization, 8, -3),
  new SkillPoint("networkTrafficAnalysis", SkillPointCategory.network, -6, -5),
  new SkillPoint("sourceCodeAnalysis", SkillPointCategory.software, 3, -4),
  new SkillPoint("incidentResponse", SkillPointCategory.organization, 9, -7),
  new SkillPoint(
    "cybersecurityArchitecturePlanning",
    SkillPointCategory.organization,
    9,
    -9
  ),
];

export { careers, skillPoints };
