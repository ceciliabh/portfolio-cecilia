import React from "react";

function ExperienceCard({
  company,
  jobtitle,
  startYear,
  endYear,
  description,
}) {
  return (
    <div className="relative pl-12 group">

      {/* Dot */}
      <div className="absolute left-[6px] top-8 w-4 h-4 rounded-full 
                      bg-pink-500 shadow-lg shadow-pink-500/40
                      group-hover:scale-125 transition-transform duration-300" />

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-3xl p-8 shadow-2xl 
                      hover:border-pink-500/40 
                      hover:shadow-pink-500/10 
                      transition-all duration-300">

        <p className="text-pink-400 text-sm mb-2">
          {startYear} – {endYear}
        </p>

        <h3 className="text-xl font-semibold text-white">
          {jobtitle}
        </h3>

        <p className="text-gray-400 mb-4">
          {company}
        </p>

        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
          {description.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ExperienceCard;