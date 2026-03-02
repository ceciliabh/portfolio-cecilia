import React from "react";
import { aboutData } from "../../data/aboutData";
import cecibh from "./cecibh.png";

function About() {
  return (
    <section id="about" className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-pink-500">
            {aboutData.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {aboutData.description1}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            {aboutData.description2}
          </p>
        </div>

        <div className="flex justify-center ">
          <img
            src={cecibh}
            alt="About"
            className="rounded-full w-80 w-60 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default About;