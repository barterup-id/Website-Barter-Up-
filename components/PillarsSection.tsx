'use client';

import {FolderOpen, Award, ArrowLeftRight, Coffee, ArrowUpRight, Check} from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillar?: (index: number) => void;
}

export default function PillarsSection({onSelectPillar}: PillarsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#3B72EA] tracking-wider uppercase mb-2">
            A FUN YET HIGH QUALITY LEARNING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight">
            Barter Up! is for you if you like...
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 01 */}
          <div
            onClick={() => onSelectPillar?.(0)}
            className="group cursor-pointer bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-6">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1.5">
                PILLAR 01
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Curated Monthly Topic
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Setiap bulan membedah tema krusial: Performance Marketing, B2B Sales Funnel, TikTok Live Ops, hingga Legalitas UMKM.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Focused agenda</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Pillar 02: Highlighted Dark Navy Card */}
          <div
            onClick={() => onSelectPillar?.(1)}
            className="group cursor-pointer bg-[#0B2559] rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FEF08A] text-slate-900 flex items-center justify-center mb-6 shadow-sm">
                <Award className="w-6 h-6 text-amber-700" />
              </div>
              <div className="text-[11px] font-bold text-[#FEF08A] uppercase tracking-widest mb-1.5">
                PILLAR 02
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Practitioner Mentorship
              </h3>
              <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
                Bukan sekadar pembicara motivasi, tapi Head of Growth dan founder UMKM berpengalaman 7-10+ tahun yang buka-bukaan playbook asli.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-900/60 flex items-center text-xs font-semibold text-blue-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-400/30 text-blue-200">
                <span>Verified Track Record</span>
                <Check className="w-3.5 h-3.5 text-blue-300" />
              </span>
            </div>
          </div>

          {/* Pillar 03 */}
          <div
            onClick={() => onSelectPillar?.(2)}
            className="group cursor-pointer bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
                <ArrowLeftRight className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1.5">
                PILLAR 03
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Structured Skill Barter
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Punya skill copywriting tapi butuh arahan Google Ads? Matchmaking terstruktur mempertemukan kebutuhan spesifik kamu dalam satu meja.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Direct Win-Win Exchange 💎</span>
            </div>
          </div>

          {/* Pillar 04 */}
          <div
            onClick={() => onSelectPillar?.(3)}
            className="group cursor-pointer bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold text-pink-600 uppercase tracking-widest mb-1.5">
                PILLAR 04
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Zero-Ego Atmosphere
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Suasana hangat di cafe atau co-working space estetik. Bebas basa-basi formalitas, semua hadir untuk saling bantu dan berkolaborasi.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-pink-600 group-hover:text-pink-700">
              <span>High Warmth &amp; Trust ♡</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
