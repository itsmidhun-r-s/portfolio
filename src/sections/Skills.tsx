import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/portfolio';
import { SkillCard } from '../components/SkillCard';
import { Search, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return ['All', ...skillCategories.map((c) => c.title)];
  }, []);

  const filteredSkills = useMemo(() => {
    return skillCategories.flatMap((cat) => {
      if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
        return [];
      }
      return cat.skills
        .filter((skill) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(q) ||
            skill.levelDescription.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          );
        })
        .map((skill) => ({
          ...skill,
          category: cat.title,
        }));
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Competencies"
          title="Technical"
          highlightedTitle="Skills & Ecosystem"
          description="Every technology listed is actively utilized across my projects, internship, and codebase. No fabricated percentages or ungrounded claims."
        />

        {/* Controls: Search & Category Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Django, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                levelDescription={skill.levelDescription}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-slate-900/30 border border-slate-800">
            <p className="text-sm text-slate-400">No matching skills found for "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Context Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Technologies organized directly from attached resume without exaggeration.</span>
          </div>
          <div className="font-mono text-sky-400">
            Total {filteredSkills.length} Verified Technologies Displayed
          </div>
        </div>
      </div>
    </section>
  );
};
