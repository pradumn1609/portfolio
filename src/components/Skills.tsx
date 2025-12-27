import { Code, Server, Wrench, Cpu, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'blue'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'RESTful APIs', 'Database Design', 'Authentication', 'Supabase'],
      color: 'green'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite', 'Vercel/Netlify'],
      color: 'orange'
    },
    {
      title: 'AI & Automation',
      icon: Cpu,
      skills: ['AI Content Tools', 'Workflow Automation', 'AI Integration', 'Prompt Engineering'],
      color: 'purple'
    },
    {
      title: 'Soft Skills',
      icon: MessageSquare,
      skills: ['Problem Solving', 'Clear Communication', 'Time Management', 'Fast Learning', 'Client Relations'],
      color: 'slate'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    green: 'bg-green-50 border-green-200 hover:border-green-400',
    orange: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    purple: 'bg-slate-50 border-slate-200 hover:border-slate-400',
    slate: 'bg-slate-50 border-slate-200 hover:border-slate-400'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    purple: 'text-slate-600',
    slate: 'text-slate-600'
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  colorClasses[category.color as keyof typeof colorClasses]
                }`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-8 h-8 mr-3 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`} />
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
