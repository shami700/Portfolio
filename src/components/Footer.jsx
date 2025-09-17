export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-[#1A3E5D] to-gray-900 text-[#EAF6F6] py-6 flex flex-col items-center gap-2 shadow-inner">
      {/* Copyright */}
      <p className="text-sm text-[#A1D6E2]/80">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-[#A1D6E2]">Md Shami Arzoo</span>. All rights reserved.
      </p>

      {/* Credit Line */}
      <p className="text-sm text-[#EAF6F6]/80">
        Designed with <span className="animate-pulse text-red-500">❤️</span> using{" "}
        <span className="font-semibold text-[#7CCED9]">React</span> &{" "}
        <span className="font-semibold text-[#7CCED9]">TailwindCSS</span>
      </p>

      {/* Developer Signature */}
      <p className="text-xs mt-1 tracking-wide text-[#A1D6E2]/70 hover:text-[#7CCED9] transition">
        Developed by <span className="font-bold text-[#A1D6E2]">Md Shami Arzoo</span>
      </p>
    </footer>
  );
}
