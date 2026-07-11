'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Calendar, ArrowRight, Shield, Award, Play } from 'lucide-react';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Mock list of top titles
  const highlights = [
    { title: "RIW Hardcore Championship", fed: "Real Italian Wrestling", year: "2025" },
    { title: "Southern Warrior Trophy", fed: "RIW Special Event", year: "2024" },
    { title: "Tag Team Cup", fed: "RIW Tournament", year: "2023" }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-wrestling-red/20">
        {/* Background Image/Video Mockup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Gking/hero_mock.png"
            alt="G-King Hero Mockup"
            fill
            priority
            className="object-cover object-top opacity-60 filter brightness-50"
          />
          {/* Spotlight Effect Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-wrestling-black via-wrestling-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-wrestling-black/90 via-transparent to-wrestling-black/90" />
          
          {/* Red/Gold Spotlight glow overlay */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-wrestling-red/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-wrestling-gold/5 blur-[100px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="font-mono text-sm tracking-[0.3em] text-wrestling-gold uppercase bg-wrestling-gold/10 px-4 py-1.5 rounded-full border border-wrestling-gold/20">
              L'orgoglio del Sud • Messina
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-7xl sm:text-9xl font-anton tracking-wider text-white select-none drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]"
          >
            G-<span className="text-wrestling-red">KING</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl sm:text-3xl font-anton tracking-widest text-wrestling-gold mt-2 uppercase"
          >
            Southern Warrior
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-zinc-400 max-w-xl mx-auto mt-6 text-sm sm:text-base font-medium tracking-wide leading-relaxed"
          >
            Wrestler Professionista RIW • Hardcore specialist • Dalle strade di Messina ai palcoscenici del wrestling nazionale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-wrestling-red hover:bg-red-700 text-white font-anton text-lg tracking-wider px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              BOOKING & EVENTI
            </Link>
            <Link
              href="/bio"
              className="w-full sm:w-auto bg-transparent border-2 border-zinc-700 hover:border-wrestling-gold text-white font-anton text-lg tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:text-wrestling-gold flex items-center justify-center gap-2 group"
            >
              LA SUA STORIA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll</span>
          <div className="w-1.5 h-6 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-full h-2 bg-wrestling-red rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text and Bio Teaser */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={fadeInUp} className="font-mono text-xs uppercase tracking-widest text-wrestling-red block mb-3 font-semibold">
              // CHI È GIUSEPPE CAMPAGNA
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-anton tracking-wide mb-6 leading-tight">
              IL GUERRIERO <span className="text-wrestling-gold">DEL SUD</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-300 text-base sm:text-lg mb-6 leading-relaxed">
              Cresciuto con il mito dell'arena, Giuseppe ha forgiato il suo alter-ego, **G-King**, per portare nel ring la rabbia, l'onore e lo spirito di Messina. Noto come il "Southern Warrior", unisce uno stile di lotta aggressivo e spettacolare a una spiccata attitudine hardcore.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Ispirato da leggende come Sting e Homicide, G-King sul ring non fa prigionieri. Ogni match è una battaglia di resistenza e spettacolarità, condita da impatti violenti e acrobazie folli.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/bio"
                className="inline-flex items-center gap-2 bg-wrestling-black border border-wrestling-red hover:bg-wrestling-red text-white font-anton tracking-wider px-6 py-3 rounded-sm transition-all duration-300 group"
              >
                LEGGI LA BIO COMPLETA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Graphic Emblem / Trinacria Watermark */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] relative rounded-full border border-wrestling-red/10 flex items-center justify-center overflow-hidden bg-wrestling-black-light/30">
              <div className="absolute inset-0 bg-radial-gradient from-wrestling-red/10 to-transparent pointer-events-none" />
              
              {/* Rotating golden emblem */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="w-4/5 h-4/5 border-2 border-dashed border-wrestling-gold/20 rounded-full flex items-center justify-center"
              >
                {/* SVG Trinacria/Sicily Stylized representation */}
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 fill-wrestling-gold/60 opacity-60">
                  <path d="M50 15 L62 40 L88 40 L67 55 L75 80 L50 65 L25 80 L33 55 L12 40 L38 40 Z" />
                  <circle cx="50" cy="50" r="10" className="fill-wrestling-red/80" />
                </svg>
              </motion.div>
              
              {/* Text Badge border */}
              <div className="absolute inset-4 border border-wrestling-red/20 rounded-full flex items-center justify-center p-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-center text-zinc-500 font-bold leading-normal">
                  Southern Warrior • Messina • Hardcore Pride
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Titoli in Evidenza */}
      <section className="py-24 bg-wrestling-black-light border-y border-wrestling-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-wrestling-gold font-semibold">// PALMARÈS HIGHLIGHTS</span>
            <h2 className="text-4xl sm:text-5xl font-anton tracking-wide mt-2">CINTURE E <span className="text-wrestling-red">TRAGUARDI</span></h2>
            <p className="text-zinc-500 mt-3 text-sm max-w-md mx-auto">I titoli più significativi conquistati sul ring con fatica e sangue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-wrestling-black border border-zinc-800 hover:border-wrestling-gold/40 p-8 rounded-sm transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-wrestling-gold/10 to-transparent group-hover:from-wrestling-gold/20 transition-all duration-300" />
                
                <Trophy className="w-10 h-10 text-wrestling-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-anton text-white tracking-wider mb-2">{h.title}</h3>
                <p className="font-mono text-xs text-wrestling-red mb-1 font-semibold uppercase">{h.fed}</p>
                <p className="font-mono text-xs text-zinc-500">{h.year}</p>

                {/* Corner light effect */}
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-wrestling-red/5 blur-xl group-hover:bg-wrestling-red/15 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/bio#palmares"
              className="font-anton tracking-wider text-wrestling-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group text-lg"
            >
              VEDI TUTTI I TITOLI
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Highlight Gallery Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-wrestling-red font-semibold">// PHOTO SHOWCASE</span>
            <h2 className="text-4xl sm:text-5xl font-anton tracking-wide mt-2">HIGHLIGHTS <span className="text-wrestling-gold">ACTION</span></h2>
          </div>
          <Link
            href="/gallery"
            className="font-anton tracking-wider text-zinc-400 hover:text-wrestling-gold transition-colors duration-300 mt-4 md:mt-0 flex items-center gap-2 group"
          >
            GUARDA LA GALLERY COMPLETA
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Visual Showcase Grids using mockup assets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative h-[350px] group overflow-hidden border border-zinc-800 rounded-sm">
            <Image
              src="/Gking/match_mock.png"
              alt="Action Match Highlight"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs text-wrestling-red uppercase font-bold tracking-widest block mb-1">RIW Arena Match</span>
              <h3 className="text-2xl font-anton text-white tracking-wider">Top Rope Leap</h3>
            </div>
          </div>

          <div className="relative h-[350px] group overflow-hidden border border-zinc-800 rounded-sm">
            <Image
              src="/Gking/belt_mock.png"
              alt="Belt Highlight"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs text-wrestling-gold uppercase font-bold tracking-widest block mb-1">Championship Gold</span>
              <h3 className="text-2xl font-anton text-white tracking-wider">The Title</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Booking / Banner Section */}
      <section className="py-20 relative bg-wrestling-red/10 border-t border-wrestling-red/30 overflow-hidden">
        {/* Lights backgrounds */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-wrestling-red/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-wrestling-gold/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <Award className="w-12 h-12 text-wrestling-gold mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl sm:text-6xl font-anton tracking-wider text-white mb-6">PRENOTA G-KING PER IL TUO SHOW</h2>
          <p className="text-zinc-300 max-w-xl mx-auto mb-10 text-base sm:text-lg tracking-wide leading-relaxed">
            Sei una federazione di wrestling o un organizzatore di eventi? Porta il "Southern Warrior" a infiammare la tua folla. Disponibile per match singoli, hardcore, promo o seminari.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-wrestling-red hover:bg-red-700 text-white font-anton text-xl tracking-wider px-10 py-5 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.8)]"
          >
            CONTATTA ORA IL MANAGER
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
