import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Notes Generator",
      description:
        "An AI-powered notes generation tool that converts long-form content into concise, structured notes to improve productivity and learning efficiency.",
      tech: ["React", "JavaScript", "AI"],
      live: "",
      github: "https://github.com/pradumn1609",
    },
    {
      title: "Mood Detection Website",
      description:
        "An AI-powered web application that detects user mood using facial expressions and provides uplifting content such as songs, jokes, quotes, and videos.",
      tech: ["HTML", "CSS", "JavaScript", "AI"],
      live: "", // keep empty if not deployed
      github: "https://github.com/pradumn1609",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive developer portfolio built using React, Vite, and Tailwind CSS to showcase projects, skills, and experience.",
      tech: ["React", "Vite", "Tailwind"],
      live: "https://your-vercel-link.vercel.app",
      github: "https://github.com/pradumn1609/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600">
            Some of the projects I’ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-700 font-medium hover:underline"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
