import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-purple-600 text-white"
    >
      <motion.div
        className="text-center p-6"
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
    </section>
  );
};

export default Hero;
