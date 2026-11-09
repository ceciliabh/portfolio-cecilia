import React from "react";
import { aboutData } from "../../data/aboutData";
import { educationData } from "../../data/educationData";
import { contactsData } from "../../data/contactsData";
import cecibh from "./cecibh.png";

function About() {
  const edu = educationData[0];
  const facts = [
    { label: "Ubicación", value: contactsData.address },
    { label: "Formación", value: `${edu.institution}, ${edu.startYear}–${edu.endYear}` },
    { label: "Enfoque", value: "Frontend con React y TypeScript" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-2xl border border-line/20 bg-surface/50">
            <img src={cecibh} alt="Retrato de Cecilia Barranco" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
        </div>

        <div className="md:col-span-8">
          <h2 className="text-4xl font-semibold md:text-5xl">{aboutData.title}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">{aboutData.description1}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{aboutData.description2}</p>

          <dl className="mt-10 divide-y divide-line/15 border-y border-line/15">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
