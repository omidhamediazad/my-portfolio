import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        سلام، من <span className="text-yellow-300">[نام شما]</span> هستم
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        توسعه‌دهنده Frontend با React و TypeScript
      </motion.p>

      <motion.a
        href="#projects"
        className="px-6 py-3 bg-yellow-300 text-gray-900 rounded-xl hover:bg-yellow-400 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        دیدن پروژه‌ها
      </motion.a>
    </section>
  );
}
