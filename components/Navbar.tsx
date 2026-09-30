'use client';

import {useState} from 'react';
import BarterUpLogo from './BarterUpLogo';
import {Menu, X, MessageCircle} from 'lucide-react';

interface NavbarProps {
  onOpenQuestionModal: () => void;
  activeSection: string;
}

export default function Navbar({onOpenQuestionModal, activeSection}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {label: 'About Us', href: '#about'},
    {label: 'How We Roll', href: '#how-we-roll'},
    {label: 'Dokumentasi', href: '#dokumentasi'},
    {label: 'What They Say', href: '#what-they-say'},
    {label: 'Artikel & Insight', href: '#artikel'},
    {label: 'FAQ', href: '#faq'},
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2 group transition-transform active:scale-95">
          <BarterUpLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '') || (item.label === 'About Us' && (!activeSection || activeSection === 'about'));
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-[#EBF2FF] text-[#2563EB] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenQuestionModal}
            className="inline-flex items-center gap-2 bg-[#4C82FB] hover:bg-[#3B72EA] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-150 active:scale-95"
          >
            <span>You have a question?</span>
            <span className="text-base">💬</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenQuestionModal}
            className="p-2 rounded-full bg-blue-50 text-blue-600"
            aria-label="Tanya pertanyaan"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenQuestionModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#4C82FB] text-white text-sm font-medium py-3 rounded-2xl shadow-sm"
            >
              <span>You have a question?</span>
              <span>💬</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
