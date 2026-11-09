import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiCopy, FiCheck } from "react-icons/fi";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";

function Contacts() {
  const [copied, setCopied] = useState(false);

  const digits = contactsData.phone.replace(/\D/g, "");
  const message = "Hola Cecilia, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad/proyecto.";
  const whatsappURL = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactsData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactsData.email}`;
    }
  };

  return (
    <section id="contacts" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-line/20 bg-surface/50 p-8 md:p-16">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl">
          Hablemos de tu próximo producto.
        </h2>
        <p className="mt-6 max-w-xl text-muted">
          Disponible para proyectos freelance, colaboraciones o posiciones full-time. Si quieres mejorar un producto digital o iniciar uno desde cero, escríbeme.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${contactsData.email}`} className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90">
            {contactsData.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line/25 px-5 py-3 transition-colors hover:border-accent hover:text-accent"
            aria-live="polite"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Correo copiado" : "Copiar correo"}
          </button>
          <a href={whatsappURL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line/25 px-5 py-3 transition-colors hover:border-accent hover:text-accent">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line/15 pt-8 text-sm text-muted">
          <span>{contactsData.address}</span>
          <a href={socialsData.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink"><FaGithub /> GitHub</a>
          <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
