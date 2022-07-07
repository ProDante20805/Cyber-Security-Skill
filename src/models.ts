const SKILL_POINT_MAX_LEVEL = 10;

enum SkillPointCategory {
  software = "software",
  hardware = "hardware",
  network = "network",
  organization = "organization",
  user = "user",
  other = "other",
}

class SkillPoint {
  id: string;
  category: SkillPointCategory;
  researchOrPractical: number;
  defenseOrAttack: number;

  constructor(
    id: string,
    category: SkillPointCategory,
    researchOrPractical: number,
    defenseOrAttack: number
  ) {
    this.id = id;
    this.category = category;
    this.researchOrPractical = researchOrPractical;
    this.defenseOrAttack = defenseOrAttack;
  }
}

class Career {
  id: string;
  requirements: object;

  constructor(id: string, requirements: object = {}) {
    this.id = id;
    this.requirements = requirements;
  }
}

export { SKILL_POINT_MAX_LEVEL, SkillPointCategory, SkillPoint, Career };
