const MiniAdCard = ({ ad, onWhatsAppClick }) => {
  if (!ad) return null;
  const { MessageCircle } = window.lucide;
  
  const handleWA = () => {
    const msg = encodeURIComponent(`Hi! I saw "${ad.title}" on AQMedTech and I'm interested.`);
    window.open(`https://wa.me/${ad.sellerWhatsapp}?text=${msg}`, '_blank');
    if (onWhatsAppClick) onWhatsAppClick(ad.id);
  };
  
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-slate-100 p-3 hover:shadow-md transition-all">
      <div className="relative flex-shrink-0">
        <div className="absolute -top-1 -left-1 z-10 px-1.5 py-0.5 rounded-full text-xs font-bold text-white" style={{background:'#D97706',fontSize:'9px'}}>
          AD
        </div>
        <img src={ad.imageUrl} alt={ad.title} className="w-16 h-16 rounded-lg object-cover bg-slate-100" onError={(e) => { e.target.style.display='none'; }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-400 font-medium">Featured Product</p>
        <h4 className="font-bold text-slate-800 text-sm leading-tight truncate">{ad.title}</h4>
        <p className="text-blue-700 font-black text-sm">{ad.price}</p>
      </div>
      <button
        onClick={handleWA}
        className="flex-shrink-0 px-3 py-2 rounded-lg text-xs font-semibold text-white"
        style={{background:'#25D366'}}
      >
        <MessageCircle size={14} />
      </button>
    </div>
  );
};

window.MiniAdCard = MiniAdCard;

