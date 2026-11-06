import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  Edit3, 
  School
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Contact() {
  const { personal } = portfolioData;

  const [contactEmail, setContactEmail] = useState(() => {
    return localStorage.getItem('pk_contact_email') || personal.email;
  });
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState(contactEmail);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveEmail = () => {
    if (tempEmail && tempEmail.includes('@')) {
      setContactEmail(tempEmail);
      localStorage.setItem('pk_contact_email', tempEmail);
      setIsEditingEmail(false);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 900);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0D0E] border-t border-[#D6AD60]/20 subtle-matte-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15191B] border border-[#D6AD60]/20 text-[#D6AD60] text-xs font-mono tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
            Have an Idea? <span className="text-gradient-gold">Let's Build Something Together.</span>
          </h2>
          <p className="text-[#A7AAA8] text-sm sm:text-base">
            Reach out for software roles, internships, or engineering discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D depth={15} maxTilt={6}>
              <div className="matte-card rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F0] mb-2">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7AAA8] leading-relaxed">
                    I am actively seeking software developer internships, full stack opportunities, and impactful tech collaborations.
                  </p>
                </div>

                {/* Email Box */}
                <div className="p-4 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#D6AD60]">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /> Direct Email
                    </span>
                    <button
                      onClick={() => {
                        if (isEditingEmail) {
                          handleSaveEmail();
                        } else {
                          setTempEmail(contactEmail);
                          setIsEditingEmail(true);
                        }
                      }}
                      className="text-[#A7AAA8] hover:text-[#D6AD60] flex items-center gap-1 transition-colors"
                      title={isEditingEmail ? "Save email" : "Edit email"}
                    >
                      {isEditingEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Edit3 className="w-3.5 h-3.5" />}
                      <span>{isEditingEmail ? "Save" : "Edit"}</span>
                    </button>
                  </div>

                  {isEditingEmail ? (
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="email"
                        value={tempEmail}
                        onChange={(e) => setTempEmail(e.target.value)}
                        className="w-full bg-[#15191B] border border-[#D6AD60] rounded px-2.5 py-1.5 text-xs text-[#F5F5F0] font-mono focus:outline-none"
                        placeholder="your.email@example.com"
                        autoFocus
                      />
                      <button
                        onClick={handleSaveEmail}
                        className="px-2.5 py-1.5 rounded bg-[#D6AD60] text-[#0B0D0E] font-bold text-xs"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="font-mono text-sm text-[#F5F5F0] select-all break-all">
                        {contactEmail}
                      </span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-lg bg-[#15191B] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#A7AAA8] hover:text-[#D6AD60] transition-colors shrink-0"
                        title="Copy email to clipboard"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  )}

                  <div className="text-[10px] font-mono text-[#A7AAA8]/60">
                    * Editable contact field with local save.
                  </div>
                </div>

                {/* College & Location */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 text-xs text-[#A7AAA8]">
                    <School className="w-4 h-4 text-[#D6AD60] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F5F0] block">{personal.college}</strong>
                      <span className="text-[#A7AAA8]/60 font-mono text-[11px]">Bhopal, Madhya Pradesh, India</span>
                    </div>
                  </div>
                </div>

                {/* Social Connect Icons */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-[#A7AAA8] mb-3">
                    Connect On Social Platforms:
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={personal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#F5F5F0] hover:text-[#D6AD60] font-mono text-xs font-semibold transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#F5F5F0] hover:text-[#D6AD60] font-mono text-xs font-semibold transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <Card3D depth={15} maxTilt={6}>
              <div className="matte-card rounded-2xl p-6 sm:p-8 relative">
                
                {status === 'success' ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#15191B] border-2 border-[#D6AD60] flex items-center justify-center text-[#D6AD60] shadow-[0_0_20px_rgba(214,173,96,0.3)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F5F0]">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-[#A7AAA8] max-w-md mx-auto">
                      Thank you for reaching out. Prince Kumar will review your message and reply promptly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs font-mono mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-[#F5F5F0] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          placeholder="Your name"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0E] border text-[#F5F5F0] placeholder-[#A7AAA8]/40 text-sm focus:outline-none transition-colors ${
                            errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D6AD60]/20 focus:border-[#D6AD60]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono text-[#F5F5F0] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          placeholder="you@domain.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0E] border text-[#F5F5F0] placeholder-[#A7AAA8]/40 text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D6AD60]/20 focus:border-[#D6AD60]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono text-[#F5F5F0] mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: null });
                        }}
                        placeholder="e.g. Software Role / Internship Opportunity"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0E] border text-[#F5F5F0] placeholder-[#A7AAA8]/40 text-sm focus:outline-none transition-colors ${
                          errors.subject ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D6AD60]/20 focus:border-[#D6AD60]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-[#F5F5F0] mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        placeholder="Write your message here..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0B0D0E] border text-[#F5F5F0] placeholder-[#A7AAA8]/40 text-sm focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#D6AD60]/20 focus:border-[#D6AD60]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Primary Submit Button: Champagne Gold + Dark text */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-sm shadow-lg shadow-[#D6AD60]/15 hover:shadow-[#D6AD60]/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'submitting' ? 'Transmitting Message...' : 'Send Message'}</span>
                    </button>

                  </form>
                )}

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
}
