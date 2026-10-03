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

  const articlesData: (ArticleItem & {filterCategory: string; thumbnail: string; keywords: string[]})[] = [
    {
      id: 'demanding-workplace',
      filterCategory: 'Growth & Barter',
      category: 'Career & Self Development',
      categoryTheme: 'bg-[#b4e26d] text-[#0c48a4] border border-[#0c48a4]/15',
      readTime: '7 min read',
      title: 'The Art of Surviving a Demanding Workplace',
      summary: 'Pekerjaan yang demanding bisa bikin kita berkembang, tapi juga bisa menguras mental kalau tidak dikelola. Kenali healthy challenge vs toxic pressure, set boundaries, dan bangun career growth yang sustainable.',
      author: 'Tim Barter Up!',
      thumbnail: '/images/article-demanding-workplace.svg',
      keywords: [
        'workplace mental health',
        'career development',
        'setting boundaries',
        'komunitas',
        'Jakarta',
      ],
      keyTakeaways: [
        'Demanding workplace masih bisa sehat kalau ada respect, support, psychological safety, dan ruang untuk belajar.',
        'Setting boundaries bukan berarti malas; ini soal energy management, prioritas, komunikasi, dan sustainability.',
        'Kalau pressure terus menggerus kesehatan dan growth, siapkan exit strategy secara strategis, bukan impulsif.',
      ],
      content: [
        'Hustle culture sering bikin kita salah kaprah: kalender penuh dianggap achievement, fast response jadi standar profesionalisme, dan burnout malah dipakai sebagai bukti bahwa kita bekerja keras. Padahal workplace mental health jauh lebih penting daripada sekadar terlihat sibuk. Pekerjaan yang demanding tidak otomatis berarti toxic; challenge justru bisa membantu kita belajar lebih cepat, membangun resilience, dan memperluas kapasitas. Pertanyaan yang lebih berguna adalah: apakah pressure yang kita rasakan masih mendorong growth, atau sudah mulai menggerus kesehatan, relasi, dan kualitas hidup?',
        'Healthy workplace tetap bisa punya high standard dan target agresif. Bedanya, ada respect, support, komunikasi yang jelas, serta psychological safety untuk bertanya atau mengakui kesalahan. Feedback diarahkan ke pekerjaan, bukan menyerang personal. Mistakes dipakai sebagai bahan belajar, bukan alasan mempermalukan orang. Red flag mulai muncul ketika humiliation dianggap normal, kamu takut speak up, workload selalu overload tanpa prioritas yang masuk akal, atau blaming culture lebih kuat daripada problem solving. Kalau badan tetap exhausted bahkan setelah istirahat, jangan langsung menganggap itu sekadar kurang kuat.',
        'Skill penting berikutnya adalah setting boundaries. Boundaries bukan tembok untuk menolak semua pekerjaan, melainkan cara menjaga energi supaya performa tetap sustainable. Daripada otomatis bilang yes ke setiap request, coba komunikasikan trade-off: “I can help, but I need to adjust my priorities first.” Kalau lima hal disebut urgent, tanyakan mana yang benar-benar harus selesai lebih dulu. Protect peak-energy hours untuk deep work, kurangi context switching, dan stop glorifying multitasking. Career development yang sehat membutuhkan kemampuan memilih fokus, bukan hanya kemampuan menerima lebih banyak tugas.',
        'Selain boundaries, kamu juga butuh mental survival kit. Pisahkan identitas diri dari job title dan jangan biarkan office drama mengambil seluruh ruang mental setelah jam kerja. Punya support system di luar kantor, olahraga, jalan kaki, journaling, musik, meditasi, atau digital detox bisa menjadi recovery ritual sederhana. Tujuannya bukan membuat masalah kantor magically disappear, tetapi memberi otak kesempatan untuk reset. Dalam komunitas profesional, termasuk komunitas Jakarta seperti Barter Up!, ngobrol dengan orang dari industri lain juga bisa memberi perspektif bahwa pengalaman kerja kita bukan satu-satunya benchmark.',
        'Jangan lupa mengecek apakah kamu masih bertumbuh. Career growth bukan cuma promotion atau salary increase; bisa juga berupa skill baru, exposure ke problem yang lebih kompleks, mentorship, dan kesempatan mengambil ownership. Kalau tuntutan tinggi datang bersama learning yang nyata, mungkin situasinya masih worth navigating. Tetapi kalau berbulan-bulan kamu hanya firefighting, tidak mendapat feedback yang membantu, dan tidak punya ruang berkembang, itu sinyal untuk mengevaluasi ulang. Coba dokumentasikan achievement, skill yang sudah dikuasai, dan area yang ingin kamu bangun berikutnya.',
        'Ada titik ketika bertahan bukan lagi bentuk resilience. Kalau anxiety terasa konstan, kesehatan terus menurun, values tidak lagi aligned, atau toxicity sudah dianggap normal, mulai siapkan next chapter dengan tenang. Bangun emergency savings, update CV dan LinkedIn, rapikan portfolio, riset job market, upgrade skill, dan mulai networking sebelum benar-benar membutuhkan pekerjaan baru. Di Jakarta, kesempatan sering datang dari conversation dan referral, jadi membangun network secara genuine bisa sama pentingnya dengan mengirim application. The best resignation is prepared, not impulsive.',
        'Pada akhirnya, surviving a demanding workplace bukan tentang menjadi kebal terhadap pressure. Ini tentang mengenali lingkungan, mengelola energi, berkomunikasi dengan jelas, dan tahu kapan harus stay atau move on. Kamu boleh ambitious tanpa menjadikan burnout sebagai personality. Kamu juga boleh mengejar career development sambil tetap menjaga workplace mental health. Kalau sekarang kamu sedang berada di fase yang berat, mulai dari satu langkah kecil: tentukan satu boundary yang perlu diperjelas minggu ini, satu recovery habit yang mau dijaga, dan satu orang yang bisa diajak ngobrol secara jujur.',
      ],
    },
    {
      id: 'venture-capital-funding',
      filterCategory: 'Growth & Barter',
      category: 'Business & Funding',
      categoryTheme: 'bg-[#f9fe8f] text-[#0c48a4] border border-[#0c48a4]/20',
      readTime: '8 min read',
      title: 'Do You Really Need Venture Capital for Funding?',
      summary: 'VC bukan satu-satunya jalan untuk scale. Kenali venture capital, startup funding, bootstrapping, debt, grants, dan opsi lain sebelum menentukan sumber modal yang paling fit untuk bisnis.',
      author: 'Tim Barter Up!',
      thumbnail: '/images/article-venture-capital.svg',
      keywords: [
        'venture capital',
        'startup funding',
        'bootstrapping',
        'komunitas',
        'Jakarta',
      ],
      keyTakeaways: [
        'Mulai dari “why”: fundraising harus punya use case, milestone, dan kebutuhan modal yang jelas.',
        'Startup funding punya banyak bentuk: bootstrapping, 3F, angel investor, grants, bank, P2P lending, hingga institutional investor.',
        'Venture capital membawa capital dan network, tetapi juga datang dengan dilution, governance, dan ekspektasi growth.',
      ],
      content: [
        'Banyak founder menganggap startup funding identik dengan venture capital. Begitu bisnis ingin scale, refleksnya adalah bikin pitch deck, cari introduction ke investor, lalu mengejar fundraising round. Padahal pertanyaan pertama seharusnya jauh lebih sederhana: why do you need funding? “Butuh more money” belum cukup menjadi strategy. Founder perlu tahu modal itu akan dipakai untuk apa, milestone apa yang ingin dicapai, berapa lama runway yang dibutuhkan, dan apakah tambahan capital benar-benar akan mempercepat growth yang sudah terbukti atau justru menutup problem yang belum selesai.',
        'Kalau bisnis masih bisa tumbuh dari revenue dan cash flow sendiri, bootstrapping bisa menjadi pilihan yang sangat valid. Keuntungannya jelas: ownership lebih terjaga, decision making lebih fleksibel, dan founder dipaksa disiplin memahami unit economics sejak awal. Trade-off-nya, growth mungkin lebih gradual dan ruang eksperimen bisa lebih terbatas. Ada juga 3F—family, friends and fools—yang sering muncul di tahap awal, serta angel investor atau family office yang dapat memberi capital sekaligus akses ke pengalaman dan network tertentu.',
        'Pilihan startup funding tidak berhenti di equity. Untuk bisnis tertentu ada grants, incubator, accelerator, atau government incentives yang dapat membantu tanpa struktur investasi yang sama dengan venture capital. Debt financing juga punya tempatnya. Bank biasanya melihat credit profile, kemampuan repayment, dan pada kasus tertentu collateral. P2P lending bisa menawarkan proses yang lebih quick dan flexible, tetapi cost of capital tetap harus dihitung hati-hati. Dana yang lebih cepat cair belum tentu menjadi dana yang paling sehat kalau repayment akhirnya menekan cash flow operasional.',
        'Lalu kapan venture capital masuk akal? Secara umum, VC lebih relevan untuk bisnis yang punya potensi high growth, market yang besar, dan model yang dapat scale cukup cepat sehingga investor melihat peluang high return. Selain capital, investor yang tepat dapat membuka network, talent, strategic introductions, dan pengalaman membangun perusahaan. Tetapi ada trade-off: dilution berarti ownership founder berkurang, governance menjadi lebih formal, dan growth expectations ikut meningkat. Fundraising bukan hadiah; it is a financing decision dengan konsekuensi jangka panjang.',
        'Founder juga perlu memahami bahwa sumber modal bisa berubah mengikuti stage. Setelah angel atau early-stage VC, perusahaan yang lebih mature dapat bertemu corporate VC, growth investor, sovereign wealth fund, private equity, hingga public market atau IPO. Bukan berarti semua bisnis harus melewati tangga tersebut. Justru penting untuk memilih jalur yang cocok dengan business model. Bisnis profitable yang bisa berkembang secara organik tidak otomatis kurang sukses hanya karena tidak mengumumkan funding round di media.',
        'Sebelum meeting investor, buat funding checklist sendiri. Berapa nominal yang benar-benar dibutuhkan? Apa penggunaan dananya—product, hiring, inventory, marketing, atau expansion? Milestone apa yang harus tercapai sebelum runway habis? Berapa ownership dan control yang rela ditukar? Di Jakarta, founder juga punya banyak kesempatan untuk belajar dari peer, mentor, investor, dan komunitas bisnis. Bergabung dengan komunitas Jakarta seperti Barter Up! bisa membantu memperluas perspektif sebelum mengambil keputusan besar, bukan sekadar mencari warm introduction untuk fundraising.',
        'Jadi, do you really need VC? Jawabannya tidak perlu dimulai dari prestige atau FOMO. Mulailah dari kebutuhan bisnis dan economics-nya. Venture capital bisa menjadi accelerator yang powerful ketika model dan timing-nya tepat; bootstrapping bisa menjadi kekuatan ketika control dan profitability adalah prioritas; debt atau alternatif lain juga bisa lebih fit untuk kebutuhan tertentu. Funding terbaik bukan yang paling ramai diumumkan, tetapi yang memberi bisnis cukup resource untuk mencapai next milestone tanpa menciptakan beban yang tidak sesuai dengan stage dan tujuan founder.',
      ],
    },
    {
      id: 'tiktok-ace',
      filterCategory: 'Social Commerce',
      category: 'Social Commerce & TikTok',
      categoryTheme: 'bg-[#6695fc] text-white',
      readTime: '7 min read',
      title: 'Mau Jualan di TikTok? Kenali dulu “A-C-E”',
      summary: 'TikTok Shop menggabungkan discovery dan commerce. Framework A-C-E—Assortment, Content, Empowerment—membantu seller mengoptimalkan produk, content marketing, affiliate, campaign, ads, dan customer experience.',
      author: 'Tim Barter Up!',
      thumbnail: '/images/article-tiktok-ace.svg',
      keywords: [
        'TikTok Shop',
        'social commerce',
        'content marketing',
        'komunitas',
        'Jakarta',
      ],
      keyTakeaways: [
        'A = Assortment: optimalkan product listing, hero SKU, pricing, promotion, keywords, dan product discovery.',
        'C = Content: kombinasikan short video, livestream, self-brand content, KOL, dan creator affiliate untuk trigger demand.',
        'E = Empowerment: kuatkan customer experience, campaign, advertising, dan operational execution supaya growth lebih repeatable.',
      ],
      content: [
        'TikTok Shop bukan cuma tempat orang scroll video lalu kebetulan melihat produk. Platform ini menggabungkan entertainment, discovery, dan commerce dalam satu journey yang sangat cepat. Di traditional e-commerce, customer sering mulai dari search lalu compare sebelum membeli. Di social commerce, content bisa membuat goods find people: seseorang sedang menonton short video atau livestream, menemukan produk yang terasa relevan, masuk ke product detail, lalu checkout. Karena itu strategi jualan di TikTok perlu menggabungkan commerce dan content marketing, bukan sekadar upload katalog dan menunggu order.',
        'Framework yang bisa dipakai untuk melihat strategi ini adalah A-C-E: Assortment, Content, dan Empowerment. A atau Assortment menjawab dua hal: produk apa yang tepat untuk didorong dan bagaimana orang menemukannya. Rapikan Product Detail Page dengan visual yang jelas, deskripsi yang mudah dipahami, serta relevant keywords untuk membantu search dan discovery. Tentukan juga peran setiap SKU: mana hero product, traffic hook, top-selling product, TikTok-exclusive offer, atau high-profit bundle. Assortment yang rapi membuat traffic punya destination yang lebih siap convert.',
        'C atau Content adalah mesin discovery. Seller bisa mengombinasikan self-brand short videos dan livestream dengan KOL maupun creator affiliate. Jangan hanya mengejar jumlah upload; setiap konten perlu punya hook, selling point, dan format yang cocok dengan audience. Untuk LIVE, detail seperti host persona, product grouping, teaser video, lighting, promo, CTA, dan kemampuan host menjawab pain point ikut membentuk experience. Content marketing yang kuat membuat produk terasa kontekstual: audience paham masalah apa yang diselesaikan dan kenapa mereka perlu peduli sekarang.',
        'Creator dan affiliate juga memperluas distribusi. Daripada brand berbicara sendirian, creator membantu membawa produk ke komunitas audience yang sudah mereka bangun. Namun partnership sebaiknya tidak cuma berdasarkan follower count. Lihat relevansi audience, cara creator menyampaikan cerita, consistency, dan kemampuan membuat product demonstration yang believable. Eksperimen dengan beberapa angle, lalu lihat mana yang menghasilkan engagement dan conversion. Social commerce bergerak cepat, jadi learning loop antara content, creator, dan product perlu dibuat sesingkat mungkin.',
        'E atau Empowerment adalah layer yang membuat semuanya lebih scalable. Ini mencakup customer experience, marketing, sales campaign, advertising, serta operational execution. Seller perlu memahami siapa audience-nya, campaign mana yang relevan, bagaimana ads spend dioptimalkan, dan partner apa yang dibutuhkan agar growth tidak berhenti setelah satu video viral. Stock, fulfillment, response time, dan after-sales experience juga tetap penting; content yang bagus bisa mendatangkan demand, tetapi operation yang buruk dapat membuat customer tidak kembali.',
        'Untuk brand dan UMKM di Jakarta, ekosistem TikTok Shop juga membuka ruang belajar yang luas. Kamu bisa melihat pattern content dari berbagai kategori, ngobrol dengan seller lain, dan bertukar insight tentang livestream, affiliate, sampai campaign. Komunitas Jakarta seperti Barter Up! dapat menjadi tempat untuk membandingkan experiment secara praktis: apa yang bekerja, apa yang gagal, dan apa yang perlu dites berikutnya. Tujuannya bukan copy-paste strategi orang lain, tetapi mempercepat learning lewat pengalaman nyata dari berbagai industri.',
        'Simple-nya: jangan hanya kejar views. Pastikan Assortment-nya right, Content-nya engaging, dan Empowerment-nya kuat. Mulai dari satu hero SKU, bangun beberapa content angle, uji short video dan LIVE, lalu gunakan data untuk memperbaiki langkah berikutnya. Ketika A-C-E bekerja bareng, TikTok Shop punya peluang lebih besar mengubah discovery menjadi traffic, conversion, GMV, dan repeatable growth. Viral moment memang menyenangkan, tetapi sistem yang bisa dipelajari dan diulang jauh lebih valuable untuk bisnis jangka panjang.',
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
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#6695fc] text-white font-bold text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:gap-2 lg:px-5 lg:py-2.5 shadow-lg shadow-[#6695fc]/30 hover:bg-[#0c48a4] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#6695fc]"
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

                <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0c48a4] tracking-tight leading-[1.15]">
                  <span className="block whitespace-nowrap">Cross-Industry Learning.</span>
                  <span className="block whitespace-nowrap">Expand Network.</span>
                  <span className="relative inline-block whitespace-nowrap text-[#6695fc] mt-1">
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
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 pt-1 w-full sm:w-auto">
                  <a
                    className="inline-flex min-h-[92px] items-center justify-center gap-2 px-3 py-3 rounded-2xl bg-[#6695fc] text-white font-bold text-xs text-center leading-tight tracking-wide shadow-xl shadow-[#6695fc]/35 hover:bg-[#0c48a4] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#6695fc] sm:min-h-0 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm sm:text-left"
                    href="https://chat.whatsapp.com/LxzJMUjgtnx8BFfTpCHvDm"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Join Our Community&nbsp;👊</span>
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </a>

                  <a
                    className="inline-flex min-h-[92px] items-center justify-center gap-2 px-3 py-3 rounded-2xl bg-[#f9fe8f] text-[#0c48a4] font-bold text-xs text-center leading-tight hover:bg-[#eff476] transition-all shadow-md border border-[#0c48a4]/20 hover:-translate-y-0.5 sm:min-h-0 sm:px-6 sm:py-4 sm:text-sm sm:text-left"
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
                      Setiap bulan membedah tema penting: dari Performance Marketing, personal branding, TikTok Livestream, sampai fundraising untuk new business.
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
                    <h3 className="text-lg font-bold text-white">Expert Speaker</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Bukan sekadar pembicara motivasi, tapi dari specialist sampai C-level berpengalaman 7-10+ tahun yang buka-bukaan real case studies.
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
                    <h3 className="text-lg font-bold text-[#0c48a4]">Barter Your Skill</h3>
                    <p className="text-sm text-[#0c48a4]/75 leading-relaxed">
                      Everyone who comes here come to learn AND teach. Pada sesi networking, setiap peserta dipersilahkan saling belajar dan saling mengajar satu sama lain.
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
                      Networking santai di coffee shop sekitar Jakarta sambil mingle dengan like-minded peers. No rigid formality, just warm conversation with one another, forming new network and potential collaboration.
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
                    className="flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f2f6ff] border border-[#6695fc]/25 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
                      <Image src={article.thumbnail} alt={'Ilustrasi ' + article.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="flex flex-col gap-4 p-6 sm:p-7 pb-0 sm:pb-0">
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
                      <div className="flex flex-wrap gap-2">
                        {article.keywords.map((keyword) => (
                          <span key={keyword} className="px-2.5 py-1 rounded-full bg-white/80 border border-[#6695fc]/15 text-[11px] font-medium text-[#0c48a4]/75">{keyword}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mx-6 sm:mx-7 mb-6 sm:mb-7 mt-6 pt-4 border-t border-[#6695fc]/15 flex items-center justify-between">
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
