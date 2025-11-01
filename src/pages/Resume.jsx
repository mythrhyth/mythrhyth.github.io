import React from "react";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="text-center py-16 bg-[#0f0f0f]">
      <h2 className="text-3xl text-pink-300 mb-6 font-semibold">Resume</h2>
      <p className="text-gray-400 mb-8">
        Download my latest resume and explore my technical journey.
      </p>
      <a
        href="/Rhythm_Bhetwal_Resume.pdf"
        download
        className="bg-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition flex items-center justify-center gap-2 mx-auto w-fit"
      >
        <Download size={18} /> Download Resume
      </a>
    </section>
  );
}
