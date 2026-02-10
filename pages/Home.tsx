
import React, { useState } from 'react';

const StreetGridIllustration = () => {
  return (
    <div className="relative w-full aspect-square bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/40 p-12 flex flex-col items-center justify-center group overflow-hidden transition-all shadow-warm-lg">
      <div className="absolute top-8 left-10 text-left z-10">
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Spatial Analysis</p>
        <p className="text-2xl font-serif font-bold text-charcoal italic">Urban Infrastructure</p>
      </div>
      
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[340px] drop-shadow-2xl animate-float">
        {/* Background Grid - Regular Streets */}
        <g stroke="#e5d5cd" strokeWidth="1" strokeLinecap="round" opacity="0.6">
          {/* Vertical lines */}
          <line x1="40" y1="20" x2="40" y2="380" />
          <line x1="80" y1="20" x2="80" y2="380" />
          <line x1="120" y1="20" x2="120" y2="380" />
          <line x1="160" y1="20" x2="160" y2="380" />
          <line x1="200" y1="20" x2="200" y2="380" />
          <line x1="240" y1="20" x2="240" y2="380" />
          <line x1="280" y1="20" x2="280" y2="380" />
          <line x1="320" y1="20" x2="320" y2="380" />
          <line x1="360" y1="20" x2="360" y2="380" />

          {/* Horizontal lines */}
          <line x1="20" y1="40" x2="380" y2="40" />
          <line x1="20" y1="80" x2="380" y2="80" />
          <line x1="20" y1="120" x2="380" y2="120" />
          <line x1="20" y1="160" x2="380" y2="160" />
          <line x1="20" y1="200" x2="380" y2="200" />
          <line x1="20" y1="240" x2="380" y2="240" />
          <line x1="20" y1="280" x2="380" y2="280" />
          <line x1="20" y1="320" x2="380" y2="320" />
          <line x1="20" y1="360" x2="380" y2="360" />
        </g>

        {/* Highlighted Shotengai Arcades */}
        <g>
          {/* Main Horizontal Shotengai */}
          <line x1="80" y1="200" x2="320" y2="200" stroke="#d64545" strokeWidth="6" strokeLinecap="round" />
          {/* Subtle Arcade Roof Pattern Overlay */}
          <line x1="85" y1="200" x2="315" y2="200" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="butt" />
          
          {/* Main Vertical Shotengai */}
          <line x1="160" y1="80" x2="160" y2="280" stroke="#d64545" strokeWidth="6" strokeLinecap="round" />
          <line x1="160" y1="85" x2="160" y2="275" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="butt" />

          {/* Secondary Shotengai */}
          <line x1="240" y1="200" x2="240" y2="320" stroke="#d64545" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Intersection Highlight */}
        <circle cx="160" cy="200" r="10" fill="#d64545" className="animate-pulse" />
        <circle cx="160" cy="200" r="16" stroke="#d64545" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Floating Icons */}
        <g transform="translate(150, 190) scale(0.6)">
           <path d="M12 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6M6 14l3.5-4.5 2.5 3 3.5-4.5L18 14" stroke="#fff" strokeWidth="3" fill="none" />
        </g>
        
        <rect x="250" y="130" width="80" height="30" rx="15" fill="white" stroke="#e5d5cd" strokeWidth="0.5" />
        <text x="290" y="150" textAnchor="middle" fill="#d64545" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ACTIVE DISTRICT</text>
      </svg>
      
      <div className="absolute bottom-8 right-10 text-right">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Visualization</p>
      </div>
    </div>
  );
};

