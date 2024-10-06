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
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg mb-4 text-white">
            I’m a passionate full-stack developer with expertise in the MERN
            stack. I love crafting dynamic and responsive web applications that
            provide excellent user experiences.
          </p>
          <p className="text-lg text-white">
            Outside of coding, I enjoy engaging in various sports, especially
            football. Whether it's playing a match or watching my favorite
            teams, football has always been a significant part of my life. I
            also love camping and exploring the great outdoors, which allows me
            to unwind and recharge.
          </p>
          <blockquote className="text-sm italic text-white mt-4">
            "Code is like humor. When you have to explain it, it’s bad."
          </blockquote>
        </div>
      </div>
      {/* Optional: Add a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default About;
