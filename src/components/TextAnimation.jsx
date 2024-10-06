import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Full Stack Developer",
        1000,
        "MERN Stack Developer",
        1000,
        "Frontend Developer",
        1000,
        "Backend developer",
        1000,
        "Software Engineer",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      className="text-xl md:text-3xl text-yellow-500 font-extrabold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
