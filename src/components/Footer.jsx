// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Make sure react-icons is installed

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Anjan Adhikari. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/anjanadhikari7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your actual LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername" // Replace with your actual Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
