'use client';

import {X, Star, Quote, Sparkles, ArrowRight} from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarText: string;
  avatarBg: string;
  buttonLabel: string;
  quote: string;
  barteredSkill: string;
  receivedSkill: string;
  impact: string;
  edition: string;
}

interface StoryTestimonialModalProps {
  testimonial: TestimonialItem | null;
  onClose: () => void;
}

export default function StoryTestimonialModal({testimonial, onClose}: StoryTestimonialModalProps) {
  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-100/60 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -ml-12 -mb-12" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors z-10"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-14 h-14 rounded-2xl ${testimonial.avatarBg} text-white font-black text-lg flex items-center justify-center shadow-md`}>
              {testimonial.avatarText}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1">5.0 / 5.0</span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">{testimonial.name}</h4>
              <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
            </div>
          </div>

          <div className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-5">
            <Quote className="w-8 h-8 text-blue-200 absolute -top-3 -left-2 fill-blue-100 pointer-events-none" />
            <p className="text-sm md:text-base text-slate-700 leading-relaxed italic relative z-10">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>

          {/* Barter Exchange Details */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 mb-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Pertukaran Barter Keahlian:
              </span>
              <span className="text-[11px] text-blue-700 font-semibold px-2 py-0.5 rounded-full bg-blue-100">
                {testimonial.edition}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-blue-100/80 shadow-2xs">
                <span className="text-[11px] text-slate-500 block mb-0.5">Skill yang Dibagikan</span>
                <span className="font-bold text-slate-900">{testimonial.barteredSkill}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-blue-100/80 shadow-2xs">
                <span className="text-[11px] text-slate-500 block mb-0.5">Wawasan yang Didapatkan</span>
                <span className="font-bold text-blue-700">{testimonial.receivedSkill}</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 pt-1 border-t border-blue-100/60 flex items-center gap-1.5">
              <span className="font-bold text-emerald-700">Hasil:</span>
              <span>{testimonial.impact}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">Terverifikasi Member Barter Up!</span>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Lihat Cerita Lainnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
