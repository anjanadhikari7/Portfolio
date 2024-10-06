import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FaHome />, name: "Home", to: "home" },
  { icon: <FaUser />, name: "About", to: "about" },
  { icon: <FaTools />, name: "Skills", to: "skills" },
  { icon: <FaProjectDiagram />, name: "Projects", to: "projects" },
  { icon: <FaEnvelope />, name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("12vh");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeaderHeight("8vh");
        setScrolling(true);
      } else {
        setHeaderHeight("12vh");
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = (target) => {
    const targetElement = document.getElementById(target);
    if (!targetElement) return;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500; // Duration for the smooth scroll
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Normalize progress (0-1)

      window.scrollTo(0, startPosition + distance * progress); // Calculate scroll position
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="z-50 fixed w-full">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          scrolling
            ? "bg-purple-800 bg-opacity-70 shadow-md" // Semi-transparent dark background when scrolling
            : "bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-70" // Semi-transparent gradient for larger visibility
        }`}
      >
        <div
          className="flex justify-between items-center p-4 mx-auto max-w-[1440px]"
          style={{ height: headerHeight, transition: "height 0.3s ease" }}
        >
          <div className="text-white text-2xl font-bold flex items-center">
            Anjan Adhikari
          </div>

          <div className="hidden md:flex md:justify-between md:space-x-8 text-white">
            {navItems.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  smoothScroll(item.to);
                  setIsOpen(false); // Close menu on click
                }} // Handle scroll on click
                className="group flex items-center cursor-pointer hover:text-yellow-300 transition"
              >
                <span className="flex flex-col items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </span>
            ))}
          </div>

          <div
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger menu icon */}
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen w-full bg-purple-800 bg-opacity-70 text-white flex flex-col items-center space-y-6 py-16"
        >
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                smoothScroll(item.to);
                setIsOpen(false); // Close menu on click
              }} // Handle scroll on click
              className="group flex items-center text-2xl font-semibold cursor-pointer hover:text-yellow-300 transition"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </span>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
