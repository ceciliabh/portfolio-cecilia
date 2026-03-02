import React from "react";
import { servicesData } from "../../data/servicesData";
import SingleService from "./SingleService/SingleService";

function Services() {
  if (!servicesData.length) return null;

  return (
    <section id="services" className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-pink-500 mb-6">
          Services
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          These are some of the services I offer. Reach out if I can help you with any!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <SingleService key={service.id} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;