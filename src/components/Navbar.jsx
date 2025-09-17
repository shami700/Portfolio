import { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "skills", icon: <FaTools />, label: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && scrollPos >= element.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Sidebar Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-20 
        bg-[#1A3E5D]/60 backdrop-blur-md border-r border-[#A1D6E2]/20 
        flex-col items-center py-8 shadow-xl z-50">
        
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative flex flex-col items-center justify-center mb-8 
              w-12 h-12 rounded-xl transition-all duration-300 
              hover:scale-110 hover:shadow-[0_0_15px_#7CCED9] 
              ${activeSection === section.id ? "shadow-lg" : ""}`}
          >
            {/* Active Gradient Ring */}
            {activeSection === section.id && (
              <span className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#A1D6E2] to-[#7CCED9] opacity-30 animate-pulse -z-10"></span>
            )}

            {/* Icon */}
            <div
              className={`text-lg ${
                activeSection === section.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9]"
                  : "text-[#EAF6F6]"
              }`}
            >
              {section.icon}
            </div>

            {/* Tooltip */}
            <span className="absolute left-14 px-3 py-1 text-sm text-[#EAF6F6] bg-[#1A3E5D]/80 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 shadow-md">
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
        flex justify-around items-center w-[90%] max-w-md 
        bg-[#1A3E5D]/70 backdrop-blur-md rounded-2xl px-4 py-2 
        shadow-[0_0_20px_#7CCED9] z-50">
        
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex flex-col items-center justify-center px-3 py-2 relative transition-all duration-300 hover:scale-110"
          >
            <div
              className={`text-lg ${
                activeSection === section.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9]"
                  : "text-[#EAF6F6]"
              }`}
            >
              {section.icon}
            </div>
            {/* Active Dot */}
            {activeSection === section.id && (
              <span className="absolute -bottom-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9] animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </>
  );
}
