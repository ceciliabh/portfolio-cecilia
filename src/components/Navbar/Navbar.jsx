import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Sobre mí", id: "about" },
  { name: "Experiencia", id: "experience" },
  { name: "Proyectos", id: "projects" },
  { name: "Skills", id: "skills" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = [...links.map((l) => l.id), "contacts"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition-colors ${active === id ? "text-ink" : "text-muted hover:text-ink"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          cecilia<span className="text-accent">.</span>dev
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
              {l.name}
            </a>
          ))}
          <a
            href="#contacts"
            className="rounded-full border border-accent/50 px-4 py-1.5 text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Contacto
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t border-line/10 bg-bg px-6 py-6 md:hidden">
          {[...links, { name: "Contacto", id: "contacts" }].map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="text-lg text-muted hover:text-ink">
              {l.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
