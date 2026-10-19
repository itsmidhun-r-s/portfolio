import React, { useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  name: string;
  levelDescription: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, levelDescription }) => {
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

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

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
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="relative p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-850/80 hover:shadow-xl hover:shadow-sky-500/10 transition-colors duration-200 group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-slate-100 group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
            {name}
          </h4>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 group-hover:text-emerald-400 transition-colors" />
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          {levelDescription}
        </p>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
        <span>Verified from Resume</span>
        <span className="text-sky-400/80">Active Stack</span>
      </div>
    </div>
  );
};
