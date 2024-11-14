import React from "react";
import Pro1 from "../assets/Pro-1.jpg";
import Pro2 from "../assets/Pro-2.jpg";
import Pro3 from "../assets/Pro-3.jpg";
import { motion } from "framer-motion";
import { FiExternalLink, FiCode } from "react-icons/fi"; // Importing external link and code icons

const projectsData = [
  {
    title: "Gadget Galaxy",
    description:
      "Gadget Galaxy is an e-commerce platform for tech gadgets, offering a seamless shopping experience.",
    imageUrl: Pro1,
    demoLink: "http://eocm-fe.s3-website-ap-southeast-2.amazonaws.com/",
    codeLink: "https://github.com/anjanadhikari7/Ecom-Buyer-Client",
  },
  {
    title: "Gadget Galaxy- Admin Portal",
    description:
      "Gadget Galaxy - Admin Portal is a management dashboard for overseeing products, categories, and user information. ",
    imageUrl: Pro2,
    demoLink:
      "https://ecom-seller-client-git-main-anjan-adhikaris-projects.vercel.app/",
    codeLink: "https://github.com/anjanadhikari7/Ecom-Seller-API",
  },
  {
    title: "Portfolio",
    description: "My portfolio website",
    imageUrl: Pro3,
    demoLink: "https://portfolio-anjan-adhikaris-projects.vercel.app/",
    codeLink: "https://github.com/anjanadhikari7/Portfolio",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-transparent py-10 mb-0">
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
                    className="flex items-center text-blue-500 hover:underline"
                    target="_blank"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <FiCode className="mr-1" /> Code
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
