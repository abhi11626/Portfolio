"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <motion.h2
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="w-6 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-10 group-hover:bg-white"></span>
            <span>About Me</span>
          </motion.h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            Frontend Engineer with 5+ years of experience building scalable,
            high-performance web applications using React and Next.js. I focus
            on clean architecture, performance optimization, and delivering
            real-world impact.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 md:mb-12"
        >
          {[
            { label: "Experience", value: "5+ Years" },
            { label: "Performance", value: "Optimized Apps" },
            { label: "Focus", value: "Scalable UI" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 border border-gray-800 rounded-xl bg-gray-900/40 hover:border-gray-600 transition"
            >
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-3 mb-10 md:mb-12"
        >
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I have worked on complex UI systems, improved performance
            significantly, and built reusable component architectures for
            large-scale applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            My approach focuses on writing maintainable code, optimizing
            rendering performance, and designing systems that scale as products
            grow.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Core Skills</h3>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Performance Optimization",
              "State Management",
              "UI Architecture",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs sm:text-sm border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
