// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
