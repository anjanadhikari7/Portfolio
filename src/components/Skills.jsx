// src/components/Skills.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiStripe,
  SiFigma,
  SiVisualstudio,
} from "react-icons/si";
import { motion } from "framer-motion";
import { DiJava, DiMysql, DiPython } from "react-icons/di";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-500 w-8 h-8" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500 w-8 h-8" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="text-blue-400 w-8 h-8" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-8 h-8" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400 w-8 h-8" />,
    name: "MongoDB",
  },
  {
    icon: <SiExpress className="text-gray-400 w-8 h-8" />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-8 h-8" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-8 h-8" />,
    name: "Bootstrap",
  },
  {
    icon: <SiRedux className="text-purple-400 w-8 h-8" />,
    name: "Redux",
  },
  {
    icon: <SiStripe className="text-blue-600 w-8 h-8" />,
    name: "Stripe",
  },
  {
    icon: <FaGit className="text-red-500 w-8 h-8" />,
    name: "Git",
  },
  { icon: <FaGithub className="w-8 h-8" />, name: "GitHub" },
  {
    icon: <DiPython className="text-red-400 w-8 h-8" />,
    name: "Python",
  },
  {
    icon: <SiFigma className="text-purple-500 w-8 h-8" />,
    name: "Figma",
  },

  {
    icon: <DiJava className="text-pink-500 w-8 h-8" />,
    name: "Java",
  },
  {
    icon: <DiMysql className="text-red-300 w-8 h-8" />,
    name: "SQL",
  },
  {
    icon: <SiVisualstudio className="text-blue-600 w-8 h-8" />,
    name: "VS Code",
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-5 lg:px-20 py-6 backdrop-blur-sm"
      id="skills"
      style={{ backgroundColor: "#F6F1EB" }}
    >
      <div className="mx-auto max-w-[1440px] flex flex-col overflow-hidden">
        <h2 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-16 tracking-wider font-mono">
          My Skills
        </h2>

        <div className="flex justify-center gap-7 overflow-hidden">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 items-center"
              initial={{ opacity: 0, x: 100 }} // Start off-screen
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              } // Animate into view
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: isVisible ? index * 0.1 : 0,
              }}
              whileHover={{ scale: 1.1, cursor: "pointer" }}
            >
              <div>{skill.icon}</div>
              <span className="text-gray-400 font-semibold text-xs lg:text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
