import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function host(url) {
  try { return new URL(url).host; } catch { return ""; }
}

function ProjectCard({ projectName, projectDesc, tags = [], code, demo, image, flip }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
      {/* Ventana del navegador con la URL real del proyecto */}
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="overflow-hidden rounded-xl border border-line/20 bg-surface/60 shadow-[0_30px_80px_-30px_rgb(var(--accent)/0.25)]">
          <div className="flex items-center gap-3 border-b border-line/15 px-4 py-2.5">
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-line/25" />
              <i className="h-2.5 w-2.5 rounded-full bg-line/25" />
              <i className="h-2.5 w-2.5 rounded-full bg-line/25" />
            </span>
            <span className="truncate rounded-md bg-bg/60 px-3 py-0.5 font-mono text-xs text-muted">
              {host(demo) || "proyecto académico"}
            </span>
          </div>
          <img src={image} alt={`Captura de ${projectName}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
        </div>
      </div>

      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <h3 className="text-3xl font-semibold leading-tight">{projectName}</h3>
        <p className="mt-4 leading-relaxed text-muted">{projectDesc}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-md border border-line/15 px-2.5 py-1 font-mono text-xs text-signal">{t}</li>
          ))}
        </ul>

        {(demo || code) && (
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-medium text-bg transition-colors hover:bg-accent">
                Ver sitio <FiExternalLink />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line/25 px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">
                <FaGithub /> Código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
