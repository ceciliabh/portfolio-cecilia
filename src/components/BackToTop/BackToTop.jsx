import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-line/25 bg-bg/80 text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      <FiArrowUp />
    </button>
  );
}

export default BackToTop;
