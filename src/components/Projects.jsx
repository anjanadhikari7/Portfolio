import React, { useState } from "react";
import Pro1 from "../assets/Pro-1.jpg";
import Pro2 from "../assets/Pro-2.jpg";
import Pro3 from "../assets/Pro-3.jpg";
import PujaSS from "../assets/puja-pravaha-ss.png";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar, FiArrowUpRight } from "react-icons/fi";

const featuredProject = {
  title: "Puja Pravaha",
  url: "pujapravaha.com.au",
  description:
    "A full-featured modern web platform for the Australian Nepali community. Built with Next.js and Supabase for real-time data, authentication, and a scalable backend — delivering a seamless, production-grade experience.",
  demoLink: "https://pujapravaha.com.au",
  tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
  highlights: ["Real-time data", "Auth & roles", "Responsive UI", "Production live"],
};

const otherProjects = [
  {
    title: "Gadget Galaxy",
    description: "Full-stack e-commerce platform with product browsing, cart, Stripe payments, and order management.",
    imageUrl: Pro1,
    demoLink: "http://eocm-fe.s3-website-ap-southeast-2.amazonaws.com/",
    codeLink: "https://github.com/anjanadhikari7/Ecom-Buyer-Client",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "Gadget Galaxy — Admin",
    description: "Seller-side dashboard for managing products, categories, orders, and user accounts with analytics.",
    imageUrl: Pro2,
    demoLink: "https://ecom-seller-client-git-main-anjan-adhikaris-projects.vercel.app/",
    codeLink: "https://github.com/anjanadhikari7/Ecom-Seller-API",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio — built with Vite + React, Framer Motion animations, and Tailwind CSS.",
    imageUrl: Pro3,
    demoLink: "https://portfolio-anjan-adhikaris-projects.vercel.app/",
    codeLink: "https://github.com/anjanadhikari7/Portfolio",
    tags: ["React", "Vite", "Tailwind"],
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
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
            What I have Built
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="text-gradient-cyan">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/50 via-violet-500/30 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          <div className="relative rounded-2xl bg-[#0d1424] border border-cyan-500/20 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500 shadow-xl shadow-black/40">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-gray-500 text-xs font-mono">{featuredProject.url}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  <FiStar className="text-xs" /> Featured
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-gradient-cyan transition-all">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-8">
                  {featuredProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={featuredProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-[#080c14] font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  <FiExternalLink /> Visit pujapravaha.com.au
                </a>
              </div>

              {/* Right — screenshot preview */}
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-md px-3 py-1">
                    <span className="text-xs text-gray-500 font-mono">https://pujapravaha.com.au</span>
                  </div>
                  <FiArrowUpRight className="text-gray-600 text-sm" />
                </div>
                <a href={featuredProject.demoLink} target="_blank" rel="noopener noreferrer" className="group/img block overflow-hidden">
                  <img
                    src={PujaSS}
                    alt="Puja Pravaha website screenshot"
                    className="w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-6">
          Other Work
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group card-glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/50 to-transparent" />
                <div className="absolute bottom-3 left-4 flex gap-1.5">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <FiGithub /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