const StakeholderCard = ({ title, goal, items, children }: any) => (
  <div className="glass-card rounded-[2.5rem] flex flex-col h-full hover:-translate-y-2 transition-all duration-500 overflow-hidden text-left shadow-warm border border-white/50 group">
    <div className="h-[320px] w-full bg-beige/30 border-b border-white/30 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 circuit-pattern opacity-[0.03]"></div>
      <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
        {children}
      </div>
    </div>
    <div className="p-10 flex flex-col flex-1">
      <div className="space-y-4 mb-8 text-left">
        <h3 className="text-3xl font-serif font-bold text-charcoal">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          {goal}
        </p>
      </div>
      <ul className="space-y-6 flex-1">
        {items.map((item: any, idx: number) => (
          <li key={idx} className="flex gap-4 items-start text-left">
            <span className="material-symbols-outlined text-primary text-xl mt-[2px] font-bold select-none">check_circle</span>
            <p className="text-[14px] text-charcoal/80 leading-relaxed">
              <strong className="text-charcoal font-bold">{item.bold}:</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TechCard = ({ icon, title, description, codeLabel, techName }: { icon: string, title: string, description: string, codeLabel: string, techName: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-all duration-300 group text-left">
    <div className="flex justify-between items-start mb-8">
      <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="text-right">
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">{codeLabel}</p>
        <p className="text-xs font-bold text-primary italic">{techName}</p>
      </div>
    </div>
    <h4 className="text-2xl font-serif font-bold mb-4 text-white">{title}</h4>
    <p className="text-base text-slate-400 leading-relaxed text-left">{description}</p>
  </div>
);

const StepItem = ({ number, icon, title, description, isLast }: any) => (
  <div className="relative flex flex-col items-center md:items-start text-center md:text-left gap-8 group">
    {!isLast && (
      <div className="hidden md:block absolute left-12 top-12 w-[calc(100%-40px)] h-[1px] bg-primary/10 z-0"></div>
    )}
    <div className="relative z-10 size-24 rounded-[2.5rem] bg-white border border-beige flex items-center justify-center text-primary shadow-warm hover:scale-105 transition-all duration-500 overflow-hidden">
       <div className="absolute inset-0 circuit-pattern opacity-[0.05]"></div>
       <span className="material-symbols-outlined text-4xl group-hover:rotate-6 transition-transform">{icon}</span>
    </div>
    <div className="space-y-2">
      {/* Container for Phase Badge + Title with fixed min-height for uniform description start */}
      <div className="flex items-start justify-center md:justify-start gap-2 flex-nowrap min-h-[3rem]">
        <span className="text-[10px] font-black text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-tighter whitespace-nowrap inline-block shrink-0 mt-1">Phase 0{number}</span>
        <h5 className="text-xl font-serif font-bold text-charcoal leading-tight">{title}</h5>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{description}</p>
    </div>
  </div>
);

const PilotListCard = ({ title, items, icon, colorClass = "text-emerald-500" }: { title: string, items: string[], icon: string, colorClass?: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-beige shadow-warm text-left h-full">
    <div className="flex items-center gap-4 mb-8">
      <div className={`size-12 rounded-xl bg-slate-50 flex items-center justify-center ${colorClass}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal">{title}</h4>
    </div>
    <ul className="space-y-5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-4 items-start text-[15px] text-slate-600 leading-relaxed">
          <span className={`material-symbols-outlined ${colorClass} text-xl mt-[2px] select-none`}>check_circle</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Home = ({ onNavigate, openNewsletter }: { onNavigate: (page: any) => void, openNewsletter: () => void }) => {
  const [activeHowTab, setActiveHowTab] = useState<'steps' | 'details'>('steps');

  const scrollToMission = () => {
    const el = document.getElementById('mission');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pilotSteps = [
    { number: 1, icon: 'chat_bubble', title: 'Initial Conversation', description: "Whether you're an association leader, shop owner, or passionate enthusiast — reach out. We'll discuss your interest, needs, and how you'd like to contribute." },
    { number: 2, icon: 'handshake', title: 'Collaborative Onboarding', description: "Pilot partners work directly with me to set up profiles, test features, and explore what works for your community. We build together." },
    { number: 3, icon: 'sync', title: 'Iterate & Grow', description: "Your real-world feedback shapes every feature. Weekly check-ins, open communication, and genuine partnership throughout the pilot phase." },
    { number: 4, icon: 'rocket_launch', title: 'Expand Together', description: "As the platform grows, early partners help onboard new associations, share best practices, and become ambassadors for their regions." }
  ];

  const seekingPartnersList = [
    { label: 'Development partners & engineers', highlighted: true },
    { label: 'Associations interested in pilot testing', highlighted: true },
    { label: 'Shop owners willing to provide feedback', highlighted: false },
    { label: 'Researchers & urban enthusiasts', highlighted: false },
    { label: 'Passionate designers', highlighted: false },
    { label: 'Advocates for cultural preservation', highlighted: false }
  ];

  return (
    <div className="flex flex-col bg-cream">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col relative overflow-hidden bg-gradient-to-br from-cream via-beige to-rose pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-rose/30 blur-[120px] animate-mesh-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-beige/40 blur-[100px] animate-mesh-slow"></div>
          <div className="absolute inset-0 circuit-pattern opacity-[0.03]"></div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000 text-left">
              <div className="space-y-4">
                <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.4em] mb-2">Research & Revitalization</span>
                <h1 className="text-6xl lg:text-[5.5rem] font-serif font-bold tracking-tight leading-[1] text-charcoal">
                  Mapping the <br/> <span className="text-primary italic">Heart</span> of Japan
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light">
                Shotengaido is a research-driven platform bringing Japan's vibrant shopping streets online. We help visitors discover unique districts while empowering local communities through modern geospatial tools.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={scrollToMission}
                  className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-boxed hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Join the Vision
                </button>
                <button 
                  onClick={() => onNavigate('knowledge')}
                  className="bg-white/80 backdrop-blur-sm text-charcoal border border-white/40 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-warm"
                >
                  Read the Research
                </button>
              </div>
            </div>
            
            <div className="relative h-[600px] hidden lg:flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
              {/* Layered Mockup Ecosystem */}
              
              {/* Base: Admin Dashboard (Desktop) */}
              <div className="absolute w-[90%] h-[400px] glass-card rounded-[2rem] shadow-warm-lg border border-white/60 overflow-hidden tilt-3d animate-float z-0" style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}>
                <div className="flex h-full">
                  <div className="w-16 bg-charcoal border-r border-white/10 p-3 flex flex-col gap-4">
                     {[1,2,3,4,5].map(i => <div key={i} className={`size-8 rounded-lg ${i===1 ? 'bg-primary' : 'bg-white/10'}`}></div>)}
                  </div>
                  <div className="flex-1 bg-white/50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 circuit-pattern"></div>
                    <div className="p-8 space-y-6 relative">
                       <div className="flex justify-between items-center mb-8">
                          <div className="h-4 w-48 bg-charcoal/20 rounded-full"></div>
                          <div className="h-10 w-32 bg-primary/20 rounded-xl"></div>
                       </div>
                       <div className="h-48 w-full bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative">
                          {/* Simulated Map UI */}
                          <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/139.7,35.7,11/600x400?access_token=none')] bg-cover"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 bg-primary rounded-full border-2 border-white animate-pulse"></div>
                       </div>
                       <div className="grid grid-cols-3 gap-4">
                          {[1,2,3].map(i => <div key={i} className="h-16 bg-white/80 rounded-xl border border-white/60"></div>)}
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Merchant Dashboard (Tablet/Small Desktop) */}
              <div className="absolute -bottom-4 -left-12 w-[60%] h-[320px] bg-white rounded-[2rem] shadow-warm-lg border border-beige tilt-3d animate-float z-10 overflow-hidden" style={{ animationDelay: '1.5s', transform: 'rotateY(10deg) rotateX(10deg)' }}>
                 <div className="h-20 bg-gradient-to-r from-primary to-primary/80 p-6 text-white flex justify-between items-center">
                    <div className="space-y-1 text-left">
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Merchant Portal</p>
                       <p className="text-lg font-serif font-bold">Welcome, Oishii Bakery</p>
                    </div>
                    <div className="size-10 bg-white/20 rounded-full"></div>
                 </div>
                 <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-cream rounded-xl border border-beige flex items-center justify-center gap-3">
                       <span className="material-symbols-outlined text-primary">edit_note</span>
                       <span className="text-xs font-bold text-charcoal">Edit Profile</span>
                    </div>
                    <div className="h-24 bg-cream rounded-xl border border-beige flex items-center justify-center gap-3">
                       <span className="material-symbols-outlined text-primary">photo_library</span>
                       <span className="text-xs font-bold text-charcoal">Manage Photos</span>
                    </div>
                    <div className="h-12 col-span-2 bg-slate-900 text-white rounded-xl flex items-center justify-center text-xs font-bold">View Analytics</div>
                 </div>
              </div>

              {/* Front: Visitor App (Mobile) */}
              <div className="absolute -right-8 -bottom-10 w-[240px] h-[480px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-warm-lg tilt-3d animate-float z-20" style={{ animationDelay: '0.5s', transform: 'rotateY(-20deg) rotateX(15deg)' }}>
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
                   <div className="h-12 flex items-center px-6 justify-between border-b border-slate-50">
                      <div className="flex items-center gap-2">
                         <div className="size-6 bg-primary/10 rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-[12px] text-primary">explore</span></div>
                         <span className="text-[10px] font-bold text-charcoal">Explorer</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-300">settings</span>
                   </div>
                   <div className="p-6 space-y-6">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-4">
                         <div className="flex justify-between items-center">
                            <span className="text-[8px] font-bold text-primary uppercase tracking-widest">Active Rally</span>
                            <span className="text-[8px] font-bold text-emerald-500">40%</span>
                         </div>
                         <p className="text-xs font-serif font-bold text-charcoal">Shinjuku Foodie Hunt</p>
                         <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[40%]"></div>
                         </div>
                         <div className="flex gap-2">
                            {[1,2,3,4].map(i => <div key={i} className={`size-5 rounded-full ${i<=2 ? 'bg-primary' : 'border border-slate-200'}`}></div>)}
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saved Shops</h4>
                            <span className="text-[8px] font-bold text-primary">See all</span>
                         </div>
                         {[1,2,3].map(i => (
                           <div key={i} className="flex gap-3 items-center">
                              <div className="size-10 bg-slate-100 rounded-lg"></div>
                              <div className="flex-1 space-y-1 text-left">
                                 <div className="h-2 w-20 bg-slate-800 rounded"></div>
                                 <div className="h-1 w-12 bg-slate-300 rounded"></div>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4">
                      <span className="material-symbols-outlined text-primary">home</span>
                      <span className="material-symbols-outlined text-slate-300">favorite</span>
                      <span className="material-symbols-outlined text-slate-300">verified</span>
                      <span className="material-symbols-outlined text-slate-300">notifications</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 z-30 flex flex-col items-center gap-2">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal">Scroll</span>
           <span className="material-symbols-outlined text-2xl text-charcoal animate-bounce">expand_more</span>
        </div>
      </section>

      {/* Mission Section - White / Light Background */}
      <section id="mission" className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="lg:w-1/2 space-y-10 text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold text-xs uppercase tracking-[0.5em]">The Vision</p>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight text-charcoal">Our Mission & <br/>Cultural Impact</h2>
              </div>
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light">
                <p>
                  Shotengai are Japan's traditional covered shopping streets — neighborhood centers where local commerce and community life thrive. Each one has its own character, shaped by the merchants, residents, and visitors who gather there.
                </p>
                <p>
                  Shotengaido connects these vibrant streets with new audiences while giving associations the tools they need to celebrate their communities, organize events, and share their unique stories with the world.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full animate-float">
              <StreetGridIllustration />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10 text-left">
              <h3 className="text-4xl font-serif font-bold text-charcoal leading-tight">Building This Together</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Shotengaido is a passion project born from fieldwork and conversations with shotengai communities across Japan. I am currently looking for <span className="text-primary font-bold">development partners</span> who want to build this platform together, alongside <span className="text-primary font-bold">pilot associations</span> who want to digitize their streets and help shape our collective vision.
              </p>
              
              <div className="space-y-8 pt-4">
                 <div className="flex items-center gap-4">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">We are looking for</p>
                   <div className="h-px flex-1 bg-beige"></div>
                 </div>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                   {seekingPartnersList.map(item => (
                     <li key={item.label} className={`flex gap-4 text-[15px] font-medium transition-all ${item.highlighted ? 'text-primary' : 'text-slate-600'}`}>
                       <span className={`material-symbols-outlined ${item.highlighted ? 'text-primary' : 'text-slate-300'} text-2xl`}>
                          {item.highlighted ? 'auto_awesome' : 'check_circle'}
                       </span>
                       <span className={item.highlighted ? 'font-bold' : ''}>
                          {item.label}
                       </span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            <div className="bg-cream rounded-[3rem] p-12 md:p-16 border border-beige relative group overflow-hidden shadow-warm-lg">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                 <span className="material-symbols-outlined text-[10rem]">format_quote</span>
              </div>
              <div className="relative z-10 flex flex-col gap-10 h-full">
                <p className="text-3xl font-serif italic text-charcoal leading-relaxed font-light">
                  "I'm building Shotengaido to give shotengai a digital presence that matches their character. If you want to help build this platform, let's connect."
                </p>
                <div className="flex items-center gap-8 mt-auto">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-3xl blur-md"></div>
                    <img 
                      src="https://picsum.photos/seed/maxauthor/150/150" 
                      className="relative size-20 rounded-2xl object-cover border-2 border-white shadow-lg" 
                      alt="Maximilian Prutsch" 
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-serif font-bold text-2xl text-charcoal">Maximilian Prutsch</p>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Founder | Shotengai Researcher</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-charcoal text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-boxed-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 group/btn"
                  >
                    Partner with us <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('knowledge')}
                    className="bg-white text-charcoal border border-beige px-10 py-4 rounded-2xl font-bold text-sm hover:bg-beige transition-all shadow-warm"
                  >
                    View Research
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Complementary Gradient with Floating Mockups */}
      <section className="py-32 bg-gradient-to-tr from-beige via-cream to-rose relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-charcoal">Features in Development</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light italic">
              Designed for visitors exploring, shops thriving, and associations managing their communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <StakeholderCard 
              title="For Associations"
              goal="Manage your street with easy-to-use digital tools."
              items={[
                { bold: "Central Dashboard", text: "Update street info, manage shop listings, and coordinate community events from a single digital hub." },
                { bold: "Promotion Services", text: "Professional templates for posters and digital assets to promote festivals and seasonal campaigns." },
                { bold: "Street Profile Page", text: "Create a beautiful online presence with photos, directories, and your unique community story." }
              ]}
            >
              {/* Enhanced Association Dashboard Mockup */}
              <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                <div className="w-full h-64 glass-card rounded-2xl shadow-warm border border-white/60 relative tilt-3d flex flex-col overflow-hidden">
                  <div className="bg-charcoal/5 h-10 flex items-center px-4 justify-between border-b border-white/40">
                    <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-red-400"></div>
                      <div className="size-2.5 rounded-full bg-amber-400"></div>
                      <div className="size-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-12 bg-slate-300 rounded-full"></div>
                      <div className="size-5 rounded-full bg-slate-200"></div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="w-14 bg-charcoal/5 border-r border-white/40 p-2 space-y-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`h-6 w-full rounded-md flex items-center justify-center ${i===1 ? 'bg-primary shadow-sm' : 'bg-slate-200/50'}`}>
                           <div className={`size-3 rounded-sm ${i===1 ? 'bg-white' : 'bg-slate-400'}`}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-32 bg-slate-800 rounded"></div>
                        <div className="h-6 w-16 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center"><div className="h-1.5 w-8 bg-primary rounded-full"></div></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 h-20 bg-white/50 rounded-xl border border-white/80 p-3 space-y-2">
                           <div className="flex justify-between">
                             <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                             <div className="h-1.5 w-6 bg-emerald-500/20 rounded"></div>
                           </div>
                           <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                           <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
                           <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-20 bg-white/50 rounded-xl border border-white/80 flex flex-col items-center justify-center p-2">
                           <div className="relative size-10 rounded-full border-[3px] border-primary/10 border-t-primary animate-spin" style={{ animationDuration: '3s' }}></div>
                           <div className="h-1 w-8 bg-slate-300 rounded mt-2"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2].map(i => (
                          <div key={i} className="flex items-center justify-between p-2.5 bg-white/40 rounded-lg border border-white/40">
                            <div className="flex items-center gap-2">
                              <div className="size-5 bg-slate-200 rounded"></div>
                              <div className="h-2 w-24 bg-slate-800 rounded"></div>
                            </div>
                            <div className="h-2 w-10 bg-emerald-400/60 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StakeholderCard>

            <StakeholderCard 
              title="For Shop Owners"
              goal="Get your shop discovered by more visitors."
              items={[
                { bold: "Digital Showcase", text: "Professional digital profile with appealing photos and descriptions that attract new customers." },
                { bold: "Marketing Kits", text: "Design support for your digital and physical presence, including custom signage and campaign graphics." },
                { bold: "Unified Loyalty", text: "Join digital stamp rallies and seasonal festivals to reward and retain regular customers." }
              ]}
            >
               {/* Enhanced Merchant Dashboard Mockup */}
               <div className="w-full h-full flex items-center justify-center p-4">
                 <div className="w-[200px] h-[320px] bg-charcoal rounded-[2.5rem] p-3 shadow-warm-lg tilt-3d group-hover:scale-105 transition-all duration-700 relative">
                    <div className="w-full h-full bg-cream rounded-[2rem] overflow-hidden flex flex-col border border-white/20">
                      {/* Top App Bar */}
                      <div className="h-12 bg-primary p-3 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <div className="size-6 bg-white/20 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-xs">storefront</span></div>
                          <span className="text-[10px] font-bold">My Shop</span>
                        </div>
                        <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px]">notifications</span>
                        </div>
                      </div>
                      {/* Body */}
                      <div className="flex-1 p-3 space-y-4 overflow-y-auto no-scrollbar">
                        {/* Status Card */}
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-beige space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">VISITS TODAY</span>
                            <span className="text-[8px] font-bold text-emerald-500">+12%</span>
                          </div>
                          <p className="text-xl font-serif font-bold text-charcoal">432</p>
                          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[65%]"></div>
                          </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-2">
                           <div className="h-14 bg-white rounded-xl border border-beige flex flex-col items-center justify-center gap-1 hover:bg-slate-50 transition-colors">
                             <span className="material-symbols-outlined text-primary text-sm">photo_camera</span>
                             <span className="text-[7px] font-bold">Update Photos</span>
                           </div>
                           <div className="h-14 bg-white rounded-xl border border-beige flex flex-col items-center justify-center gap-1 hover:bg-slate-50 transition-colors">
                             <span className="material-symbols-outlined text-primary text-sm">campaign</span>
                             <span className="text-[7px] font-bold">Post Update</span>
                           </div>
                        </div>

                        {/* Recent Feedback */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center px-1">
                             <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">LATEST REVIEWS</span>
                             <span className="text-[7px] text-primary font-bold">All</span>
                          </div>
                          {[1, 2].map(i => (
                             <div key={i} className="flex gap-2 items-center p-2.5 bg-white rounded-lg border border-slate-50 shadow-sm">
                                <div className="size-7 bg-slate-100 rounded-full overflow-hidden shrink-0">
                                  <div className="size-full bg-slate-200"></div>
                                </div>
                                <div className="flex-1 space-y-1">
                                   <div className="h-1.5 w-16 bg-slate-800 rounded"></div>
                                   <div className="flex gap-0.5">
                                      {[...Array(5)].map((_, j) => <div key={j} className={`size-1 rounded-full ${j < 4 ? 'bg-amber-400' : 'bg-slate-200'}`}></div>)}
                                   </div>
                                </div>
                             </div>
                          ))}
                        </div>
                      </div>
                      {/* Bottom Nav */}
                      <div className="h-10 bg-white border-t border-beige flex items-center justify-around px-2">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className={`size-6 rounded-full ${i === 1 ? 'bg-primary/10 text-primary' : 'text-slate-300'} flex items-center justify-center`}>
                            <span className="material-symbols-outlined text-[12px]">{i === 1 ? 'dashboard' : (i === 2 ? 'edit' : (i === 3 ? 'analytics' : 'settings'))}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
               </div>
            </StakeholderCard>

            <StakeholderCard 
              title="For Visitors"
              goal="Discover authentic local shopping experiences."
              items={[
                { bold: "Interactive Maps", text: "Explore shopping districts with fluid, zoomable maps tailored for pedestrian exploration." },
                { bold: "Discovery Tools", text: "Filter by category, features, or dietary needs to find the perfect local gem." },
                { bold: "Live Updates", text: "Stay informed about seasonal festivals, special offers, and new shop openings." }
              ]}
            >
               {/* Refined Visitor Explorer Mockup */}
               <div className="w-full h-full flex items-center justify-center p-4">
                 <div className="w-[180px] h-[300px] bg-[#1a1a1a] rounded-[2.5rem] p-2.5 shadow-warm-lg tilt-3d group-hover:scale-105 transition-all duration-700">
                    <div className="w-full h-full bg-slate-50 rounded-[1.8rem] overflow-hidden flex flex-col">
                       <div className="flex-1 relative bg-[#f8f9fa] overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                             <div className="grid grid-cols-6 grid-rows-10 h-full w-full">
                                {[...Array(60)].map((_, i) => (
                                  <div key={i} className="border-[0.5px] border-slate-300"></div>
                                ))}
                             </div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                             <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center animate-ping absolute -inset-2"></div>
                             <div className="size-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center z-10 relative">
                                <span className="material-symbols-outlined text-white text-[10px]">location_on</span>
                             </div>
                          </div>
                          <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-3 gap-2">
                             <span className="material-symbols-outlined text-slate-300 text-xs">search</span>
                             <div className="h-1.5 w-20 bg-slate-100 rounded"></div>
                          </div>
                       </div>
                       <div className="h-24 bg-white p-4 space-y-3">
                          <div className="h-2.5 w-24 bg-slate-800 rounded"></div>
                          <div className="flex gap-2 overflow-hidden">
                             {[1,2,3].map(i => <div key={i} className="h-6 w-12 bg-slate-100 rounded-md shrink-0"></div>)}
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
            </StakeholderCard>
          </div>
        </div>
      </section>

      {/* Infrastructure Section - Dark Contrast */}
      <section className="bg-dark text-white py-32 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 circuit-pattern opacity-[0.08]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-24 items-center">
            <div className="lg:col-span-2 space-y-10 text-left">
              <div className="inline-flex items-center gap-3 text-primary">
                <div className="size-1.5 bg-primary rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]">The Infrastructure</span>
              </div>
              <h2 className="text-6xl lg:text-[5rem] font-serif font-bold leading-[1.1] text-white">Built with <br/><span className="text-primary italic">Modern Tech</span></h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Combining professional-grade mapping technology with user-friendly design to support the communities that make Japan thrive.
              </p>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8">
              <TechCard 
                icon="map"
                techName="Mapbox GL JS"
                codeLabel="Mapping Engine"
                title="Interactive Geospatial"
                description="Smooth, responsive maps with clustering and heatmaps to visualize shotengai across Japan."
              />
              <TechCard 
                icon="database"
                techName="Supabase"
                codeLabel="Backend Architecture"
                title="Secure Data Layer"
                description="PostgreSQL database with real-time authentication and role-based access for stakeholders."
              />
              <TechCard 
                icon="terminal"
                techName="Modern Web Stack"
                codeLabel="Frontend Logic"
                title="Professional UI"
                description="Fast, intuitive design that works beautifully on desktop and mobile. Optimized for performance."
              />
              <TechCard 
                icon="photo_library"
                techName="Cloud Storage"
                codeLabel="Asset Hosting"
                title="Media Management"
                description="Showcase spaces with photo galleries that help visitors discover unique street identities."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Pilot Program Section - Improved Compactness & Whitespace */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-charcoal">Join the Pilot Program</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto italic leading-relaxed">
              We're building this platform <span className="text-primary font-semibold">with</span> real communities, not just for them.
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-16 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-1.5">
            <button 
              onClick={() => setActiveHowTab('steps')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeHowTab === 'steps' ? 'bg-white text-primary shadow-sm border border-beige' : 'text-slate-500 hover:text-charcoal'}`}
            >
              Roadmap
            </button>
            <button 
              onClick={() => setActiveHowTab('details')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeHowTab === 'details' ? 'bg-white text-primary shadow-sm border border-beige' : 'text-slate-500 hover:text-charcoal'}`}
            >
              Benefits
            </button>
          </div>

          <div className="transition-all duration-700">
            {activeHowTab === 'steps' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 animate-in fade-in slide-in-from-bottom-8">
                {pilotSteps.map((step, index) => (
                  <StepItem 
                    key={step.title}
                    number={step.number}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    isLast={index === 3}
                  />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-8">
                <PilotListCard 
                  title="What Early Partners Get" 
                  icon="stars" 
                  colorClass="text-emerald-500"
                  items={[
                    "Free platform access through 2026",
                    "Direct line to the founder — your feedback matters",
                    "Recognition as founding partners",
                    "Collaborative feature development",
                    "Priority support and personalized training"
                  ]} 
                />
                <PilotListCard 
                  title="What We Need From Partners" 
                  icon="volunteer_activism" 
                  colorClass="text-primary"
                  items={[
                    "Honest feedback on what works and what doesn't",
                    "Patience as we build and iterate",
                    "Active participation in testing new features",
                    "Help spreading the word in your network",
                    "Real-world insights on association and shop needs"
                  ]} 
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA - Warm Gradient */}
      <section className="py-32 bg-gradient-to-br from-cream via-beige to-rose relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[4rem] p-16 md:p-24 text-center shadow-warm-lg relative">
          <div className="absolute inset-0 circuit-pattern opacity-[0.05]"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-charcoal">Coming This Year</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light italic">
              We're launching Shotengaido later in 2026. Whether you're a visitor eager to explore, a shop owner ready to get online, or an association interested in partnering — sign up for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-6">
              <button 
                onClick={openNewsletter}
                className="w-full sm:w-auto bg-primary text-white px-16 py-6 rounded-[2rem] font-bold text-lg shadow-boxed hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Sign Up for Updates
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-charcoal text-white px-16 py-6 rounded-[2rem] font-bold text-lg shadow-boxed-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle scattered elements */}
        <div className="absolute top-20 left-10 opacity-10 animate-float">
          <span className="material-symbols-outlined text-[10rem] text-primary">location_on</span>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <span className="material-symbols-outlined text-[8rem] text-charcoal">grid_view</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
