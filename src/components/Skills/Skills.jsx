import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-purple-400 mb-16 text-center">
          Tech Stack
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{
              x: isPaused ? 0 : ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-12"
          >
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10
                           rounded-3xl p-8 min-w-[160px]
                           flex flex-col items-center justify-center
                           shadow-2xl
                           hover:-translate-y-2
                           hover:border-purple-500/40
                           hover:shadow-purple-500/10
                           transition-all duration-300 group"
              >
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  className="w-12 h-12 object-contain mb-5
                             group-hover:scale-110
                             transition-transform duration-300"
                />

                <h3 className="text-gray-400 text-sm font-medium text-center tracking-wide">
                  {skill}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Skills;