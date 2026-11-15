// AQMedTech Innovations — Main Application Integrator
// Plain React JSX — Loaded via Babel standalone

const App = () => {
  // Ensure seed data is initialized in localStorage
  React.useEffect(() => {
    if (window.aqmtData && window.aqmtData.initializeData) {
      window.aqmtData.initializeData();
    }
  }, []);

  const [currentPage, setCurrentPage] = React.useState('home');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);

  // Reactive state synced with localStorage
  const [ads, setAds] = React.useState(() => {
    return window.aqmtData
      ? window.aqmtData.loadData('aqmt_ads', window.aqmtData.SEED_ADS)
      : [];
  });

  const [articles, setArticles] = React.useState(() => {
    return window.aqmtData
      ? window.aqmtData.loadData('aqmt_articles', window.aqmtData.SEED_ARTICLES)
      : [];
  });

  const [portfolio, setPortfolio] = React.useState(() => {
    return window.aqmtData
      ? window.aqmtData.loadData('aqmt_portfolio', window.aqmtData.PORTFOLIO_PROJECTS)
      : [];
  });

  // State updaters with automatic persistence
  const updateAds = (newAds) => {
    setAds(newAds);
    if (window.aqmtData) window.aqmtData.saveData('aqmt_ads', newAds);
  };

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
    if (window.aqmtData) window.aqmtData.saveData('aqmt_articles', newArticles);
  };

  const handleUpdateSingleArticle = (updatedArticle) => {
    const updated = articles.map((a) => (a.id === updatedArticle.id ? updatedArticle : a));
    updateArticles(updated);
  };

  const updatePortfolio = (newPortfolio) => {
    setPortfolio(newPortfolio);
    if (window.aqmtData) window.aqmtData.saveData('aqmt_portfolio', newPortfolio);
  };

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (type = null) => {
    setModalType(type);
    setModalOpen(true);
  };

  // Expose global navigation helpers for deep buttons
  React.useEffect(() => {
    window.aqmt = { navigate, openModal };
  }, [ads, articles, portfolio]);

  const {
    ShieldCheck,
    Cpu,
    MessageCircle,
    Clock,
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    CheckCircle,
    Eye,
    MousePointer,
    Calendar,
    MessageSquare,
    Zap,
    Sparkles
  } = window.lucide || {};

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. STICKY TOP NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenModal={() => openModal()}
      />

      {/* 2. DYNAMIC MAIN VIEW */}
      <main className="flex-1 pt-16">
        {currentPage === 'home' && (
          <div>
            {/* HERO */}
            <Hero onOpenModal={() => openModal()} onNavigate={navigate} />

            {/* SERVICES */}
            <Services onOpenModal={() => openModal()} />

            {/* HOME PAGE PREVIEW 1: TOP FEATURED PRODUCT ADS */}
            <section className="py-16 bg-slate-100 border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                  <div>
                    <span className="text-xs font-bold text-amber-600 tracking-wider uppercase bg-amber-100 px-3 py-1 rounded-full">
                      Marketplace Highlights
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-2">
                      Featured Products & Deals
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 max-w-xl">
                      Verified medical gear, tech accessories, and business solutions from trusted sellers. Connect instantly on WhatsApp.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('marketplace')}
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View All Ads in Marketplace {ArrowRight && <ArrowRight size={16} />}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ads.slice(0, 3).map((ad) => (
                    <AdCard
                      key={ad.id}
                      ad={ad}
                      onWhatsAppClick={(adId) => {
                        const updated = ads.map((item) =>
                          item.id === adId ? { ...item, clicks: (item.clicks || 0) + 1 } : item
                        );
                        updateAds(updated);
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* PORTFOLIO SHOWCASE */}
            <Portfolio projects={portfolio} onOpenModal={() => openModal()} />

            {/* HOME PAGE PREVIEW 2: LATEST DOCTOR & TECH ARTICLES */}
            <section className="py-16 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                  <div>
                    <span className="text-xs font-bold text-teal-700 tracking-wider uppercase bg-teal-100 px-3 py-1 rounded-full">
                      Expert Publications
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-2">
                      Doctor & Health-Tech Insights
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 max-w-xl">
                      Practical medical advisories and technical guides published by licensed medical doctors and tech innovators.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('news')}
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Browse All Articles & Discussions {ArrowRight && <ArrowRight size={16} />}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {articles.slice(0, 3).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={() => navigate('news')}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* TRUST & WHY CHOOSE US */}
            <section className="py-20 text-white relative overflow-hidden" style={{ background: '#0F172A' }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-900/50 px-3 py-1 rounded-full border border-teal-800">
                    Why AQMedTech
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black mt-3">
                    Engineered for Trust, Speed & Conversion
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-2">
                    We bridge the gap between rigorous medical technology requirements and commercial growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xl mb-4">
                      🏥
                    </div>
                    <h3 className="text-lg font-bold mb-2">Medical-Grade Precision</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Compliant, secure patient workflows designed in collaboration with certified healthcare practitioners.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold text-xl mb-4">
                      ⚡
                    </div>
                    <h3 className="text-lg font-bold mb-2">Blazing Fast Software</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Modern React, Next.js, and mobile-optimized interfaces that load under 1.2s even on slow 3G networks.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xl mb-4">
                      💬
                    </div>
                    <h3 className="text-lg font-bold mb-2">WhatsApp Funnel Integration</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Direct 1-click WhatsApp triggers that convert cold inquiries into active sales discussions instantly.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xl mb-4">
                      🛡️
                    </div>
                    <h3 className="text-lg font-bold mb-2">24/7 Managed Support</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Proactive database backups, uptime monitoring, bug patches, and continuous feature expansion.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CALL TO ACTION BANNER */}
            <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 text-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  Ready to Build Your Website or Scale Your Business?
                </h2>
                <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8">
                  Get a free technical consultation and fixed-price quote from our lead architects within 24 hours.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => openModal('website')}
                    className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    🚀 Request a Website / App
                  </button>
                  <button
                    onClick={() => openModal('advertise')}
                    className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
                  >
                    📢 Place an Advertisement
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'marketplace' && (
          <MarketplacePage
            ads={ads}
            onUpdateAds={updateAds}
            onOpenModal={(type) => openModal(type)}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage
            articles={articles}
            ads={ads}
            onUpdateArticle={handleUpdateSingleArticle}
            onOpenModal={() => openModal()}
          />
        )}

        {currentPage === 'admin' && (
          <AdminPortal
            articles={articles}
            ads={ads}
            portfolio={portfolio}
            onUpdateArticles={updateArticles}
            onUpdateAds={updateAds}
            onUpdatePortfolio={updatePortfolio}
          />
        )}
      </main>

      {/* 3. EXECUTIVE FOOTER */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 cursor-pointer mb-4" onClick={() => navigate('home')}>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#0D9488)' }}
                >
                  <span className="text-white font-black text-sm">AQ</span>
                </div>
                <div>
                  <span className="text-white font-black text-xl tracking-tight">AQMedTech</span>
                  <div className="text-xs font-semibold" style={{ color: '#0D9488' }}>
                    Innovations
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                High-performance website development, custom medical & health software, and high-converting product advertising. Designed for African and global healthcare pioneers.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: '#25D366' }}
                >
                  💬 Chat on WhatsApp
                </a>
                <button
                  onClick={() => openModal()}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  ⚡ Hire Agency
                </button>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => navigate('home')} className="hover:text-white transition-colors">
                    Home & Services
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('marketplace')} className="hover:text-white transition-colors">
                    Marketplace Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('news')} className="hover:text-white transition-colors">
                    Health & Tech News
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('admin')} className="hover:text-white transition-colors">
                    Doctor / Admin Portal
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => openModal('website')} className="hover:text-white transition-colors">
                    Custom Web Development
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('healthapp')} className="hover:text-white transition-colors">
                    Health App Engineering
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('maintenance')} className="hover:text-white transition-colors">
                    Server & App Maintenance
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('advertise')} className="hover:text-white transition-colors">
                    Product Advertising
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Office */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                Contact & Hub
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 mt-0.5">📍</span>
                  <span>Lagos, Nigeria & Remote Worldwide</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-teal-400">📧</span>
                  <a href="mailto:abdullahiabdulqaharak@gmail.com" className="hover:text-white truncate">
                    abdullahiabdulqaharak@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-green-400">📱</span>
                  <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer" className="hover:text-white">
                    +234 801 234 5678
                  </a>
                </li>
                <li className="pt-2">
                  <div className="text-xs text-slate-500">Admin Passcode: <span className="font-mono text-slate-400">aqmedtech2024</span></div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 AQMedTech Innovations. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-300 cursor-pointer">Doctor Contributor Guidelines</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. MODAL: LEAD CAPTURE & AD INQUIRY */}
      <HireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
};

// Mount the root React application
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
