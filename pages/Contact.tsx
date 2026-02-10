
import React, { useState } from 'react';

const Contact = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'visitor',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h1 className="text-5xl font-serif font-bold">Message Received</h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          Thank you for reaching out to Shotengaido. We've received your inquiry and our team will get back to you within 2-3 business days.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-boxed hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8 text-left">
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity mb-4"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
        </button>
        <h1 className="text-6xl font-serif font-bold leading-[1.1]">Let's start a <br /><span className="text-primary italic">conversation</span></h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          Whether you're an association representative, a local merchant, or a visitor with questions — we'd love to hear from you.
        </p>

        <div className="space-y-6 pt-8">
          <div className="flex gap-4 items-start">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-lg font-bold text-slate-800">contact@shotengaido.jp</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-bold text-slate-800">Osaka, Japan</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Partnering with associations</h4>
          <p className="text-sm text-slate-500 leading-relaxed italic">
            "Shotengaido is actively seeking pilot partnerships with Shotengai associations across Japan for our 2026 rollout."
          </p>
        </div>
      </div>

      <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-primary/10 shadow-boxed text-left">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
              <input 
                required
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
              <input 
                required
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-slate-500">I am a...</label>
            <select 
              id="role" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary"
            >
              <option value="visitor">Visitor / Pedestrian</option>
              <option value="association">Association Representative</option>
              <option value="merchant">Shop Owner / Merchant</option>
              <option value="researcher">Researcher / Academic</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
            <input 
              required
              type="text" 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?" 
              className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
            <textarea 
              required
              id="message" 
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..." 
              className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-primary focus:border-primary resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-boxed hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            Send Inquiry <span className="material-symbols-outlined text-lg">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
