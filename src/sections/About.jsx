import { useEffect, useState } from "react";

export default function About() {
  const [visibleCards, setVisibleCards] = useState([]);

  const education = [
    {
      school: "ITER, SOA University",
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science & Engineering — CGPA: 6.8",
      location: "Bhubaneswar, Odisha",
    },
    {
      school: "Upgraded +2 High School, Koderma",
      period: "2021 – 2023",
      degree: "Council of Higher Secondary Education — 70%",
      location: "Nawada, Bihar",
    },
    {
      school: "Manas Bharti Edu Comp, Nawada",
      period: "2020 – 2021",
      degree: "Board of Secondary Education — 68%",
      location: "Koderma, Jharkhand",
    },
  ];

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".edu-card").forEach((el, idx) => {
      el.dataset.index = idx;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-10 py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-[#EAF6F6]"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#A1D6E2] animate-pulse">
        About Me
      </h2>

      {/* Description */}
      <div className="max-w-4xl text-center md:text-left space-y-6 mb-12">
        <p className="text-[#EAF6F6]/90 leading-relaxed text-lg">
  I'm <span className="font-semibold text-[#A1D6E2]">Md Shami Arzoo</span>, a Computer Science undergraduate and an aspiring Full-Stack Developer. I specialize in building responsive, scalable, and user-friendly web applications using the MERN stack, SQL, Python, and modern UI frameworks. Passionate about clean code and interactive designs, I strive to create engaging digital experiences.
</p>
                                      
        <p className="text-[#EAF6F6]/90 leading-relaxed text-lg">
          Strong problem-solving abilities, passionate about delivering user-friendly solutions, and constantly
          learning new technologies to improve my craft. I enjoy creating interactive web experiences that are both
          efficient and visually appealing.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl w-full relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#7CCED9]/40 to-[#A1D6E2]/40"></div>

        {education.map((edu, idx) => {
          const isLeft = idx % 2 === 0;
          const isVisible = visibleCards.includes(idx.toString());

          return (
            <div
              key={idx}
              className={`edu-card mb-12 w-full flex justify-${isLeft ? "end" : "start"} relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "-translate-x-20" : "translate-x-20"}`
              }`}
            >
              <div className="w-1/2 px-6">
                <div className="bg-[#1A3E5D]/50 p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                  <h4 className="text-xl font-bold text-[#7CCED9]">{edu.school}</h4>
                  <p className="text-[#EAF6F6]/90">{edu.period} | {edu.degree}</p>
                  <p className="text-[#EAF6F6]/80 italic">{edu.location}</p>
                </div>
              </div>

              {/* Glowing Dot */}
              <div className="absolute top-6 left-1/2 w-4 h-4 bg-[#A1D6E2] rounded-full border-2 border-[#7CCED9] transform -translate-x-1/2 animate-pulse shadow-lg"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
