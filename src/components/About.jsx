import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-transparent" // Use transparent background to blend with particles
    >
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          About Me
        </h2>
        <p className="text-lg mb-4 text-white text-center max-w-2xl">
          I’m a passionate full-stack developer with a strong focus on the MERN
          stack. My journey in tech has equipped me with a comprehensive
          understanding of both front-end and back-end development. I take pride
          in crafting dynamic, responsive web applications that not only meet
          user needs but also offer a seamless experience.
        </p>
        <p className="text-lg mb-4 text-white text-center max-w-2xl">
          Beyond coding, my interests span various sports, particularly
          football. Whether I'm playing on the field or cheering for my favorite
          teams, football has always held a special place in my heart.
          Additionally, I find joy in camping, which allows me to connect with
          nature, unwind, and recharge for the challenges ahead.
        </p>
        <blockquote className="text-sm italic text-white mt-4 max-w-2xl text-center">
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
      </div>
      {/* Optional: Add a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default About;
