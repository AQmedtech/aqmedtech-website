const MarketplacePage = ({ ads, onUpdateAds, onOpenModal }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const categories = ['All', 'Health & Wellness', 'Tech & Gadgets', 'Business Services', 'Fashion & Lifestyle'];

  const filteredAds = activeCategory === 'All'
    ? ads
    : ads.filter(ad => ad.category === activeCategory);

  const handleWhatsAppClick = (adId) => {
    const updated = ads.map(ad =>
      ad.id === adId ? { ...ad, clicks: (ad.clicks || 0) + 1 } : ad
    );
    if (onUpdateAds) onUpdateAds(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky category filter bar */}
      <div className="sticky top-0 z-20 bg-white shadow-sm px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-300 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Hero header */}
      <div className="py-10 px-4 text-white" style={{background:'#0F172A'}}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black mb-2">🛍️ Marketplace & Featured Ads</h1>
          <p className="text-slate-300 text-base">
            Discover quality products & services, connect with sellers instantly via WhatsApp
          </p>
        </div>
      </div>

      {/* Ad grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAds.map(ad => (
            <AdCard key={ad.id} ad={ad} onWhatsAppClick={handleWhatsAppClick} />
          ))}

          {/* Advertise CTA card */}
          <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-8 text-center min-h-64">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Advertise Your Product Here</h3>
            <p className="text-slate-500 text-sm mb-4">
              Reach thousands of daily visitors on AQMedTech. <br/>
              <strong>Prices start from ₦10,000/week.</strong>
            </p>
            <button
              onClick={() => onOpenModal('advertise')}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Place Your Ad Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.MarketplacePage = MarketplacePage;

