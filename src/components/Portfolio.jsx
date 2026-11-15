const Portfolio = ({ projects, onOpenModal }) => {
  const categoryColors = {
    'Health-Tech': { badge: 'rgba(13,148,136,0.12)', text: '#0D9488', border: 'rgba(13,148,136,0.3)' },
    'E-Commerce':  { badge: 'rgba(16,185,129,0.12)', text: '#059669', border: 'rgba(16,185,129,0.3)' },
    'Full-Stack':  { badge: 'rgba(37,99,235,0.12)',  text: '#2563EB', border: 'rgba(37,99,235,0.3)'  },
  };

  const getColors = (category) =>
    categoryColors[category] || { badge: 'rgba(100,116,139,0.12)', text: '#64748B', border: 'rgba(100,116,139,0.3)' };

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 inline-block leading-tight">
            Featured Portfolio Projects
          </h2>
          <div
            className="mt-3 mx-auto rounded-full h-1 w-20"
            style={{ background: 'linear-gradient(90deg,#2563EB,#0D9488)' }}
          />
          <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
            Real-world applications we have designed, built, and shipped for clients across healthcare and business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(projects || []).map((project) => {
            const colors = getColors(project.category);
            return (
              <div
                key={project.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
              >
                {/* Image / Fallback */}
                <div className="relative h-56 w-full overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback gradient */}
                  <div
                    className="w-full h-full items-center justify-center text-5xl"
                    style={{
                      display: project.imageUrl ? 'none' : 'flex',
                      background: 'linear-gradient(135deg,#1E293B,#0F172A)',
                    }}
                  >
                    🖥️
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-sm px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{ background: colors.badge, color: colors.text, borderColor: colors.border }}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{project.title}</h3>
                  {/* Subtitle */}
                  <p className="text-sm text-slate-500 font-medium mt-0.5 mb-2">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-700 text-xs rounded-full px-2 py-0.5 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => onOpenModal()}
                    className="mt-4 text-sm font-semibold text-blue-600 hover:underline transition-all"
                  >
                    Request a Similar App →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Portfolio = Portfolio;

