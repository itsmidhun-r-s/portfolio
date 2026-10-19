import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { ResumeSection } from './sections/ResumeSection';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-sky-500/30 selection:text-sky-300">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Resume Viewer / Print / Download Modal */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
