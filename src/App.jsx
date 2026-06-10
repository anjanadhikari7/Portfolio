// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground"; // Importing the particle background globally
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// src/App.jsx
const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
