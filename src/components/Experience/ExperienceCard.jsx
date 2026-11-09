import React from "react";
import { durationLabel } from "../../utils/period";

function ExperienceCard({ index, company, jobtitle, startYear, endYear, description, stack = [], highlights = [] }) {
  return (
    <article
      id={`role-${index}`}
      data-role
      data-index={index}
      className="rounded-2xl border border-line/15 bg-surface/50 p-7 transition-colors hover:border-line/30 md:p-9"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div>
          <h3 className="text-2xl font-semibold leading-snug">{jobtitle}</h3>
          <p className="mt-1 text-accent">{company}</p>
        </div>
        <p className="font-mono text-sm text-muted">
          {startYear} – {endYear}
          <span className="ml-3 text-signal">{durationLabel(startYear, endYear)}</span>
        </p>
      </header>

      {highlights.length > 0 && (
        <dl className="mt-7 grid gap-3 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-accent/25 bg-accent/5 px-5 py-4">
              <dt className="font-display text-4xl font-semibold text-accent">{h.value}</dt>
              <dd className="mt-1 text-sm text-muted">{h.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-7 space-y-3 text-[0.95rem] leading-relaxed text-muted">
        {description.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {stack.length > 0 && (
        <ul className="mt-7 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li key={s} className="rounded-md border border-line/15 px-2.5 py-1 font-mono text-xs text-signal">
              {s}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceCard;
