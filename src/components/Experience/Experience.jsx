import React, { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";
import { parseMonth } from "../../utils/period";

function Experience() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.index))),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    document.querySelectorAll("[data-role]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Suma de meses trabajados por rol (no cuenta los huecos entre empleos)
  const totalMonths = experienceData.reduce(
    (sum, e) => sum + (parseMonth(e.endYear) - parseMonth(e.startYear) + 1),
    0
  );
  const years = Math.floor(totalMonths / 12);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[18rem_1fr] md:gap-16">
        <aside className="md:sticky md:top-28 md:self-start">
          <h2 className="text-4xl font-semibold md:text-5xl">Experiencia</h2>
          <p className="mt-4 text-muted">
            {years}+ años en producto: de formularios de seguros a plataformas cívicas e integraciones B2B con SAP Ariba.
          </p>

          <ol className="mt-10 hidden space-y-1 border-l border-line/15 md:block">
            {experienceData.map((e, i) => (
              <li key={i}>
                <a
                  href={`#role-${i}`}
                  className={`-ml-px block border-l py-1.5 pl-4 text-sm transition-colors ${
                    active === i ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {e.company}
                  <span className="block font-mono text-xs text-muted">{e.startYear}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="space-y-6">
          {experienceData.map((exp, i) => (
            <ExperienceCard key={i} index={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
