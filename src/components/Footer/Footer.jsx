import React from "react";
import { headerData } from "../../data/headerData";

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-line/15 px-6 py-8 text-sm text-muted">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <p>© {new Date().getFullYear()} {headerData.name}</p>
        <p>Hecho con React, Tailwind y Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
