import React from "react";
import { skillGroups } from "../../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-semibold md:text-5xl">Stack</h2>
      <p className="mt-4 max-w-xl text-muted">Herramientas con las que he entregado producto, agrupadas por área.</p>

      <dl className="mt-14 border-t border-line/15">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-4 border-b border-line/15 py-7 md:grid-cols-[14rem_1fr] md:gap-12">
            <dt className="font-display text-xl font-medium">{group.title}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-line/15 bg-surface/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-ink">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Skills;
