import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiSupabase, SiRedux, SiStripe, SiFigma } from "react-icons/si";
import { DiPython, DiMysql, DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    name: "Frontend",
    color: "cyan",
    skills: [
      { icon: <FaHtml5 className="text-orange-400" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
      { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    ],
  },
  {
    name: "Backend & DB",
    color: "violet",
    skills: [
      { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
      { icon: <SiSupabase className="text-emerald-400" />, name: "Supabase" },
      { icon: <DiMysql className="text-sky-400" />, name: "MySQL" },
      { icon: <SiStripe className="text-indigo-400" />, name: "Stripe" },
      { icon: <DiPython className="text-yellow-300" />, name: "Python" },
      { icon: <DiJava className="text-red-400" />, name: "Java" },
    ],
  },
  {
    name: "Tools",
    color: "amber",
    skills: [
      { icon: <FaGit className="text-orange-500" />, name: "Git" },
      { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
      { icon: <VscVscode className="text-blue-400" />, name: "VS Code" },
      { icon: <SiFigma className="text-pink-400" />, name: "Figma" },
    ],
  },
];

const colorMap = {
  cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/10", text: "text-cyan-400", dot: "bg-cyan-400" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/10", text: "text-violet-400", dot: "bg-violet-400" },
  amber: { border: "border-amber-500/20", bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 px-4 overflow-hidden">
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
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.15 }}
                className="card-glass rounded-2xl p-6 border transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${c.text}`}>{cat.name}</h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.15 + si * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                      whileHover={{ scale: 1.12, y: -4 }}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${c.border} ${c.bg} hover:border-opacity-60 cursor-default transition-all`}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-400 text-xs font-medium text-center leading-tight">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
