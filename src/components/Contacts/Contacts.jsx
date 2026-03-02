import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";

function Contacts() {
  // 🔥 CAMBIA ESTE NÚMERO POR EL TUYO (formato internacional sin +)
  const phoneNumber = "522223538675";

  const whatsappMessage =
    "Hola Cecilia, vi tu portfolio y me gustaría hablar contigo sobre un proyecto.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contacts"
      className="text-white py-20 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-pink-400">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm open to freelance projects, collaborations, or full-time
            opportunities. If you have an idea or opportunity in mind,
            let's connect.
          </p>

          <a
            href={whatsappURL}
            target="_blank"
            rel="noreferrer"
            className="group bg-[#0f0f0f] border border-green-500/40 text-green-400 
                       hover:bg-green-500 hover:text-black 
                       px-6 py-4 rounded-2xl flex items-center gap-3 
                       transition-all duration-300 shadow-xl 
                       hover:shadow-green-500/30 hover:scale-105 w-fit"
          >
            Message me on WhatsApp
            <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

          <div className="flex items-center gap-4">
            <FiAtSign className="text-2xl text-pink-400" />
            <a
              href={`mailto:${contactsData.email}`}
              className="text-gray-300 hover:text-pink-400 transition"
            >
              {contactsData.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FiPhone className="text-2xl text-pink-400" />
            <a
              href={`tel:${contactsData.phone}`}
              className="text-gray-300 hover:text-pink-400 transition"
            >
              {contactsData.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlineLocationMarker className="text-2xl text-pink-400" />
            <p className="text-gray-300">{contactsData.address}</p>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-8 text-2xl text-gray-400">
            {socialsData.github && (
              <a
                href={socialsData.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition hover:scale-110"
              >
                <FaGithub />
              </a>
            )}
            {socialsData.linkedIn && (
              <a
                href={socialsData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            )}
            {socialsData.twitter && (
              <a
                href={socialsData.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition hover:scale-110"
              >
                <FaTwitter />
              </a>
            )}
            {socialsData.instagram && (
              <a
                href={socialsData.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition hover:scale-110"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacts;