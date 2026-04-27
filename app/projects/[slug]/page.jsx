import { notFound } from "next/navigation";
import getProjects from "@/lib/getProjects";
import CaseStudy from "@/components/caseStudy";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projects = await getProjects();

  const project = projects.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase(),
  );

  return {
    title: project?.title ?? "Not Found",
    description: project?.description ?? "",
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const projects = await getProjects();

  const project = projects.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase(),
  );

  if (!project) return notFound();

  return <CaseStudy project={project} />;
}
