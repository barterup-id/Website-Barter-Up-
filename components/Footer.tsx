'use client';

import BarterUpLogo from './BarterUpLogo';
import {Mail, MessageCircle, Instagram, Linkedin, ChevronRight} from 'lucide-react';

export default function Footer() {
  const navLinks = [
    {label: 'About Us', href: '#about'},
    {label: 'How We Roll', href: '#how-we-roll'},
    {label: 'Dokumentasi', href: '#dokumentasi'},
    {label: 'What They Say', href: '#what-they-say'},
    {label: 'Artikel & Insight', href: '#artikel'},
    {label: 'FAQ', href: '#faq'},
  ];

  return (
    <footer className="relative bg-white pt-12 pb-8 border-t border-slate-100">
      {/* Top Colorful Accent Line matching screenshot */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACC15] via-[#4ADE80] to-[#3B82F6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <BarterUpLogo size="md" />

            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-md">
              Belajar bareng, tukar skill, scale up bisnis. Komunitas peer-learning &amp; barter keahlian untuk profesional muda, kreator, dan founder UMKM Indonesia.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#065F46] text-xs font-bold tracking-tight">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE COMMUNITY (JABODETABEK)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              NAVIGASI EKSPLORASI
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect With Us (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              CONNECT WITH US
            </h4>

            <div className="space-y-2.5">
              <a
                href="mailto:barterup.id@gmail.com"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-blue-300 transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate">barterup.id@gmail.com</span>
              </a>

              <a
                href="https://wa.me/6285179959250"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-emerald-300 transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">WhatsApp: +62 851-7995-9250</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://instagram.com/barterup.id"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-rose-300 transition-all"
                >
                  <Instagram className="w-3.5 h-3.5 text-rose-500" />
                  <span>@barterup.id</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Barter Up!</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© 2026 Barter Up! (barterup.id). Networking for Learning</p>
          <p className="flex items-center gap-1">
            <span>Made with high curiosity in Jakarta</span>
            <span className="text-amber-500">✦</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
