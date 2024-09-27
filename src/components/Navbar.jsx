import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-20 transition duration-300 ${
        scrolling
          ? "bg-purple-700 shadow-md"
          : "bg-gradient-to-r from-purple-500 to-pink-500"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold flex items-center">
          <img
            src="/logo.png" // Placeholder for your logo
            alt="logo"
            className="w-8 h-8 mr-2"
          />
          MyPortfolio
        </div>

        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => handleScrollTo("home")}
          >
            Home
          </li>
          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => handleScrollTo("about")}
          >
            About
          </li>
          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => handleScrollTo("projects")}
          >
            Projects
          </li>
          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => handleScrollTo("contact")}
          >
            Contact
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-purple-700 text-white">
          <ul className="flex flex-col items-center space-y-6 py-4">
            <li
              className="hover:text-gray-200 transition"
              onClick={() => handleScrollTo("home")}
            >
              Home
            </li>
            <li
              className="hover:text-gray-200 transition"
              onClick={() => handleScrollTo("about")}
            >
              About
            </li>
            <li
              className="hover:text-gray-200 transition"
              onClick={() => handleScrollTo("projects")}
            >
              Projects
            </li>
            <li
              className="hover:text-gray-200 transition"
              onClick={() => handleScrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
