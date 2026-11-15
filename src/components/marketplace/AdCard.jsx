const AdCard = ({ ad, onWhatsAppClick }) => {
  const { Eye, MousePointer, MessageCircle } = window.lucide;
  
  const handleWA = () => {
    const msg = encodeURIComponent(`Hi! I saw "${ad.title}" on AQMedTech (priced at ${ad.price}) and I'm interested. Please share more details.`);
    window.open(`https://wa.me/${ad.sellerWhatsapp}?text=${msg}`, '_blank');
    if (onWhatsAppClick) onWhatsAppClick(ad.id);
  };
  
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Sponsored badge */}
      <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{background:'#D97706'}}>
        Sponsored
      </div>
      
      {/* Image */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <img
          src={ad.imageUrl}
          alt={ad.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display='none'; }}
        />
      </div>
      
      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-base leading-tight mb-1">{ad.title}</h3>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-blue-700 font-black text-xl">{ad.price}</span>
          {ad.priceUSD && <span className="text-slate-400 text-sm">({ad.priceUSD})</span>}
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-3 flex-1" style={{display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
          {ad.description}
        </p>
        
        <div className="text-xs text-slate-400 mb-2">Sold by: <span className="font-medium text-slate-600">{ad.sellerName}</span></div>
        
        {/* Stats */}
        <div className="flex gap-3 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1"><Eye size={11} /> {ad.views} views</span>
          <span className="flex items-center gap-1"><MousePointer size={11} /> {ad.clicks} clicks</span>
        </div>
        
        {/* WhatsApp CTA */}
        <button
          onClick={handleWA}
          className="w-full py-2.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{background:'#25D366'}}
        >
          <MessageCircle size={16} />
          Buy / Inquire via WhatsApp
        </button>
      </div>
    </div>
  );
};

window.AdCard = AdCard;

