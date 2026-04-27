import projects from "@/data/projects";

export default async function getProjects() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(projects), 100);
  });
}
