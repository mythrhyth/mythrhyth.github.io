import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import yourphoto from "../assets/myphoto.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-24 relative overflow-hidden"
    >
      <div className="absolute -top-40 w-[700px] h-[700px] bg-pink-400/20 blur-3xl rounded-full"></div>

      <motion.img
        src={yourphoto}
        alt="Rhythm"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full w-40 h-40 border-4 border-pink-300 mb-6 shadow-pink-400/50 shadow-xl object-cover z-10"
      />
      <motion.h1
        className="text-5xl font-bold text-pink-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Rhythm Bhetwal
      </motion.h1>
      <p className="text-gray-400 mt-3 text-lg max-w-md mx-auto z-10">
        AI Engineer • Researcher • Developer <br />
        Building creative and interpretable AI systems.
      </p>

      <div className="flex justify-center gap-6 mt-8 z-10">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
          <Github size={26} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
          <Linkedin size={26} />
        </a>
        <a href="mailto:your@email.com" className="hover:text-pink-400 transition">
          <Mail size={26} />
        </a>
      </div>

      <a
        href="#contact"
        className="mt-10 inline-block bg-pink-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-pink-300 transition shadow-lg z-10"
      >
        Let’s Connect
      </a>
    </section>
  );
}
