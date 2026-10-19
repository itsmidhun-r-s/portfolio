import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct real mailto URL
    const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Midhun,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    // Trigger celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore if confetti fails
    }

    // Open mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Outreach"
          title="Get In Touch with"
          highlightedTitle="R.S. Midhun"
          description="Looking for a Python Full-Stack Developer or Junior Developer? Reach out directly via email, phone, or LinkedIn/GitHub."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                Email Address
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-sky-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy Phone'}</span>
                </button>
              </div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                Phone Number
              </h4>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                Location
              </h4>
              <p className="text-sm font-semibold text-white">
                {personalInfo.location}
              </p>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400">GitHub Profile</h4>
                  <p className="text-sm font-semibold text-white">github.com/{personalInfo.githubUsername}</p>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Open GitHub Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Email Dispatcher Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 p-7 sm:p-9 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-sky-400" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Send a Message
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to <span className="text-slate-200 font-mono">{personalInfo.email}</span> with your message prefills.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Interview Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-850 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/25 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail Client</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
                  Direct client mailto fallback with zero third-party data tracking.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
