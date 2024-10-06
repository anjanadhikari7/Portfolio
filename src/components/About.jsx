import React from "react";
import ProfilePic from "../assets/profile-image.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-transparent" // Use transparent background to blend with particles
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 p-6">
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>{" "}
          {/* Changed to white for better visibility */}
          <p className="text-lg mb-4 text-white">
            {" "}
            {/* Changed to white for better visibility */}
            I'm a passionate full-stack developer with expertise in the MERN
            stack. I love creating dynamic and responsive web applications that
            provide excellent user experiences.
          </p>
          <p className="text-lg text-white">
            {" "}
            {/* Changed to white for better visibility */}
            When I'm not coding, I enjoy hiking, photography, and exploring new
            technologies.
          </p>
        </div>
      </div>
      {/* Optional: Add a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>{" "}
      {/* Optional: dark overlay for better text contrast */}
    </section>
  );
};

export default About;
