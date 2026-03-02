import React from "react";

function SingleService({ title, icon: Icon }) {
  return (
    <div
      className="bg-white/5 backdrop-blur-xl border border-white/10
                 rounded-3xl p-10 shadow-2xl
                 flex flex-col items-center text-center
                 hover:-translate-y-2
                 hover:border-pink-500/40
                 hover:shadow-pink-500/10
                 transition-all duration-300 group"
    >
      {Icon && (
        <Icon
          className="text-4xl text-pink-400 mb-6
                     group-hover:scale-110
                     group-hover:text-pink-300
                     transition-all duration-300"
        />
      )}

      <h3 className="text-xl font-semibold text-white tracking-wide">
        {title}
      </h3>
    </div>
  );
}

export default SingleService;