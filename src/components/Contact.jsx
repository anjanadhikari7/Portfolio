import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const contactInfo = [
  { icon: <FiPhone />, label: "Phone", value: "0435 662 594", action: () => window.open("tel:0435662594") },
  { icon: <FiMail />, label: "Email", value: "anjanadhikari179@gmail.com", action: () => window.open("mailto:anjanadhikari179@gmail.com") },
  { icon: <FiMapPin />, label: "Location", value: "Sydney, Australia", action: () => window.open("https://www.google.com/maps/place/Sydney,+Australia") },
];

const Contact = () => {
  const [formDetails, setFormDetails] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ message: "", success: false });
  const [buttonText, setButtonText] = useState("Send Message");

  const onFormUpdate = (field, value) => setFormDetails({ ...formDetails, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setButtonText("Send Message");
          setStatus({ message: "Message sent! I will get back to you soon.", success: true });
          setFormDetails({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        },
        () => {
          setButtonText("Send Message");
          setStatus({ message: "Failed to send. Please try again.", success: false });
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full section-divider" />
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let us <span className="text-gradient-cyan">Connect</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I will respond promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <button
                key={i}
                onClick={info.action}
                className="w-full group flex items-center gap-4 card-glass p-4 rounded-xl transition-all hover:scale-[1.02] text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-cyan-400 transition-colors">{info.value}</p>
                </div>
              </button>
            ))}

            <div className="pt-4 border-t border-white/5">
              <p className="text-gray-600 text-xs mb-3">Also find me on</p>
              <div className="flex gap-3">
                <a href="https://github.com/anjanadhikari7" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 card-glass rounded-lg text-gray-400 hover:text-cyan-400 text-sm font-medium transition-all hover:scale-105">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 card-glass rounded-lg text-gray-400 hover:text-cyan-400 text-sm font-medium transition-all hover:scale-105">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3 card-glass rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)} required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition text-sm" />
              <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)} required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition text-sm" />
            </div>
            <input type="email" name="email" value={formDetails.email} placeholder="Email Address"
              onChange={(e) => onFormUpdate("email", e.target.value)} required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition text-sm" />
            <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone (optional)"
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition text-sm" />
            <textarea name="message" rows={5} value={formDetails.message} placeholder="Tell me about your project or opportunity..."
              onChange={(e) => onFormUpdate("message", e.target.value)} required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition text-sm resize-none" />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#080c14] font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
            >
              <FiSend /> {buttonText}
            </motion.button>

            {status.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm font-medium ${status.success ? "text-emerald-400" : "text-red-400"}`}
              >
                {status.message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
