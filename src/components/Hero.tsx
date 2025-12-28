import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4"
    >
      <div className="max-w-4xl mx-auto text-center pt-20">
        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
          Hi, I’m <span className="text-blue-600">Pradumn Pathak</span>
        </h1>

        {/* ROLE */}
        <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium">
          Computer Science Engineer | Web Developer | AI-Powered Solutions
        </p>

        {/* AVAILABILITY */}
        <p className="text-green-600 font-semibold mb-6">
          Available for Freelance & Remote Work
        </p>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          I help individuals and businesses build clean, responsive, and scalable web
          applications using React, JavaScript, and Node.js. I also leverage AI tools
          to deliver efficient and modern digital solutions.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-9 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-9 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 border-2 border-blue-600 shadow-md hover:shadow-lg hover:scale-105"
          >
            Contact Me
          </button>

          {/* Resume */}
          <a
            href="/PradumnKumarPathak_resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
