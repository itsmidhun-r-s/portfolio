import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';
import { Download, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
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
    <section id="resume" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Verified"
          highlightedTitle="Professional Resume"
          description="Access the exact resume as provided, fully formatted and verified as the single source of truth for all career details."
        />

        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Resume-Backed Authenticity</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                R.S. Midhun — Resume
              </h3>

              <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                Includes full technical skill taxonomy, 6-month internship at Schoenen DIS LLP, 6 deployed applications, and educational credentials.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  ATS-Friendly Structure
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Includes Live Project URLs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Direct Contact Info
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/25 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 active:scale-95"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                Preview in Viewer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
