const ArticleCard = ({ article, onClick }) => {
  const { Clock, Calendar, MessageSquare } = window.lucide;
  
  const categoryColors = {
    'Health & Medicine': { bg: 'bg-teal-100', text: 'text-teal-800' },
    'Tech & Innovation': { bg: 'bg-blue-100', text: 'text-blue-800' },
    'Business Growth': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
    'Opportunities': { bg: 'bg-amber-100', text: 'text-amber-800' },
  };
  const color = categoryColors[article.category] || { bg: 'bg-slate-100', text: 'text-slate-800' };
  
  const initials = article.authorName.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
  const authorBg = article.authorRole === 'verified-doctor' ? '#0D9488' : '#2563EB';
  
  const excerpt = (article.content || '').substring(0, 140) + '...';
  
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden flex flex-col group"
    >
      {/* Cover */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display='none'; }} />
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${color.bg} ${color.text}`}>{article.category}</span>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-slate-900 text-lg leading-snug mb-3" style={{display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
          {article.title}
        </h3>
        
        {/* Author */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{background: authorBg}}>
            {initials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 text-sm truncate">{article.authorName}</p>
            <p className="text-xs text-slate-400 truncate">{article.authorCredential}</p>
          </div>
          {article.authorRole === 'verified-doctor' && (
            <span className="ml-auto flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700">✅ Doctor</span>
          )}
          {article.authorRole === 'tech-contributor' && (
            <span className="ml-auto flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">✅ Tech</span>
          )}
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
        
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {article.date}</span>
          <span className="flex items-center gap-1"><MessageSquare size={11} /> {(article.comments || []).length} comments</span>
        </div>
      </div>
    </div>
  );
};

window.ArticleCard = ArticleCard;

