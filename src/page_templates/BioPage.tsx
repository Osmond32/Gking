'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Shield, Calendar, Award, Flame } from 'lucide-react';

const palmares = [
  { title: "RIW Hardcore Champion", date: "2025 - Presente", fed: "Real Italian Wrestling", desc: "Vinto in un brutale match senza regole sconfiggendo il campione uscente in una contesa di 25 minuti." },
  { title: "Southern Warrior Cup Winner", date: "Ottobre 2024", fed: "RIW Special Event", desc: "Vincitore del torneo a 8 uomini dedicato alla celebrazione dei migliori lottatori del Sud Italia." },
  { title: "RIW Tag Team Champion", date: "2023 - 2024", fed: "RIW Wrestling", desc: "Regno durato oltre 180 giorni a fianco del tag team partner nel roster RIW." },
  { title: "Messina Hardcore Cup", date: "2022", fed: "RIW Showcase", desc: "Trofeo locale disputato nella sua città natale davanti a oltre 1000 spettatori." },
];

const inspirations = [
  { name: "Sting", desc: "L'icona del ring. Per la teatralità, il carisma oscuro e l'abilità di connettere con il pubblico ad un livello profondo, portando sempre qualcosa di spettacolare." },
  { name: "Homicide", desc: "La leggenda indipendente. Per l'attitudine street hardcore spietata, l'aggressività e la totale mancanza di paura sul ring che definiscono lo stile Southern Warrior." }
];

export default function BioPage() {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background spotlights */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-wrestling-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-wrestling-gold/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 mt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-wrestling-red font-semibold">// IL GUERRIERO DENTRO E FUORI DAL RING</span>
        <h1 className="text-5xl sm:text-7xl font-anton tracking-wider mt-2">BIOGRAFIA & <span className="text-wrestling-gold font-anton">PALMARÈS</span></h1>
        <p className="text-zinc-500 max-w-xl mx-auto mt-4 text-sm sm:text-base font-medium">
          Dalla Sicilia all'arena nazionale, la storia di sacrificio, devozione e pura violenza sportiva di Giuseppe Campagna.
        </p>
      </div>

      {/* Story section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Left Column: Image with dynamic spotlight shadow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[450px] sm:h-[550px] w-full rounded-sm overflow-hidden border border-wrestling-red/20 shadow-[0_0_50px_rgba(229,9,20,0.15)] group"
        >
          <Image
            src="/hero_mock.png"
            alt="Giuseppe Campagna G-King portrait"
            fill
            className="object-cover object-top filter brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wrestling-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 font-mono">
            <p className="text-wrestling-gold text-lg uppercase tracking-wider font-bold">Giuseppe Campagna</p>
            <p className="text-zinc-400 text-sm">"G-King, The Southern Warrior"</p>
          </div>
        </motion.div>

        {/* Right Column: Bio text */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="space-y-6 text-zinc-300"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-anton text-white tracking-wider">
            DA MESSINA CON RABBIA E ONORE
          </motion.h3>
          <motion.p variants={itemVariants} className="leading-relaxed text-base sm:text-lg">
            Nato e cresciuto a Messina, Giuseppe Campagna ha sempre trovato nello sport da ring la sua massima espressione di libertà. Avvicinatosi al wrestling sin da giovane, ha intrapreso un percorso di allenamento serrato per fondere la disciplina classica con la crudezza dello stile stradale.
          </motion.p>
          <motion.p variants={itemVariants} className="leading-relaxed text-sm sm:text-base text-zinc-400">
            L'approdo nella **Real Italian Wrestling (RIW)** ha segnato la sua consacrazione. Sotto il ring name **G-King**, ha portato alla luce lo spirito del "Southern Warrior", un guerriero fiero che non indietreggia mai e che fa del rispetto, del sudore e dell'impatto fisico le sue armi principali.
          </motion.p>
          <motion.p variants={itemVariants} className="leading-relaxed text-sm sm:text-base text-zinc-400">
            Famoso per i suoi scontri ad altissimo rischio e per la propensione ai match senza squalifica, G-King si è guadagnato sul campo la reputazione di lottatore hardcore indomabile, portando la bandiera della Sicilia e di Messina sui ring di tutta Italia.
          </motion.p>
          
          {/* Quick stats box */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 border border-zinc-800 bg-wrestling-black-light/50 p-6 rounded-sm font-mono text-xs uppercase"
          >
            <div>
              <p className="text-zinc-500 mb-1">Altezza</p>
              <p className="text-white font-bold text-sm">183 cm</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Peso</p>
              <p className="text-white font-bold text-sm">95 kg</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Città</p>
              <p className="text-wrestling-gold font-bold text-sm">Messina, Sicilia</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Stile</p>
              <p className="text-wrestling-red font-bold text-sm">Hardcore / Powerhouse</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Inspirations section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <Flame className="w-8 h-8 text-wrestling-red mx-auto mb-3 animate-pulse" />
          <h3 className="text-3xl font-anton tracking-wider">LE SUE ISPIRAZIONI</h3>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">Leggende che hanno plasmato il Southern Warrior</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {inspirations.map((ins, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-wrestling-black-light border border-zinc-800 hover:border-wrestling-red/40 p-8 rounded-sm text-center md:text-left transition-colors duration-300"
            >
              <h4 className="text-2xl font-anton text-wrestling-gold tracking-wider mb-3">{ins.name}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{ins.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Palmarès Section */}
      <section id="palmares" className="scroll-mt-24">
        <div className="text-center mb-16">
          <Trophy className="w-10 h-10 text-wrestling-gold mx-auto mb-3" />
          <h3 className="text-4xl font-anton tracking-wider">PALMARÈS COMPLETO</h3>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">Tutti i regni titolati e i traguardi storici</p>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-zinc-800 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
          {palmares.map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-wrestling-black border-2 border-wrestling-red group-hover:border-wrestling-gold transition-colors duration-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-wrestling-red group-hover:bg-wrestling-gold transition-colors duration-300" />
              </div>

              {/* Title Card */}
              <div className="bg-wrestling-black-light border border-zinc-850 p-6 rounded-sm group-hover:border-wrestling-gold/30 transition-all duration-300 relative overflow-hidden">
                <span className="font-mono text-[10px] text-wrestling-gold font-bold uppercase block mb-1">
                  {title.date}
                </span>
                <h4 className="text-2xl font-anton text-white tracking-wider mb-1">{title.title}</h4>
                <p className="font-mono text-xs text-wrestling-red font-bold uppercase mb-4">{title.fed}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{title.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
