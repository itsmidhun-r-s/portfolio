import React from 'react';
import { ArrowUp, Github, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090D] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Column 1: Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                M
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Python Full-Stack Developer specializing in high-performance web applications with Python, Django, React.js, and modern database architectures.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Junior Full-Stack & Python Developer roles
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About & Profile</a></li>
              <li><a href="#skills" className="hover:text-sky-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#experience" className="hover:text-sky-400 transition-colors">Experience & Internship</a></li>
              <li><a href="#projects" className="hover:text-sky-400 transition-colors">Live Projects (6 Deployed)</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  github.com/{personalInfo.githubUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Designed & Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>React, Three.js & Tailwind</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
