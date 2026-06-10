import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiGlobe, FiHeart } from "react-icons/fi";
import profilePic from "../assets/profile.png";

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "3+", label: "Years Experience" },
  { value: "18+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const highlights = [
  { icon: <FiCode />, label: "Clean Code", desc: "Readable, maintainable, tested" },
  { icon: <FiCpu />, label: "Performance", desc: "Fast, optimised, scalable" },
  { icon: <FiGlobe />, label: "Full Stack", desc: "End-to-end development" },
  { icon: <FiHeart />, label: "User First", desc: "UX-driven thinking" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8 inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/40 to-violet-500/40 blur-lg" />
              <img
                src={profilePic}
                alt="Anjan Adhikari"
                className="relative w-64 h-64 object-cover rounded-2xl border border-white/10"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#0d1424] border border-cyan-500/30 rounded-xl p-3 shadow-xl">
                <p className="text-cyan-400 font-black text-xl leading-none">3+</p>
                <p className="text-gray-400 text-xs mt-0.5">Years Exp.</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card-glass rounded-xl p-4 text-center transition-all"
                >
                  <p className="text-2xl font-black text-gradient-cyan mb-0.5">{s.value}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate{" "}
              <span className="text-cyan-400 font-semibold">Full-Stack Developer</span>{" "}
              based in Sydney, Australia, with a deep focus on building products
              that are fast, beautiful, and reliable. My primary stack is the{" "}
              <span className="text-cyan-400 font-semibold">MERN stack</span>,
              and I also build with{" "}
              <span className="text-violet-400 font-semibold">Next.js and Supabase</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I take pride in writing clean, well-structured code and transforming
              complex requirements into elegant, intuitive interfaces. Whether it
              is a high-performance e-commerce platform or a real-time community
              web app, I bring the same level of care and craft to every project.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Outside of code, you will find me on the football field, in the
              mountains camping, or deep-diving into the latest dev trends. I
              believe a well-rounded life makes a better engineer.
            </p>
            <blockquote className="mt-6 pl-4 border-l-2 border-cyan-400/50 text-gray-500 italic text-sm">
              "Code is like humor. When you have to explain it, it is bad."
            </blockquote>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-5 flex flex-col items-center text-center gap-2 transition-all hover:scale-[1.03]"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                {h.icon}
              </div>
              <p className="text-white font-semibold text-sm">{h.label}</p>
              <p className="text-gray-500 text-xs">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
