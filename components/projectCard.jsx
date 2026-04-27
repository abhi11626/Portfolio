"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

export default function ProjectCard({ project, featured }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative h-full p-5 md:p-6 rounded-2xl border border-gray-800 
      bg-linear-to-br from-gray-900 to-black
      hover:border-gray-600 hover:shadow-xl transition flex flex-col justify-between overflow-hidden"
    >
      {/* subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/5 blur-2xl"></div>

      {/* TOP */}
      <div className="relative z-10">
        <h3
          className={`font-semibold mb-2 md:mb-3 leading-snug ${
            featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs px-2.5 py-1 border border-gray-700 rounded-full text-gray-300 
              group-hover:border-gray-500 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 flex items-center mt-6 md:mt-8 text-xs sm:text-sm">
        <Link
          href={`/projects/${project.id}`}
          className="text-blue-400 hover:underline"
        >
          Case Study →
        </Link>

        {/* Icons */}
        <div className="ml-auto flex gap-3 md:gap-4 text-gray-400">
          <a
            href={project.liveUrl}
            target="_blank"
            className="hover:text-white transition"
          >
            <ExternalLink size={16} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            className="hover:text-white transition"
          >
            <Code size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
