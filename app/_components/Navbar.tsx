"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-6 text-white flex items-center justify-between relative z-50">
      {/* Logo */}
      <h1 className="text-2xl font-[700]">Masoud Jalili</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li className="font-bold text-xl">
          <Link href="/">Home</Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href="/#about">About</Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href="/#project" scroll={true}>
            Project
          </Link>
        </li>
        <li className="font-[300] text-xl">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-[#1a1a1a] shadow-md rounded-lg p-6 flex flex-col gap-4 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-light"
          >
            About
          </Link>
          <Link
            href="/#project"
            onClick={() => setIsOpen(false)}
            className="text-lg font-light"
          >
            Project
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-light"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
