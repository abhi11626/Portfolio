"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-5">
          <a
            href="mailto:abhig11626@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/abhi11626"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/abhi11626"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://wa.me/919672014152?text=Hi%20Abhishek"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
