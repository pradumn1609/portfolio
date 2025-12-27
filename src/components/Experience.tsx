import { Briefcase, Database, Brain } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            My academic and professional experience that shaped my technical foundation.
          </p>
        </div>

        <div className="space-y-8">
          {/* MARUTI INTERNSHIP */}
          <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Database Administrator Intern
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  Maruti Suzuki India Limited
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  June 2025 – July 2025
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                  <li>
                    Monitored and analyzed database performance using Oracle Enterprise Manager (OEM).
                  </li>
                  <li>
                    Observed CPU usage, memory consumption, sessions, and tablespace utilization.
                  </li>
                  <li>
                    Assisted in documenting alert thresholds and understanding proactive database monitoring.
                  </li>
                  <li>
                    Gained exposure to real-world database administration practices in an enterprise environment.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI / COURSE EXPERIENCE */}
          <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Job-Oriented Value Added Course
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  GLA University
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  June 2025 – July 2025
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                  <li>
                    Learned fundamentals of Machine Learning and Generative AI.
                  </li>
                  <li>
                    Worked on an AI Notes Generator project to apply theoretical concepts.
                  </li>
                  <li>
                    Gained practical exposure to using AI tools for real-world problem solving.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I’m open to freelance projects, internships, and collaborative opportunities.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
