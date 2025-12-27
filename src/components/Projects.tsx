
import { ExternalLink, Github, Sparkles, Layout, Code2, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A responsive personal portfolio website built to showcase projects, skills, and experience. Designed with a clean UI, smooth navigation, and mobile-first approach to create a professional online presence.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Layout,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Notes Generator',
      description:
        'A Generative AI-based application developed to automatically create structured notes from input content. Built as part of a value-added course to explore practical applications of AI tools.',
      techStack: ['JavaScript', 'AI Tools', 'APIs'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Sparkles,
      gradient: 'from-violet-500 to-fuchsia-500'
    },
    {
      title: 'Mood Lifter Web Application',
      description:
        'An AI-powered web application designed to analyze user mood through interactions and provide uplifting content such as music, quotes, and videos to improve user well-being.',
      techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Code2,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Automation & Utility Scripts',
      description:
        'A collection of JavaScript and Node.js utilities created to automate repetitive tasks, process data, and interact with APIs, improving development efficiency and workflow.',
      techStack: ['Node.js', 'JavaScript', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of projects that reflect my practical experience in web development,
            problem-solving, and the use of modern tools and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

