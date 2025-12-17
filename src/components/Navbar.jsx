import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-pink-400"
          whileHover={{ scale: 1.05 }}
        >
          Rhythm<span className="text-white">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ color: "#f472b6" }}
              className="hover:text-pink-400 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-pink-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-gray-200 flex flex-col items-center space-y-6 py-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ color: "#f472b6", scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-lg"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
