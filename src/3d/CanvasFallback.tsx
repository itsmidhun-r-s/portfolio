export function CanvasFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-emerald-500/10 to-violet-500/20 blur-3xl animate-pulse" />

        {/* Outer Ring */}
        <div className="absolute inset-2 rounded-full border border-sky-500/30 border-dashed animate-spin-slow" />

        {/* Middle Ring */}
        <div className="absolute inset-10 rounded-full border border-emerald-500/30 animate-[spin_12s_linear_infinite_reverse]" />

        {/* Inner Ring */}
        <div className="absolute inset-20 rounded-full border border-violet-500/40" />

        {/* Central Core */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-sky-400/40 shadow-xl shadow-sky-500/20 flex flex-col items-center justify-center p-3 text-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-1 text-xs font-mono font-bold">
            &lt;/&gt;
          </div>
          <span className="text-[11px] font-semibold text-slate-200">Full-Stack</span>
          <span className="text-[9px] text-sky-400 font-mono">Python • React</span>
        </div>

        {/* Satellite Badges */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-sky-500/40 text-[11px] font-mono text-sky-300 shadow-lg">
          Python / Django
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-lg">
          React.js / REST APIs
        </div>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-violet-500/40 text-[11px] font-mono text-violet-300 shadow-lg">
          MySQL / Mongo
        </div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-amber-500/40 text-[11px] font-mono text-amber-300 shadow-lg">
          Vercel / Netlify
        </div>
      </div>
    </div>
  );
}
