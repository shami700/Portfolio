import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostman, SiNetlify } from "react-icons/si";

export default function Skills() {
  const skillSections = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava size={40} color="#00A4D3" /> },
        { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
        { name: "ReactJS", icon: <FaReact size={40} color="#61DAFB" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", icon: <FaNodeJs size={40} color="#339933" /> },
        { name: "ExpressJS", icon: <SiExpress size={40} color="#ffffff" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
        { name: "SQL", icon: <FaDatabase size={40} color="#F29111" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
        { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
        { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" /> },
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-10 py-20 w-full
                 bg-gradient-to-br from-gray-900 via-gray-950 to-black
                 relative overflow-hidden text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-16 text-cyan-400">Skills</h2>

      {/* Floating dark mode circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute w-40 h-40 bg-cyan-800/20 rounded-full -top-10 -left-10 animate-pulse-slow"></span>
        <span className="absolute w-72 h-72 bg-cyan-700/15 rounded-full -bottom-20 -right-20 animate-pulse-slow"></span>
        <span className="absolute w-56 h-56 bg-cyan-800/10 rounded-full top-1/3 left-1/4 animate-pulse-slow"></span>
      </div>

      <div className="w-full max-w-7xl flex flex-col gap-16 relative z-10">
        {skillSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{section.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {section.skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center p-6 rounded-2xl
                             shadow-[0_8px_15px_rgba(0,0,0,0.3)] transform transition duration-500
                             hover:scale-110 hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] bg-gray-800/60"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Animated radial gradient behind icon */}
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400/40 via-cyan-300/30 to-cyan-400/40 opacity-0 hover:opacity-100 transition duration-500 animate-pulse z-0"></div>
                  <div className="absolute w-28 h-28 rounded-full border-4 border-cyan-400/20 animate-spin-slow z-0"></div>

                  {/* Skill icon */}
                  <div className="mb-2 animate-bounce z-10">{skill.icon}</div>
                  <span className="mt-2 text-cyan-400 font-semibold z-10">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
