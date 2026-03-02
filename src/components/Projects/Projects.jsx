import React from "react";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./SingleProject/ProjectCard";

function Projects() {
  return (
    <section id="projects" className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-pink-500">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;