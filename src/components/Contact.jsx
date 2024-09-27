// src/components/Contact.jsx
import React, { useState } from "react";

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
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        {submitted ? (
          <p className="text-xl">
            Thank you for your message! I'll get back to you soon.
          </p>
        ) : (
          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
