'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Bio & Palmarès', href: '/bio' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contatti', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wrestling-black/80 backdrop-blur-md border-b border-wrestling-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <Trophy className="w-6 h-6 text-wrestling-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-anton text-2xl tracking-wider text-white group-hover:text-wrestling-gold transition-colors duration-300">
                  G-KING
                </span>
                <span className="hidden sm:inline font-mono text-[10px] bg-wrestling-red text-white px-2 py-0.5 rounded tracking-widest uppercase">
                  Southern Warrior
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-anton text-lg tracking-wider transition-colors duration-300 py-2 ${
                      isActive ? 'text-wrestling-gold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-wrestling-red"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="bg-wrestling-red hover:bg-red-700 text-white font-anton tracking-wider px-5 py-2 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
              >
                BOOKING
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-400 hover:text-white focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-wrestling-red/10 bg-wrestling-black/95 backdrop-blur-lg"
            >
              <div className="px-2 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 font-anton text-xl tracking-wider rounded-sm transition-colors ${
                        isActive
                          ? 'text-wrestling-gold bg-wrestling-red/10'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="px-3 pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-wrestling-red hover:bg-red-700 text-white font-anton tracking-wider py-3 rounded-sm transition-all duration-300"
                  >
                    BOOKING
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer */}
      <div className="h-2" />
    </>
  );
}
