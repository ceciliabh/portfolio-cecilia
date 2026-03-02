import React from "react";
import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section id="resume" className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-pink-500">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;