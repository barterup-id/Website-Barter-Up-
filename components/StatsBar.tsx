'use client';

export default function StatsBar() {
  const stats = [
    {
      value: '500+',
      label: 'MEMBERS',
      subtext: 'Diversed professionals and founders',
    },
    {
      value: '15+',
      label: 'MONTHLY EDITIONS',
      subtext: 'Consistently Hosted in 2024-2025',
    },
    {
      value: '15+',
      label: 'INDUSTRY MENTORS',
      subtext: 'With 7+ Years Experience',
    },
    {
      value: '12+',
      label: 'PARTNERS',
      subtext: 'From UMKM, venue, and media',
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-b from-[#F0F5FF]/80 to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 text-center border border-slate-100 shadow-[0_4px_16px_rgba(37,99,235,0.04)] hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
