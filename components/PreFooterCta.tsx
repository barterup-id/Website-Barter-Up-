'use client';

import {MessageCircle} from 'lucide-react';

interface PreFooterCtaProps {
  onOpenJoinModal: () => void;
}

export default function PreFooterCta({onOpenJoinModal}: PreFooterCtaProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-[#4C75FE] via-[#5B82FF] to-[#7394FE] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Subtle decorative glow circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-900/10 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#FEF08A] text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xs">
                GABUNG SEKARANG!
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
                Ready to &apos;Barter&apos; Your Expertise and Find Your Growth Group?
              </h2>

              <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-normal">
                Dapatkan info networking tiap bulan, special member perks, dan connect ke 500+ profesional dan business owner yang siap saling bantu!
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#2563EB] text-sm sm:text-base font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98"
              >
                <span>JOIN THE CIRCLE VIA WHATSAPP</span>
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
