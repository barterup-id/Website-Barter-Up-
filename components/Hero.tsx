'use client';

import Image from 'next/image';
import {ArrowRight, Calendar, Sparkles, MapPin} from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
  onOpenEventModal: () => void;
  onOpenHeroDetail: () => void;
}

export default function Hero({onOpenJoinModal, onOpenEventModal, onOpenHeroDetail}: HeroProps) {
  return (
    <section id="about" className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FEF08A] text-[#713F12] border border-yellow-300/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>EST. 2024 • 500+ MEMBERS FROM DIVERSE SECTORS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#0B2559] leading-[1.12]">
              Cross-Industry Learning.
              <br />
              Expand Network.
              <br />
              <span className="text-[#3B72EA]">Find Your People.</span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Barter Up! is a collaborative peer-to-peer learning &amp; networking community that empowers professionals and SMEs to upskill through cross-industry expertise exchange. If you love meeting new people while learning a new skill, you come to the right place!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#4C82FB] hover:bg-[#3B72EA] text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-150 active:scale-98"
              >
                <span>Join Our Community 👥</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEventModal}
                className="inline-flex items-center justify-center gap-2 bg-[#FEF08A] hover:bg-[#FDE047] text-slate-900 border border-yellow-300/90 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full shadow-2xs hover:shadow transition-all duration-150 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-amber-800" />
                <span>Check Next Networking Event</span>
              </button>
            </div>

            {/* Member Avatars & Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden items-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-[#3B82F6] text-white font-bold text-xs">
                  FD
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-[#F97316] text-white font-bold text-xs">
                  MK
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-[#8B5CF6] text-white font-bold text-xs">
                  PR
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-[#EC4899] text-white font-bold text-[10px]">
                  300+
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                <span className="font-bold text-slate-900">500+ Founders &amp; Professionals</span> members across Jabodetabek.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Card with Photo */}
          <div className="lg:col-span-5">
            <div
              onClick={onOpenHeroDetail}
              className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Grow Your Social Media, Grow Your Business at Pintar Campus, Senayan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  referrerPolicy="no-referrer"
                />
                
                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FEF08A] text-slate-900 shadow-sm">
                    SNEAK PEEK
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/50 text-white backdrop-blur-md border border-white/20">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>Pintar Campus, Senayan</span>
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-yellow-300 transition-colors">
                    Grow Your Social Media, Grow Your Business
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    With Amrritsa Raje (@amrritsaroje)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
