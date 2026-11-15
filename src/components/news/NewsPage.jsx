const NewsPage = ({ articles, ads, onUpdateArticle, onOpenModal }) => {
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const categories = ['All', 'Health & Medicine', 'Tech & Innovation', 'Business Growth', 'Opportunities'];
  
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);
  
  if (selectedArticle) {
    return (
      <ArticleReader
        article={selectedArticle}
        ads={ads}
        onBack={() => setSelectedArticle(null)}
        onUpdateArticle={(updated) => {
          onUpdateArticle(updated);
          setSelectedArticle(updated);
        }}
        onOpenModal={onOpenModal}
      />
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="py-14 px-4 text-center text-white" style={{background:'linear-gradient(135deg,#0F172A 0%,#1e3a5f 100%)'}}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-400 mb-3">HEALTH & TECH NEWS HUB</div>
        <h1 className="text-3xl md:text-4xl font-black mb-3">Expert Articles & Insights</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-base">Published by verified doctors, health professionals & tech writers. Read, learn, comment.</p>
      </div>
      
      {/* Category filter */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-blue-600 text-white' : 'border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(article => (
          <ArticleCard key={article.id} article={article} onClick={() => setSelectedArticle(article)} />
        ))}
      </div>
    </div>
  );
};

window.NewsPage = NewsPage;

