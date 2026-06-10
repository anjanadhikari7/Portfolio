import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#080c14]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-black text-xs">
                A
              </div>
              <span className="text-white font-bold">
                Anjan<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs">
              Full-Stack Developer — Sydney, Australia
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/anjanadhikari7" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <FaLinkedin size={16} />
            </a>
            <a href="mailto:anjanadhikari179@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <FiMail size={16} />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-gray-600 hover:text-cyan-400 text-xs font-medium transition-colors group"
          >
            Back to top
            <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Anjan Adhikari. Designed & built with React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
