import React, { useRef, useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="relative flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-sky-400 border border-slate-700/80">
            {project.category}
          </span>
          {project.highlightBadge && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.highlightBadge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <button
            onClick={() => onOpenModal(project)}
            aria-label={`View details for ${project.title}`}
            className="p-1.5 rounded-lg bg-slate-800/60 text-slate-400 group-hover:text-white group-hover:bg-sky-500/20 transition-all"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </h3>
        <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-300/90 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features Preview */}
        <div className="space-y-1.5 mb-6">
          {project.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech badges & Actions footer */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            Case Details
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 text-sky-400 text-xs font-semibold border border-sky-500/30 transition-all active:scale-95 shadow-sm"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
