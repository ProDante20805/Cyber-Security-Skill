class Career {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
class SkillPoint {
  name: string;
  category: string;
  description: string;

  constructor(name: string, category: string, description: string) {
    this.name = name;
    this.category = category;
    this.description = description;
  }
}

export { Career, SkillPoint };
