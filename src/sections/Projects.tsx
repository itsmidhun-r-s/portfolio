import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';
import { Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Client & Business', 'AI-Powered', 'Personal / Full-Stack'];

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Production Deliverables"
          title="Featured &"
          highlightedTitle="Live Client Applications"
          description="A showcase of 6 live web applications built, tested, and deployed to production. Every link connects directly to the authentic live deployment."
        />

        {/* Featured Showcase Highlight Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
              Featured Flagship Deployments
            </h3>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              (Live Client & AI Systems)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-sky-500/30 p-7 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-sky-400 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {project.highlightBadge}
                    </span>
                  </div>

                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Engineered Highlights */}
                  <div className="space-y-1.5 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Key Capabilities:
                    </div>
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-sky-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Deep Dive & Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {cat} ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
