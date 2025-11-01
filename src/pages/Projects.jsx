import React from "react";
import { motion } from "framer-motion";
import { Github, Video } from "lucide-react";

const projects = [
  {
    title: "Hallucination Detection System",
    description:
      "A research-driven project using hallucination injection and reasoning benchmarking to detect reasoning hallucinations in LLMs.",
    image: "https://via.placeholder.com/400x250?text=Hallucination+Project",
    github: "https://github.com/yourusername/hallucination-detection",
    demo: "https://youtu.be/demo-link",
  },
  {
    title: "Stock Price Prediction App",
    description:
      "Predicts real-time stock movements using ML models integrated with a Streamlit dashboard.",
    image: "https://via.placeholder.com/400x250?text=Stock+App",
    github: "https://github.com/yourusername/stock-predictor",
    demo: "https://youtu.be/demo-link",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-11/12 max-w-5xl mx-auto py-16">
      <h2 className="text-3xl text-pink-300 mb-8 font-semibold text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-[#121212] rounded-2xl shadow-lg p-5 hover:shadow-pink-400/30 transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl text-pink-300 font-semibold mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-pink-400"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-pink-400"
              >
                <Video size={18} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
