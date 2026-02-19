import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ name, description, github, demo }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-3xl p-8 shadow-2xl 
                    flex flex-col justify-between
                    hover:-translate-y-2 hover:border-purple-500/40 
                    hover:shadow-purple-500/10 
                    transition-all duration-300">

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          {name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex gap-6 mt-8 text-lg text-gray-400">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition hover:scale-110"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;