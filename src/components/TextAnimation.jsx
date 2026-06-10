import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1200,
        "MERN Stack Developer",
        1200,
        "Next.js Developer",
        1200,
        "Frontend Engineer",
        1200,
        "Backend Engineer",
        1200,
        "Software Engineer",
        1200,
      ]}
      wrapper="span"
      speed={40}
      className="text-xl md:text-2xl text-cyan-400 font-bold tracking-wide"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
