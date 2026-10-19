import React from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, projects, experiences, educationList } from '../data/portfolio';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text / html formatted downloadable resume file
    const content = `R.S. MIDHUN
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}
GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY:
${personalInfo.summary}

TECHNICAL SKILLS:
- Languages: Python, JavaScript, HTML5, CSS3, SQL
- Frontend: React.js, JavaScript, Bootstrap, Responsive Web Design
- Backend: Python, Django, Node.js, Express.js, REST API Development
- Databases: MySQL, MongoDB, PostgreSQL, SQL, Supabase
- Tools & Platforms: Git, GitHub, XAMPP, Vercel, Netlify
- Development: API Integration, CRUD Operations, Database Management, Debugging, Testing, Deployment

EXPERIENCE:
1. Schoenen DIS LLP — Full Stack Developer Intern — Python (15 Apr 2026 – 16 Oct 2026)
   - Worked with Python, Django, HTML, CSS, JavaScript and REST APIs across frontend and backend development.
   - Gained practical experience in MySQL, API integration, Git and GitHub, debugging, testing and deployment.
   - Independently designed, developed and deployed 4 live web applications during the internship.
2. Adventure Technology Solution — Web Development Intern (18 Feb 2025 – 24 Feb 2025)
3. M Squared Software and Services — Web Development Intern (04 Mar 2024 – 09 Mar 2024)

PROJECTS:
- Ever Green Cabs (Live: evergreencabs.co.in)
- Nakshatra Coimbatore Travels (Live: nakshatracoimbatoretravels.com)
- DataExtractPRO (Live: webscrap-ui.vercel.app)
- TalentATS (Live: resume-analyzer-mauve-beta.vercel.app)
- Pastry Hut (Live: pastryhut.netlify.app)
- Xtaken (Live: xtaken.in)

EDUCATION:
- Amrita College of Engineering and Technology — B.E. Computer Science and Engineering | 2022 – 2026 | CGPA: 7.2/10
- St. Mary Goretty Higher Secondary School — Higher Secondary | 60.00% | 2022
- St. Mary Goretty Higher Secondary School — SSLC | 77.80% | 2020

ADDITIONAL:
- Languages: Tamil, English
- Interests & Hobbies: Web development, exploring new technologies, logical puzzles, chess, badminton, fitness, cricket
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'RS_Midhun_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0B0E14] border border-slate-700 shadow-2xl text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0E131E]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white">
              Resume Preview — R.S. Midhun
            </h3>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Verified Source of Truth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-300 font-sans space-y-6 max-h-[calc(92vh-75px)]">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wider">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                {personalInfo.phone}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-3 h-3 text-sky-400" />
                {personalInfo.email}
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sky-400 hover:underline"
              >
                github.com/{personalInfo.githubUsername}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase mb-2">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm space-y-1.5 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              <div><strong className="text-slate-100">Languages:</strong> Python, JavaScript, HTML5, CSS3, SQL</div>
              <div><strong className="text-slate-100">Frontend:</strong> React.js, JavaScript, Bootstrap, Responsive Web Design</div>
              <div><strong className="text-slate-100">Backend:</strong> Python, Django, Node.js, Express.js, REST API Development</div>
              <div><strong className="text-slate-100">Databases:</strong> MySQL, MongoDB, PostgreSQL, SQL, Supabase</div>
              <div><strong className="text-slate-100">Tools & Platforms:</strong> Git, GitHub, XAMPP, Vercel, Netlify</div>
              <div><strong className="text-slate-100">Development:</strong> API Integration, CRUD Operations, Database Management, Debugging, Testing, Deployment</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">{exp.company}</span>
                      <span className="text-sky-400 font-medium text-xs sm:text-sm"> — {exp.role}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-white text-sm">{proj.title} — {proj.subtitle}</span>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-400">
                    {proj.keyFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase mb-3">
              Education
            </h2>
            <div className="space-y-2.5">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.institution}</span>
                    <span className="text-slate-400"> — {edu.degree}</span>
                  </div>
                  <div className="font-mono text-sky-400">
                    {edu.grade} {edu.duration ? `| ${edu.duration}` : edu.year ? `| ${edu.year}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional */}
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div><strong className="text-slate-200">Languages:</strong> {personalInfo.languages.join(', ')}</div>
            <div><strong className="text-slate-200">Interests & Hobbies:</strong> {personalInfo.interests.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
