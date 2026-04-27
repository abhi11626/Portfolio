import SkillsGrid from "@/components/skillsGrid";
import getSkillsData from "@/lib/getSkillsData";

export const metadata = {
  title: "My Skills",
  description: "Details about my Skills",
};

export default async function SkillsPage() {
  const skills = await getSkillsData();

  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 md:mb-10">
          <h1 className="group flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {/* Accent */}
            <span className="w-6 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-10 group-hover:bg-white"></span>

            <span className="transition duration-300 group-hover:text-white">
              Skills & Expertise
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            I specialize in building scalable frontend systems with strong focus
            on performance, architecture, and developer experience.
          </p>
        </div>

        {/* CORE SKILLS (🔥 important section) */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-lg font-semibold mb-3">Core Focus</h2>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Frontend Architecture",
              "Performance Optimization",
              "Scalable UI Systems",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs sm:text-sm border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* GRID */}
        <SkillsGrid skillsData={skills} />
      </div>
    </main>
  );
}
