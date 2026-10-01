'use client';

import {X, Clock, User, Share2, Bookmark, CheckCircle, Users} from 'lucide-react';
import {useState} from 'react';

export interface ArticleItem {
  id: string;
  category: string;
  categoryTheme: string;
  readTime: string;
  title: string;
  summary: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

interface ArticleReaderModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export default function ArticleReaderModal({article, onClose}: ArticleReaderModalProps) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-y-auto">
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors z-20"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${article.categoryTheme}`}>
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            {article.title}
          </h3>

          <div className="flex items-center justify-between py-3 border-y border-slate-100 mb-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-800">{article.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-slate-600 hover:text-blue-600 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 transition-colors"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Bagikan'}</span>
              </button>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-6">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-amber-700" />
              Poin Kunci Ringkasan Praktisi:
            </h4>
            <ul className="space-y-1.5 text-xs text-amber-900/90 list-disc list-inside">
              {article.keyTakeaways.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Main Article Prose */}
          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Insights & Learning CTA */}
          <a
            href="https://chat.whatsapp.com/EM2ZlOjwUwgKBnaeOXPBo1?s=cl&p=i&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 p-5 bg-violet-50/80 hover:bg-violet-100/80 rounded-2xl border border-violet-100 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-violet-900">Mau belajar lebih banyak lagi?</h5>
                <p className="text-xs text-violet-700">Join group Insights & Learning Barter Up!</p>
              </div>
            </div>
            <span className="px-5 py-2 bg-violet-600 group-hover:bg-violet-700 text-white rounded-full text-xs font-bold whitespace-nowrap shadow-sm transition-colors">
              Join WhatsApp Group
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
