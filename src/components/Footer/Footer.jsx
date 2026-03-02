import React from "react";
import { headerData } from "../../data/headerData";

function Footer() {
  const currentYear = new Date().getFullYear();

  const shortName =
    headerData.name.length > 12
      ? headerData.name.split(" ")[0]
      : headerData.name;

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        {/* Left */}
        <p>
          © {currentYear} {shortName}. All rights reserved.
        </p>

        {/* Right */}
        <p className="flex items-center gap-2">
          Made with
          <span className="text-pink-500 text-base">❤</span>
          by {shortName}
        </p>

      </div>
    </footer>
  );
}

export default Footer;