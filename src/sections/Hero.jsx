import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const [dateTime, setDateTime] = useState(new Date());
  const roles = ["Web Developer ", "MERN Stack Enthusiast ", "Problem Solver "];
  const [currentRole, setCurrentRole] = useState(0);

  // Live date & time
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotate roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  // Generate random stars
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const starArray = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(starArray);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-[#EAF6F6] relative overflow-hidden"
    >
      {/* Curved Top Banner Ribbon */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 
                      px-8 py-3 bg-gradient-to-r from-[#A1D6E2]/70 to-[#7CCED9]/70
                      text-[#1A3E5D] rounded-full scale-x-[1.15] shadow-lg
                      hover:shadow-2xl hover:scale-x-[1.18] transition-all duration-500 z-20 font-semibold tracking-wide">
        Welcome to my Portfolio
      </div>

      {/* Top Decorative Stars */}
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        ></div>
      ))}

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <p className="text-[#7CCED9] font-mono text-sm mb-4">
          {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-[#A1D6E2]">Md Shami Arzoo</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#7CCED9] mb-6 transition-all duration-700">
          {roles[currentRole]}
        </h2>

        <p className="text-[#EAF6F6]/90 max-w-lg mb-6 leading-relaxed">
          Crafting responsive and scalable web applications using the MERN stack, Tailwind CSS, and modern UI frameworks. 
          Passionate about clean code, user-friendly interfaces, and interactive web experiences.
        </p>

        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9] text-[#1A3E5D] font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-[#7CCED9]/40 transition transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-[#A1D6E2] text-[#A1D6E2] font-semibold rounded-lg hover:bg-[#A1D6E2] hover:text-[#1A3E5D] transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-[#A1D6E2]/80 text-[#1A3E5D] font-semibold rounded-lg shadow-lg hover:bg-[#7CCED9] transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex justify-center md:justify-start animate-bounce">
          <FaArrowDown className="text-[#A1D6E2]" size={24} />
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center relative z-10">
        <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full 
                        bg-gradient-to-tr from-[#A1D6E2]/20 via-[#7CCED9]/10 to-[#A1D6E2]/20 
                        blur-2xl animate-spin-slow -z-10"></div>
        <img
          src="/images/shami.jpeg"
          alt="Md Shami Arzoo"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#A1D6E2] shadow-2xl object-top hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
}
