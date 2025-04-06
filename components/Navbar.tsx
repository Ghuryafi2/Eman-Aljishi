"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full p-4 bg-transparent flex justify-between items-center">
      <img
        src="/Group 1993.png"
        className="hidden lg:block h-20 w-20"
        alt="Eman"
      />

      <nav className="hidden md:flex gap-6 text-white items-center">
        <Link href="/about" className="hover:text-cream transition-colors">
          About Me
        </Link>
        <Link href="/albums" className="hover:text-cream transition-colors">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-cream transition-colors">
          Contact Me
        </Link>
      </nav>

      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={32} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center">
          <div className=" w-3/4 max-w-xs p-6 text-white flex flex-col gap-6 rounded-lg shadow-lg">
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/albums"
              className="hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
