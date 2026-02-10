import React from 'react';

const AbstractView = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  return (
    <div className="min-h-screen bg-slate-500 py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full flex justify-between mb-8">
        <button 
          onClick={() => onNavigate('knowledge')}
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-bold text-sm backdrop-blur transition-all flex items-center gap-2 border border-white/20"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span> Return to Knowledge Base
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-slate-50 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">print</span> Print PDF
        </button>
      </div>

      {/* The "Paper" Container */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-[20mm] flex flex-col font-serif text-slate-900 text-[11pt] leading-relaxed select-text print:p-0 print:shadow-none print:max-w-none">
        {/* Paper Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-3xl font-bold tracking-tight">
            A Walkability Study on Shōtengai – Impacts on pedestrian network and community development, case of Kyoto City
          </h1>
          
          <div className="space-y-1">
            <p className="text-xl font-bold">PRUTSCH Maximilian</p>
          </div>

          <p className="text-sm italic text-slate-600">
            Keywords: Urban Planning, Walkability, Shōtengai, Neighbourhood Development, Community
          </p>
        </div>

        {/* Paper Sections */}
        <div className="space-y-10 text-justify">
          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase tracking-widest border-b border-slate-200 pb-1">1. INTRODUCTION</h2>
            <p>
              This thesis is analysing traditional Japanese shopping streets (Shōtengai) and their impact on the pedestrian network 
              and community development, based on pedestrian focused urban planning methods and walkability factors. The 
              goal is to validate the walkability of Shōtengai, observed through high pedestrian traffic and analyse how it can 
              serve as a focal point in future urban planning projects to create a better pedestrian environment. So far, in-depth
              literature on walkability studies of Shōtengai was not found, so the results of this thesis will hopefully provide 
              valuable insights for future planning projects built around the concept of 5-minute neighbourhoods and 20-minute 
              cities, based around Shōtengai. This would aid in creating more sustainable and environmentally friendly cities, by 
              reducing the need for cars, which also increases their liveability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase tracking-widest border-b border-slate-200 pb-1">2. METHODS</h2>
            <p>
              A comprehensive literature review was conducted to understand the history of Japanese urban planning and 
              development of Shōtengai, as well as their influence in creating pedestrian friendly cities. These insights were used 
              to evaluate methods for analysing walkability and to choose walkability factors, that are suitable for the research 
              area.
            </p>
            <p>
              For the field work and data collection, central Kyoto was chosen as the research area, based on the presence of 
              several Shōtengai and a good comparability to regular streets. Field work was conducted during the period of April 
              2022 and September 2022, investigating the characteristics of streets and their walkability through GIS, based on
              previously chosen walkability factors. In order to better understand the management of Shōtengai and their future 
              development path, as well as current challenges, structured and semi-structured interviews were held with Shōtengai 
              associations at Teramachi Shinkyogoku Shōtengai, Demachi Masugata Shōtengai and Fukakusa Shōtengai and shop 
              owners at Fukakusa Shōtengai during the period of September 2021 and November 2021.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase tracking-widest border-b border-slate-200 pb-1">3. RESULTS</h2>
            <p>
              The walkability analysis of Shōtengai and regular streets in the research area showed, that the chosen walkability 
              factors and the walkability analysis correlate with actual pedestrian movement. In addition, it confirmed that 
              Shōtengai offer an ideal pedestrian environment, excelling in every walkability factor. The results for the interviews 
              and surveys showed, that Shōtengai currently struggle with shop owners reaching retirement age and not finding 
              suitable successors for their business. Nevertheless, a strong connection between shop owners and customers was 
              found, suggesting continued potential for Shōtengai as a community center.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase tracking-widest border-b border-slate-200 pb-1">4. DISCUSSION</h2>
            <p>
              From the results, it can be concluded, that Shōtengai offer great value to cities by providing highly walkable streets, 
              that can create a vibrant urban setting. Shōtengai also show great potential for the creation of a walkability network, 
              where they can serve to attract and sustain pedestrian movement around the city, potentially increasing walking 
              distances without the need for cars, supporting the creation of a 20-minute city. In addition, by providing for all 
              daily necessities, as well as a space for community, Shōtengai can also support 5-minute neighbourhoods. Based on 
              these findings, recommendations for future Shōtengai focused urban planning are provided.
            </p>
          </section>
        </div>

        {/* Paper Footer */}
        <div className="mt-auto pt-16 border-t border-slate-100 flex justify-between items-end text-[8pt] text-slate-400 italic">
          <p>Maximilian Prutsch • Kyoto University Research • GSGES</p>
          <p>Page 1 of 1</p>
        </div>
      </div>
      
      <div className="mt-12 text-center text-white/40 text-xs">
        Scientific Archive Viewer • Shotengaido Platform
      </div>
    </div>
  );
};

export default AbstractView;