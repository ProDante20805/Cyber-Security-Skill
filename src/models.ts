enum SkillPointCategory {
  Product = "Product",
  Network = "Network",
  Organization = "Organization",
  User = "User",
  Other = "Other",
}

class SkillPoint {
  name: string;
  category: SkillPointCategory;
  attackOrDefense: number;
  researchOrPractical: number;
  description: string | null;

  constructor(
    name: string,
    category: SkillPointCategory,
    attackOrDefense: number,
    researchOrPractical: number,
    description: string | null = null
  ) {
    this.name = name;
    this.category = category;
    this.attackOrDefense = attackOrDefense;
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
