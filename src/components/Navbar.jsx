import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FaHome />, name: "Home", to: "home" },
  { icon: <FaUser />, name: "About", to: "about" },
  { icon: <FaProjectDiagram />, name: "Projects", to: "projects" },
  { icon: <GiGiftOfKnowledge />, name: "Skills", to: "skills" },
  { icon: <FaEnvelope />, name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("10vh");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeaderHeight("6vh");
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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

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
              <div
                key={index}
                className="group flex items-center cursor-pointer hover:text-yellow-500 transition"
                onClick={() => handleScrollTo(item.to)}
              >
                <span className="flex flex-col items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </div>
            ))}
          </div>

          <div
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="w-[2rem] h-[2rem]"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="w-[2rem] h-[2rem]"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                ></path>
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
          className="fixed top-0 right-0 h-screen w-full bg-purple-700 text-white flex flex-col items-center space-y-6 py-16"
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center text-2xl font-semibold cursor-pointer hover:text-yellow-500 transition"
              onClick={() => handleScrollTo(item.to)}
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
