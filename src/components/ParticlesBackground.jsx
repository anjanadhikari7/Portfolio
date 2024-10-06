import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ header }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: header ? "transparent" : "#2b0a45", // Dark purple background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Push particles on click
            },
            onHover: {
              enable: true,
              mode: "attract", // Attract effect on hover
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200, // Distance to trigger attract effect
              duration: 2, // Duration of the attract effect
            },
            push: {
              quantity: 4, // Number of particles to add on click
            },
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: ["circle", "edge"], // Using multiple shapes
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 2, max: 5 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "in",
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.1,
            width: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
