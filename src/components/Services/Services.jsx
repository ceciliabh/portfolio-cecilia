import React from "react";
import { servicesData } from "../../data/servicesData";
import SingleService from "./SingleService/SingleService";

function Services() {
  if (!servicesData.length) return null;

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-4xl font-semibold md:text-5xl">En qué puedo ayudarte</h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {servicesData.map((service) => (
          <SingleService key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
