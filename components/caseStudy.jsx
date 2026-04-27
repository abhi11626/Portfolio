"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudy({ project }) {
  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-6">
          <span className="px-3 py-1 text-[10px] sm:text-xs tracking-widest uppercase border border-gray-600 rounded-full text-gray-300 bg-black/40 backdrop-blur">
            Case Study
          </span>
        </div>

        {/* BACK */}
        <Link
          href="/projects"
          className="text-xs sm:text-sm text-gray-400 mb-6 inline-block hover:text-white transition"
        >
          ← Back to Projects
        </Link>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-55 sm:h-70 md:h-90 mb-10 md:mb-12 rounded-2xl overflow-hidden border border-gray-800"
        >
          <Image
            src={`/projects/${project.id}.png`}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

          {/* text */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1">
              {project.title}
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-sm">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* IMPACT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 md:mb-12"
        >
          {[
            { label: "Performance", value: "+40% Faster" },
            { label: "Architecture", value: "Scalable UI" },
            { label: "State", value: "Optimized Flow" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 border border-gray-800 rounded-xl bg-gray-900/40"
            >
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </motion.section>

        {/* META */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-12 text-sm border-y border-gray-800 py-5"
        >
          <div>
            <p className="text-white font-medium mb-1">Tech Stack</p>
            <p className="text-gray-400 text-xs sm:text-sm">
              {project.tech.join(", ")}
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Links</p>
            <div className="flex gap-4 text-gray-400 text-xs sm:text-sm">
              <a
                href={project.liveUrl}
                target="_blank"
                className="hover:text-white"
              >
                Live ↗
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </motion.section>

        {/* CONTENT */}
        <section className="space-y-10 md:space-y-12">
          {[
            { title: "Problem", content: project.caseStudy.problem },
            { title: "Solution", content: project.caseStudy.solution },
            { title: "Architecture", content: project.caseStudy.architecture },
            { title: "Impact", content: project.caseStudy.impact },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-5 md:p-6 rounded-xl border border-gray-800 bg-gray-900/30"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                {section.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {section.content}
              </p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
