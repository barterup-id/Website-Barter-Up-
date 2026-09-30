'use client';

import {useState} from 'react';
import {X, CheckCircle, ArrowRight, Sparkles, MessageCircle} from 'lucide-react';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinCommunityModal({isOpen, onClose}: JoinCommunityModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [role, setRole] = useState('');
  const [mySkill, setMySkill] = useState('');
  const [wantSkill, setWantSkill] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = encodeURIComponent(
      `Halo Tim Barter Up! Saya ${name} (${role}). Saya ingin bergabung ke Barter Up WhatsApp Community Circle.\n\nKeahlian yang bisa saya barter: ${mySkill}\nKeahlian yang ingin saya pelajari: ${wantSkill}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/6285179959250?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-emerald-500" />
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GABUNG BARTER UP! COMMUNITY</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Join Our WhatsApp Growth Circle
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Terhubung dengan 500+ founder, marketer, desainer, dan profesional lintas industri di Jabodetabek.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Rian Pratama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Profesi / Bisnis
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Owner F&B / UX Designer"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Skill yang Bisa Kamu &apos;Barter&apos; (Keahlianmu)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: TikTok Ads, Legalitas Usaha, Copywriting..."
                  value={mySkill}
                  onChange={(e) => setMySkill(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Skill yang Ingin Kamu Pelajari
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pitching Investor, SEO, B2B Sales..."
                  value={wantSkill}
                  onChange={(e) => setWantSkill(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#3B72EA] hover:bg-[#2563EB] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <span>Kirim & Gabung WhatsApp Circle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Selamat Bergabung!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Permintaanmu sedang diarahkan ke WhatsApp Community Admin Barter Up!. Kami tak sabar menyambutmu!
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/6285179959250?text=${encodeURIComponent('Halo Tim Barter Up! Saya ingin bergabung ke Barter Up community.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
