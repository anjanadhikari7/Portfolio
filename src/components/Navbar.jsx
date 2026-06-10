import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const smoothScroll = (target) => {
  const el = document.getElementById(target);
  if (!el) return;
  const pos = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top: pos, behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((i) => document.getElementById(i.to));
      const current = sections.findLast((s) => s && s.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 lg:px-12 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => smoothScroll("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-cyan-500/30">
              A
            </div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              Anjan<span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => { smoothScroll(item.to); setActive(item.to); }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === item.to
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {active === item.to && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Resume_Anjan.pdf"
              download
              className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              Resume
            </a>
            <button
              onClick={() => smoothScroll("contact")}
              className="px-4 py-2 text-sm font-semibold text-[#080c14] bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080c14]/95 backdrop-blur-xl border-b border-cyan-500/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => { smoothScroll(item.to); setIsOpen(false); }}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    active === item.to
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/5">
                <a
                  href="/Resume_Anjan.pdf"
                  download
                  className="flex-1 text-center py-2.5 text-sm font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg"
                >
                  Resume
                </a>
                <button
                  onClick={() => { smoothScroll("contact"); setIsOpen(false); }}
                  className="flex-1 py-2.5 text-sm font-semibold text-[#080c14] bg-cyan-400 rounded-lg"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
