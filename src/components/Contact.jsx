import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  Edit3, 
  School,
  Loader2,
  RefreshCw,
  X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Card3D from './Card3D';

// Web3Forms public access key linked to princeraj.947168@gmail.com
const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 
  import.meta.env.VITE_WEB3FORMS_KEY || 
  "bcd8c16e-7b25-4c3e-b05e-a6bb29071834";

export default function Contact() {
  const { personal } = portfolioData;

  const [contactEmail, setContactEmail] = useState(() => {
    const saved = localStorage.getItem('pk_contact_email');
    if (saved && saved !== 'prince.cse.dev@gmail.com') {
      return saved;
    }
    return personal.email;
  });
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState(contactEmail);
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState({
    name: '',
    email: '',
    subject: ''
  });

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

  // Validation
  const validate = () => {
    const errs = {};
    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const subjectTrimmed = formData.subject.trim();
    const messageTrimmed = formData.message.trim();

    if (!nameTrimmed) {
      errs.name = 'Full name is required.';
    } else if (nameTrimmed.length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(emailTrimmed)) {
      errs.email = 'Please provide a valid email (e.g. name@example.com).';
    }

    if (!subjectTrimmed) {
      errs.subject = 'Subject line is required.';
    } else if (subjectTrimmed.length < 2) {
      errs.subject = 'Subject must be at least 2 characters.';
    }

    if (!messageTrimmed) {
      errs.message = 'Please write your message.';
    } else if (messageTrimmed.length < 10) {
      errs.message = `Message must be at least 10 characters (${messageTrimmed.length}/10).`;
    }

    return errs;
  };

  // Clear previous errors when typing
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  // Form Submission via Web3Forms API POST request
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    // Clear old errors on retry
    setErrorMessage('');
    
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    try {
      // POST directly to Web3Forms API endpoint (No mailto, No opening external apps)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          from_name: `${cleanName} (via Portfolio)`
        })
      });

      const data = await response.json().catch(() => ({}));

      // Confirm actual successful delivery from Web3Forms
      if (response.ok && data.success === true) {
        setSuccessData({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject
        });
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setErrorMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Web3Forms submission exception:', err);
      setStatus('error');
      setErrorMessage('Network connection error. Please try again.');
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
            Reach out for software developer roles, internships, or engineering discussions.
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
                      <span className="font-mono text-sm text-[#F5F5F0] select-all break-all font-semibold">
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

                  <div className="text-[10px] font-mono text-[#A7AAA8]/60 flex items-center justify-between pt-1">
                    <span>* Connected to inbox</span>
                    <span className="text-[#D6AD60]">princeraj.947168@gmail.com</span>
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
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#F5F5F0] hover:text-[#D6AD60] font-mono text-xs font-semibold transition-all group"
                    >
                      <Github className="w-4 h-4 text-[#D6AD60] group-hover:scale-110 transition-transform" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0B0D0E] border border-[#D6AD60]/20 hover:border-[#D6AD60] text-[#F5F5F0] hover:text-[#D6AD60] font-mono text-xs font-semibold transition-all group"
                    >
                      <Linkedin className="w-4 h-4 text-[#D6AD60] group-hover:scale-110 transition-transform" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card3D depth={15} maxTilt={6}>
              <div className="matte-card rounded-2xl p-6 sm:p-8 relative">
                
                {/* SUCCESS NOTIFICATION - Shown ONLY on actual confirmed Web3Forms delivery */}
                {status === 'success' ? (
                  <div className="py-10 px-4 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#15191B] border-2 border-[#D6AD60] flex items-center justify-center text-[#D6AD60] shadow-[0_0_25px_rgba(214,173,96,0.35)]">
                      <CheckCircle className="w-8 h-8 text-[#D6AD60]" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#0B0D0E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-mono">
                        Delivered
                      </div>
                      <h3 className="text-2xl font-bold text-[#F5F5F0]">
                        Message Sent Successfully!
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7AAA8] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#F5F5F0]">{successData.name}</strong>. Your message has landed directly in Prince's Gmail inbox. He will review it and reply back to you at <span className="text-[#D6AD60] font-mono">{successData.email}</span>.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setErrorMessage('');
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-xs font-mono transition-colors shadow-lg shadow-[#D6AD60]/20 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    {/* SUBTLE ERROR NOTIFICATION - Small, dismissible, never shown on page load */}
                    {status === 'error' && errorMessage && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs flex items-center justify-between gap-3 font-mono">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setStatus('idle');
                            setErrorMessage('');
                          }}
                          className="p-1 rounded text-amber-400/60 hover:text-amber-200 transition-colors shrink-0"
                          title="Dismiss"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-[#F5F5F0] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="e.g. Rahul Sharma"
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
                          Your Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="e.g. rahul@example.com"
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
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="e.g. Full Stack Internship Opportunity / Project Collaboration"
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
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-mono text-[#F5F5F0]">
                          Your Message *
                        </label>
                        <span className="text-[10px] font-mono text-[#A7AAA8]/60">
                          {formData.message.trim().length} chars (min 10)
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Hi Prince, I reviewed your Opportunity Radar and TerraForge projects. We would like to discuss..."
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

                    {/* Send Message Button with Loading State & Duplicate Prevention */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#D6AD60] hover:bg-[#F5E6C8] text-[#0B0D0E] font-bold text-sm shadow-lg shadow-[#D6AD60]/15 hover:shadow-[#D6AD60]/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#0B0D0E]" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] font-mono text-center text-[#A7AAA8]/60 pt-1">
                      Direct delivery to <span className="text-[#D6AD60]">princeraj.947168@gmail.com</span> &bull; Zero spam
                    </div>

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
