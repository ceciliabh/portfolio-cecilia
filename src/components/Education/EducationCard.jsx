import React from "react";

function EducationCard({ institution, course, startYear, endYear }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-3xl p-8 shadow-2xl 
                    hover:border-purple-500/40 hover:shadow-purple-500/10 
                    transition-all duration-300">

      <p className="text-purple-400 text-sm mb-2">
        {startYear} - {endYear}
      </p>

      <h3 className="text-xl font-semibold text-white">
        {course}
      </h3>

      <p className="text-gray-400 mt-2">
        {institution}
      </p>
    </div>
  );
}

export default EducationCard;