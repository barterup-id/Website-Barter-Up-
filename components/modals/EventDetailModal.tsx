'use client';

import {X, MapPin, Calendar, Users, Award} from 'lucide-react';
import Image from 'next/image';

export interface EventDetailItem {
  id: string;
  badge: string;
  badgeColor?: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  speaker: string;
  highlights: string[];
  imageSrc: string;
}

interface EventDetailModalProps {
  event: EventDetailItem | null;
  onClose: () => void;
}

export default function EventDetailModal({event, onClose}: EventDetailModalProps) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Event Header Photo */}
        <div className="relative h-56 w-full bg-slate-800">
          <Image
            src={event.imageSrc}
            alt={event.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-slate-200 bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-colors z-10"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-2 bg-yellow-400 text-slate-900">
              {event.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-7 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>{event.attendees}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Speaker: {event.speaker}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Highlight & Output Sesi:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
              {event.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold"
            >
              Tutup Galeri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
