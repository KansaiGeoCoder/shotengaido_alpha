
import React, { useState, useEffect, useRef } from 'react';

const TimelineItem = ({ date, title, subtitle, description, active = false }: any) => (
  <div className="relative pl-12 group">
    <div className={`absolute left-0 top-1.5 size-5 rounded-full ring-8 ring-background-light transition-all ${active ? 'bg-primary shadow-boxed-sm shadow-primary/20' : 'bg-slate-300'}`}></div>
    <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl border border-primary/5 shadow-boxed-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-left">
      <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-primary' : 'text-slate-400'}`}>
        {date}
      </span>
      <h4 className="text-2xl font-serif font-bold">{title}</h4>
      <p className="text-primary font-semibold italic text-sm">{subtitle}</p>
      <div className="text-slate-600 leading-relaxed text-sm max-w-xl">
        {description}
      </div>
    </div>
  </div>
);

const Author = () => {
  const [activeSection, setActiveSection] = useState('identity');
  
  // Explicitly typing the refs for the scroll spy
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    identity: useRef<HTMLElement>(null),
    academic: useRef<HTMLElement>(null),
    journey: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    story: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      // Threshold defines the point on the screen (from the top) where the highlight changes
      const triggerThreshold = 160; 
      
      // Special case: At the very top of the page
      if (window.scrollY < 100) {
        setActiveSection('identity');
        return;
      }

      // Special case: At the very bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('story');
        return;
      }

      const sections = Object.entries(sectionRefs);
      let currentId = 'identity';

      // Iterating through sections to find the one currently "active" in the viewport
      for (const [id, ref] of sections) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // If the top of the section has reached the trigger threshold, it becomes the potential active section
          if (rect.top <= triggerThreshold) {
            currentId = id;
          }
        }
      }
      
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to sync the state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset calculation to align with the scroll-spy logic
      const offset = 120; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      // Instantly set the active section to prevent lag in UI feedback
      setActiveSection(id);
    }
  };

  const NavButton = ({ id, icon, label }: { id: string; icon: string; label: string }) => {
    const isActive = activeSection === id;
    return (
      <button 
        onClick={() => scrollTo(id)} 
        className={`w-full text-left flex items-center gap-3 p-3 rounded-lg text-sm font-bold transition-all duration-300 border-2 border-transparent ${
          isActive 
            ? 'bg-primary text-white shadow-boxed-sm translate-x-2 translate-y-2' 
            : 'text-slate-600 hover:bg-primary/5 hover:text-primary'
        }`}
      >
        <span className={`material-symbols-outlined text-lg ${isActive ? 'fill-1' : ''}`}>{icon}</span> {label}
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 items-start">
      {/* Side Menu - Sticky top ensures it stays in place while items-start prevents parent stretching */}
      <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-28 z-20">
        <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-boxed space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-primary">Maximilian Prutsch</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">GIS Analyst & Urban Planner</p>
          </div>
          <nav className="space-y-2">
            <NavButton id="identity" icon="person" label="Identity" />
            <NavButton id="academic" icon="school" label="Academic Path" />
            <NavButton id="journey" icon="work" label="Professional Journey" />
            <NavButton id="skills" icon="verified" label="Technical Profile" />
            <NavButton id="story" icon="auto_stories" label="The Vision" />
          </nav>
          <div className="pt-8 border-t border-primary/10 space-y-4">
             <div className="space-y-2 px-2 text-left">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                   <span className="material-symbols-outlined text-xs">location_on</span>
                   Osaka
                </div>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-24 pb-20">
        {/* Identity Section */}
        <section id="identity" ref={sectionRefs.identity} className="flex flex-col md:flex-row gap-12 items-center scroll-mt-32">
          {/* Shadow removed from photo container */}
          <div className="w-64 h-80 shrink-0 rounded-2xl border-4 border-white overflow-hidden group transition-all">
            <img src="https://picsum.photos/seed/maxauthor/400/500" className="w-full h-full object-cover object-top" alt="Maximilian Prutsch" />
          </div>
          <div className="space-y-4 text-left">
            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">GIS & Spatial Strategy</span>
            <h2 className="text-5xl font-serif font-bold">Maximilian Prutsch</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Researcher and developer based in Osaka. Combining urban planning background with hands-on fieldwork to build Shotengaido — a platform that celebrates shotengai and gives associations, shops and visitors practical digital tools.
            </p>
          </div>
        </section>

        {/* Academic Path Section */}
        <section id="academic" ref={sectionRefs.academic} className="space-y-12 scroll-mt-32 text-left">
          <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <h3 className="text-3xl font-serif font-bold">Academic Path</h3>
          </div>
          <div className="relative ml-2 space-y-10 before:absolute before:left-2.5 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary/10">
            <TimelineItem 
              date="2024 — 2026"
              title="Academic Certificate in GIS"
              subtitle="Salzburg University, Austria"
              description="Post-graduate specialization focused on professional GIS standards, including advanced network analysis, automated spatial data processing with Python, and high-precision cartographic communication."
              active={activeSection === 'academic'}
            />
            <TimelineItem 
              date="2020 — 2023"
              title="M.Sc. in International Environmental Management"
              subtitle="Kyoto University, Japan | Graduate School of Global Environmental Studies"
              description={
                <div className="space-y-4">
                  <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Research Overview</p>
                    <p className="text-lg font-serif italic font-semibold text-slate-800">"A Walkability Study on Shōtengai – Case of Kyoto City"</p>
                  </div>
                  <div className="space-y-2">
                    <p>Conducted a multi-dimensional analysis of pedestrian environments within Kyoto's traditional commercial arcades. By applying a GIS-based framework, the research quantified how Shōtengai contribute to urban resilience and community cohesion compared to standard streetscapes.</p>
                    <p>The work involved extensive qualitative field surveys, merchant interviews, and spatial modeling of walking networks, concluding that these districts are essential for the 20-minute city model.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded font-bold uppercase">MEXT Scholar</span>
                    <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded font-bold uppercase">Best Poster Award 2021</span>
                  </div>
                </div>
              }
              active={activeSection === 'academic'}
            />
            <TimelineItem 
              date="2015 — 2019"
              title="Bachelor in Geography"
              subtitle="University of Graz, Austria"
              description="Comprehensive studies in human geography and regional planning. Includes a specialized semester abroad at Kobe University, Japan as a JASSO Scholar."
              active={activeSection === 'academic'}
            />
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="journey" ref={sectionRefs.journey} className="space-y-12 scroll-mt-32 text-left">
          <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">work</span>
            <h3 className="text-3xl font-serif font-bold">Professional Journey</h3>
          </div>
          <div className="relative ml-2 space-y-10 before:absolute before:left-2.5 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary/10">
            <TimelineItem 
              date="2026 — PRESENT"
              title="Founder & Developer"
              subtitle="Shotengaido"
              description={
                <div className="space-y-4">
                  <p>Building a digital platform to map and document Japan's traditional shopping streets. Combining interactive mapping technology with hands-on fieldwork to create tools for visitors, shop owners, and shotengai associations.</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Developed interactive web application with Mapbox GL JS and Supabase</li>
                    <li>Created multi-role system for visitors, shop owners, and association administrators</li>
                    <li>Conducting stakeholder meetings with Tokyo shotengai associations for pilot partnerships</li>
                  </ul>
                </div>
              }
              active={activeSection === 'journey'}
            />
            <TimelineItem 
              date="2023 — 2024"
              title="Spatial Planner"
              subtitle="Interplan ZT — Austria"
              description={
                <div className="space-y-3">
                  <p>Worked on regional development and land-use planning projects for Austrian municipalities.</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Developed urban development concepts and zoning plans for municipal clients</li>
                    <li>Conducted field surveys and spatial analysis for infrastructure and environmental planning</li>
                    <li>Provided technical planning advice to local government agencies</li>
                    <li>Coordinated stakeholder engagement between residents, officials, and planning teams</li>
                  </ul>
                </div>
              }
              active={activeSection === 'journey'}
            />
            <TimelineItem 
              date="2021 — 2021"
              title="GIS Research Intern"
              subtitle="Kyoto Environmental Activities Association — Japan"
              description={
                <div className="space-y-3">
                  <p>Developed geospatial analysis methods to evaluate the impact of Shōtengai on the urban environment.</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Designed and implemented qualitative interview surveys with local community leaders and merchants.</li>
                    <li>Created GIS workflows for cleaning, processing, and visualizing neighborhood pedestrian data.</li>
                    <li>Synthesized interview findings with spatial data to produce actionable urban improvement reports.</li>
                    <li>Contributed to research results through active communication with Japanese stakeholders.</li>
                  </ul>
                </div>
              }
              active={activeSection === 'journey'}
            />
            <TimelineItem 
              date="2019 — 2020"
              title="Urban Planning Intern"
              subtitle="Urban Future — Austria"
              description={
                <div className="space-y-3">
                  <p>Support for international conferences on urban renewal and sustainable city development.</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Researched global case studies in sustainable transport and urban regeneration policy.</li>
                    <li>Managed database cleaning and marketing data analysis for client acquisition.</li>
                    <li>Visualized complex data sets to support executive decision-making processes.</li>
                  </ul>
                </div>
              }
              active={activeSection === 'journey'}
            />
          </div>
        </section>

        {/* Technical Profile Section */}
        <section id="skills" ref={sectionRefs.skills} className="space-y-12 scroll-mt-32 text-left">
          <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <h3 className="text-3xl font-serif font-bold">Technical Profile</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-primary/10 shadow-boxed-sm space-y-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">Technical Stack</h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Geospatial</p>
                   <div className="flex flex-wrap gap-1.5">
                     {['QGIS', 'ArcGIS Pro', 'Spatial Analysis', 'Cartography', 'Mapbox GL JS'].map(s => (
                       <span key={s} className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-50 text-slate-700 rounded border border-slate-100">{s}</span>
                     ))}
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Development</p>
                   <div className="flex flex-wrap gap-1.5">
                     {['HTML/CSS/JS', 'Supabase', 'Database Mgmt', 'Web Mapping'].map(s => (
                       <span key={s} className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-50 text-slate-700 rounded border border-slate-100">{s}</span>
                     ))}
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Planning</p>
                   <div className="flex flex-wrap gap-1.5">
                     {['AutoCAD', 'Zoning Analysis', 'Urban Planning', 'Stakeholder Coord'].map(s => (
                       <span key={s} className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-50 text-slate-700 rounded border border-slate-100">{s}</span>
                     ))}
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data</p>
                   <div className="flex flex-wrap gap-1.5">
                     {['Python', 'GDAL', 'Spatial Modeling', 'GIS Workflows'].map(s => (
                       <span key={s} className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-50 text-slate-700 rounded border border-slate-100">{s}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-boxed-sm space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">Professional Strengths</h4>
              <div className="space-y-4">
                <div className="space-y-2 text-left">
                  <p className="text-xs font-bold text-slate-800 uppercase">Cross-Cultural Planning Experience</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Experience working in both European and Japanese planning contexts, from municipal zoning projects in Austria to community-focused shotengai research in Japan.</p>
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-xs font-bold text-slate-800 uppercase">Data Visualization & Communication</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Skilled at translating complex spatial data into clear maps and reports that support decision-making for local governments and community organizations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision Section */}
        <section id="story" ref={sectionRefs.story} className="bg-white p-12 rounded-[2.5rem] border border-primary/10 shadow-boxed-lg space-y-8 scroll-mt-32 text-left">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
            <h3 className="text-3xl font-serif font-bold">The Vision</h3>
          </div>
          <p className="text-xl font-serif italic text-primary font-semibold leading-relaxed">
            "We cannot revitalize what we do not measure; we cannot preserve what we do not map."
          </p>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>During my research in Kyoto, I noticed that Japan's traditional shopping streets were largely absent from digital maps and planning tools. These districts are vibrant community centers with unique character, yet they remain difficult for visitors to discover and challenging for associations to manage without modern digital infrastructure.</p>
            <p>Shotengaido bridges this gap. I'm building a platform that makes shotengai easy to find while giving associations practical tools to showcase their districts, organize events, and connect with their communities — helping these streets thrive both offline and online.</p>
          </div>
          {/* Shadow removed from map icon block */}
          <div className="inline-flex items-center gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
             <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-white">
               <span className="material-symbols-outlined">map</span>
             </div>
             <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] text-left leading-relaxed">Leveraging Kyoto University research to define the <br/> future of walkability and heritage resilience.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Author;
