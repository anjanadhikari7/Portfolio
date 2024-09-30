import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    success: false,
  });

  const [buttonText, setButtonText] = useState("Send Message");

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

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
        (response) => {
          setButtonText("Send Message");
          setStatus({
            message: "Message sent successfully!",
            success: true,
          });
          setFormDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setButtonText("Send Message");
          setStatus({
            message: "Failed to send message. Please try again.",
            success: false,
          });
        }
      );
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-purple-500 to-indigo-600 text-white"
      id="contact"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="md:w-1/2 space-y-6 text-left p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-md shadow-lg">
                <BsFillTelephoneFill size={24} />
                <span>0435662594</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-md shadow-lg">
                <CgMail size={24} />
                <span>anjanadhikari179@gmail.com</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-md shadow-lg">
                <MdLocationOn size={24} />
                <span>Based in Sydney, Australia</span>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 p-4">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  className="p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="w-full p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                placeholder="Phone"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="w-full p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <textarea
                name="message"
                rows={6}
                value={formDetails.message}
                placeholder="Your Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="w-full p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <motion.button
                type="submit"
                className="w-full py-3 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-400 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText}
              </motion.button>
              {status.message && (
                <motion.div
                  className={`mt-4 text-center ${
                    status.success ? "text-green-500" : "text-red-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status.message}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
