'use client';

import {TestimonialItem} from './modals/StoryTestimonialModal';
import {Play} from 'lucide-react';

interface TestimonialsSectionProps {
  onSelectTestimonial: (item: TestimonialItem) => void;
}

export default function TestimonialsSection({onSelectTestimonial}: TestimonialsSectionProps) {
  const testimonials: TestimonialItem[] = [
    {
      id: 'kazuki',
      name: 'Kazuki Tanaka',
      role: 'Full-stack Developer & Tech Lead',
      avatarText: 'KT',
      avatarBg: 'bg-amber-500',
      buttonLabel: '⭐ What Kazuki Says',
      quote:
        'Awalnya saya skeptis sama networking formal. Tapi di Barter Up!, saya barter pemahaman technical architecture API dengan arahan sales B2B funnel dari seorang VP Sales. Pertukaran 45 menit yang jauh lebih berdampak dari kursus berbayar!',
      barteredSkill: 'Cloud API & Tech Stack Architecture',
      receivedSkill: 'B2B Outbound Sales Framework',
      impact: 'Mendapatkan 2 klien corporate baru via playbook B2B sales yang dipelajari.',
      edition: 'Edisi 12 (Kuningan)',
    },
    {
      id: 'they-say',
      name: 'Budi & Siska',
      role: 'Founders, Artisan Ceramics Studio',
      avatarText: 'BS',
      avatarBg: 'bg-emerald-600',
      buttonLabel: '💚 What They Say',
      quote:
        'Kami butuh cara masuk ke pasar retail modern tapi buntu di legalitas & proposal vendor. Di meja barter, kami dibantu reviewer legalitas UMKM. Sebagai gantinya, kami sharing strategi live streaming TikTok craft. Saling melengkapi tanpa hitung-hitungan!',
      barteredSkill: 'TikTok Live Shopping & Creative Crafting',
      receivedSkill: 'Standarisasi Kontrak & Legalitas Vendor UMKM',
      impact: 'Produk keramik kami berhasil masuk 4 outlet concept store ternama di Senopati.',
      edition: 'Edisi 14 (Senayan)',
    },
    {
      id: 'farah-fadel',
      name: 'Farah & Fadel',
      role: 'Co-Founders, Coldbrew Coffee Roastery',
      avatarText: 'FF',
      avatarBg: 'bg-yellow-500',
      buttonLabel: '💛 What Farah & Fadel Say',
      quote:
        'Vibe Barter Up! itu beneran zero-ego. Nggak ada yang sok paling pinter. Mau lu founder seasoned atau baru mulai ide jualan, semuanya disambut hangat. Kopi kami bahkan jadi official beverage partner di meetup berikutnya!',
      barteredSkill: 'F&B Costing, Bean Sourcing & Inventory Control',
      receivedSkill: 'Performance Marketing Meta Ads Scaling',
      impact: 'CPA iklan turun 32% dan ROAS naik ke 4.8x setelah rombak struktur visual ads.',
      edition: 'Edisi 13 (Menteng)',
    },
    {
      id: 'dani',
      name: 'Dani Wardhana',
      role: 'Lead Product UI/UX Designer',
      avatarText: 'DW',
      avatarBg: 'bg-fuchsia-600',
      buttonLabel: '🦄 What Dani Says',
      quote:
        'Sebagai introvert, datang ke event biasa itu melelahkan. Tapi mekanisme matchmaking meja di Barter Up! bikin kita langsung punya topik obrolan terarah. Dalam 2 jam, saya dapat feedback copywriting landing page dari 3 copywriter handal!',
      barteredSkill: 'Figma Design System & Mobile UX Audit',
      receivedSkill: 'Direct Response Copywriting & Hook Writing',
      impact: 'Conversion rate landing page SaaS pribadi melonjak dari 2.1% ke 5.8%.',
      edition: 'Edisi 15 (Senayan)',
    },
    {
      id: 'rachel',
      name: 'Rachel Amanda',
      role: 'Performance Marketer & Growth Consultant',
      avatarText: 'RA',
      avatarBg: 'bg-teal-600',
      buttonLabel: '🌿 What Rachel Says',
      quote:
        'Di sini saya ketemu partner co-founder bisnis baru saya. Energinya sangat positif, orang-orangnya berkelas dan tulus ingin bertumbuh bareng. Komunitas terbaik di Jakarta buat cari partner kolaborasi nyata.',
      barteredSkill: 'Google Search Ads & Tracking GA4',
      receivedSkill: 'Human Resource Hiring & Compensation Benchmark',
      impact: 'Membangun agensi kolaboratif bersama 2 member yang ditemui di sesi networking.',
      edition: 'Edisi 11 (SCBD)',
    },
  ];

  return (
    <section id="what-they-say" className="py-14 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#3B72EA] tracking-widest uppercase mb-2">
            WHAT THEY SAY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight">
            What Barter Buddies Say
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTestimonial(item)}
              className="group cursor-pointer relative h-[360px] sm:h-[400px] rounded-3xl p-5 border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Decorative Curved / Striped Pattern representing the card aesthetic in screenshot */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none group-hover:opacity-[0.12] transition-opacity">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`stripe-${item.id}`} width="30" height="30" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="30" stroke="#000000" strokeWidth="2.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#stripe-${item.id})`} />
                </svg>
              </div>

              {/* Top Card Area: Avatar and Play indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl ${item.avatarBg} text-white font-black flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform`}>
                  {item.avatarText}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#3B72EA] group-hover:text-white text-slate-500 flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Middle preview snippet */}
              <div className="relative z-10 my-auto text-left py-4">
                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span>{item.edition.split(' ')[1]}</span>
                </div>
              </div>

              {/* Bottom Tag / Button matching screenshot */}
              <div className="relative z-10 pt-2">
                <div className="w-full text-center py-2 px-3 rounded-full text-xs font-bold transition-all duration-200 border shadow-2xs group-hover:shadow bg-slate-50 border-slate-200/90 text-slate-800 group-hover:border-blue-300">
                  {item.buttonLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
