import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { experienceData } from "../../data/experienceData";
import { socialsData } from "../../data/socialsData";
import { parseMonth } from "../../utils/period";

// Pista de carrera profesional: cada rol es una barra posicionada por sus fechas reales.
function CareerTrack() {
  const reduce = useReducedMotion();
  const roles = [...experienceData].reverse();
  const starts = roles.map((r) => parseMonth(r.startYear));
  const ends = roles.map((r) => parseMonth(r.endYear) + 1);
  const firstYear = Math.floor(Math.min(...starts) / 12);
  const min = firstYear * 12;
  const max = Math.max(...ends) + 2;
  const pct = (m) => ((m - min) / (max - min)) * 100;
  const years = [];
  for (let y = firstYear; y * 12 < max; y++) years.push(y);

  return (
    <div className="mt-20 border-t border-line/15 pt-8" role="img" aria-label="Línea de tiempo de mi trayectoria profesional">
      <div className="grid gap-x-6 md:grid-cols-[13rem_1fr]">
        <div className="hidden md:block" />
        <div className="relative mb-3 h-5 font-mono text-xs text-muted">
          {years.map((y) => (
            <span key={y} className="absolute -translate-x-1/2 first:translate-x-0" style={{ left: `${pct(y * 12)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {roles.map((r, i) => (
          <div key={i} className="grid items-center gap-x-6 gap-y-1.5 md:grid-cols-[13rem_1fr]">
            <div className="text-sm">
              <span className="text-ink">{r.company}</span>
              <span className="block text-xs text-muted">{r.jobtitle.split("–")[0].trim()}</span>
            </div>
            <div className="relative h-7">
              {years.map((y) => (
                <span key={y} className="absolute inset-y-0 w-px bg-line/10" style={{ left: `${pct(y * 12)}%` }} />
              ))}
              <motion.span
                className="absolute inset-y-1 origin-left rounded-sm bg-gradient-to-r from-signal to-accent"
                style={{ left: `${pct(starts[i])}%`, width: `${pct(ends[i]) - pct(starts[i])}%` }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Landing() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
      <p className="inline-flex items-center gap-2 rounded-full border border-line/15 px-3 py-1 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
        Disponible para nuevos proyectos
      </p>

      <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02]">
        Construyo interfaces que escalan y llegan a producción.
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Soy <span className="text-ink">Cecilia Barranco</span>, ingeniera Frontend y Fullstack con más de 4 años de
          experiencia en React, TypeScript y .NET Core. Plataformas cívicas, e-commerce e integraciones empresariales B2B.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90">
            Ver proyectos
          </a>
          <a href="#contacts" className="rounded-full border border-line/25 px-6 py-3 transition-colors hover:border-accent hover:text-accent">
            Contáctame
          </a>
          <span className="mx-1 hidden h-6 w-px bg-line/20 sm:block" />
          <a href={socialsData.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line/25 px-4 py-3 text-muted transition-colors hover:border-accent hover:text-ink">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line/25 px-4 py-3 text-muted transition-colors hover:border-accent hover:text-ink">
            <FaLinkedinIn aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <CareerTrack />
    </section>
  );
}

export default Landing;
