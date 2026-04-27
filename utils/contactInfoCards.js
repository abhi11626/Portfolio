"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactInfoCards() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abhig11626@gmail.com",
      href: "mailto:abhig11626@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "abhi11626",
      href: "https://github.com/abhi11626",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/abhi11626",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5 text-green-500" />,
      label: "WhatsApp",
      value: "Quick chat",
      href: "https://wa.me/919672014152?text=Hi%20Abhishek,%20I%20checked%20your%20portfolio%20and%20would%20like%20to%20connect.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
    >
      {contacts.map((item, i) => (
        <a key={i} href={item.href} target="_blank" rel="noreferrer">
          <div className="group flex items-center gap-4 p-5 border border-gray-800 rounded-2xl bg-linear-to-br from-gray-900 to-black hover:border-gray-600 hover:shadow-lg hover:-translate-y-1 transition">
            <div className="p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition">
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-white font-medium truncate">{item.value}</p>
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  );
}
