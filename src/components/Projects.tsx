import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "یک پروژه جذاب با React", link: "#" },
  { title: "Project 2", description: "سایت نمونه Portfolio", link: "#" },
  { title: "Project 3", description: "اپلیکیشن با TypeScript و Tailwind", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        پروژه‌ها
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
