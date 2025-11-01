import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#0f0f0f] shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-pink-300">Rhythm Bhetwal</h1>
      <ul className="flex gap-6 text-gray-300">
        <li><a href="#hero" className="hover:text-pink-400">Home</a></li>
        <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
        <li><a href="#resume" className="hover:text-pink-400">Resume</a></li>
        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </nav>
  );
}
