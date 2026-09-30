'use client';

import {useState} from 'react';
import {X, MessageSquare, Send, Mail, Phone, CheckCircle} from 'lucide-react';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionModal({isOpen, onClose}: QuestionModalProps) {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const text = encodeURIComponent(`Halo Tim Barter Up! Saya ${name}, ada pertanyaan:\n\n${question}`);
    setTimeout(() => {
      window.open(`https://wa.me/6285179959250?text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>TANYA TIM BARTER UP!</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Ada Pertanyaan?
            </h3>
            <p className="text-sm text-slate-600 mb-5">
              Tanyakan apa saja seputar format acara, cara gabung, kemitraan venue, atau kolaborasi mentor.
            </p>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Pesan / Pertanyaan
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ketik pertanyaanmu di sini..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B72EA] hover:bg-[#2563EB] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp Langsung</span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email: barterup.id@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>WhatsApp: +62 851-7995-9250</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Membuka WhatsApp...</h4>
            <p className="text-sm text-slate-600">
              Pertanyaanmu siap dikirim langsung ke WhatsApp admin Barter Up!.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
