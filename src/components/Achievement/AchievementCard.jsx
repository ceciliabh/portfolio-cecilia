import React from "react";
import { AiOutlineFolder } from "react-icons/ai";

function AchievementCard({ title, details, date, field, image }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-3xl p-8 shadow-2xl 
                    hover:border-pink-500/40 hover:shadow-pink-500/10 
                    transition-all duration-300">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-pink-500 mb-3">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          {details}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{date}</span>
        <div className="flex items-center gap-2">
          <AiOutlineFolder />
          <span>{field}</span>
        </div>
      </div>

      {image && (
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="rounded-2xl hover:scale-105 transition duration-500"
          />
        </div>
      )}
    </div>
  );
}

export default AchievementCard;