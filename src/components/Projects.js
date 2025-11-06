import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const projects = [
    {
        title: "Portfolio Website",
        description: "Personal website built with React, TypeScript, and TailwindCSS.",
        image: "/projects/portfolio.png",
        link: "https://yourportfolio.com",
    },
    {
        title: "E-commerce App",
        description: "Full-stack store using Node.js, Express, and React.",
        image: "/projects/shop.png",
        link: "https://yourecommerce.com",
    },
    {
        title: "Chat App",
        description: "Real-time chat app built with Firebase and React.",
        image: "/projects/chat.png",
        link: "https://yourchatapp.com",
    },
];
const Projects = () => {
    return (_jsx("section", { id: "projects", className: "py-20 bg-gray-100 dark:bg-gray-900", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100", children: "My Projects" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs(motion.div, { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.2 }, children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "text-xl font-semibold text-blue-600 mb-2", children: project.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: project.description }), _jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: "View Project \u2192" })] })] }, index))) })] }) }));
};
export default Projects;
