"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useMenu } from "@/context/menuContext";
export default function Hero() {
  const { open } = useMenu();

  return (
    <section className="relative z-0 transition-all duration-300 flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 gap-8 md:gap-12">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-xl"
      >
        {/* Badge */}
        <div className="mb-4">
          <span className="px-4 py-2 text-xs sm:text-sm border border-gray-700 rounded-full text-gray-300 bg-gray-900/50 backdrop-blur">
            Frontend Engineer • 5+ Years
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          I build scalable <br />
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            frontend applications
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Specialized in React, Next.js, and performance-driven architecture.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
          <Link
            href="/projects"
            className="w-full sm:w-auto text-center px-5 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 border border-gray-700 rounded-full hover:bg-gray-900 hover:scale-105 transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 shrink-0"
      >
        {/* OUTER GRADIENT RING */}
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 via-cyan-400 to-purple-500 blur-md opacity-60 animate-pulse"></div>

        {/* INNER SOFT GLOW */}
        <div className="absolute inset-2 rounded-full bg-black/40 backdrop-blur-md"></div>

        {/* IMAGE WRAPPER */}
        <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
          <Image
            src="/abhishek.jpg"
            alt="Abhishek Gupta"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>

        {/* HIGHLIGHT REFLECTION */}
        <div className="absolute top-6 left-8 w-10 h-10 bg-white/20 blur-xl rounded-full"></div>
      </motion.div>
    </section>
  );
}
