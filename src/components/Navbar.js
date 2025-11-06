import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Navbar = () => {
    return (_jsx("nav", { className: "bg-white shadow-md fixed w-full z-10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-blue-600", children: "MyPortfolio" }), _jsxs("ul", { className: "hidden md:flex space-x-6 text-gray-700 font-medium", children: [_jsx("li", { children: _jsx("a", { href: "#hero", className: "hover:text-blue-600 transition", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#projects", className: "hover:text-blue-600 transition", children: "Projects" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", className: "hover:text-blue-600 transition", children: "Contact" }) })] })] }) }));
};
export default Navbar;
