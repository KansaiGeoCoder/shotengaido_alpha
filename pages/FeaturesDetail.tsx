
import React from 'react';

const FeatureCard = ({ icon, title, description, benefits, isFullWidth = false }: any) => (
  <div className={`bg-white p-10 rounded-[2.5rem] border border-primary/10 shadow-boxed flex flex-col gap-6 text-left hover:border-primary transition-colors ${isFullWidth ? 'lg:col-span-3 flex-row items-center gap-12' : ''}`}>
    <div className={`shrink-0 size-20 rounded-[2rem] bg-primary/5 flex items-center justify-center text-primary relative overflow-hidden group`}>
       <div className="absolute inset-0 circuit-pattern opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
      <span className="material-symbols-outlined text-5xl relative z-10">{icon}</span>
    </div>
    <div className={`flex-1 space-y-4 ${isFullWidth ? 'max-w-xl' : ''}`}>
      <h3 className="text-2xl font-serif font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
    </div>
    <div className={`pt-6 border-t border-slate-100 ${isFullWidth ? 'pt-0 border-t-0 border-l pl-12 min-w-[300px]' : ''}`}>
      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Key Benefits</p>
      <ul className="space-y-3">
        {benefits.map((b: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-500 font-medium leading-relaxed">
            <span className="material-symbols-outlined text-primary text-lg mt-[2px] select-none">check_circle</span>
            <span className="flex-1">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FeaturesDetail = ({ onNavigate, openNewsletter }: { onNavigate: (page: any) => void, openNewsletter: () => void }) => {
  return (
    <div className="flex flex-col bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Header */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity mb-4"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
            All the Tools You Need
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            From interactive maps to event management to shop profiles — here's how Shotengaido will help you discover, promote, and manage Japan's traditional shopping streets.
          </p>
        </div>

        {/* For Associations Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
            <div className="text-left">
              <h2 className="text-4xl font-serif font-bold">For Associations</h2>
              <p className="text-slate-500 font-medium mt-2">Professional tools to manage your street, promote events, and showcase your community.</p>
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">01 / MANAGEMENT</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="dashboard_customize"
              title="Interactive Dashboard"
              description="A central hub for association leaders to manage shop listings, update street information, and track street-wide analytics."
              benefits={[
                "One-click shop updates",
                "Event calendar management",
                "Member contact database",
                "Real-time visitor statistics"
              ]}
            />
            <FeatureCard 
              icon="storefront"
              title="Shotengai Profile Page"
              description="Create a beautiful online presence for your street with photos, shop listings, event announcements, and your unique story."
              benefits={[
                "Photo gallery showcase",
                "Complete shop directory",
                "Event calendar display",
                "Transit & access information"
              ]}
            />
            <FeatureCard 
              icon="auto_awesome"
              title="Event Material Design"
              description="Generate professional promotional materials for festivals, stamp rallies, and seasonal sales using our design services."
              benefits={[
                "Custom poster templates",
                "Social media graphics",
                "Print-ready QR code signs",
                "Digital coupon generation"
              ]}
            />
            <FeatureCard 
              icon="groups"
              title="Member Management"
              description="Keep track of participating shops, coordinate initiatives, and communicate with your merchant community efficiently."
              benefits={[
                "Shop directory maintenance",
                "Bulk messaging system",
                "Participation tracking",
                "Administrative reports"
              ]}
            />
            <FeatureCard 
              icon="local_activity"
              title="Digital Stamp Rally Creator"
              description="Design and launch engaging stamp collection campaigns with custom themes, rewards, and automated tracking."
              benefits={[
                "Custom campaign builder",
                "Reward configuration tools",
                "Participation analytics",
                "Automated verification"
              ]}
            />
            <FeatureCard 
              icon="calendar_month"
              title="Event Calendar System"
              description="Schedule festivals, markets, and campaigns with automatic visitor notifications and social media integration."
              benefits={[
                "Visual event scheduling",
                "Automatic notifications",
                "Social media sharing",
                "Event archive & photos"
              ]}
            />
          </div>
        </section>

        {/* For Shop Owners Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
            <div className="text-left">
              <h2 className="text-4xl font-serif font-bold">For Shop Owners</h2>
              <p className="text-slate-500 font-medium mt-2">Expand your digital reach while preserving your traditional charm.</p>
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">02 / GROWTH</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="storefront"
              title="Shop Profile Creation"
              description="Create an attractive listing with photos, descriptions, hours, and special features that help customers discover you."
              benefits={[
                "Photo gallery (5-10 images)",
                "Bilingual descriptions",
                "Category & feature tags",
                "Accessibility information"
              ]}
            />
            <FeatureCard 
              icon="campaign"
              title="News & Announcements"
              description="Share updates, special offers, and announcements that appear on your map pin and notify followers directly."
              benefits={[
                "Post updates to your profile",
                "Map pin badges for 'New!'",
                "Follower notifications",
                "Seasonal promotion alerts"
              ]}
            />
            <FeatureCard 
              icon="event_available"
              title="Event Participation"
              description="Join street-wide stamp rallies, festivals, and campaigns to increase foot traffic and connect with new customers."
              benefits={[
                "One-click rally enrollment",
                "Exclusive offer creation",
                "Visitor tracking metrics",
                "Campaign coordination tools"
              ]}
            />
            <FeatureCard 
              icon="forum"
              title="Customer Engagement"
              description="Build trust through reviews, respond to feedback, and share updates with visitors who follow your shop."
              benefits={[
                "Review management system",
                "Direct visitor messaging",
                "Rating & feedback display",
                "Update announcements"
              ]}
            />
            <FeatureCard 
              icon="design_services"
              title="Promotional Support"
              description="Professional design assistance for window signage, seasonal campaigns, and social media graphics."
              benefits={[
                "Window participation stickers",
                "Seasonal sale materials",
                "Social media templates",
                "Menu & product displays"
              ]}
            />
            <FeatureCard 
              icon="analytics"
              title="Shop Analytics"
              description="Track how visitors find your listing, which photos engage them, and when interest peaks throughout the year."
              benefits={[
                "Profile view tracking",
                "Photo engagement metrics",
                "Search term analysis",
                "Seasonal pattern insights"
              ]}
            />
          </div>
        </section>

        {/* For Visitors Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
            <div className="text-left">
              <h2 className="text-4xl font-serif font-bold">For Visitors</h2>
              <p className="text-slate-500 font-medium mt-2">Discover the authentic heart of Japanese neighborhoods.</p>
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">03 / DISCOVERY</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="map"
              title="Interactive Map Explorer"
              description="Discover shotengai across Japan with smart clustering, heatmap visualization, and powerful search filters."
              benefits={[
                "Fluid zoom & navigation",
                "Cluster expansion views",
                "Location-based search",
                "Bookmark favorites"
              ]}
            />
            <FeatureCard 
              icon="import_contacts"
              title="Shotengai Profiles"
              description="Explore detailed pages for each shopping street with photo galleries, shop directories, and event calendars."
              benefits={[
                "Complete photo galleries",
                "Full shop listings",
                "Access & transit info",
                "Event schedules"
              ]}
            />
            <FeatureCard 
              icon="local_activity"
              title="Digital Stamp Rally"
              description="Collect stamps by visiting participating shops, complete collections, and redeem rewards through the app."
              benefits={[
                "Active campaign tracking",
                "Visual collection progress",
                "Nearby shop notifications",
                "Instant reward redemption"
              ]}
            />
            <FeatureCard 
              icon="manage_search"
              title="Shop Discovery"
              description="Find exactly what you're looking for with filters by category, features, dietary needs, and current availability."
              benefits={[
                "Category filtering",
                "Feature-based search",
                "Dietary option tags",
                "Real-time availability"
              ]}
            />
            <FeatureCard 
              icon="reviews"
              title="Community Reviews"
              description="Real experiences and photos from other visitors to guide your choices and discover hidden gems."
              benefits={[
                "Honest shop reviews",
                "User-uploaded photos",
                "Local insider tips",
                "Shop owner responses"
              ]}
            />
            <FeatureCard 
              icon="notifications_active"
              title="Event Notifications"
              description="Get alerts about festivals, stamp rallies, and special offers at shotengai you follow."
              benefits={[
                "Custom notification settings",
                "Event reminders",
                "New campaign alerts",
                "Exclusive early access"
              ]}
            />
          </div>
        </section>
      </div>

      {/* Final CTA - Warm Gradient (Matching Home) */}
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

export default FeaturesDetail;
