const AdminPortal = ({ articles, ads, portfolio, onUpdateArticles, onUpdateAds, onUpdatePortfolio }) => {
  const [authed, setAuthed] = React.useState(false);
  const [contributorMode, setContributorMode] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('write');
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const [articleForm, setArticleForm] = React.useState({
    title: '', category: 'Health & Medicine', authorName: '', authorCredential: '',
    authorRole: 'tech-contributor', coverImage: '', content: ''
  });
  const [articleSuccess, setArticleSuccess] = React.useState(false);

  const [adForm, setAdForm] = React.useState({
    title: '', price: '', priceUSD: '', category: 'Health & Wellness',
    description: '', sellerName: '', sellerWhatsapp: '', imageUrl: ''
  });
  const [adSuccess, setAdSuccess] = React.useState(false);

  const [portfolioForm, setPortfolioForm] = React.useState({
    title: '', subtitle: '', category: 'Full-Stack', description: '',
    techStackInput: '', imageUrl: '', liveUrl: '#', year: new Date().getFullYear()
  });
  const [portfolioSuccess, setPortfolioSuccess] = React.useState(false);

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm bg-white";
  const labelCls = "block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1";

  const handleLogin = () => {
    if (password === 'aqmedtech2024') {
      setAuthed(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password');
    }
  };

  const handlePublishArticle = (e) => {
    e.preventDefault();
    const wordCount = articleForm.content.trim().split(/\s+/).filter(Boolean).length;
    const readTime = Math.ceil(wordCount / 200) + ' min';
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const newArticle = {
      id: Date.now(),
      title: articleForm.title,
      category: articleForm.category,
      authorName: articleForm.authorName,
      authorCredential: articleForm.authorCredential,
      authorRole: articleForm.authorRole,
      coverImage: articleForm.coverImage,
      content: articleForm.content,
      date: dateStr,
      readTime,
      comments: [],
    };
    onUpdateArticles([...articles, newArticle]);
    setArticleForm({ title: '', category: 'Health & Medicine', authorName: '', authorCredential: '', authorRole: 'tech-contributor', coverImage: '', content: '' });
    setArticleSuccess(true);
    setTimeout(() => setArticleSuccess(false), 3000);
  };

  const handleAddAd = (e) => {
    e.preventDefault();
    const newAd = {
      id: Date.now(),
      ...adForm,
      views: 0,
      clicks: 0,
      featured: false,
    };
    onUpdateAds([...ads, newAd]);
    setAdForm({ title: '', price: '', priceUSD: '', category: 'Health & Wellness', description: '', sellerName: '', sellerWhatsapp: '', imageUrl: '' });
    setAdSuccess(true);
    setTimeout(() => setAdSuccess(false), 3000);
  };

  const handleAddPortfolio = (e) => {
    e.preventDefault();
    const techStack = portfolioForm.techStackInput.split(',').map(t => t.trim()).filter(Boolean);
    const newProject = {
      id: Date.now(),
      title: portfolioForm.title,
      subtitle: portfolioForm.subtitle,
      category: portfolioForm.category,
      description: portfolioForm.description,
      techStack,
      imageUrl: portfolioForm.imageUrl,
      liveUrl: portfolioForm.liveUrl || '#',
      year: portfolioForm.year,
      featured: false,
    };
    onUpdatePortfolio([...portfolio, newProject]);
    setPortfolioForm({ title: '', subtitle: '', category: 'Full-Stack', description: '', techStackInput: '', imageUrl: '', liveUrl: '#', year: new Date().getFullYear() });
    setPortfolioSuccess(true);
    setTimeout(() => setPortfolioSuccess(false), 3000);
  };

  // ── LOGIN SCREEN ─────────────────────────────────────────────────────────────
  if (!authed && !contributorMode) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔐</div>
            <h1 className="text-2xl font-black text-slate-900">AQMedTech Portal</h1>
            <p className="text-slate-400 text-sm mt-1">Admin & Contributor Access</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className={labelCls}>Admin Password</label>
              <input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={e => { setPassword(e.target.value); setLoginError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                className={inputCls}
              />
              {loginError && (
                <p className="text-red-500 text-xs mt-1 font-medium">{loginError}</p>
              )}
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm"
            >
              Enter Admin Portal
            </button>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-sm">— or —</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <button
            onClick={() => setContributorMode(true)}
            className="w-full py-3 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 font-semibold rounded-xl transition-all text-sm"
          >
            ✍️ Contributor Mode (Writers / Doctors)
          </button>
        </div>
      </div>
    );
  }

  // ── PORTAL SCREEN ─────────────────────────────────────────────────────────────
  const tabs = [
    { id: 'write', label: '✍️ Write Article', adminOnly: false },
    { id: 'ads', label: '📦 Manage Ads', adminOnly: true },
    { id: 'portfolio', label: '🏗️ Portfolio', adminOnly: true },
  ].filter(t => !t.adminOnly || authed);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-900">
            {authed ? '🔐 Admin Portal' : '✍️ Contributor Portal'}
          </h1>
          <p className="text-slate-400 text-xs mt-0.5">AQMedTech Innovations</p>
        </div>
        <button
          onClick={() => { setAuthed(false); setContributorMode(false); setPassword(''); }}
          className="text-sm text-slate-400 hover:text-slate-700 font-medium"
        >
          Sign Out
        </button>
      </div>

      {/* Tab Bar */}
      <div className="bg-white border-b border-slate-200 px-6">
        <div className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-6">

        {/* ── WRITE ARTICLE TAB ───────────────────────────────────────────────── */}
        {activeTab === 'write' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-black text-slate-900 mb-1">Publish a New Article</h2>
            <p className="text-slate-400 text-sm mb-6">Fill in the details below to contribute an article to AQMedTech.</p>

            {articleSuccess && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold flex items-center gap-2">
                ✅ Article published successfully!
              </div>
            )}

            <form onSubmit={handlePublishArticle} className="space-y-4">
              <div>
                <label className={labelCls}>Article Title *</label>
                <input
                  type="text"
                  placeholder="e.g. The Future of Telemedicine in Nigeria"
                  required
                  value={articleForm.title}
                  onChange={e => setArticleForm(p => ({...p, title: e.target.value}))}
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Category</label>
                  <select
                    value={articleForm.category}
                    onChange={e => setArticleForm(p => ({...p, category: e.target.value}))}
                    className={inputCls}
                  >
                    <option>Health &amp; Medicine</option>
                    <option>Tech &amp; Innovation</option>
                    <option>Business Growth</option>
                    <option>Opportunities</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Author Role</label>
                  <select
                    value={articleForm.authorRole}
                    onChange={e => setArticleForm(p => ({...p, authorRole: e.target.value}))}
                    className={inputCls}
                  >
                    <option value="verified-doctor">Verified Doctor</option>
                    <option value="tech-contributor">Tech Contributor</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Author Name</label>
                  <input
                    type="text"
                    placeholder="Dr. John Doe"
                    value={articleForm.authorName}
                    onChange={e => setArticleForm(p => ({...p, authorName: e.target.value}))}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Author Credential</label>
                  <input
                    type="text"
                    placeholder="MBBS / Medical Doctor"
                    value={articleForm.authorCredential}
                    onChange={e => setArticleForm(p => ({...p, authorCredential: e.target.value}))}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Cover Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={articleForm.coverImage}
                  onChange={e => setArticleForm(p => ({...p, coverImage: e.target.value}))}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Article Content *</label>
                <textarea
                  placeholder="Write your full article content here..."
                  required
                  value={articleForm.content}
                  onChange={e => setArticleForm(p => ({...p, content: e.target.value}))}
                  rows={10}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm"
              >
                Publish Article
              </button>
            </form>
          </div>
        )}

        {/* ── MANAGE ADS TAB ───────────────────────────────────────────────────── */}
        {activeTab === 'ads' && authed && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-lg font-black text-slate-900 mb-1">Add New Advertisement</h2>
              <p className="text-slate-400 text-sm mb-6">Create a new sponsored listing on the AQMedTech marketplace.</p>

              {adSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold">
                  ✅ Ad added successfully!
                </div>
              )}

              <form onSubmit={handleAddAd} className="space-y-4">
                <div>
                  <label className={labelCls}>Ad Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Premium Digital Blood Pressure Monitor"
                    required
                    value={adForm.title}
                    onChange={e => setAdForm(p => ({...p, title: e.target.value}))}
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className={labelCls}>Price (₦)</label>
                    <input
                      type="text"
                      placeholder="₦45,000"
                      value={adForm.price}
                      onChange={e => setAdForm(p => ({...p, price: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Price (USD)</label>
                    <input
                      type="text"
                      placeholder="$28"
                      value={adForm.priceUSD}
                      onChange={e => setAdForm(p => ({...p, priceUSD: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Category</label>
                    <select
                      value={adForm.category}
                      onChange={e => setAdForm(p => ({...p, category: e.target.value}))}
                      className={inputCls}
                    >
                      <option>Health &amp; Wellness</option>
                      <option>Tech &amp; Gadgets</option>
                      <option>Business Services</option>
                      <option>Fashion &amp; Lifestyle</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Description</label>
                  <textarea
                    placeholder="Describe the product or service..."
                    value={adForm.description}
                    onChange={e => setAdForm(p => ({...p, description: e.target.value}))}
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Seller Name</label>
                    <input
                      type="text"
                      placeholder="HealthFirst Nigeria"
                      value={adForm.sellerName}
                      onChange={e => setAdForm(p => ({...p, sellerName: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Seller WhatsApp</label>
                    <input
                      type="text"
                      placeholder="2348012345678"
                      value={adForm.sellerWhatsapp}
                      onChange={e => setAdForm(p => ({...p, sellerWhatsapp: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Product Image URL</label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={adForm.imageUrl}
                    onChange={e => setAdForm(p => ({...p, imageUrl: e.target.value}))}
                    className={inputCls}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Add Advertisement
                </button>
              </form>
            </div>

            {/* Current Ads List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-base font-black text-slate-900 mb-4">Current Ads ({ads.length})</h3>
              {ads.length === 0 ? (
                <p className="text-slate-400 text-sm">No ads yet.</p>
              ) : (
                <div className="space-y-3">
                  {ads.map(ad => (
                    <div key={ad.id} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:bg-slate-50">
                      {ad.imageUrl && (
                        <img src={ad.imageUrl} alt={ad.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm truncate">{ad.title}</p>
                        <p className="text-slate-400 text-xs">{ad.category} · {ad.price} · {ad.sellerName}</p>
                      </div>
                      <button
                        onClick={() => onUpdateAds(ads.filter(a => a.id !== ad.id))}
                        className="px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors flex-shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PORTFOLIO TAB ────────────────────────────────────────────────────── */}
        {activeTab === 'portfolio' && authed && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-lg font-black text-slate-900 mb-1">Add Portfolio Project</h2>
              <p className="text-slate-400 text-sm mb-6">Showcase a new project on the AQMedTech portfolio.</p>

              {portfolioSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold">
                  ✅ Project added successfully!
                </div>
              )}

              <form onSubmit={handleAddPortfolio} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Project Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. PharmaQuiz AI"
                      required
                      value={portfolioForm.title}
                      onChange={e => setPortfolioForm(p => ({...p, title: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Subtitle</label>
                    <input
                      type="text"
                      placeholder="e.g. Interactive Pharmacology Platform"
                      value={portfolioForm.subtitle}
                      onChange={e => setPortfolioForm(p => ({...p, subtitle: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Category</label>
                    <select
                      value={portfolioForm.category}
                      onChange={e => setPortfolioForm(p => ({...p, category: e.target.value}))}
                      className={inputCls}
                    >
                      <option>Full-Stack</option>
                      <option>Health-Tech</option>
                      <option>E-Commerce</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Year</label>
                    <input
                      type="number"
                      placeholder="2024"
                      value={portfolioForm.year}
                      onChange={e => setPortfolioForm(p => ({...p, year: parseInt(e.target.value)}))}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Description</label>
                  <textarea
                    placeholder="Describe what this project does and the impact it made..."
                    value={portfolioForm.description}
                    onChange={e => setPortfolioForm(p => ({...p, description: e.target.value}))}
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelCls}>Tech Stack (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="React, Node.js, PostgreSQL, AWS"
                    value={portfolioForm.techStackInput}
                    onChange={e => setPortfolioForm(p => ({...p, techStackInput: e.target.value}))}
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Project Image URL</label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={portfolioForm.imageUrl}
                      onChange={e => setPortfolioForm(p => ({...p, imageUrl: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Live URL</label>
                    <input
                      type="text"
                      placeholder="https://project.example.com"
                      value={portfolioForm.liveUrl}
                      onChange={e => setPortfolioForm(p => ({...p, liveUrl: e.target.value}))}
                      className={inputCls}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Add Project
                </button>
              </form>
            </div>

            {/* Current Portfolio List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-base font-black text-slate-900 mb-4">Current Projects ({portfolio.length})</h3>
              {portfolio.length === 0 ? (
                <p className="text-slate-400 text-sm">No projects yet.</p>
              ) : (
                <div className="space-y-3">
                  {portfolio.map(proj => (
                    <div key={proj.id} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:bg-slate-50">
                      {proj.imageUrl && (
                        <img src={proj.imageUrl} alt={proj.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm truncate">{proj.title}</p>
                        <p className="text-slate-400 text-xs">{proj.category} · {proj.year}</p>
                        {proj.techStack && proj.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {proj.techStack.slice(0,4).map((t,i) => (
                              <span key={i} className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-xs rounded">{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => onUpdatePortfolio(portfolio.filter(p => p.id !== proj.id))}
                        className="px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors flex-shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

window.AdminPortal = AdminPortal;

