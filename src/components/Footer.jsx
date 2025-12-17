import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-500 py-6 text-sm text-center border-t border-pink-300/20">
      © {new Date().getFullYear()} Rhythm Bhetwal 
    </footer>
  );
}
