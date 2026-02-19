import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const techStack = [
  "React",
  "TypeScript",
  ".NET Core",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

function Landing() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  text-white px-6 overflow-hidden"
    >
      <div className="max-w-5xl text-center">

        {/* Emoji */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl uppercase tracking-widest mb-2"
        >
          👩‍💻
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-purple-500 uppercase tracking-widest mb-4"
        >
          Fullstack & Frontend Developer
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-purple-500">Cecilia Barranco</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Computer Science Engineer with 3+ years of experience building scalable
          web applications, REST APIs and secure backend integrations.
          Specialized in React, .NET Core and modern frontend architectures.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            View Projects
          </a>

          <a
            href="#contacts"
            className="border border-purple-600 px-6 py-3 rounded-xl hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* 🔥 Carrusel automático */}
        <div
          className="mt-14 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{
              x: isPaused ? 0 : ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap text-gray-500 text-xl"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={index} className="hover:text-purple-500 transition">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 mt-12 text-2xl text-gray-400"
        >
          <a
            href="https://github.com/TU-USUARIO"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-purple-500 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/cecilia-barranco/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="hover:text-purple-500 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;