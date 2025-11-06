import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function ProjectCard({ title, description, link }) {
    return (_jsxs(motion.div, { className: "border rounded-lg p-6 shadow hover:shadow-xl transition cursor-pointer", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: title }), _jsx("p", { className: "text-gray-600 mb-4", children: description }), _jsx("a", { href: link, className: "text-blue-500 hover:underline", children: "\u0645\u0634\u0627\u0647\u062F\u0647" })] }));
}
