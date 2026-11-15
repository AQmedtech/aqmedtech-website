const Hero = ({ onOpenModal, onNavigate }) => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#0F172A' }}
    >
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.18) 0%, rgba(13,148,136,0.10) 50%, transparent 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-24 left-10 w-72 h-72 rounded-full blur-3xl z-0"
        style={{ background: 'rgba(37,99,235,0.22)', opacity: 0.25 }}
      />
      <div
        className="absolute bottom-24 right-10 w-80 h-80 rounded-full blur-3xl z-0"
        style={{ background: 'rgba(13,148,136,0.28)', opacity: 0.22 }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl z-0"
        style={{
          background: 'rgba(99,102,241,0.15)',
          opacity: 0.20,
          transform: 'translate(-60%, -40%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
          style={{
            background: 'rgba(37,99,235,0.15)',
            borderColor: 'rgba(37,99,235,0.35)',
            color: '#93C5FD',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block animate-pulse" />
          Nigeria's Premier Health-Tech & Digital Agency
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
          We Build{' '}
          <span
            style={{
              background: 'linear-gradient(90deg,#60A5FA,#2DD4BF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            High-Performance Websites,
          </span>{' '}
          Custom Health Applications &amp; Drive Traffic to Your Business.
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          From telemedicine platforms to e-commerce powerhouses — we design,
          build, and scale digital products for healthcare professionals and
          businesses across Africa and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={() => onOpenModal()}
            className="px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', boxShadow: '0 8px 32px rgba(37,99,235,0.35)' }}
          >
            🚀 Request a Website / App
          </button>
          <button
            onClick={() => onOpenModal()}
            className="px-8 py-4 rounded-2xl text-base font-bold border-2 transition-all hover:bg-teal-400/10 transform hover:scale-105"
            style={{ borderColor: '#0D9488', color: '#2DD4BF' }}
          >
            📢 Advertise Your Product
          </button>
        </div>

        {/* Trust stats bar */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            '✅ Full-Stack Web & Mobile',
            '✅ Health-Tech Specialists',
            '✅ 24/7 App Maintenance',
            '✅ High-Traffic Ad Network',
          ].map((stat) => (
            <span
              key={stat}
              className="px-4 py-2 rounded-full text-sm text-white font-medium border"
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)' }}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50">
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
};

window.Hero = Hero;

