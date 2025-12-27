
import { User, Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I’m a <span className="font-semibold text-blue-600">Computer Science Engineer</span> with a
              strong foundation in web development and hands-on experience building real-world projects.
              I enjoy turning ideas into reliable, user-friendly applications.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              My work spans across <span className="font-semibold">frontend development</span> with React,
              <span className="font-semibold"> backend fundamentals</span> using Node.js, and the use of
              <span className="font-semibold"> AI-powered tools</span> to improve efficiency and productivity.
              I focus on clean UI, maintainable code, and scalable solutions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I’m currently open to <span className="font-semibold">freelance projects</span>, internships,
              and collaborative opportunities. I value clear communication, timely delivery, and building
              long-term professional relationships with clients and teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <User className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Client-Focused</h3>
              <p className="text-slate-600 text-sm">
                I listen carefully to requirements and build solutions that align with real needs.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Problem Solver</h3>
              <p className="text-slate-600 text-sm">
                I enjoy breaking down complex problems and finding practical technical solutions.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Detail-Oriented</h3>
              <p className="text-slate-600 text-sm">
                I pay close attention to code quality, UI consistency, and overall user experience.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Fast Learner</h3>
              <p className="text-slate-600 text-sm">
                I adapt quickly to new tools, frameworks, and technologies as projects require.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

