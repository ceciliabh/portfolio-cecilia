import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
        number: { value: 100 },
        color: { value: "#ff0000" },
        opacity: { value: 1 },
        size: { value: 5 },
        move: { enable: true, speed: 2 },
        }
      }}
      className="absolute inset-0 z-[1]"
    />
  );
}

export default ParticlesBackground;