"use client";

import { motion } from "framer-motion";

export default function SkillsGrid({ skillsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skillsData.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="group p-5 md:p-6 rounded-2xl border border-gray-800 
          bg-linear-to-br from-gray-900 to-black 
          hover:border-gray-600 hover:shadow-xl transition"
        >
          {/* TITLE */}
          <h3 className="text-base md:text-lg font-semibold mb-3 group-hover:text-white">
            {group.title}
          </h3>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="text-[10px] sm:text-xs px-2.5 py-1 border border-gray-700 rounded-full text-gray-300 
                group-hover:border-gray-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
