import React from "react";
import { FiExternalLink } from "react-icons/fi";

function AchievementCard({ title, details, date, field, links }) {
  return (
    <article className="grid gap-3 border-b border-line/15 py-7 md:grid-cols-[9rem_1fr_12rem] md:gap-10">
      <p className="font-mono text-sm text-signal">{date}</p>
      <div>
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{details}</p>
        {links && (
          <div className="mt-3 flex flex-col gap-1.5">
            {links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm text-accent hover:underline">
                {l.label} <FiExternalLink />
              </a>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-muted md:text-right">{field}</p>
    </article>
  );
}

export default AchievementCard;
