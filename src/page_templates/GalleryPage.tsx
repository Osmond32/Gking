'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Image as ImageIcon, Video, ArrowRight } from 'lucide-react';

const mediaList = [
  { id: 1, type: "image", src: "/match_mock.png", title: "Top Rope Splash", match: "G-King vs. RIW Champion" },
  { id: 2, type: "image", src: "/hero_mock.png", title: "Ring Entrance", match: "Hardcore Showdown" },
  { id: 3, type: "image", src: "/belt_mock.png", title: "Gold Celebration", match: "Championship Victory" },
  { id: 4, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "/match_mock.png", title: "Hardcore Match Highlights", match: "RIW Messina Cup" },
  { id: 5, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "/hero_mock.png", title: "Southern Warrior Promo", match: "Pre-Show Interview" },
  { id: 6, type: "image", src: "/match_mock.png", title: "Powerbomb to the Table", match: "Extreme Rules Match" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const filteredMedia = mediaList.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Lights background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-wrestling-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-wrestling-gold/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 mt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-wrestling-red font-semibold">// MEDIA & HIGHLIGHTS</span>
        <h1 className="text-5xl sm:text-7xl font-anton tracking-wider mt-2">MULTIMEDIA <span className="text-wrestling-gold font-anton">GALLERY</span></h1>
        <p className="text-zinc-500 max-w-xl mx-auto mt-4 text-sm sm:text-base font-medium">
          Esplora gli scatti più brutali e i match integrali del Southern Warrior.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {["all", "image", "video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`font-anton text-sm tracking-wider px-6 py-2.5 rounded-sm border uppercase transition-all duration-350 ${
              filter === type
                ? "bg-wrestling-red border-wrestling-red text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                : "border-zinc-800 bg-wrestling-black text-zinc-400 hover:text-white hover:border-zinc-700"
            }`}
          >
            {type === "all" ? "TUTTI" : type === "image" ? "FOTO" : "VIDEO"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredMedia.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveMedia(item)}
              className="bg-wrestling-black-light border border-zinc-900 rounded-sm overflow-hidden group cursor-pointer hover:border-wrestling-gold/30 transition-all duration-300 relative aspect-video"
            >
              {/* Media Thumbnail */}
              <Image
                src={item.type === "image" ? item.src : (item.thumbnail || '')}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />

              {/* Black/Red gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wrestling-black via-transparent to-transparent opacity-90" />

              {/* Video icon indicator */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-wrestling-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-wrestling-red block font-bold mb-1">
                  {item.match}
                </span>
                <h3 className="text-xl font-anton text-white tracking-wider flex items-center gap-2">
                  {item.type === "image" ? <ImageIcon className="w-4 h-4 text-zinc-500" /> : <Video className="w-4 h-4 text-wrestling-gold" />}
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Video Embed Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-zinc-900 border border-zinc-800 text-white rounded-full flex items-center justify-center hover:bg-wrestling-red hover:border-wrestling-red transition-colors duration-300"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden border border-zinc-800 bg-wrestling-black shadow-2xl"
            >
              {activeMedia.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    fill
                    className="object-contain"
                  />
                  {/* Photo Title Overlay */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-4 border border-zinc-800 rounded-sm font-mono text-xs">
                    <p className="text-wrestling-gold font-bold uppercase">{activeMedia.match}</p>
                    <p className="text-white font-anton text-lg mt-1 tracking-wider">{activeMedia.title}</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={activeMedia.src}
                  title={activeMedia.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
