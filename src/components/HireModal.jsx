const HireModal = ({ isOpen, onClose, initialType }) => {
  const [step, setStep] = React.useState(1);
  const [selectedService, setSelectedService] = React.useState(initialType || null);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', budget: '', details: '' });
  const [success, setSuccess] = React.useState(false);
  const { X, Globe, Activity, Wrench, TrendingUp, CheckCircle, Send, Zap } = window.lucide;

  React.useEffect(() => {
    if (initialType) { setSelectedService(initialType); setStep(2); }
    else { setStep(1); setSelectedService(null); }
    setSuccess(false);
    setForm({ name: '', email: '', phone: '', budget: '', details: '' });
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const services = [
    { id: 'website', label: 'Build a Website', desc: 'Corporate, e-commerce, landing pages', icon: Globe, color: '#2563EB' },
    { id: 'healthapp', label: 'Develop a Health App', desc: 'Telemedicine, clinic, pharmacy apps', icon: Activity, color: '#0D9488' },
    { id: 'maintenance', label: 'Full-Stack Maintenance', desc: 'Bug fixes, upgrades, server mgmt', icon: Wrench, color: '#7C3AED' },
    { id: 'advertise', label: 'Advertise a Product', desc: 'Sponsor ad on AQMedTech platform', icon: TrendingUp, color: '#D97706' },
  ];

  const handleSendWA = () => {
    const svc = services.find(s => s.id === selectedService);
    const msg = encodeURIComponent(
      `Hello AQMedTech! I'd like to: *${svc?.label}*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBudget: ${form.budget}\n\nDetails:\n${form.details}\n\nPlease get in touch. Thank you!`
    );
    window.open(`https://wa.me/2348012345678?text=${msg}`, '_blank');
  };

  const handleSubmitDashboard = (e) => {
    e.preventDefault();
    const lead = { id: Date.now(), service: selectedService, ...form, submittedAt: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem('aqmt_leads') || '[]');
      localStorage.setItem('aqmt_leads', JSON.stringify([...existing, lead]));
    } catch(err) {}
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{background:'rgba(0,0,0,0.65)', backdropFilter:'blur(6px)'}}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 text-slate-500 z-10">
          <X size={20} />
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Request Sent! 🎉</h2>
              <p className="text-slate-500 mb-6">We'll review your request and contact you within 24 hours.</p>
              <button onClick={onClose} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold">Close</button>
            </div>
          ) : step === 1 ? (
            <>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={18} className="text-blue-600" />
                  <span className="text-blue-600 font-semibold text-sm">START A PROJECT</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">What can we help you with?</h2>
                <p className="text-slate-500 text-sm mt-1">Select a service to get started</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {services.map(svc => {
                  const Icon = svc.icon;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => { setSelectedService(svc.id); setStep(2); }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all hover:shadow-md ${selectedService === svc.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2" style={{background:svc.color+'20'}}>
                        <Icon size={18} style={{color:svc.color}} />
                      </div>
                      <p className="font-bold text-slate-900 text-sm">{svc.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{svc.desc}</p>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-700 text-sm mb-4 flex items-center gap-1">← Back</button>
              <h2 className="text-xl font-black text-slate-900 mb-1">Tell us about your project</h2>
              <p className="text-slate-400 text-sm mb-6">Service: <span className="font-semibold text-blue-600">{services.find(s=>s.id===selectedService)?.label}</span></p>
              <form onSubmit={handleSubmitDashboard} className="space-y-3">
                <input type="text" placeholder="Your Full Name *" required value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm" />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm" />
                <input type="tel" placeholder="Phone / WhatsApp Number *" required value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm" />
                <select value={form.budget} onChange={e=>setForm(p=>({...p,budget:e.target.value}))} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm text-slate-700">
                  <option value="">Budget Range</option>
                  <option>Under ₦100,000</option>
                  <option>₦100,000 – ₦500,000</option>
                  <option>₦500,000 – ₦2,000,000</option>
                  <option>₦2,000,000+</option>
                  <option>Let's Discuss</option>
                </select>
                <textarea placeholder="Project details, deadline, special requirements..." value={form.details} onChange={e=>setForm(p=>({...p,details:e.target.value}))} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none text-sm resize-none" />
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={handleSendWA} className="flex-1 py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2" style={{background:'#25D366'}}>
                    <Send size={14} /> Send via WhatsApp
                  </button>
                  <button type="submit" className="flex-1 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    Submit to Dashboard
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

window.HireModal = HireModal;

