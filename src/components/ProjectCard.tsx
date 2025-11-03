import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      className="border rounded-lg p-6 shadow hover:shadow-xl transition cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">مشاهده</a>
    </motion.div>
  );
}
