import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import profilePic from "../assets/profile-image.png";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center cyber-grid-bg overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6"
            >
              <HiOutlineStatusOnline className="text-base animate-pulse" />
              Available for hire
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4"
            >
              Hi, I am{" "}
              <span className="text-gradient-cyan block">
                Anjan Adhikari
              </span>
            </motion.h1>

            {/* Type animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5"
            >
              <TextAnimation />
            </motion.div>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I craft fast, scalable, and beautiful web applications that solve
              real problems. Specialised in the MERN stack, Next.js and modern
              cloud-connected architectures.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-1.5 text-gray-500 text-sm mb-8"
            >
              <FiMapPin className="text-cyan-500" />
              <span>Sydney, Australia</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => smoothScroll("projects")}
                className="group flex items-center gap-2 px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-[#080c14] font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/Resume_Anjan.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/15 hover:border-cyan-400/50 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                <FiDownload className="text-cyan-400" />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 text-sm">Find me on</span>
              <a
                href="https://github.com/anjanadhikari7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right column — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-transparent blur-xl" />
              {/* Ring border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-cyan-400 opacity-60" />
              {/* Image container */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-[#080c14]">
                <motion.img
                  src={profilePic}
                  alt="Anjan Adhikari"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 bg-[#0d1424] border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-cyan-400 shadow-lg"
              >
                &#60;MERN Stack /&#62;
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-[#0d1424] border border-violet-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-violet-400 shadow-lg"
              >
                Next.js + Supabase
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
