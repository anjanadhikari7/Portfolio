// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa"; // Import new icon
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link for scrolling

const navItems = [
  { icon: <FaHome />, name: "Home", to: "home" },
  { icon: <FaUser />, name: "About", to: "about" },
  { icon: <FaTools />, name: "Skills", to: "skills" }, // New Skills section
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
        setHeaderHeight("10vh");
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="z-50 bg-customdark fixed w-full">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          scrolling
            ? "bg-purple-700 shadow-md"
            : "bg-gradient-to-r from-purple-500 to-pink-500"
        }`}
      >
        <div
          className="flex justify-between items-center p-4 mx-auto max-w-[1440px]"
          style={{ height: headerHeight, transition: "height 0.3s ease" }}
        >
          <div className="text-white text-2xl font-bold flex items-center">
            <img
              src="/logo.png" // Placeholder for your logo
              alt="logo"
              className="w-8 h-8 mr-2"
            />
            MyPortfolio
          </div>

          <div className="hidden md:flex md:justify-between md:space-x-8 text-white">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to} // Use Link from react-scroll
                smooth={true} // Smooth scrolling
                duration={500} // Duration of the scroll
                className="group flex items-center cursor-pointer hover:text-yellow-500 transition"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <span className="flex flex-col items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </div>

          <div
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger menu icon */}
            {isOpen ? (
              <svg /* Close icon */>...</svg>
            ) : (
              <svg /* Open icon */>...</svg>
            )}
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen w-full bg-purple-700 text-white flex flex-col items-center space-y-6 py-16"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to} // Use Link from react-scroll
              smooth={true}
              duration={500}
              className="group flex items-center text-2xl font-semibold cursor-pointer hover:text-yellow-500 transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
