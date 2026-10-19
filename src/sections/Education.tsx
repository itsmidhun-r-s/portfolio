import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { educationList } from '../data/portfolio';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Formal"
          highlightedTitle="Education & Credentials"
          description="Academic foundation in Computer Science and Engineering, with verified degrees and performance metrics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? 'bg-slate-900/80 border-sky-500/40 shadow-xl shadow-sky-500/5'
                  : 'bg-slate-900/40 border-slate-800/80'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{edu.duration || edu.year}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {edu.institution}
                </h3>

                <p className="text-xs font-semibold text-sky-400 mb-3">
                  {edu.degree}
                </p>

                {edu.details && (
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Academic Score:</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
