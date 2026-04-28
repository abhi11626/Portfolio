"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Layers, Folder, Mail, Menu, X } from "lucide-react";
import { useMenu } from "@/context/menuContext";
import { useEffect } from "react";

const navItems = [
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Layers },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function NavbarClient() {
  const pathname = usePathname();
  const { open, setOpen } = useMenu();

  // ✅ Scroll lock when menu opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-800 rounded-full"
                  />
                )}

                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative z-10000"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9998"
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-72 bg-black border-l border-gray-800 z-9999 p-6"
            >
              <nav className="flex flex-col mt-16 divide-y divide-gray-800">
                {navItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex items-center gap-3 py-4 text-base tracking-wide font-semibold transition-all
                          ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 hover:text-white"
                          }
                        `}
                      >
                        <Icon size={18} />
                        {item.name}
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
