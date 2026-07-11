import React from 'react';
import Link from 'next/link';
import { Trophy, Instagram, Youtube, Calendar, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wrestling-black-light border-t border-wrestling-red/20 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo & Nickname */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Trophy className="w-5 h-5 text-wrestling-gold" />
              <span className="font-anton text-xl tracking-wider text-white">G-KING</span>
            </div>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              "Southern Warrior" - RIW Wrestler
            </p>
            <p className="text-zinc-400 text-sm mt-3 max-w-xs">
              Orgoglio messinese, dominatore dei ring italiani. Forza, determinazione e cuore del Sud.
            </p>
          </div>

          {/* Socials & Booking Links */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="font-anton text-sm tracking-wider text-wrestling-gold">Seguilo sui Social</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-wrestling-red/30 flex items-center justify-center text-zinc-400 hover:text-wrestling-gold hover:border-wrestling-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-wrestling-red/30 flex items-center justify-center text-zinc-400 hover:text-wrestling-gold hover:border-wrestling-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Booking / Quick contact info */}
          <div className="flex flex-col items-center md:items-end justify-center md:justify-start gap-3">
            <h4 className="font-anton text-sm tracking-wider text-wrestling-red">CONTATTI & BOOKING</h4>
            <a
              href="mailto:booking@gkingwrestling.com"
              className="flex items-center gap-2 text-zinc-300 hover:text-wrestling-gold transition-colors duration-300 font-mono text-sm"
            >
              <Mail className="w-4 h-4 text-wrestling-red" />
              booking@gkingwrestling.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-wrestling-black border border-wrestling-gold text-wrestling-gold hover:bg-wrestling-gold hover:text-black font-anton tracking-wider text-xs px-4 py-2 rounded-sm transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              PRENOTA ORA
            </Link>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="border-t border-zinc-900 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600">
          <p>&copy; {currentYear} G-King. Tutti i diritti riservati.</p>
          <p className="mt-2 sm:mt-0 font-mono">
            Sviluppato per un amico • Messina Wrestling Showcase
          </p>
        </div>
      </div>
    </footer>
  );
}
