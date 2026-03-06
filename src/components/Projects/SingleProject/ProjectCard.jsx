import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ projectName, projectDesc, code, demo, image }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-3xl p-8 shadow-2xl 
                    flex flex-col justify-between
                    hover:-translate-y-2 hover:border-pink-500/40 
                    hover:shadow-pink-500/10 
                    transition-all duration-300">

      <div>
        <img 
          src={image} 
          alt={projectName}
          className="w-full h-48 object-cover rounded-xl mb-6"
        />
        <h3 className="text-xl font-semibold text-white mb-4">
          {projectName}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {projectDesc}
        </p>
      </div>

      <div className="flex gap-6 mt-8 text-lg text-gray-400">
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition hover:scale-110"
          >
            <FaGithub />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition hover:scale-110"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;