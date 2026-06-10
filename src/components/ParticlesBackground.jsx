import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ header }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: header ? "transparent" : "#080c14",
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
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.5 },
            },
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ["#22d3ee", "#818cf8", "#6366f1"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 1, minimumValue: 0.1 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#22d3ee",
            opacity: 0.12,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
