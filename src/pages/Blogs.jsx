import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const blogs = [
  {
    title: "Understanding Hallucinations in LLMs",
    description:
      "A deep dive into how large language models hallucinate and how we can detect, inject, and mitigate these phenomena.",
    date: "October 2025",
    link: "https://yourbloglink.com/hallucinations",
    tags: ["AI", "Research", "LLMs"],
  },
  {
    title: "Building My First End-to-End Data Pipeline",
    description:
      "How I built a streaming data pipeline using Kafka, Spark, PostgreSQL, and Streamlit — with real-time visualization.",
    date: "September 2025",
    link: "https://yourbloglink.com/data-pipeline",
    tags: ["Data Engineering", "Streaming", "Kafka"],
  },
  {
    title: "Learning Through Kaggle Competitions",
    description:
      "How I used Kaggle competitions to sharpen my problem-solving skills and move from beginner to intermediate ML practitioner.",
    date: "August 2025",
    link: "https://yourbloglink.com/kaggle-journey",
    tags: ["Machine Learning", "Kaggle", "Practice"],
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="w-11/12 max-w-5xl mx-auto py-16">
      <h2 className="text-3xl text-pink-300 mb-8 font-semibold text-center">
        Blogs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#121212] rounded-2xl shadow-lg p-6 hover:shadow-pink-400/30 transition"
          >
            <h3 className="text-xl text-pink-300 font-semibold mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{blog.date}</p>
            <p className="text-gray-300 mb-4">{blog.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition"
            >
              <ExternalLink size={18} /> Read More
            </a>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for Future Community Blogs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16 text-gray-400"
      >
        <p>Stay tuned...</p>
      </motion.div>
    </section>
  );
}
