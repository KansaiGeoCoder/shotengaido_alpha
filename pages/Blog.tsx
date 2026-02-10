
import React, { useState } from 'react';

const UpcomingItem = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 group hover:bg-primary/10 transition-colors">
    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">check_box_outline_blank</span>
    <span className="text-lg font-medium text-slate-700">{label}</span>
  </div>
);

const Blog = () => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      setEmail('');
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 relative">
      <div className="flex-1 space-y-12">
        {/* Pre-launch Main Content */}
        <section className="bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-boxed p-12 md:p-16 relative">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <span className="material-symbols-outlined text-[15rem]">edit_note</span>
          </div>
          
          <div className="relative z-10 space-y-10 text-left">
            <div className="space-y-4">
              <nav className="flex items-center gap-3 text-primary mb-6">
                <div className="size-1.5 bg-primary rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Research & Updates</span>
              </nav>
              <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-charcoal">
                Building Shotengaido: <br/>
                <span className="text-primary italic">Research Notes</span> from the Field
              </h2>
            </div>

            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
              <p>
                I'm currently conducting fieldwork across Japan, meeting with shotengai associations and documenting traditional shopping streets.
              </p>
              <p>
                This blog will share insights, stories, and technical updates as the platform develops toward its 2026 rollout.
              </p>
            </div>

            <div className="inline-block px-6 py-3 bg-charcoal text-white rounded-xl font-bold text-sm tracking-widest uppercase">
              [First Post Coming: March 2025]
            </div>
          </div>
        </section>

        {/* What's Coming Section */}
        <section className="space-y-8 text-left">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-serif font-bold text-charcoal">What's Coming</h3>
            <div className="h-px flex-1 bg-primary/10"></div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-4">
            <UpcomingItem label="Fieldwork stories from Tokyo shotengai" />
            <UpcomingItem label="Association interviews and insights" />
            <UpcomingItem label="Platform development updates" />
            <UpcomingItem label="Deep dives into shotengai culture" />
            <UpcomingItem label="Partnership announcements" />
          </div>
        </section>

        {/* Development Status Card */}
        <div className="bg-beige/30 border border-primary/5 rounded-2xl p-8 flex items-center gap-6">
          <div className="size-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <span className="material-symbols-outlined animate-spin" style={{ animationDuration: '3s' }}>sync</span>
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Current Status</p>
            <p className="text-sm text-slate-600 font-medium italic">Active field research phase. Aggregating geospatial data for Kyoto and Tokyo pilot districts.</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-80 shrink-0 space-y-10">
        <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-boxed">
          <h4 className="text-lg font-serif font-bold mb-4 text-left">Search Archive</h4>
          <div className="relative">
            <input className="w-full bg-primary/5 border-none rounded-lg pl-10 py-3 text-sm focus:ring-1 focus:ring-primary" placeholder="Search stories..." />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-primary text-xl">search</span>
          </div>
        </div>

        <div className="bg-primary text-white p-8 rounded-xl shadow-boxed space-y-6 text-left">
          <h4 className="text-2xl font-serif font-bold">Join the Community</h4>
          <p className="text-sm opacity-90 italic">Get bi-weekly updates on newly mapped streets and data insights.</p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input 
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 border rounded-lg px-4 py-3 text-sm placeholder:text-white/50 focus:ring-white/30 focus:border-white/40" 
              placeholder="Email address" 
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? <span className="size-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span> : 'Subscribe'}
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-boxed text-left">
          <h4 className="text-lg font-serif font-bold mb-4">Popular Topics</h4>
          <div className="flex flex-wrap gap-2">
            {['GIS Mapping', 'Kyoto Streets', 'Showa History', 'Urban Policy', 'Data Viz'].map(tag => (
              <button key={tag} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase rounded-full hover:bg-primary hover:text-white transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Confirmation Popup Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowConfirmation(false)}
          ></div>
          <div className="relative bg-white rounded-3xl p-10 max-w-sm w-full shadow-warm-lg border border-primary/5 animate-in zoom-in duration-300 text-center space-y-6">
            <div className="size-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-charcoal">Subscription Confirmed!</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Thank you for following our journey. We'll send the latest fieldwork notes directly to your inbox.
              </p>
            </div>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-charcoal text-white font-bold py-4 rounded-xl shadow-boxed-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
