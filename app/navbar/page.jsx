import NavbarClient from "@/components/navbarClient";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-60 backdrop-blur-md bg-black/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="group text-lg md:text-xl font-semibold tracking-[0.5px] relative inline-block">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Abhishek Gupta
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </Link>

        <NavbarClient />
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
    </header>
  );
}
