import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experiences } from '../data/portfolio';
import { Briefcase, Calendar, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Track Record"
          title="Internships &"
          highlightedTitle="Hands-on Experience"
          description="Detailed timeline of my professional development roles, focusing on full-stack production delivery, API integrations, and independent project deployments."
        />

        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  exp.highlight
                    ? 'bg-sky-500 border-sky-400 shadow-lg shadow-sky-500/40 text-slate-950'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                <Briefcase className="w-3 h-3" />
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  exp.highlight
                    ? 'bg-slate-900/80 border-sky-500/40 shadow-xl shadow-sky-500/5 hover:border-sky-400'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.company}
                      </span>
                      {exp.highlight && (
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Featured 6-Month Internship
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-sky-400">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-850 px-3 py-1.5 rounded-xl border border-slate-800 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Highlight banner for 4 deployed web apps */}
                {exp.highlight && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-emerald-500/5 to-transparent border border-sky-500/20 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 flex-shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wide">
                        Key Milestone Achieved
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                        Independently designed, developed, and deployed <strong className="text-white">4 live web applications</strong> during this 6-month internship tenure.
                      </p>
                    </div>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Key Responsibilities & Scope
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400/80 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies badge cloud */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-sky-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
