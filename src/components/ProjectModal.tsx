import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0C0F17] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.category}
            </span>
            {project.highlightBadge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {project.highlightBadge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Problem Solved */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-1.5">
            <AlertCircle className="w-4 h-4" />
            PROBLEM SOLVED & OBJECTIVE
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Engineered Features
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-sky-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Source: <span className="text-slate-300 font-medium">Resume Verified Project</span>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-sky-500/20 active:scale-95"
              >
                Visit Live Website
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
