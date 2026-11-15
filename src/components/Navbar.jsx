const Navbar = ({ currentPage, onNavigate, onOpenModal }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { Menu, X, Zap } = window.lucide;

  const navLinks = [
    { id: 'home', label: 'Home & Services' },
    { id: 'marketplace', label: 'Marketplace Ads' },
    { id: 'news', label: 'Health & Tech News' },
    { id: 'admin', label: 'Write / Admin' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{background:'rgba(15,23,42,0.96)', backdropFilter:'blur(12px)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#2563EB,#0D9488)'}}>
              <span className="text-white font-black text-xs">AQ</span>
            </div>
            <div>
              <span className="text-white font-black text-lg tracking-tight">AQMedTech</span>
              <div className="text-xs font-medium hidden sm:block" style={{color:'#0D9488'}}>Web Dev • Health-Tech • Ads & Insights</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === link.id
                    ? 'text-white border-b-2 border-teal-400'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenModal()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{background:'linear-gradient(135deg,#2563EB,#1D4ED8)'}}
            >
              <Zap size={14} />
              Hire Us / Advertise
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2" style={{background:'rgba(11,19,43,0.98)'}}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium my-1 transition-all ${
                currentPage === link.id
                  ? 'text-white bg-blue-600/20 text-teal-400'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onOpenModal(); setMobileOpen(false); }}
            className="w-full mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white"
            style={{background:'linear-gradient(135deg,#2563EB,#1D4ED8)'}}
          >
            ⚡ Hire Us / Advertise
          </button>
        </div>
      )}
    </nav>
  );
};

window.Navbar = Navbar;

