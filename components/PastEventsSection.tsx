'use client';

import Image from 'next/image';
import {EventDetailItem} from './modals/EventDetailModal';

interface PastEventsSectionProps {
  onSelectEvent: (event: EventDetailItem) => void;
}

export default function PastEventsSection({onSelectEvent}: PastEventsSectionProps) {
  const events: EventDetailItem[] = [
    {
      id: 'remote-job',
      badge: 'ENGLISH NETWORKING',
      badgeColor: 'bg-yellow-400 text-slate-900',
      title: 'Landing a Remote Job',
      date: 'Sabtu, 24 Mei 2025',
      location: 'Kuningan City, Jakarta Selatan',
      attendees: '38 Peserta (Full Booked)',
      speaker: 'Reza Malik (Remote Senior PM at US Tech Startup)',
      highlights: [
        'Bedah resume standar ATS untuk pasar US & Eropa',
        'Simulasi mock interview dalam Bahasa Inggris dengan feedback langsung',
        'Strategi negosiasi rate gaji USD dan setup kontrak legal remote',
      ],
      imageSrc: '/images/remote_job.jpg',
    },
    {
      id: 'funding',
      badge: 'FOUNDERS CLUB',
      badgeColor: 'bg-blue-600 text-white',
      title: 'How to Get Funding for Your Business',
      date: 'Sabtu, 14 Juni 2025',
      location: 'Senayan City Coworking Lounge',
      attendees: '42 Founders & Angels',
      speaker: 'Dimas Aditya (Managing Partner, Early-stage Seed Fund)',
      highlights: [
        'Kapan bisnis UMKM butuh investor equity vs pinjaman modal kerja',
        'Struktur deck 10 slide yang disukai angel investor lokal',
        'Tanya jawab buka-bukaan valuasi dan term sheet investasi',
      ],
      imageSrc: '/images/funding.jpg',
    },
    {
      id: 'workplace',
      badge: 'CAREER & WELLBEING',
      title: 'How to Survive a Demanding Workplace',
      date: 'Sabtu, 26 Juli 2025',
      location: 'Pintar Campus, Senayan',
      attendees: '35 Corporate Professionals',
      speaker: 'Clarissa H. (HR Business Partner & Leadership Coach)',
      highlights: [
        'Strategi menetapkan batasan (boundary setting) tanpa terlihat pasif',
        'Navigasi komunikasi dengan atasan micromanagement',
        'Framework pemulihan burnout dan evaluasi kapan saatnya pindah kerja',
      ],
      imageSrc: '/images/workplace.jpg',
    },
    {
      id: 'social-media',
      badge: 'MARKETING OPS',
      title: 'Social Media 101',
      date: 'Sabtu, 16 Agustus 2025',
      location: 'Senopati Creative Studio',
      attendees: '40 Content Creators & Brand Owners',
      speaker: 'Amrritsa Raje (Content Strategist)',
      highlights: [
        'Content pillars yang terbukti menghasilkan konversi penjualan',
        'Algoritma short-form video (Reels & TikTok) kuartal terkini',
        'Workshop langsung: Bedah script video 30 detik untuk brand peserta',
      ],
      imageSrc: '/images/social_media.jpg',
    },
    {
      id: 'women-business',
      badge: 'COMMUNITY SPECIAL',
      title: 'All-Women Networking: Women in Business',
      date: 'Sabtu, 20 September 2025',
      location: 'Menteng Heritage Pavilion',
      attendees: '50 Women Leaders & Entrepreneurs',
      speaker: 'Nadia Sastrawan (Founder, EcoBeauty Indonesia)',
      highlights: [
        'Kisah jatuh bangun membangun brand wanita dari garasi ke retail nasional',
        'Sesi barter keahlian khusus: Supplier chain, packaging, dan B2B wholesale',
        'Circle pertemanan supportif untuk founder perempuan Jabodetabek',
      ],
      imageSrc: '/images/women_business.jpg',
    },
  ];

  return (
    <section id="dokumentasi" className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight">
            Sneak Peek Acara Sebelumnya
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="space-y-6">
          
          {/* Top Row: 2 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Event 1 */}
            <div
              onClick={() => onSelectEvent(events[0])}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-900 aspect-16/10"
            >
              <Image
                src={events[0].imageSrc}
                alt={events[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/10" />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-300 text-slate-950 shadow-sm">
                  {events[0].badge}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-yellow-300 transition-colors">
                  {events[0].title}
                </h3>
              </div>
            </div>

            {/* Event 2 */}
            <div
              onClick={() => onSelectEvent(events[1])}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-900 aspect-16/10"
            >
              <Image
                src={events[1].imageSrc}
                alt={events[1].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/10" />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3B72EA] text-white shadow-sm">
                  {events[1].badge}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-yellow-300 transition-colors">
                  {events[1].title}
                </h3>
              </div>
            </div>

          </div>

          {/* Bottom Row: 3 Medium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Event 3 */}
            <div
              onClick={() => onSelectEvent(events[2])}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 aspect-16/11 sm:col-span-1"
            >
              <Image
                src={events[2].imageSrc}
                alt={events[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/10" />

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                  {events[2].title}
                </h4>
              </div>
            </div>

            {/* Event 4 */}
            <div
              onClick={() => onSelectEvent(events[3])}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 aspect-16/11 sm:col-span-1"
            >
              <Image
                src={events[3].imageSrc}
                alt={events[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/10" />

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                  {events[3].title}
                </h4>
              </div>
            </div>

            {/* Event 5 */}
            <div
              onClick={() => onSelectEvent(events[4])}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 aspect-16/11 sm:col-span-2 lg:col-span-1"
            >
              <Image
                src={events[4].imageSrc}
                alt={events[4].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/10" />

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-yellow-300 transition-colors">
                  {events[4].title}
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
