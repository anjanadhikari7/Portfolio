// src/App.jsx
import React from "react";
import { Element } from "react-scroll"; // Import Element for scrolling
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home" className="pt-16">
        {" "}
        {/* Add padding here */}
        <Hero />
      </Element>
      <Element name="skills" className="pt-16">
        {" "}
        {/* Add padding here */}
        <Skills />
      </Element>
      <Element name="about" className="pt-16">
        {" "}
        {/* Add padding here */}
        <About />
      </Element>
      <Element name="projects" className="pt-16">
        {" "}
        {/* Add padding here */}
        <Projects />
      </Element>
      <Element name="contact" className="pt-16">
        {" "}
        {/* Add padding here */}
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
