const ArticleReader = ({ article, ads, onBack, onUpdateArticle, onOpenModal }) => {
  const [comments, setComments] = React.useState(article.comments || []);
  const [newComment, setNewComment] = React.useState({ name: '', text: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const { Share2, ChevronLeft, MessageSquare, User, CheckCircle } = window.lucide;
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://aqmedtech.com';
  const shareMsg = encodeURIComponent(`📰 "${article.title}" — Read this on AQMedTech: ${shareUrl}`);
  const shareWA = `https://wa.me/?text=${shareMsg}`;
  
  const handleShare = () => window.open(shareWA, '_blank');
  
  const handleComment = (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.text.trim()) return;
    const comment = { id: Date.now(), name: newComment.name, text: newComment.text, date: new Date().toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' }), authorReply: null };
    const updated = [...comments, comment];
    setComments(updated);
    if (onUpdateArticle) onUpdateArticle({ ...article, comments: updated });
    setNewComment({ name: '', text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  // Split content into paragraphs
  const paragraphs = (article.content || '').split('\n\n').filter(p => p.trim());
  
  const initials = article.authorName.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
  const authorBg = article.authorRole === 'verified-doctor' ? '#0D9488' : '#2563EB';
  
  const featuredAd = ads && ads[0];
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back + Share bar */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-40 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
            <ChevronLeft size={16} /> Back to News
          </button>
          <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{background:'#25D366'}}>
            <Share2 size={14} /> Share on WhatsApp
          </button>
        </div>
      </div>
      
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-slate-200 overflow-hidden">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; }} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'}}></div>
      </div>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Meta header */}
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-teal-100 text-teal-800 mb-4 inline-block">{article.category}</span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm" style={{background:authorBg}}>
              {initials}
            </div>
            <div>
              <p className="font-bold text-slate-900">{article.authorName}</p>
              <p className="text-sm text-slate-500">{article.authorCredential}</p>
              <div className="flex items-center gap-2 mt-0.5">
                {article.authorRole === 'verified-doctor' && <span className="text-xs font-semibold text-teal-700">✅ Verified Medical Doctor</span>}
                {article.authorRole === 'tech-contributor' && <span className="text-xs font-semibold text-blue-700">✅ Tech Contributor</span>}
                <span className="text-xs text-slate-400">· {article.date} · {article.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content paragraphs with embedded ad after paragraph 3 */}
        <div className="prose max-w-none">
          {paragraphs.map((para, i) => (
            <React.Fragment key={i}>
              <p className="text-slate-700 text-lg leading-relaxed mb-5">{para}</p>
              {i === 2 && (
                <div className="my-8 not-prose">
                  {featuredAd && <MiniAdCard ad={featuredAd} />}
                  {/* AQMedTech hire banner */}
                  <div className="mt-4 p-5 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4" style={{background:'linear-gradient(135deg,#0F172A,#1e293b)'}}>
                    <div>
                      <p className="font-black text-lg">Need a Website or Health App?</p>
                      <p className="text-slate-300 text-sm">AQMedTech builds world-class digital solutions for health, business & e-commerce.</p>
                    </div>
                    <button onClick={() => onOpenModal && onOpenModal()} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm flex-shrink-0 transition-colors">
                      Hire AQMedTech →
                    </button>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom Share */}
        <div className="mt-8 p-5 bg-green-50 rounded-2xl border border-green-200 flex items-center justify-between">
          <div>
            <p className="font-bold text-slate-800">Found this article helpful?</p>
            <p className="text-sm text-slate-500">Share it with someone who needs to see it.</p>
          </div>
          <button onClick={handleShare} className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white" style={{background:'#25D366'}}>
            <Share2 size={14} /> Share
          </button>
        </div>
        
        {/* Comments */}
        <div className="mt-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <MessageSquare size={22} className="text-blue-600" />
            Reader Comments & Questions ({comments.length})
          </h2>
          
          {comments.map(comment => (
            <div key={comment.id} className="mb-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-sm">
                    {comment.name.substring(0,2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{comment.name}</p>
                    <p className="text-xs text-slate-400">{comment.date}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{comment.text}</p>
              </div>
              {comment.authorReply && (
                <div className="ml-6 mt-2 p-4 rounded-xl border-l-4 border-teal-500" style={{background:'#f0fdfa'}}>
                  <p className="text-xs font-bold text-teal-700 mb-1">✅ Author / Doctor Reply</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{comment.authorReply}</p>
                </div>
              )}
            </div>
          ))}
          
          {/* Comment form */}
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Post a Comment or Question</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl text-sm flex items-center gap-2">
                <CheckCircle size={16} /> Your comment has been posted!
              </div>
            )}
            <form onSubmit={handleComment} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name *"
                value={newComment.name}
                onChange={e => setNewComment(prev => ({...prev, name: e.target.value}))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-slate-800 text-sm"
                required
              />
              <textarea
                placeholder="Your comment or question... *"
                value={newComment.text}
                onChange={e => setNewComment(prev => ({...prev, text: e.target.value}))}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-slate-800 text-sm resize-none"
                required
              />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-colors">
                Post Comment →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

window.ArticleReader = ArticleReader;

