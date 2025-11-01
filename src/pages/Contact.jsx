import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-20">
      <h2 className="text-3xl text-pink-300 mb-6 font-semibold">Get in Touch</h2>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full md:w-2/3 p-3 rounded-lg bg-[#121212] border border-pink-300 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full md:w-2/3 p-3 rounded-lg bg-[#121212] border border-pink-300 text-white"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full md:w-2/3 p-3 rounded-lg bg-[#121212] border border-pink-300 text-white"
        />
        <button
          type="submit"
          className="bg-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition flex items-center gap-2"
        >
          <Mail size={18} className="inline-block mr-1" /> Send Message
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="mailto:your@email.com"
          className="text-pink-300 hover:text-pink-400 flex items-center gap-2"
        >
          <Mail size={20} /> Email
        </a>
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noreferrer"
          className="text-pink-300 hover:text-pink-400 flex items-center gap-2"
        >
          <Phone size={20} /> WhatsApp
        </a>
      </div>
    </section>
  );
}
