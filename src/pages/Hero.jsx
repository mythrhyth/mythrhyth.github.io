import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import yourphoto from "/public/assets/myphoto.jpg";

export default function Hero() {
  const roles = ["Aspiring AI Engineer", "Research Enthusiast", "Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-40 w-[700px] h-[700px] bg-pink-400/20 blur-3xl rounded-full"
      />

      {/* Profile Image */}
      <motion.img
        src={yourphoto}
        alt="Rhythm"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="rounded-full w-40 h-40 border-4 border-pink-300 mb-6 shadow-pink-400/50 shadow-xl object-cover z-10"
      />

      {/* Name */}
      <motion.h1
        className="text-5xl font-bold text-pink-300 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Rhythm Bhetwal
      </motion.h1>

      {/* Typing animation */}
      <motion.h2
        className="text-lg md:text-xl text-gray-300 mt-3 font-mono h-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>{text}</span>
        <motion.span
          className="border-r-2 border-pink-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className="text-gray-400 mt-2 text-md max-w-md mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        A lone wolf who enjoys Technology.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.2, color: "#f472b6" }}
          href="https://github.com/mythrhyth"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={26} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#f472b6" }}
          href="https://linkedin.com/in/rhythm-bhetwal"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={26} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#f472b6" }}
          href="mailto:rhythmbhetwal77@gmail.com"
        >
          <Mail size={26} />
        </motion.a>
      </motion.div>

      {/* Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px #f472b6",
        }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 inline-block bg-pink-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-pink-300 transition shadow-lg z-10"
      >
        Let’s Connect
      </motion.a>
    </section>
  );
}
