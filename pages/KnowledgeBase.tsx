
import React, { useState, useEffect, useRef } from 'react';

const MetricBlock = ({ label, value, unit }: { label: string, value: string, unit: string }) => (
  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col gap-1">
    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-serif font-bold text-slate-900">{value}</span>
      <span className="text-xs font-bold text-slate-400">{unit}</span>
    </div>
  </div>
);

const KnowledgeBase = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    introduction: useRef<HTMLElement>(null),
    history: useRef<HTMLElement>(null),
    planning: useRef<HTMLElement>(null),
    walkability: useRef<HTMLElement>(null),
    classification: useRef<HTMLElement>(null),
    findings: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const NavButton = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeSection === id;
    return (
      <button 
        onClick={() => scrollTo(id)} 
        className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-bold transition-all text-left ${
          isActive 
            ? 'bg-primary text-white shadow-boxed-sm translate-x-1 translate-y-1' 
            : 'text-slate-600 hover:bg-primary/5 hover:text-primary'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
      <aside className="w-full lg:w-80 shrink-0">
        <div className="sticky top-28 space-y-8">
          <div className="bg-white p-8 rounded-xl border border-primary/10 shadow-boxed text-left">
             <div className="border-l-4 border-primary pl-4 mb-6">
               <h3 className="text-lg font-serif font-bold uppercase tracking-tight">Research Archive</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sourced from GSGES Thesis</p>
             </div>
             <nav className="flex flex-col gap-2">
                <NavButton id="introduction" label="Context & Vision" />
                <NavButton id="history" label="Historical Evolution" />
                <NavButton id="planning" label="Japanese Urban Planning" />
                <NavButton id="walkability" label="Walkability Overview" />
                <NavButton id="classification" label="Shōtengai Classification" />
                <NavButton id="findings" label="Kyoto Case Study Findings" />
             </nav>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-left">
             <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">Notice</p>
             <p className="text-xs text-slate-500 leading-relaxed font-medium">
               This research repository is based on the Master's thesis "A Walkability Study on Shōtengai" (2023). This section will be updated continually as further research data and field results are processed.
             </p>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-white border border-primary/10 shadow-boxed rounded-2xl overflow-hidden pb-20 text-left">
        <div className="p-10 md:p-16 space-y-20">
          
          {/* Chapter 1: Introduction */}
          <section id="introduction" ref={sectionRefs.introduction} className="space-y-12">
            <nav className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
              <span>Scientific Archive</span>
              <span>/</span>
              <span className="text-primary italic font-bold uppercase tracking-tighter">Chapter 1: Introduction</span>
            </nav>

            <div className="space-y-6">
              <h1 className="text-5xl font-serif font-bold leading-[1.1] text-charcoal">
                Impacts on Pedestrian Network and Community Development
              </h1>
              <p className="text-xl font-serif text-slate-500 leading-relaxed max-w-2xl italic">
                A analysis of traditional Japanese shopping streets (Shōtengai) and their impact on the pedestrian network based on pedestrian focused urban planning methods.
              </p>
            </div>

            <article className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                Since the advent of the automobile in the early 20th century and especially since the 1950s, city planning became concerned with accommodating this new mode of mobility. New development of urban space was focused on improving the efficiency of private transport over public transport. As more people began moving to cities, they in turn expanded by building new suburbs and thus residents became even more dependent on cars.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                <MetricBlock label="Research Year" value="2023" unit="Thesis" />
                <MetricBlock label="Case Study" value="Kyoto" unit="City" />
                <MetricBlock label="Modal Target" value="85" unit="%" />
                <MetricBlock label="Status" value="Ongoing" unit="Research" />
              </div>
              <p>
                The goal of this research is to validate the walkability of Shōtengai, observed through high pedestrian traffic and analyse how it can serve as a focal point in future urban planning projects to create a better pedestrian environment. Literature on walkability studies of Shōtengai aims to provide insights for future planning projects built around the concept of 5-minute neighbourhoods and 20-minute cities. This would aid in creating more sustainable and environmentally friendly cities, by reducing the need for cars, which also increases their liveability.
              </p>
            </article>
          </section>

          {/* Chapter 2: Historical Evolution */}
          <section id="history" ref={sectionRefs.history} className="space-y-12 pt-20 border-t border-primary/10">
            <h2 className="text-4xl font-serif font-bold flex items-baseline gap-4 text-charcoal">
               <span className="text-primary text-2xl font-black italic">01.</span> Historical Evolution & Development
            </h2>
            <div className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                Traditional Japanese shopping streets formed as early as the 16th century with the establishment of free markets and open guilds (楽市・楽座), lifting strict regulations on businesses and giving them the opportunity to freely set up their shops. During this first period of development, Shōtengai were located in the downtown of cities along the main routes, catering to local residents and passing travellers. In addition to main routes, Shōtengai also developed along the streets leading up to landmarks like temples and shrines (Monzen-machi).
              </p>
              <p>
                The second period of Shōtengai development began with the construction of railway stations, connecting city centres and suburbs and the legal recognition through the Commercial Union Law (1932) during the beginning of the 19th century. This station adjacent Shōtengai development saw its beginning in the post World War 1 period and its height during the era of economic growth following the end of the second world war.
              </p>
              <p>
                The third and most recent period of development is brought about by an increase of automobile traffic and new types of real estate development in suburbs. These suburbs are connected by bypass routes instead of railways, with shopping malls being developed alongside those routes. This created a critical amount of competition between the new shopping malls and Shōtengai located in cities, due to decreased necessity to shop in the city and reduced foot traffic.
              </p>
            </div>
          </section>

          {/* Chapter 3: Japanese Urban Planning */}
          <section id="planning" ref={sectionRefs.planning} className="space-y-12 pt-20 border-t border-primary/10">
            <h2 className="text-4xl font-serif font-bold flex items-baseline gap-4 text-charcoal">
               <span className="text-primary text-2xl font-black italic">02.</span> Modern Japanese Urban Planning
            </h2>
            <div className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                Compared to other cities around the world, especially in western countries, Japanese cities often have a very unique characteristic. Two planning principles have an especially big impact on the way Japanese cities are shaped, namely the zoning law and Transport-Oriented Development (TOD). The former enables the potential for a high degree of mixed-use and high density, while the latter creates a highly effective synergy of commercial and living space, combined with efficient public transport.
              </p>
              <p>
                Since 1992, the Ministry of Land, Infrastructure and Transport in Japan distinguishes between 12 different zones for the planning of urban space. These zones include categories such as Category I exclusively low-rise residential zone, Neighbourhood commercial zone, and Commercial zone. What is especially noteworthy with these zoning laws is that housing is allowed in all zones, except the exclusively industrial zone. This system creates a highly mixed-use urban space that potentially provides citizens with the possibility to do daily errands on foot in a short distance.
              </p>
              <p>
                The center of Kyoto is often zoned for commercial purposes while regulating the floor area ratio (FAR). In high-density districts, zones called Business-Residential District are part of action plans aimed to revitalize the city center through improving pleasant walking spaces and forming community organizations and networks.
              </p>
            </div>
          </section>

          {/* Chapter 4: Walkability Overview */}
          <section id="walkability" ref={sectionRefs.walkability} className="space-y-12 pt-20 border-t border-primary/10">
            <h2 className="text-4xl font-serif font-bold flex items-baseline gap-4 text-charcoal">
               <span className="text-primary text-2xl font-black italic">03.</span> Walkability & Human Scale
            </h2>
            <div className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                Walking is the most fundamental mode of transport and a core aspect of a sustainable city. Gehl (1971) distinguishes between three different activities in public space: necessary activities, optional activities, and social activities. Necessary walks include errands, work, or school. Optional walks, such as a stroll for recreation, rely heavily on the quality of public space.
              </p>
              <p>
                The term walkability defines how well designed an area is for walking and considers many different factors, such as the street design itself, how well the land uses are mixed, how safe the environment feels, and how the environment is able to stimulate the senses of pedestrians.
              </p>
              <p>
                Human senses have certain limits of distance perception. From 70m, personal characteristics like hair colour or gender are distinguishable. Between 35m and 25m, facial expressions and emotions are visible. These distances have important implications for urban planning on a human scale. Typically, the ratio of building height to street width should not exceed 1:3 as to not lose its spatial definition.
              </p>
            </div>
          </section>

          {/* Chapter 5: Classification */}
          <section id="classification" ref={sectionRefs.classification} className="space-y-12 pt-20 border-t border-primary/10">
            <h2 className="text-4xl font-serif font-bold flex items-baseline gap-4 text-charcoal">
               <span className="text-primary text-2xl font-black italic">04.</span> Shōtengai Classification System
            </h2>
            <div className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                To analyse different shopping streets, a classification system was created based on design characteristics and dimensions. Streets are classified under six different types based on their design:
              </p>
              <ul className="list-none space-y-4">
                <li><strong className="text-primary">Type A1:</strong> A pedestrian only street, fully covered by a roof featuring a coherent design including lighting, decorations and special floor design. Car traffic is prohibited.</li>
                <li><strong className="text-primary">Type B1:</strong> A street with coherent design, lighting and decorations, but not covered. Car traffic is prohibited during most of the day.</li>
                <li><strong className="text-primary">Type C:</strong> Located along wider arterial roads, featuring a covered sidewalk. Pedestrians are still exposed to air and noise pollution from heavy traffic.</li>
              </ul>
              <p>
                Integration into the surrounding urban fabric is classified into two types:
              </p>
              <ul className="list-none space-y-4">
                <li><strong className="text-slate-900">City integration:</strong> Large scale Shōtengai located at vital points of the city, connecting large areas and transport hubs. Shops are mostly franchises.</li>
                <li><strong className="text-slate-900">Neighbourhood integration:</strong> Small scale Shōtengai connecting a single neighbourhood, acting as a community center. Shops are mostly privately run.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 6: Kyoto Case Study Findings */}
          <section id="findings" ref={sectionRefs.findings} className="space-y-12 pt-20 border-t border-primary/10">
            <h2 className="text-4xl font-serif font-bold flex items-baseline gap-4 text-charcoal">
               <span className="text-primary text-2xl font-black italic">05.</span> Research Findings in Kyoto City
            </h2>
            <div className="prose prose-slate max-w-none text-lg leading-[1.8] text-slate-700 space-y-8">
              <p>
                The case study area was defined by Karasuma-dōri in the west, Oike-dōri in the north, Kawaramachi-dōri in the east, and Shijo-dōri in the south. The walkability analysis showed a clear concentration of pedestrians along Shōtengai, with the highest number of pedestrians per hour measured at the southern entrance to Teramachi Kyogoku Shōtengai.
              </p>
              <p>
                Thermal camera analysis conducted on September 17th, 2022, showed that Shōtengai roofs significantly cool down the surface temperature. While the surface temperature of a regular street without shade was around 44°C, surface temperatures inside the Shōtengai were only around 30°C.
              </p>
              <p>
                Noise levels were also monitored. Shōtengai with roofs showed a higher average low noise level (around 60dB) due to pedestrian volume and general shop activity. On regular streets, noise levels increased significantly with passing car traffic, often reaching 65dB to 72dB, demonstrating that noise from cars is about 20-25dB louder than noise on pedestrian-priority streets.
              </p>
            </div>
          </section>

          <section className="pt-20 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="space-y-4 text-center md:text-left">
               <h3 className="text-2xl font-serif font-bold text-charcoal">Thesis Methodology</h3>
               <p className="text-[10px] text-slate-400 italic leading-relaxed max-w-sm font-bold uppercase">
                 Field work was conducted during the period of April 2022 and September 2022, investigating street characteristics through GIS and on-site measurements.
               </p>
             </div>
             <div className="flex gap-4">
               <button 
                 onClick={() => onNavigate('abstract')}
                 className="flex items-center gap-2 px-8 py-3 bg-primary text-white hover:opacity-90 transition-all text-xs font-bold uppercase tracking-widest rounded-lg shadow-boxed-sm"
               >
                 View Scientific Abstract
               </button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;
