enum SkillPointCategory {
  product = "product",
  network = "network",
  organization = "organization",
  user = "user",
  other = "other",
}

class SkillPoint {
  id: string;
  category: SkillPointCategory;
  defenseOrAttack: number;
  researchOrPractical: number;

  constructor(
    id: string,
    category: SkillPointCategory,
    defenseOrAttack: number,
    researchOrPractical: number
  ) {
    this.id = id;
    this.category = category;
    this.defenseOrAttack = defenseOrAttack;
    this.researchOrPractical = researchOrPractical;
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

export { SkillPointCategory, SkillPoint, Career };
