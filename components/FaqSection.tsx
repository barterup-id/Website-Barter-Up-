'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open like screenshot

  const faqs = [
    {
      q: 'Siapa saja yang boleh bergabung di Barter Up!?',
      a: 'Siapa saja yang ingin belajar dan bertumbuh! Mulai dari profesional korporat, freelancer, digital marketer, desainer, developer, hingga owner business yang ingin memperluas network dan ilmu.',
    },
    {
      q: 'Bagaimana sistem "barter" expertise di Barter Up!?',
      a: 'Sebelum sesi meetup dimulai, setiap peserta mengisi pemetaan singkat mengenai keahlian yang dikuasai dan kebutuhan bisnis yang sedang dihadapi. Di sesi networking meja terstruktur (roundtable matchmaking), fasilitator mengelompokkan peserta agar terjadi pertukaran wawasan yang seimbang dan solutif.',
    },
    {
      q: 'Apakah saya harus sudah punya bisnis sendiri untuk ikut?',
      a: 'Sama sekali enggak wajib. Ada beberapa peserta Barter Up! yang bahkan masih sekolah.',
    },
    {
      q: 'Seberapa sering meetup diadakan dan di mana lokasinya?',
      a: 'Acara networking diadakan setiap 1 kali dalam setiap bulan di area Jakarta pusat atau Jakarta Selatan. Di luar acara networking bulanan, ada juga acara ketemuan khusus untuk member yang sifatnya occassional.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#3B72EA] tracking-widest uppercase mb-2">
            QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight">
            FAQ
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0B2559] hover:text-blue-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : 'text-slate-400 bg-slate-50'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
