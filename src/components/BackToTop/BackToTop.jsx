import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 text-purple-500 text-5xl hover:scale-110 transition"
    >
      <IoIosArrowDropupCircle />
    </button>
  );
}

export default BackToTop;