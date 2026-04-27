import ProjectCard from "@/components/projectCard";
import getProjects from "@/lib/getProjects";

export const metadata = {
  title: "My Projects",
  description: "Different projects shared",
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
      <section id="projects" className="max-w-7xl mx-auto py-12 md:py-16">
        {/* HEADING */}
        <h2 className="group flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          {/* Accent line */}
          <span className="w-6 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-10 group-hover:bg-white"></span>

          {/* Text */}
          <span className="transition duration-300 group-hover:text-white">
            Featured Projects
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
