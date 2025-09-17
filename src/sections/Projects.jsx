export default function Projects() {
  const projects = [
    {
      name: "MeduraX",
      description: "Doctor Appointment Booking Website (MERN, TailwindCSS)",
      link: "https://medurax-frontend.onrender.com",
      github: "https://github.com/shami700/MeduraX.git",
    },
    {
      name: "OneCart",
      description:
        "E-commerce Web Application for seamless online shopping experience (MERN, Stripe, TailwindCSS)",
      link: "#", // Live button removed
      github: "https://github.com/shami700/OneCart",
    },
    {
      name: "Portfolio",
      description: "Personal portfolio website built with React and TailwindCSS",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-10 py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-[#EAF6F6]"
    >
      <h2 className="text-4xl font-bold mb-12 text-[#A1D6E2]">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#7CCED955]"
          >
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-[#A1D6E2] mb-2 relative group">
                {project.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9] group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-[#EAF6F6]/90 mb-6">{project.description}</p>

              <div className="flex gap-4 mt-auto">
                {/* Only show Live button if project.link is not '#' */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9] text-[#1A3E5D] font-semibold rounded-lg shadow hover:shadow-lg hover:scale-105 transition"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#A1D6E2] text-[#A1D6E2] font-semibold rounded-lg hover:bg-[#A1D6E2] hover:text-[#1A3E5D] transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
