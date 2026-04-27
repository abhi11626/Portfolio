import skillsData from "@/data/skillsData";

export default async function getSkillsData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(skillsData), 100);
  });
}
