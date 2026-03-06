import React from "react";
import placeholder from "../../../assets/png/placeholder.png";

function SingleBlog({ title, description, date, image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition shadow-lg"
    >
      <div className="">
        <img
          src={image || placeholder}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-pink-500 mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </a>
  );
}

export default SingleBlog;