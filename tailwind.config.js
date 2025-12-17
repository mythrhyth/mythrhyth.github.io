/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        base: "#0f0f0f",
        primary: "#ff3c78ff", 
        secondary: "#fd7171ff", 
        text: "#d1d5db", 
        accent: "#f54b64ff",
      },
    },
  },
  plugins: [],
}
