import { Briefcase, Database, Factory, Rocket } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Maruti Internship */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Factory className="w-8 h-8 text-blue-600" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                DBA Intern — Maruti Suzuki
              </h3>

              <p className="text-slate-600 mt-2 font-medium">
                Database Administration Internship
              </p>

              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Worked with Oracle databases in an enterprise production environment</li>
                <li>
                  Used <strong>Oracle Enterprise Manager (OEM)</strong> for database monitoring,
                  performance tracking, and alerts
                </li>
                <li>Assisted in database health checks, backups, and basic optimization tasks</li>
                <li>Executed SQL queries for data validation and reporting</li>
                <li>Collaborated with senior DBAs and engineers on live systems</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="px-4 py-1 bg-slate-100 rounded-full text-sm font-medium">
                  Oracle DB
                </span>
                <span className="px-4 py-1 bg-slate-100 rounded-full text-sm font-medium">
                  Oracle OEM
                </span>
                <span className="px-4 py-1 bg-slate-100 rounded-full text-sm font-medium">
                  SQL
                </span>
                <span className="px-4 py-1 bg-slate-100 rounded-full text-sm font-medium">
                  Database Monitoring
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white p-6 rounded-xl border text-center">
            <Database className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Enterprise DBA Exposure</h4>
            <p className="text-slate-600 mt-2">
              Hands-on experience with Oracle databases & monitoring tools
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border text-center">
            <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Maruti Suzuki Internship</h4>
            <p className="text-slate-600 mt-2">
              Real-world experience inside a large-scale corporate IT setup
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border text-center">
            <Rocket className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Production Mindset</h4>
            <p className="text-slate-600 mt-2">
              Reliability, monitoring, and performance-focused thinking
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
