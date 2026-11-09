import React from "react";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";

function Achievement() {
  if (!achievementData.achievements.length) return null;

  return (
    <section id="achievement" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-semibold md:text-5xl">Certificaciones y publicaciones</h2>
      <p className="mt-4 max-w-xl text-muted">{achievementData.bio}</p>

      <div className="mt-14 border-t border-line/15">
        {achievementData.achievements.map((a) => (
          <AchievementCard key={a.id} {...a} />
        ))}
      </div>
    </section>
  );
}

export default Achievement;
