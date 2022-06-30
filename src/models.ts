enum SkillPointCategory {
  Product = "product",
  Network = "network",
  Organization = "organization",
  User = "user",
  Other = "other",
}

class SkillPoint {
  name: string;
  category: SkillPointCategory;
  defenseOrAttack: number;
  researchOrPractical: number;
  description: string | null;

  constructor(
    name: string,
    category: SkillPointCategory,
    defenseOrAttack: number,
    researchOrPractical: number,
    description: string | null = null
  ) {
    this.name = name;
    this.category = category;
    this.defenseOrAttack = defenseOrAttack;
    this.researchOrPractical = researchOrPractical;
    this.description = description;
  }
}

class Career {
  name: string;
  requirements: object;
  description: string | null;

  constructor(
    name: string,
    requirements: object = {},
    description: string | null = null
  ) {
    this.name = name;
    this.requirements = requirements;
    this.description = description;
  }
}

export { SkillPointCategory, SkillPoint, Career };
