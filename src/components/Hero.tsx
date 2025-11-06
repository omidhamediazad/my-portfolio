import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center px-6"
    >
      
      <div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 shadow-lg object-cover"
      />
      </div>


      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to My Portfolio
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
        I build web apps with <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-blue-600">TypeScript</span>, and{" "}
        <span className="font-semibold text-blue-600">Tailwind CSS</span>.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;