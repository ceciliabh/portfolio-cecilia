import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contacts" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <a href="#home" className="text-xl font-bold text-pink-500">
          
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-white">
          {open ? (
            <HiX size={28} onClick={() => setOpen(false)} />
          ) : (
            <HiMenu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-pink-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;