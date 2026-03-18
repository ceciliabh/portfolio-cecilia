import React from "react";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";

function Achievement() {
  if (!achievementData.achievements.length) return null;

  return (
    <section id="achievement" className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-pink-500">
          Certificaciones
        </h1>
        <p className="text-gray-400 mb-12">
          {achievementData.bio}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {achievementData.achievements.map((achieve) => (
            <AchievementCard key={achieve.id} {...achieve} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;