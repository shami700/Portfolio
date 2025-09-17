import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-10 py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-[#EAF6F6]"
    >
      <h2 className="text-4xl font-bold mb-12 text-[#A1D6E2]">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl">
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4 bg-gray-800/70 p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800/80 border border-[#A1D6E2]/50 text-[#EAF6F6] focus:outline-none focus:ring-2 focus:ring-[#A1D6E2]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800/80 border border-[#A1D6E2]/50 text-[#EAF6F6] focus:outline-none focus:ring-2 focus:ring-[#A1D6E2]"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-gray-800/80 border border-[#A1D6E2]/50 text-[#EAF6F6] focus:outline-none focus:ring-2 focus:ring-[#A1D6E2]"
          />
          <button className="mt-2 py-3 bg-gradient-to-r from-[#A1D6E2] to-[#7CCED9] text-[#1A3E5D] font-bold rounded-lg hover:scale-105 transition transform">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 justify-center items-start">
          <h3 className="text-2xl font-semibold text-[#A1D6E2]">Get in Touch</h3>
          <p>I'm open to collaborations, internships, or job opportunities.</p>
          <div className="flex flex-col gap-4 text-[#EAF6F6]">
            <div className="flex items-center gap-3 group cursor-pointer">
              <FaEnvelope className="transition transform group-hover:scale-125 group-hover:text-[#7CCED9] group-hover:drop-shadow-[0_0_8px_#7CCED9]" />
              <span>shamiarzoo6@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <FaPhone className="transition transform group-hover:scale-125 group-hover:text-[#7CCED9] group-hover:drop-shadow-[0_0_8px_#7CCED9]" />
              <span>+91-7004403480</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <FaPhone className="transition transform group-hover:scale-125 group-hover:text-[#7CCED9] group-hover:drop-shadow-[0_0_8px_#7CCED9]" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/md-shami-arzoo-4799a6295/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-125 hover:text-[#7CCED9] hover:drop-shadow-[0_0_12px_#7CCED9]"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/shami700"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-125 hover:text-[#7CCED9] hover:drop-shadow-[0_0_12px_#7CCED9]"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
