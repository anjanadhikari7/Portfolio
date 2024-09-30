import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll"; // Import Link from react-scroll
import profilePic from "../assets/profile.png";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  return (
    <div className="h-[100vh] mt-16 sm:mt-0 bg-gradient-to-r from-purple-500 to-blue-600 relative flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug">
            Hey! I'm <span className="text-yellow-400">Anjan Adhikari</span>
          </h1>
          <TextAnimation />
          <p className="text-lg md:text-2xl text-white mt-4">
            Full-Stack Developer crafting seamless digital experiences using the
            MERN stack.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="/assets/anjan-adhikari-resume.pdf"
              download="anjan-adhikari-resume.pdf"
            >
              <button className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow-md hover:bg-yellow-300 flex items-center justify-center">
                Download Resume
                <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
              </button>
            </a>

            {/* Smooth scroll to contact section */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold shadow-md hover:bg-white hover:text-black flex items-center justify-center cursor-pointer"
            >
              Contact Me
              <FaEnvelope className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/anjanadhikari7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="text-3xl hover:text-yellow-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin className="text-3xl hover:text-yellow-500" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden bg-white">
          <motion.img
            src={profilePic}
            alt="Anjan Adhikari"
            className="object-cover w-full h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
