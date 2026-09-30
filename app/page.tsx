'use client';

import {useState} from 'react';
import Image from 'next/image';
import {
  Menu,
  X,
  ArrowRight,
  Calendar,
  MapPin,
  BookOpen,
  TrendingUp,
  Mic,
  BadgeCheck,
  ArrowLeftRight,
  Handshake,
  Coffee,
  Heart,
  Star,
  Lightbulb,
  Rocket,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronRight,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
} from 'lucide-react';
import ArticleReaderModal, {ArticleItem} from '@/components/modals/ArticleReaderModal';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [articleFilter, setArticleFilter] = useState('Semua Topik');

  const articlesData: (ArticleItem & {filterCategory: string})[] = [
    {
      id: 'organic-reach',
      filterCategory: 'Social Commerce',
      category: 'Social Commerce & TikTok',
      categoryTheme: 'bg-[#6695fc] text-white',
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
      filterCategory: 'Growth & Barter',
      category: 'Networking & Kolaborasi',
      categoryTheme: 'bg-[#f9fe8f] text-[#0c48a4] border border-[#0c48a4]/20',
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
      filterCategory: 'Growth & Barter',
      category: 'Personal Branding',
      categoryTheme: 'bg-[#b4e26d] text-[#0c48a4] border border-[#0c48a4]/15',
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
    articleFilter === 'Semua Topik'
      ? articlesData
      : articlesData.filter((a) => a.filterCategory === articleFilter);

  return (
    <>
      {/* TOP BANNER */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="bg-[#6695fc] text-white border-b border-[#6695fc]/20 px-4 py-2 flex items-center justify-center gap-2 shadow-sm text-center text-xs md:text-sm font-semibold"></div>
        {/* MAIN NAVBAR */}
        <div className="bg-white/95 backdrop-blur-xl border-b border-[#6695fc]/20 shadow-[0_2px_15px_rgba(12,72,164,0.06)]">
          <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
            <a className="flex items-center gap-3 group focus:outline-none" href="#">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCshxCKmFtpYeK8RJd5l9-k4qxnW2QFbCv1nJNB238M_ucnNe0eCAAwR7ifa84fT1hPhy9kagm8t0g5sS6wsCDVqKQUHJXNIw6QCPlNWbqhsgOB_m0lEyw4OGqv2yoLSXd1J1S7EX6RLVPflvHKALE_gnxUL3Dzemv3rfDGU5Uv2q_2aZHb4en3fYO2kr73F0YZwrqiRWA4WM87wb7vceHlW2fUNq6ja4sbVD36dIpPwpDD1hm4n284XSYlluRsFC4t13p0moeA5suMyg"
                alt="Barter Up! Logo"
                width={170}
                height={50}
                priority
                referrerPolicy="no-referrer"
                className="h-12 md:h-12 w-auto object-contain bg-transparent max-h-12"
                style={{height: '50px', width: 'auto', maxHeight: '52px'}}
              />
            </a>
            
            <nav className="hidden lg:flex items-center gap-1.5 bg-[#f2f6ff] p-1.5 rounded-2xl border border-[#6695fc]/20">
              <a className="px-3 py-2 transition-all bg-[#6695fc] text-white font-bold rounded-xl shadow-sm text-sm" href="#tentang">
                About Us
              </a>
              <a className="px-3 py-2 rounded-xl text-[#0c48a4]/80 font-medium text-sm transition-all hover:bg-white hover:text-[#6695fc]" href="#cara-kerja">
                How We Roll
              </a>
              <a className="px-3 py-2 rounded-xl text-[#0c48a4]/80 font-medium text-sm transition-all hover:bg-white hover:text-[#6695fc]" href="#galeri">
                Dokumentasi
              </a>
              <a className="px-3 py-2 rounded-xl text-[#0c48a4]/80 font-medium text-sm transition-all hover:bg-white hover:text-[#6695fc]" href="#jadwal">
                What They Say
              </a>
              <a className="px-3 py-2 rounded-xl text-[#0c48a4]/80 font-medium text-sm transition-all hover:bg-white hover:text-[#6695fc]" href="#artikel">
                Artikel &amp; Insight
              </a>
              <a className="px-3 py-2 rounded-xl text-[#0c48a4]/80 font-medium text-sm transition-all hover:bg-white hover:text-[#6695fc]" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#6695fc] text-white font-bold text-sm shadow-lg shadow-[#6695fc]/30 hover:bg-[#0c48a4] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#6695fc]"
                href="https://wa.link/5ta2ei"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>You have a question? 💬</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0c48a4] hover:bg-[#f2f6ff] rounded-xl border border-[#6695fc]/20"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#6695fc]/20 bg-white px-4 py-3 space-y-1 shadow-lg">
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4] font-bold text-sm bg-[#f2f6ff]"
                href="#tentang"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4]/80 font-medium text-sm hover:bg-[#f2f6ff]"
                href="#cara-kerja"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Roll
              </a>
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4]/80 font-medium text-sm hover:bg-[#f2f6ff]"
                href="#galeri"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dokumentasi
              </a>
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4]/80 font-medium text-sm hover:bg-[#f2f6ff]"
                href="#jadwal"
                onClick={() => setMobileMenuOpen(false)}
              >
                What They Say
              </a>
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4]/80 font-medium text-sm hover:bg-[#f2f6ff]"
                href="#artikel"
                onClick={() => setMobileMenuOpen(false)}
              >
                Artikel &amp; Insight
              </a>
              <a
                className="block px-3 py-2 rounded-lg text-[#0c48a4]/80 font-medium text-sm hover:bg-[#f2f6ff]"
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="w-full pt-28">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section
            className="relative w-full overflow-hidden px-4 md:px-8 lg:px-12 py-12 lg:py-20 bg-gradient-to-b from-[#f2f6ff] to-[#ffffff]"
            id="tentang"
          >
            {/* Background playful circles */}
            <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#6695fc]/10 blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#f9fe8f]/30 blur-3xl -z-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start gap-5 z-10">
                {/* Neo-Playful Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f9fe8f] text-[#0c48a4] text-xs uppercase tracking-wider font-extrabold border border-[#0c48a4]/20 shadow-sm transform -rotate-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff25af] animate-ping"></span>
                  <span>est. 2024 • 500+ MEMBERS from diverse sectors</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0c48a4] tracking-tight leading-[1.15]">
                  Cross-Industry Learning. Expand Network.<br />
                  <span className="relative inline-block text-[#6695fc] mt-1">
                    Find Your People.
                    <svg
                      className="absolute -bottom-2 left-0 w-full text-[#ff25af]"
                      fill="none"
                      height="12"
                      viewBox="0 0 300 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 9.5C65.5 2.5 145.5 2.5 297.5 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="5"
                      ></path>
                    </svg>
                  </span>
                </h1>

                <div className="text-base md:text-lg text-[#0c48a4]/80 max-w-2xl font-normal leading-relaxed">
                  Barter Up! is a collaborative&nbsp;
                  <span style={{fontSize: '1.125rem'}}>
                    peer-to-peer learning &amp; networking community that empowers professionals and SMEs to upskill through cross-industry expertise exchange. If you love meeting new people while learning a new skill, you come to the right place!
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#6695fc] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#6695fc]/35 hover:bg-[#0c48a4] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#6695fc]"
                    href="https://chat.whatsapp.com/LxzJMUjgtnx8BFfTpCHvDm"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Join Our Community&nbsp;👊</span>
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </a>

                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#f9fe8f] text-[#0c48a4] font-bold text-sm hover:bg-[#eff476] transition-all shadow-md border border-[#0c48a4]/20 hover:-translate-y-0.5"
                    href="https://wa.link/yfqox4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 text-[#0c48a4]" />
                    <span>Check Next Networking Event</span>
                  </a>
                </div>

                {/* Social proof strip */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full bg-[#6695fc] text-white flex items-center justify-center font-bold text-xs shadow-sm border-2 border-white">
                      FD
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#f9fe8f] text-[#0c48a4] flex items-center justify-center font-bold text-xs shadow-sm border-2 border-white">
                      MK
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#b4e26d] text-[#0c48a4] flex items-center justify-center font-bold text-xs shadow-sm border-2 border-white">
                      PM
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#ff25af] text-white flex items-center justify-center font-bold text-xs shadow-sm border-2 border-white">
                      300+
                    </div>
                  </div>
                  <p className="text-sm text-[#0c48a4]/80">
                    <strong className="text-[#0c48a4] font-bold">500+ Founders &amp; Professionals</strong>&nbsp;members across Jabodetabek.
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Showcase Photo with Neo Badges */}
              <div className="lg:col-span-5 relative w-full flex justify-center items-center mt-6 lg:mt-0">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#6695fc]/30 group bg-white">
                    <div className="relative w-full h-[380px] sm:h-[440px]">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB29kh5XySojiRYi0ok1oSXrAYPjz6Uvd7uX1zxdlAd-Qdqa1oPvQx9PBnRJIL3qaP5MP-_6m6Z-Tko84W1LOzyje33SzUDM5IJoitrVTp9u7bXdkMqqB_6unzjTwf7IiVeBfFYr3IFoP1cOFm-o7wV0E0emYeN5qfYep-2tnND6mkTPRF0tZN_MFPShdHRDRLr51Wl8xChmK4W6UFrdew14unrjmsqg58CxI78C295Q7PFab1rbAirxIyzBRoldM4A-tu5CPPQpRr9Ww"
                        alt="Suasana Networking dan Barter Keahlian Barter Up Jakarta"
                        fill
                        priority
                        referrerPolicy="no-referrer"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{objectPosition: 'center 25%'}}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/90 via-[#0c48a4]/20 to-transparent flex flex-col justify-end p-5 sm:p-6 z-10 pointer-events-none">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#b4e26d] text-[#0c48a4] text-[11px] font-black uppercase tracking-wide border border-[#0c48a4]/15">
                          sneak peek
                        </span>
                        <span className="text-[11px] font-semibold text-white/90 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#f9fe8f]" />
                          Pintar Campus, Senayan
                        </span>
                      </div>
                      <h4 className="text-white font-extrabold text-base sm:text-lg leading-snug">
                        Grow Your Social Media, Grow Your Business
                      </h4>
                      <p className="text-xs text-white/80 mt-1 line-clamp-1">
                        With Amritsa Raje (@amritsaraje)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS & IMPACT METRICS STRIP */}
          <section className="w-full bg-[#f2f6ff] py-12 px-4 md:px-8 lg:px-12 border-y border-[#6695fc]/20">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white shadow-sm border border-[#6695fc]/20 hover:-translate-y-0.5 transition-transform">
                <span className="text-4xl md:text-5xl font-black text-[#6695fc]">500+</span>
                <span className="text-sm font-bold text-[#0c48a4] uppercase tracking-wider">Members</span>
                <span className="text-xs text-[#0c48a4]/70">Diversed professionals and founders</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white shadow-sm border border-[#6695fc]/20 hover:-translate-y-0.5 transition-transform">
                <span className="text-4xl md:text-5xl font-black text-[#0c48a4]">15+</span>
                <span className="text-sm font-bold text-[#0c48a4] uppercase tracking-wider">Monthly Editions</span>
                <span className="text-xs text-[#0c48a4]/70">Consistently Hosted in 2024-2025</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white shadow-sm border border-[#6695fc]/20 hover:-translate-y-0.5 transition-transform">
                <span className="text-4xl md:text-5xl font-black text-[#ff25af]">15+</span>
                <span className="text-sm font-bold text-[#0c48a4] uppercase tracking-wider">Industry Mentors</span>
                <span className="text-xs text-[#0c48a4]/70">With 7+ Years Experience</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-5 rounded-2xl bg-white shadow-sm border border-[#6695fc]/20 hover:-translate-y-0.5 transition-transform">
                <span className="text-4xl md:text-5xl font-black text-[#0c48a4]">12+</span>
                <span className="text-sm font-bold text-[#0c48a4] uppercase tracking-wider">Partners</span>
                <span className="text-xs text-[#0c48a4]/70">From UMKM, venue, and media</span>
              </div>
            </div>
          </section>

          {/* WHAT IS BARTER UP? (THE 4 CORE PILLARS) */}
          <section className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-white" id="cara-kerja">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="text-xs uppercase text-[#6695fc] font-black tracking-widest">
                    a fun yet high quality learning
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight leading-snug">
                    Barter Up! is for you if you like...
                  </h2>
                </div>
              </div>

              {/* Bento Grid of 4 Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col justify-between p-7 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#6695fc] flex items-center justify-center text-white shadow-md shadow-[#6695fc]/30 group-hover:rotate-6 transition-transform">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase text-[#6695fc] tracking-widest font-black">Pillar 01</span>
                    <h3 className="text-lg font-bold text-[#0c48a4]">Curated Monthly Topic</h3>
                    <p className="text-sm text-[#0c48a4]/75 leading-relaxed">
                      Setiap bulan membedah tema krusial: Performance Marketing, B2B Sales Funnel, TikTok Live Ops, hingga Legalitas UMKM.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[#6695fc] font-bold text-xs border-t border-[#6695fc]/15">
                    <span>Focused agenda</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                {/* Card 2 (Highlighted) */}
                <div className="flex flex-col justify-between p-7 rounded-3xl bg-gradient-to-br from-[#0c48a4] to-[#123877] text-white shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f9fe8f] flex items-center justify-center text-[#0c48a4] shadow-md group-hover:-rotate-6 transition-transform">
                      <Mic className="w-6 h-6 text-[#0c48a4]" />
                    </div>
                    <span className="text-xs uppercase text-[#f9fe8f] tracking-widest font-black">Pillar 02</span>
                    <h3 className="text-lg font-bold text-white">Practitioner Mentorship</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Bukan sekadar pembicara motivasi, tapi Head of Growth dan founder UMKM berpengalaman 7-10+ tahun yang buka-bukaan playbook asli.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[#b4e26d] font-bold text-xs border-t border-white/20">
                    <span>Verified Track Record</span>
                    <BadgeCheck className="w-4 h-4 text-[#b4e26d]" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col justify-between p-7 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f9fe8f] border border-[#0c48a4]/20 flex items-center justify-center text-[#0c48a4] shadow-md group-hover:rotate-6 transition-transform">
                      <ArrowLeftRight className="w-6 h-6 text-[#0c48a4]" />
                    </div>
                    <span className="text-xs uppercase text-[#0c48a4] tracking-widest font-black">Pillar 03</span>
                    <h3 className="text-lg font-bold text-[#0c48a4]">Structured Skill Barter</h3>
                    <p className="text-sm text-[#0c48a4]/75 leading-relaxed">
                      Punya skill copywriting tapi butuh arahan Google Ads? Matchmaking terstruktur mempertemukan kebutuhan spesifik kamu dalam satu meja.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[#0c48a4] font-bold text-xs border-t border-[#6695fc]/15">
                    <span>Direct Win-Win Exchange</span>
                    <Handshake className="w-4 h-4 text-[#0c48a4]" />
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col justify-between p-7 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ff25af] flex items-center justify-center text-white shadow-md shadow-[#ff25af]/30 group-hover:-rotate-6 transition-transform">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase text-[#ff25af] tracking-widest font-black">Pillar 04</span>
                    <h3 className="text-lg font-bold text-[#0c48a4]">Zero-Ego Atmosphere</h3>
                    <p className="text-sm text-[#0c48a4]/75 leading-relaxed">
                      Suasana hangat di cafe atau co-working space estetik. Bebas basa-basi formalitas, semua hadir untuk saling bantu dan berkolaborasi.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[#ff25af] font-bold text-xs border-t border-[#6695fc]/15">
                    <span>High Warmth &amp; Trust</span>
                    <Heart className="w-4 h-4 fill-current text-[#ff25af]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW AN EVENT WORKS (STEP BY STEP) */}
          <section className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-[#f2f6ff] border-y border-[#6695fc]/20" id="jadwal">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
                <span className="text-xs uppercase text-[#6695fc] font-black tracking-widest">how we roll</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight">
                  How to Optimize Your Barter Up! Experience
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {/* Step 1 */}
                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#6695fc]/20 shadow-sm relative hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#f2f6ff] border-2 border-[#6695fc] text-[#6695fc] flex items-center justify-center text-lg font-black">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-[#0c48a4]">Networking &amp; Learning</h4>
                  <p className="text-sm text-[#0c48a4]/75">
                    Datang untuk tambah relasi baru sambil belajar topik dari expert speaker. We encourage you to bring your business card and business samples!
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#6695fc]/20 shadow-sm relative hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#6695fc] text-white flex items-center justify-center text-lg font-black shadow-md">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-[#0c48a4]">Barter Your Expertise</h4>
                  <p className="text-sm text-[#0c48a4]/75">
                    Gunakan waktu networking untuk sekaligus belajar dari sesama peserta. Jangan lupa untuk &quot;barter&quot; skill kamu juga ya!
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#6695fc]/20 shadow-sm relative hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#f9fe8f] text-[#0c48a4] border border-[#0c48a4]/30 flex items-center justify-center text-lg font-black shadow-sm">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-[#0c48a4]">Join Community</h4>
                  <p className="text-sm text-[#0c48a4]/75">
                    Gabung grup WhatsApp community Barter Up! untuk tambah relasi, share insight, dan saling bantu sesama member
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#6695fc]/20 shadow-sm relative hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#b4e26d] text-[#0c48a4] border border-[#0c48a4]/30 flex items-center justify-center text-lg font-black shadow-sm">
                    4
                  </div>
                  <h4 className="text-lg font-bold text-[#0c48a4]">You Can Help Too!</h4>
                  <p className="text-sm text-[#0c48a4]/75">
                    We receive requests from our members too! Whether it&apos;s a topic you want to learn or a new way of learning, our ears are open!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* COMMUNITY MOMENTS & ACTION GALLERY */}
          <section className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-white" id="galeri">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight">
                    Sneak Peek Acara Sebelumnya
                  </h2>
                </div>
              </div>

              {/* Photo Mosaic Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
                {/* Big Showcase Left Column (7 cols) */}
                <div className="md:col-span-2 lg:col-span-7 flex flex-col gap-5">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#6695fc]/30 group h-80 sm:h-96">
                    <Image
                      alt="Peserta Barter Up berfoto bersama banner networking di Jakarta"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9GPoDrQhT640kEpwQCYWyieD5X62FbJgMSj5IUwTQIqmwaDQsIL-98Y_tynHdwtMlFON3T71Zvx0Si6ZAY_peIQZELVOlubOusGojP2dW-_3pIKi_s9LZuP3KNV56taMXRt8k-EOr9VZ3wmQTZKYlFHdlB48oyPrrDRdGVXsPrGUnR5Ux6txRt_t2QSf-ETHN6jxU0hp54AnHVAxzTYznldAjmsgirk-Ex7w5UPlk6-bbpuunTBRPc0WwChjwYoBAD8HVb6XLBR2FCw"
                      style={{objectPosition: 'center 70%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/85 via-[#0c48a4]/20 to-transparent flex items-end p-6 z-10 pointer-events-none">
                      <div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#f9fe8f] text-[#0c48a4] text-xs uppercase font-extrabold border border-[#0c48a4]/20">
                          English Networking
                        </span>
                        <p className="text-white text-lg md:text-xl font-bold mt-1.5">
                          Landing a Remote Job
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#6695fc]/25 group h-52 sm:h-60">
                      <Image
                        alt="Diskusi santai peserta di lounge"
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCptIm2dFoi4W6RiMTUv8b1y7EeSoj_cbo_ANjxYVkIJGJYH1gVqLJhOgJAlR8unGkI8Y279jFDwHBGVO0iW5xbmyqMoeO2TadmJzjLfgloAZ_Oxv-8No3POq4Uu3cHG3opIkrbrojYOXtkW3nYc81kn3PxaDcubMR_jIo2LkWbymDcgAGNLEGfCi3VNxT85FQMHpxaOOUQ37f18PfTtINE_waWqJi1lGkMO52fXODEDT752Ktuxkmh6MDBtlUAMdvOdw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/85 via-transparent to-transparent flex items-end p-4 z-10 pointer-events-none">
                        <span className="text-white text-sm font-semibold">
                          How to Survive a Demanding Workplace
                        </span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#6695fc]/25 group h-52 sm:h-60">
                      <Image
                        alt="Networking santai setelah meetup"
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nJ2xZCH7-eNbkxxQ25UBvIIN1Hy9It8KoOOseCDZJxjZQFmAJxY-8-KdW3sdcm6l0wPP3hdREM5jO4op9o9v-_aePTfEWCudsEmarVUkCsH5ECIaNiWlM0YZvV-mS8v7qtSE7Jn6677TaOR-V7USkov2JjXT-oDarXMgxZ-u3p8HNO0APFu34G2I8gv13YHkKU6drlsaJR6yEuH6WjoR2le5yR-aML8ZajTmb5PSa2ph_ORNNRfadlmI2uuy-2_e2tQnAyM8lG7Ghw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/85 via-transparent to-transparent flex items-end p-4 z-10 pointer-events-none">
                        <span className="text-white text-sm font-semibold">Social Media 101</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showcase Right Column (5 cols) */}
                <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-5">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#6695fc]/30 group h-80 sm:h-96">
                    <Image
                      alt="Pembicara tamu membawakan materi workshop interaktif"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6e3T-anOQzH4lYD-cNBPcQtg0uGQQNEskb7_NGwT_dSV6Mm0Ar09f_AuCRBd7XnCB0arhNFoJ86UQliIvSkzX-dHOiWEkDn3Bd-UdeNx5Q3IIOmuoHx3pDzi4Kl3Rzy6jsC6B1WEoAKyXNrzY2SWB97VhwoTohrMXyQaOssbtD5NDCRUbpSf93ioUTLJe1Nzhs_nw8sJFFetgEHf9p4HFejcB__pY1JfXHuXiR1sOZdyOl-palzRxdIvCBrw8s91bsQ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/90 via-[#0c48a4]/30 to-transparent flex items-end p-6 z-10 pointer-events-none">
                      <div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#6695fc] text-white text-xs uppercase font-extrabold shadow-sm">
                          Founders club
                        </span>
                        <p className="text-white text-lg md:text-xl font-bold mt-1.5">
                          How to Get Funding for Your Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#6695fc]/25 group h-52 sm:h-60">
                    <Image
                      alt="Group foto bersama seluruh peserta Barter Up"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSKVR5XWWayq2IF5aPXdzU39GQMpNGjlQPh_bTa136G3H28Kgs44DLKy6nU-w_HygNNnHgj7s6TQwBeiNJtKLJprQWR4FWXvJH7wCnorAaObTqOWGODF-h9rCfBlU6LFDfel_xYhkR9RLTeL6_YROD2dB1EB-EDlQUOeaeB150ouOkLU4qxXWBJFaeYSvjy1MJ1keI2pKy9b_H_PddPQEcgtbvzRgl6w1_No4003gOaOBtbvQcpCbRVyJ0ZfElWSPh4A"
                      style={{objectPosition: 'center 72%'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c48a4]/85 via-transparent to-transparent flex items-end p-4 z-10 pointer-events-none">
                      <span className="text-white text-sm font-semibold">
                        All-Women Networking: Women in Business
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MEMBER VOICES & TESTIMONIALS */}
          <section className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-2 mb-2">
                <span className="text-xs uppercase text-[#6695fc] font-black tracking-widest">
                  what they say
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight">
                  What Barter Buddies Say
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Testimonial 1 */}
                <div className="flex flex-col gap-3 p-3 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-full aspect-9/16 rounded-2xl overflow-hidden shadow-md bg-black">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/qZ_dpR6GuHY"
                      title="Barter Up! Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f9fe8f] text-[#0c48a4] text-xs font-bold border border-[#0c48a4]/20 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-[#ff25af] fill-[#ff25af]" />
                      What Kazuki Says
                    </span>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col gap-3 p-3 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-full aspect-9/16 rounded-2xl overflow-hidden shadow-md bg-black">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/ZobeF31GR-c"
                      title="Barter Up! Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#b4e26d] text-[#0c48a4] text-xs font-bold border border-[#0c48a4]/20 shadow-sm">
                      <Lightbulb className="w-3.5 h-3.5 text-[#0c48a4]" />
                      What They Say
                    </span>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="flex flex-col gap-3 p-3 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-full aspect-9/16 rounded-2xl overflow-hidden shadow-md bg-black">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/9su2Gr1mfQ0"
                      title="Barter Up! Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f9fe8f] text-[#0c48a4] text-xs font-bold border border-[#0c48a4]/20 shadow-sm">
                      <Handshake className="w-3.5 h-3.5 text-[#6695fc]" />
                      What Farah &amp; Fadel Say
                    </span>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="flex flex-col gap-3 p-3 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-full aspect-9/16 rounded-2xl overflow-hidden shadow-md bg-black">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/3glRvbdeThk"
                      title="Barter Up! Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff25af]/10 text-[#0c48a4] text-xs font-bold border border-[#ff25af]/30 shadow-sm">
                      <Rocket className="w-3.5 h-3.5 text-[#ff25af]" />
                      What Dani Says
                    </span>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="flex flex-col gap-3 p-3 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-full aspect-9/16 rounded-2xl overflow-hidden shadow-md bg-black">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/13xtKHGaKfA"
                      title="Barter Up! Story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#b4e26d] text-[#0c48a4] text-xs font-bold border border-[#0c48a4]/20 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#0c48a4]" />
                      What Rachel Says
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMMUNITY ARTICLES & READS */}
          <section className="w-full py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-white border-b border-[#6695fc]/20" id="artikel">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="text-xs uppercase text-[#6695fc] font-black tracking-widest">
                    insight &amp; reads
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight">
                    Artikel &amp; Bacaan Praktis Komunitas
                  </h2>
                  <p className="text-sm md:text-base text-[#0c48a4]/75 leading-relaxed mt-1">
                    Pelajari insight praktis seputar social commerce, personal branding, kolaborasi UMKM, dan strategi growth dari para praktisi Barter Up!.
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setArticleFilter('Semua Topik')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                      articleFilter === 'Semua Topik'
                        ? 'bg-[#f2f6ff] text-[#0c48a4] border-[#6695fc]/20'
                        : 'bg-white text-[#0c48a4]/70 hover:text-[#6695fc] border-[#6695fc]/15'
                    }`}
                  >
                    Semua Topik
                  </button>
                  <button
                    onClick={() => setArticleFilter('Social Commerce')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      articleFilter === 'Social Commerce'
                        ? 'bg-[#f2f6ff] text-[#0c48a4] font-bold border-[#6695fc]/20'
                        : 'bg-white text-[#0c48a4]/70 hover:text-[#6695fc] border-[#6695fc]/15'
                    }`}
                  >
                    Social Commerce
                  </button>
                  <button
                    onClick={() => setArticleFilter('Growth & Barter')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      articleFilter === 'Growth & Barter'
                        ? 'bg-[#f2f6ff] text-[#0c48a4] font-bold border-[#6695fc]/20'
                        : 'bg-white text-[#0c48a4]/70 hover:text-[#6695fc] border-[#6695fc]/15'
                    }`}
                  >
                    Growth &amp; Barter
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${article.categoryTheme}`}>
                          {article.category}
                        </span>
                        <span className="text-xs font-medium text-[#0c48a4]/70 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#6695fc]" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0c48a4] leading-snug group-hover:text-[#6695fc] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#0c48a4]/75 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#6695fc]/15 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0c48a4]/80">{article.author}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6695fc] group-hover:text-[#0c48a4] transition-colors">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setSelectedArticle(articlesData[0])}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#f9fe8f] text-[#0c48a4] font-bold text-sm hover:bg-[#eff476] border border-[#0c48a4]/20 shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Lihat Semua Artikel di Blog Barter Up!</span>
                  <ArrowRight className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </section>

          {/* FAQ ACCORDION */}
          <section className="w-full py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-[#f2f6ff] border-y border-[#6695fc]/20" id="faq">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
              <div className="text-center flex flex-col gap-2">
                <span className="text-xs uppercase text-[#6695fc] font-black tracking-widest">Questions</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c48a4] tracking-tight">FAQ</h2>
              </div>
              <div className="flex flex-col gap-3.5">
                {/* Q1 */}
                <details className="group p-5 rounded-2xl bg-white border border-[#6695fc]/25 shadow-sm transition-all" open>
                  <summary className="flex items-center justify-between text-base md:text-lg font-bold text-[#0c48a4] cursor-pointer list-none">
                    <span>Siapa saja yang boleh bergabung di Barter Up!?</span>
                    <ChevronDown className="w-5 h-5 text-[#6695fc] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-sm text-[#0c48a4]/80 mt-3 pt-3 border-t border-[#6695fc]/15 leading-relaxed">
                    Siapa saja yang ingin belajar dan bertumbuh! Mulai dari profesional korporat, freelancer, digital marketer, desainer, developer, hingga owner business yang ingin memperluas network dan ilmu.
                  </p>
                </details>

                {/* Q2 */}
                <details className="group p-5 rounded-2xl bg-white border border-[#6695fc]/25 shadow-sm transition-all">
                  <summary className="flex items-center justify-between text-base md:text-lg font-bold text-[#0c48a4] cursor-pointer list-none">
                    <span>Bagaimana sistem &quot;barter&quot; expertise di Barter Up!?</span>
                    <ChevronDown className="w-5 h-5 text-[#6695fc] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-sm text-[#0c48a4]/80 mt-3 pt-3 border-t border-[#6695fc]/15 leading-relaxed">
                    Setiap event Barter Up! ada 1 jam networking session dimana setiap peserta bisa mingle, ngobrol, dan saling tukar kartu nama. Pada event-event tertentu peserta juga bisa request ingin satu table dengan peserta dengan background tertentu agar bisa barter ilmu sesuai harapan mereka.
                  </p>
                </details>

                {/* Q3 */}
                <details className="group p-5 rounded-2xl bg-white border border-[#6695fc]/25 shadow-sm transition-all" open>
                  <summary className="flex items-center justify-between text-base md:text-lg font-bold text-[#0c48a4] cursor-pointer list-none">
                    <span>Apakah saya harus sudah punya bisnis sendiri untuk ikut?</span>
                    <ChevronDown className="w-5 h-5 text-[#6695fc] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-sm text-[#0c48a4]/80 mt-3 pt-3 border-t border-[#6695fc]/15 leading-relaxed">
                    Sama sekali enggak wajib. Ada beberapa peserta Barter Up! yang bahkan masih sekolah.
                  </p>
                </details>

                {/* Q4 */}
                <details className="group p-5 rounded-2xl bg-white border border-[#6695fc]/25 shadow-sm transition-all" open>
                  <summary className="flex items-center justify-between text-base md:text-lg font-bold text-[#0c48a4] cursor-pointer list-none">
                    <span>Seberapa sering meetup diadakan dan di mana lokasinya?</span>
                    <ChevronDown className="w-5 h-5 text-[#6695fc] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-sm text-[#0c48a4]/80 mt-3 pt-3 border-t border-[#6695fc]/15 leading-relaxed">
                    Acara networking diadakan setiap 1 kali dalam setiap bulan di area Jakarta pusat atau Jakarta Selatan. Di luar acara networking bulanan, ada juga acara ketemuan khusus untuk member yang sifatnya ocassional.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* FINAL HIGH-CONVERSION CTA BANNER */}
          <section className="w-full px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto rounded-3xl bg-[#6695fc] text-white p-8 md:p-14 shadow-2xl relative overflow-hidden border-2 border-[#6695fc]">
              {/* Glow & Wave Patterns */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#ff25af]/30 blur-3xl pointer-events-none"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#f9fe8f]/30 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-start gap-4 max-w-2xl">
                  <span className="px-3.5 py-1 rounded-full bg-[#f9fe8f] text-[#0c48a4] text-xs uppercase font-black transform -rotate-2 border border-[#0c48a4]/20 shadow-sm">
                    Gabung sekarang!
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Ready to &apos;Barter&apos; Your Expertise and Find Your Growth Group?
                  </h2>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed font-normal">
                    Dapatkan info networking tiap bulan, special member perks, dan connect ke 500+ profesional dan business owner yang siap saling bantu!
                  </p>
                </div>
                <div className="flex flex-col items-stretch sm:items-end gap-3 w-full md:w-auto shrink-0">
                  <a
                    className="px-8 py-5 rounded-2xl bg-white text-[#0c48a4] font-extrabold text-sm uppercase tracking-wider text-center shadow-xl hover:bg-[#f9fe8f] hover:scale-105 transition-all border border-white"
                    href="https://chat.whatsapp.com/LxzJMUjgtnx8BFfTpCHvDm"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Join The Circle via WhatsApp 💬
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#f2f6ff] text-[#0c48a4] border-t-2 border-[#6695fc]/30 relative overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#6695fc] via-[#ff25af] to-[#f9fe8f]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand Info */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbn4zvgGYN-de2NTgdVA6Dm0pAgr6rw-csgG6JeeuBX89rqtJZEtvu1pn37CMImqzUqphIXOoNfmh5X1VzHxsRtdhlz4z9F3P_zHmBd0_KhO13WTJtfOwuB1MUf4THuodMiF6FURhRpvx8BdhjD0NlLAFSbKbA958EKmeY9d1cQbMrMKDE14OOuVmfpCnmtPDeHBTGx2HDq8YCx00kICW3qUleGm502k-hy0kVyN-hpbTotmJLGk7x3DAsQwvEuBdZ8ihdDCLwe61NqQ"
                  alt="Barter Up! Logo"
                  width={210}
                  height={56}
                  referrerPolicy="no-referrer"
                  className="w-auto object-contain bg-transparent"
                  style={{height: '56px', maxHeight: '60px'}}
                />
              </div>
              <p className="text-sm text-[#0c48a4]/80 font-normal leading-relaxed max-w-md">
                Belajar bareng, tukar skill, scale up bisnis. Komunitas peer-learning &amp; barter keahlian untuk profesional muda, kreator, dan founder UMKM Indonesia.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b4e26d] text-[#0c48a4] text-xs uppercase font-bold tracking-wider border border-[#0c48a4]/15">
                  <span className="w-2 h-2 rounded-full bg-[#0c48a4] animate-pulse"></span>
                  Active Community (Jabodetabek)
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="text-xs uppercase text-[#6695fc] font-black tracking-wider">
                Navigasi Eksplorasi
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-[#0c48a4]/80">
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#tentang">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#cara-kerja">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    How We Roll
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#galeri">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    Dokumentasi
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#jadwal">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    What They Say
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#artikel">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    Artikel &amp; Insight
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#6695fc] transition-colors inline-flex items-center gap-1.5" href="#faq">
                    <ChevronRight className="w-4 h-4 text-[#6695fc]" />
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact and Socials */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs uppercase text-[#6695fc] font-black tracking-wider">
                Connect with us
              </span>
              <div className="flex flex-col gap-2.5 text-sm text-[#0c48a4]/80">
                <a
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#6695fc]/20 hover:border-[#6695fc] text-[#0c48a4] transition-all shadow-sm"
                  href="mailto:barterup.id@gmail.com"
                >
                  <Mail className="w-5 h-5 text-[#6695fc]" />
                  <span className="truncate font-semibold text-xs md:text-sm">barterup.id@gmail.com</span>
                </a>
                <a
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#6695fc]/20 hover:border-[#6695fc] text-[#0c48a4] transition-all shadow-sm"
                  href="https://wa.link/5ta2ei"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="w-5 h-5 text-[#0c48a4]" />
                  <span className="font-semibold text-xs md:text-sm">WhatsApp: +62 851-7995-9250</span>
                </a>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-[#6695fc]/20 hover:bg-[#6695fc] hover:text-white text-xs font-bold shadow-sm transition-colors text-[#0c48a4]"
                    href="https://www.instagram.com/barterup.id/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="w-4 h-4" />
                    @barterup.id
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-[#6695fc]/20 hover:bg-[#6695fc] hover:text-white text-xs font-bold shadow-sm transition-colors text-[#0c48a4]"
                    href="https://www.linkedin.com/company/barter-up"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="w-4 h-4" />
                    Barter Up!
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Subfooter */}
          <div className="mt-12 pt-6 border-t border-[#6695fc]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0c48a4]/70">
            <p>© 2026 Barter Up! (barterup.id). Networking for Learning</p>
            <div className="flex items-center gap-4 font-medium">
              <span>Made with high curiosity in Jakarta</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6695fc]"></span>
            </div>
          </div>
        </div>
      </footer>

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
