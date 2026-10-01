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
      id: 'demanding-workplace',
      filterTag: 'Career & Growth',
      category: 'CAREER & SELF DEVELOPMENT',
      categoryTheme: 'bg-violet-100 text-violet-800',
      readTime: '5 min read',
      title: 'The Art of Surviving a Demanding Workplace',
      summary: 'Kerja demanding belum tentu toxic. Kenali bedanya healthy challenge vs unhealthy pressure, cara set boundaries, menjaga mental wellbeing, dan menyiapkan exit strategy tanpa keputusan impulsif.',
      author: 'Tim Barter Up!',
      keyTakeaways: [
        'Demanding workplace masih bisa sehat kalau ada respect, support, dan psychological safety.',
        'Professional boundaries adalah energy management, prioritization, communication clarity, dan sustainability.',
        'Kalau pressure sudah menggerus kesehatan dan growth, siapkan exit strategy secara strategis, bukan impulsif.',
      ],
      content: [
        'Hustle culture sering bikin kita salah kaprah: sibuk dianggap achievement, fast response jadi ekspektasi, dan burnout malah dinormalisasi. Padahal productivity ≠ self-worth. Jadi sebelum buru-buru resign, pertanyaan pertamanya bukan “kerjaan gue berat nggak?”, tapi “environment ini masih sehat nggak?”',
        'Healthy workplace tetap bisa punya high standard. Bedanya, feedback membantu growth, mistakes jadi bahan belajar, komunikasi jelas, workload dikelola, dan pressure datang bersama support. Red flag mulai kelihatan ketika feedback berubah jadi humiliation, kamu takut speak up, workload terus overload, blaming culture jadi normal, atau badan tetap exhausted bahkan setelah istirahat.',
        'Survival skill berikutnya adalah boundaries. Boundaries bukan berarti lazy atau difficult; ini soal energy management dan prioritization. Daripada bilang “I can’t”, coba: “I can help, but I need to adjust my priorities first.” Kalau semua dianggap urgent, tanyakan mana yang harus jadi priority. Protect peak-energy hours, stop glorifying multitasking, dan sisipkan recovery moments.',
        'Bikin juga mental survival kit: detach dari office drama, punya support system di luar kerja, dan jaga identitas supaya hidupmu nggak cuma soal pekerjaan. Small rituals seperti jalan, olahraga, journaling, musik, meditasi, atau digital detox bisa membantu recovery. Kamu tetap bisa perform professionally tanpa mengorbankan emotional wellbeing.',
        'Kalau anxiety sudah konstan, kesehatan terus menurun, growth mandek, values nggak lagi aligned, atau toxicity sudah dianggap normal, mulai siapkan next chapter. Bangun emergency savings, update CV & LinkedIn, riset job market, upgrade skill, networking, dan rapikan portfolio. The best resignation is prepared, not impulsive.',
      ],
    },
    {
      id: 'venture-capital-funding',
      filterTag: 'Business & Funding',
      category: 'BUSINESS & FUNDING',
      categoryTheme: 'bg-blue-100 text-blue-800',
      readTime: '5 min read',
      title: 'Do You Really Need Venture Capital for Funding?',
      summary: 'VC bukan satu-satunya jalan untuk scale. Sebelum fundraising, pahami dulu kenapa kamu butuh modal dan pilih sumber funding yang paling cocok dengan stage, risk, dan control bisnis.',
      author: 'Tim Barter Up!',
      keyTakeaways: [
        'Mulai dari “why”: jangan fundraising hanya karena butuh more money atau karena funding terlihat keren.',
        'Alternatif startup funding mencakup bootstrapping, 3F, angel investor, grants, bank, P2P lending, sampai institutional investor.',
        'Venture capital cocok untuk profil bisnis tertentu dan datang dengan trade-off—termasuk ownership/control dan ekspektasi growth.',
      ],
      content: [
        'Banyak founder menganggap startup funding = venture capital. Padahal sebelum bikin pitch deck, jawab dulu satu pertanyaan simpel: why do you need funding? “I just need more money” tanpa use case yang jelas bukan strategy. Dan raising money just because it’s cool bisa punya konsekuensi: external funding dapat berarti sebagian control bisnis ikut berpindah.',
        'Kalau bisnis masih bisa tumbuh dari cash flow sendiri, bootstrapping alias pakai modal sendiri bisa menjaga ownership dan fleksibilitas. Ada juga 3F—family, friends & fools—serta angel investor seperti wealthy individuals atau family office. Untuk bisnis tertentu, grants, incubator, accelerator, dan government incentives juga bisa jadi opsi non-VC.',
        'Butuh debt financing? Bank bisa relevan untuk SME, terutama ketika bisnis punya credit profile dan kemampuan repayment yang jelas; collateral bisa menjadi pertimbangan. P2P lending menawarkan proses yang lebih quick dan flexible serta collateral yang bisa optional, tetapi cost of capital perlu dihitung hati-hati. Intinya: “cepat cair” belum tentu “paling sehat buat bisnis.”',
        'Venture capital lebih identik dengan early-stage startup, khususnya tech company dengan potensi high growth dan high return. VC membawa capital dan bisa membuka network, tetapi founder perlu siap dengan dilution, governance, dan growth expectations. Di tahap lebih mature ada corporate VC, growth VC, sovereign wealth fund, private equity, hingga akhirnya public market/IPO.',
        'Jadi, do you really need VC? Jangan mulai dari nama investornya—mulai dari kebutuhan bisnis. Tentukan berapa modal yang dibutuhkan, untuk apa, kapan harus menghasilkan return, dan seberapa besar ownership/control yang rela kamu tukar. Funding terbaik bukan yang paling prestigious, tapi yang paling fit dengan business model dan stage kamu.',
      ],
    },
    {
      id: 'tiktok-ace',
      filterTag: 'Social Commerce',
      category: 'SOCIAL COMMERCE & TIKTOK',
      categoryTheme: 'bg-rose-100 text-rose-800',
      readTime: '5 min read',
      title: 'Mau Jualan di TikTok? Kenali dulu “A-C-E”',
      summary: 'TikTok Shop menggabungkan discovery dan commerce. Framework A-C-E—Assortment, Content, Empowerment—membantu seller mengoptimalkan produk, konten, affiliate, campaign, ads, dan customer experience.',
      author: 'Tim Barter Up!',
      keyTakeaways: [
        'A = Assortment: optimalkan product listing, hero SKU, pricing, promotion, keywords, dan product discovery.',
        'C = Content: gunakan short video, livestream, self-brand content, KOL, dan creator affiliate untuk trigger demand.',
        'E = Empowerment: perkuat customer experience, campaign, marketing, advertising, dan operational execution.',
      ],
      content: [
        'Di TikTok Shop, customer journey nggak selalu linear dari “search → compare → buy”. Content bisa membuat goods find people: seseorang nonton short video atau livestream, tertarik, lalu langsung masuk ke product detail dan checkout. Karena itu strategi jualan di TikTok perlu menggabungkan commerce dan content—not just upload produk lalu berharap order masuk.',
        'Framework yang perlu kamu kenal adalah A-C-E: Assortment, Content, dan Empowerment. A atau Assortment menjawab: produk apa yang paling tepat dijual dan bagaimana orang menemukannya? Rapikan Product Detail Page dengan high-resolution images, deskripsi yang jelas, relevant keywords untuk SEO/search, buzzwords dan hashtag. Lalu tentukan hero SKU, traffic hook, top-selling product, TikTok-exclusive offer, atau high-profit bundle sesuai objective.',
        'C atau Content adalah mesin discovery. Kombinasikan self-brand short videos dan livestream dengan Top KOL atau creator affiliate. Konten harus punya hook yang relevan, selling point yang jelas, dan format yang cocok dengan audience. Untuk LIVE, detail seperti host persona, product grouping, teaser video, lighting, promo, CTA, dan cara host menjawab pain point bisa ikut memengaruhi performance.',
        'E atau Empowerment adalah layer yang membuat semuanya scalable: customer experience, marketing, sales campaign, dan advertising. Di sini seller perlu paham siapa audience-nya, campaign mana yang relevan, bagaimana ads spend dioptimalkan, serta partner dan operational setup apa yang dibutuhkan agar growth nggak berhenti di satu video viral.',
        'Simple-nya: jangan hanya kejar views. Pastikan assortment-nya right, content-nya engaging, dan empowerment-nya kuat. Saat A-C-E bekerja bareng, TikTok Shop punya peluang lebih besar mengubah discovery menjadi traffic, conversion, GMV, dan repeatable growth.',
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
