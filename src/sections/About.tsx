import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';
import { Terminal, Database, Globe, Cpu, Languages, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Terminal,
      title: "Full-Stack Development",
      description: "End-to-end web engineering with Python, Django, React.js, and modern JavaScript.",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    },
    {
      icon: Database,
      title: "Data & Storage Mastery",
      description: "Hands-on data modeling with MySQL, MongoDB, PostgreSQL, SQL, and Supabase.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: Globe,
      title: "6 Live Deployed Apps",
      description: "Proven track record of independently shipping real-world web apps to production.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      icon: Cpu,
      title: "APIs & Core Practices",
      description: "RESTful architecture, CRUD operations, debugging, testing, and Git version control.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About The Developer"
          title="Engineered for"
          highlightedTitle="Scalability & Reliability"
          description="A complete look into my background, technical philosophy, and experience as a Python Full-Stack Developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Summary Card */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 p-7 sm:p-9 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              Professional Overview
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {personalInfo.summary}
            </p>

            <div className="p-4 rounded-xl bg-slate-850/80 border border-slate-800 mb-6">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
                Target Role
              </h4>
              <p className="text-sm font-semibold text-slate-200">
                {personalInfo.targetRole}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Eager to bring real-world internship and multi-project deployment experience to high-impact engineering teams.
              </p>
            </div>

            {/* Quick Resume Facts */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>6-Month Full Stack Python Internship</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>6 Production Web Apps Deployed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>10 Public Repositories Maintained</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>B.E. Computer Science (2022-2026)</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Additional Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Core Capability Cards */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-3`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Spoken Languages & Hobbies */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-sky-400" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-red-400" />
                  Interests & Hobbies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.interests.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-850 text-slate-400 border border-slate-800"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
