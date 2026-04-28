"use client";

import { useMenu } from "@/context/menuContext";

export default function BlurWrapper({ children }) {
  const { open } = useMenu();

  return (
    <div
      className={`transition-all duration-300 ${
        open ? "blur-sm scale-[0.98] pointer-events-none" : ""
      }`}
    >
      {children}
    </div>
  );
}
