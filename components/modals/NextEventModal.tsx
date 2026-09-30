'use client';

import {useState} from 'react';
import {X, Calendar, MapPin, Clock, Users, CheckCircle2, Ticket} from 'lucide-react';

interface NextEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NextEventModal({isOpen, onClose}: NextEventModalProps) {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    industry: 'Marketing & Digital',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {!registered ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>UPCOMING EDITION • EDISI 16</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Barter Up! Vol. 16: B2B Growth & Cross-Skill Barter
            </h3>

            {/* Event Meta Badges */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 my-4 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-900">Sabtu, 18 Oktober 2026</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>13.30 – 17.30 WIB (Networking & Barter Table)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Pintar Campus, Senayan / Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Terbatas 40 Kursi (Sisa 8 kursi lagi)</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Fokus Industri / Sektor
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                >
                  <option value="Marketing & Digital">Digital Marketing & Growth</option>
                  <option value="F&B & Retail UMKM">F&B & UMKM Retail</option>
                  <option value="Tech, SaaS & Product">Tech, SaaS & Product Development</option>
                  <option value="Creative & Branding">Creative Agency & Design</option>
                  <option value="Finance & Legal">Legal, Finance & Operasional</option>
                  <option value="General Professional">Lainnya / Professional Explorer</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#FEF08A] hover:bg-[#FDE047] text-slate-900 border border-yellow-300 font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <Ticket className="w-4 h-4" />
                <span>Klaim Kursi Networking ($0 Community Entry)</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Reservasi Kursi Berhasil!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Terima kasih <strong>{formData.name}</strong>! Tiket konfirmasi dan panduan persiapan barter skill telah kami kirimkan ke WhatsApp dan email kamu.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Tips Datang ke Barter Up!:</p>
              <p>• Bawa 10-15 lembar kartu nama atau business sample produk kamu.</p>
              <p>• Siapkan 1 pertanyaan bisnis spesifik yang ingin kamu diskusikan di meja.</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-full text-sm hover:bg-slate-800"
            >
              Tutup & Sampai Jumpa di Meetup!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
