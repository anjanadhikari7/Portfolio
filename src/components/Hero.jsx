import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-8 w-8 text-yellow-500" />,
  },
  { name: "React", icon: <SiReact className="h-8 w-8 text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-8 w-8 text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-green-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="h-8 w-8 text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="h-8 w-8 text-blue-400" /> },
];

const Hero = () => {
  // Initialize tsParticles
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-purple-600 text-white"
    >
      {/* tsParticles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 2,
              outModes: {
                default: "bounce",
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Content Section */}
      <motion.div
        className="text-center p-6 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Anjan Adhikari</h1>
        <p className="text-xl mb-6">
          A Full-Stack Developer specializing in the MERN stack.
        </p>
        <a
          href="#projects"
          className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center transition-transform transform hover:scale-125"
          >
            {skill.icon}
            <span className="mt-2 text-lg">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
