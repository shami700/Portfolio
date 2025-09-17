import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-black text-[#EAF6F6]">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-1 ml-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
