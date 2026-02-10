
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Author from './pages/Author';
import KnowledgeBase from './pages/KnowledgeBase';
import FeaturesDetail from './pages/FeaturesDetail';
import AbstractView from './pages/AbstractView';
import Contact from './pages/Contact';

type Page = 'home' | 'blog' | 'author' | 'knowledge' | 'features' | 'abstract' | 'contact';

const NewsletterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call to database
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg glass-card rounded-[3rem] p-10 md:p-14 shadow-warm-lg border border-white/60 animate-in zoom-in slide-in-from-bottom-8 duration-500 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-[0.03] pointer-events-none"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-400 hover:text-charcoal transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {status === 'success' ? (
          <div className="text-center space-y-8 py-8 animate-in fade-in zoom-in duration-500">
            <div className="size-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-bold text-charcoal">You're on the list!</h2>
              <p className="text-slate-500 leading-relaxed">
                Thank you for joining. We'll send you updates on new features and mapped districts as we approach our 2026 launch.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full bg-charcoal text-white py-4 rounded-2xl font-bold shadow-boxed-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Back to Browsing
            </button>
          </div>
        ) : (
          <div className="space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Early Access</span>
              <h2 className="text-4xl font-serif font-bold text-charcoal leading-tight">Join the <br/><span className="text-primary italic">Revitalization</span></h2>
              <p className="text-slate-500 leading-relaxed font-light">
                Sign up to receive monthly research insights, project milestones, and early access to the platform later this year.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 text-left">
                <label htmlFor="modal-email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  id="modal-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-cream/50 border-beige rounded-2xl px-6 py-4 text-sm focus:ring-primary focus:border-primary transition-all shadow-sm"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-boxed hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'submitting' ? (
                  <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Sign Up <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span></>
                )}
              </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 font-medium">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = ({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) => {
  const isActive = (page: Page) => currentPage === page;

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00331 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-serif font-bold tracking-tight">Shotengaido</h1>
        </button>
        <nav className="flex items-center gap-10">
          <button 
            onClick={() => onNavigate('features')}
            className={`text-sm font-bold tracking-wide transition-opacity ${isActive('features') ? 'underline underline-offset-8 decoration-2' : 'hover:opacity-80'}`}
          >
            Platform Features
          </button>
          <button 
            onClick={() => onNavigate('knowledge')}
            className={`text-sm font-bold tracking-wide transition-opacity ${isActive('knowledge') ? 'underline underline-offset-8 decoration-2' : 'hover:opacity-80'}`}
          >
            About Shotengai
          </button>
          <button 
            onClick={() => onNavigate('blog')}
            className={`text-sm font-bold tracking-wide transition-opacity ${isActive('blog') ? 'underline underline-offset-8 decoration-2' : 'hover:opacity-80'}`}
          >
            Blog
          </button>
          <button 
            onClick={() => onNavigate('author')}
            className={`text-sm font-bold tracking-wide transition-opacity ${isActive('author') ? 'underline underline-offset-8 decoration-2' : 'hover:opacity-80'}`}
          >
            About the Author
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`text-sm font-bold tracking-wide transition-opacity ${isActive('contact') ? 'underline underline-offset-8 decoration-2' : 'hover:opacity-80'}`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <footer className="bg-[#111319] text-white py-16 mt-auto border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Brand Column */}
      <div className="space-y-6">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 hover:opacity-90">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48">
              <path d="M24 4L6 34h36L24 4zM24 14l11 18H13l11-18z"></path>
            </svg>
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight">Shotengaido</span>
        </button>
        <p className="text-slate-400 text-sm leading-relaxed">
          Connecting visitors with Japan's traditional shopping streets
        </p>
        <p className="text-[11px] text-slate-500 font-medium">
           © 2026 Shotengaido. All rights reserved.
        </p>
      </div>

      {/* Pages Column */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Platform</h4>
        <nav className="flex flex-col gap-4 text-sm text-slate-300">
          <button onClick={() => onNavigate('features')} className="text-left hover:text-white transition-colors">Platform Features</button>
          <button onClick={() => onNavigate('knowledge')} className="text-left hover:text-white transition-colors">Knowledge Base</button>
        </nav>
      </div>

      {/* Resources Column */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Resources</h4>
        <nav className="flex flex-col gap-4 text-sm text-slate-300">
          <button onClick={() => onNavigate('abstract')} className="text-left hover:text-white transition-colors">Scientific Abstract</button>
          <button onClick={() => onNavigate('author')} className="text-left hover:text-white transition-colors">Author Profile</button>
          <button onClick={() => onNavigate('blog')} className="text-left hover:text-white transition-colors">Research Blog</button>
        </nav>
      </div>

      {/* Support Column */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Support</h4>
        <nav className="flex flex-col gap-4 text-sm text-slate-300">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-left hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-left hover:text-white transition-colors">Terms of Service</a>
          <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition-colors">Contact Us</button>
        </nav>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} openNewsletter={() => setIsNewsletterOpen(true)} />;
      case 'blog': return <Blog />;
      case 'author': return <Author />;
      case 'knowledge': return <KnowledgeBase onNavigate={setCurrentPage} />;
      case 'features': return <FeaturesDetail onNavigate={setCurrentPage} openNewsletter={() => setIsNewsletterOpen(true)} />;
      case 'abstract': return <AbstractView onNavigate={setCurrentPage} />;
      case 'contact': return <Contact onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} openNewsletter={() => setIsNewsletterOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1 relative z-10">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </div>
  );
};

export default App;
