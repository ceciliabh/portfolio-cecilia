import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-purple-400 mb-20 text-center">
          Professional Experience
        </h2>

        <div className="relative space-y-20">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;