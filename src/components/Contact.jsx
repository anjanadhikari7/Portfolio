// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or email)
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-purple-500 to-indigo-600 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        {submitted ? (
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Thank you for your message! I'll get back to you soon.
          </motion.p>
        ) : (
          <form className="max-w-xl mx-auto mt-10" onSubmit={handleSubmit}>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
              />
            </motion.div>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
              />
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
