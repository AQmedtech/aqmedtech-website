const Services = ({ onOpenModal }) => {
  const { Monitor, Activity, Code2, TrendingUp } = window.lucide;

  const services = [
    {
      icon: Monitor,
      iconBg: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
      title: 'Custom Website Development',
      desc: 'Corporate sites, e-commerce stores, landing pages & portals tailored to your brand identity and conversion goals.',
    },
    {
      icon: Activity,
      iconBg: 'linear-gradient(135deg,#0D9488,#0F766E)',
      title: 'Health Application Development',
      desc: 'Telemedicine platforms, clinic management systems, pharmacy apps, medical education tools & patient portals.',
    },
    {
      icon: Code2,
      iconBg: 'linear-gradient(135deg,#7C3AED,#6D28D9)',
      title: 'Full-Stack Engineering & Maintenance',
      desc: 'Complete web applications, API architecture, database design, security hardening & 24/7 server maintenance.',
    },
    {
      icon: TrendingUp,
      iconBg: 'linear-gradient(135deg,#D97706,#B45309)',
      title: 'Product & Business Advertising',
      desc: 'Promote your products & brand to thousands of AQMedTech daily visitors with premium sponsored placements.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
            style={{ color: '#0D9488', background: 'rgba(13,148,136,0.10)' }}
          >
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Transform Your Digital Vision
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-xl mx-auto">
            End-to-end digital solutions for healthcare innovators and businesses ready to grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: svc.iconBg }}
                >
                  <Icon size={22} color="#fff" />
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>

                {/* CTA */}
                <button
                  onClick={() => onOpenModal()}
                  className="mt-5 text-sm font-semibold text-blue-600 hover:underline text-left transition-all"
                >
                  Book This Service →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Services = Services;

