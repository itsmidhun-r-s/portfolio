import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedTitle,
  description,
  align = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide mb-3 bg-sky-500/10 border border-sky-500/20 text-sky-400 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
        {title}{' '}
        {highlightedTitle && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
