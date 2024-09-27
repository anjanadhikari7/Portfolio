// src/components/About.jsx
import React from "react";
import ProfilePic from "../assets/profile.png"; // Ensure you have a profile picture

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm a passionate full-stack developer with expertise in the MERN
            stack. I love creating dynamic and responsive web applications that
            provide excellent user experiences.
          </p>
          <p className="text-lg">
            When I'm not coding, I enjoy hiking, photography, and exploring new
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
