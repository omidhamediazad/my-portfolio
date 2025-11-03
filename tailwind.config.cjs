/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // همه فایل‌های JS/TS/JSX/TSX داخل src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",   // آبی روشن
        secondary: "#facc15", // زرد
        accent: "#6366f1",    // بنفش
        bg: "#f3f4f6",        // خاکستری روشن
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}
