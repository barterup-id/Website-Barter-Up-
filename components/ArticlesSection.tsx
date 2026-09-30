'use client';

import {useState} from 'react';
import {Clock, ArrowRight} from 'lucide-react';
import {ArticleItem} from './modals/ArticleReaderModal';

interface ArticlesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export default function ArticlesSection({onSelectArticle}: ArticlesSectionProps) {
  const [activeFilter, setActiveFilter] = useState('Semua Topik');

  const filterTabs = ['Semua Topik', 'Social Commerce', 'Growth & Barter'];

  const articles: (ArticleItem & {filterTag: string})[] = [
    {
      id: 'organic-reach',
      filterTag: 'Social Commerce',
      category: 'SOCIAL COMMERCE & TIKTOK',
      categoryTheme: 'bg-blue-100 text-blue-800',
      readTime: '5 min read',
      title: 'Strategi Membangun Organic Reach & Funnel Penjualan Tanpa Bakar Uang Iklan',
      summary:
        'Kupas tuntas formula hook 3 detik, live stream interaktif, dan cara mendatangkan leads berkualitas tanpa harus bergantung pada budget ads besar.',
      author: 'Oleh Leonita Nerisa',
      keyTakeaways: [
        '3 detik pertama menentukan retensi penonton hingga 60% lebih lama',
        'Live stream interaktif bukan sekadar jualan, melainkan ajang tanya jawab konsultatif',
        'Bangun database leads langsung ke WhatsApp/CRM daripada membiarkan traffic menguap',
      ],
      content: [
        'Banyak brand UMKM terjebak dalam siklus ketergantungan pada paid traffic berbiaya tinggi. Ketika budget habis, konversi seketika anjlok. Di sesi Barter Up! bulan lalu, kami membedah bagaimana konten organik terstruktur dapat menjadi aset jangka panjang yang terus menghasilkan lead.',
        'Kuncinya bukan memproduksi puluhan video acak setiap hari, melainkan memahami pemicu emosional audiens dalam 3 detik pembuka: sajikan masalah nyata yang mereka hadapi saat ini juga, lalu berikan solusi instan yang bisa langsung diuji coba.',
        'Melalui kombinasi cerita otentik di balik layar dan sesi live shopping berbasis edukasi, sebuah brand fashion lokal anggota Barter Up! berhasil mencatat lonjakan penjualan 300% secara organik tanpa menaikkan alokasi iklan berbayar sepeser pun.',
      ],
    },
    {
      id: 'barter-keahlian',
      filterTag: 'Growth & Barter',
      category: 'NETWORKING & KOLABORASI',
      categoryTheme: 'bg-yellow-100 text-yellow-900',
      readTime: '4 min read',
      title: "Seni 'Barter Keahlian': Cara Brand UMKM Bertumbuh Saling Menguatkan",
      summary:
        'Bagaimana menukar keahlian branding, copywriting, hingga operational template secara adil dan etis untuk mengakselerasi sesama founder lokal.',
      author: 'Tim Barter Up!',
      keyTakeaways: [
        'Tentukan nilai waktu dan output yang setara sebelum memulai barter',
        'Gunakan perjanjian sederhana tertulis agar ekspektasi kedua belah pihak jelas',
        'Fokus pada win-win impact jangka panjang, bukan hitungan transaksional sempit',
      ],
      content: [
        'Barter keahlian adalah cara paling elegan bagi para profesional muda dan founder rintisan untuk memangkas kurva belajar tanpa harus mengeluarkan biaya konsultasi puluhan juta rupiah.',
        'Misalnya, seorang copywriter yang membutuhkan audit website bisa menukar 3 artikel SEO berkualitas tinggi dengan sesi perbaikan kode dari seorang web developer berpengalaman. Keduanya mendapatkan output berkualitas tinggi dengan investasi tenaga keahlian masing-masing.',
        'Di komunitas Barter Up!, kami menyusun formulir pemetaan kompetensi terstruktur sehingga setiap anggota dapat menemukan rekan barter yang tepat dengan nilai pertukaran yang adil dan transparan.',
      ],
    },
    {
      id: 'personal-branding',
      filterTag: 'Growth & Barter',
      category: 'PERSONAL BRANDING',
      categoryTheme: 'bg-lime-100 text-lime-900',
      readTime: '6 min read',
      title: 'Pilar Membangun Kepercayaan Digital untuk Founder & Creative Agency',
      summary:
        'Framework storytelling portfolio di LinkedIn dan Instagram untuk menembus pasar B2B serta menarik klien potensial secara berulang.',
      author: 'Praktisi Barter Up!',
      keyTakeaways: [
        'Orang membeli dari orang yang mereka percaya dan kenal ceritanya',
        'Dokumentasikan proses kerja dan kegagalan yang berhasil diatasi',
        'Sertakan bukti konkret angka dan testimoni klien dalam setiap studi kasus',
      ],
      content: [
        'Di era kecerdasan buatan dan otomatisasi, diferensiasi terbesar seorang profesional atau agensi kreatif terletak pada reputasi dan kedalaman perspektif pribadinya.',
        'Alih-alih hanya memamerkan hasil visual yang sudah jadi, founder yang sukses membangun trust digital selalu menceritakan proses di baliknya: mengapa keputusan tertentu diambil, bagaimana tantangan teknis diselesaikan, dan dampak riil apa yang dirasakan klien.',
        'Ketika personal brand Anda terbangun kokoh, negosiasi harga tidak lagi menjadi beban, dan calon klien berkualitas tinggi akan datang dengan sendirinya melalui jalur inbound referral.',
      ],
    },
  ];

  const filteredArticles =
    activeFilter === 'Semua Topik'
      ? articles
      : articles.filter((a) => a.filterTag === activeFilter || a.category.includes(activeFilter.toUpperCase()));

  return (
    <section id="artikel" className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title on Left, Filter Pills on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold text-[#3B72EA] tracking-widest uppercase mb-2">
              INSIGHT &amp; READS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight mb-3">
              Artikel &amp; Bacaan Praktis Komunitas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Pelajari insight praktis seputar social commerce, personal branding, kolaborasi UMKM, dan strategi growth dari para praktisi Barter Up!.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200/80 shrink-0 self-start md:self-auto overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Read Time Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${article.categoryTheme}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">{article.author}</span>
                <span className="inline-flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={() => onSelectArticle(articles[0])}
            className="inline-flex items-center gap-2 bg-[#FEF08A] hover:bg-[#FDE047] text-slate-900 border border-yellow-300 font-bold text-sm px-7 py-3.5 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-98"
          >
            <span>Lihat Semua Artikel di Blog Barter Up!</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
