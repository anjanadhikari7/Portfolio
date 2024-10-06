import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "/path/to/image1.jpg",
    demoLink: "#", // Replace with actual demo link
    codeLink: "#", // Replace with actual code link
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageUrl: "/path/to/image2.jpg",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    imageUrl: "/path/to/image3.jpg",
    demoLink: "#",
    codeLink: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-transparent py-10">
      {" "}
      {/* Change bg-gray-100 to bg-transparent */}
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-blue-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
