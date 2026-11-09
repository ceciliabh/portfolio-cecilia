import React from "react";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "./SingleProject/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-semibold md:text-5xl">Proyectos</h2>
      <p className="mt-4 max-w-xl text-muted">Productos en producción y trabajos de investigación donde me tocó diseñar, construir y optimizar.</p>

      <div className="mt-16 space-y-24">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} flip={i % 2 === 1} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
