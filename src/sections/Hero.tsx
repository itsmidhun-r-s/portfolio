import React, { useState } from 'react';
import { ArrowRight, FileText, Mail, Github, MapPin, Sparkles, Box, Smartphone } from 'lucide-react';
import { personalInfo, quickStats } from '../data/portfolio';
import { HeroScene } from '../3d/HeroScene';
import { CanvasFallback } from '../3d/CanvasFallback';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [use3D, setUse3D] = useState(true);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-mesh-dark">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Recruiter Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-lg shadow-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Junior Full-Stack / Python Developer Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm sm:text-base font-mono text-sky-400 font-medium tracking-wider mb-2">
                HELLO, I'M
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              <div className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
                {personalInfo.title}
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              B.E. Computer Science student & developer with hands-on experience building responsive web applications with <span className="text-sky-300 font-semibold">Python</span>, <span className="text-sky-300 font-semibold">Django</span>, <span className="text-sky-300 font-semibold">React.js</span>, <span className="text-sky-300 font-semibold">REST APIs</span>, <span className="text-sky-300 font-semibold">MySQL</span> and <span className="text-sky-300 font-semibold">MongoDB</span>. Completed a 6-month Full Stack Developer Internship at Schoenen DIS LLP and independently built 6 live deployed applications.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                6 Live Applications
              </span>
            </div>

            {/* Hero CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/25 hover:shadow-sky-400/35 active:scale-95"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 shadow-lg active:scale-95"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                View & Download Resume
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full h-[380px] sm:h-[450px] relative rounded-3xl bg-slate-950/40 border border-slate-800/80 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
              
              {/* Top Controls Header */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <span>3D Interactive Core</span>
                </div>

                {/* Switch between 3D WebGL and CSS 3D fallback */}
                <button
                  onClick={() => setUse3D(!use3D)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                  title="Toggle 3D WebGL rendering mode"
                >
                  {use3D ? (
                    <>
                      <Smartphone className="w-3 h-3 text-sky-400" />
                      <span>Eco Mode</span>
                    </>
                  ) : (
                    <>
                      <Box className="w-3 h-3 text-emerald-400" />
                      <span>Enable 3D</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3D Scene / Fallback */}
              {use3D ? (
                <HeroScene />
              ) : (
                <CanvasFallback />
              )}

              {/* Bottom Interaction Tip */}
              <div className="absolute bottom-3 text-center w-full z-20 pointer-events-none">
                <span className="text-[11px] font-mono text-slate-500 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800/60">
                  {use3D ? "Drag to rotate • Interactive 3D Orbit" : "Eco 3D Fallback Mode active"}
                </span>
              </div>
            </div>

            {/* Quick Stat Bar below 3D */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center"
                >
                  <div className="text-base sm:text-lg font-display font-bold text-sky-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono font-medium text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
