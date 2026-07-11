'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    federation: '',
    date: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Formspree / EmailJS mock service simulator
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulates network request
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        federation: '',
        date: '',
        message: '',
      });
    } catch (err) {
      setError("Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background lights */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-wrestling-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-wrestling-gold/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 mt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-wrestling-red font-semibold">// SCRIVI AL TEAM DI G-KING</span>
        <h1 className="text-5xl sm:text-7xl font-anton tracking-wider mt-2">BOOKING & <span className="text-wrestling-gold font-anton">CONTATTI</span></h1>
        <p className="text-zinc-500 max-w-xl mx-auto mt-4 text-sm sm:text-base font-medium">
          Organizza un match, richiedi una collaborazione o prenota G-King per il tuo prossimo evento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-5xl mx-auto">
        {/* Sidebar details */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-wrestling-black-light border border-zinc-900 p-8 rounded-sm space-y-8">
            <h3 className="text-2xl font-anton text-white tracking-wider border-b border-zinc-800 pb-4">INFO DIRETTE</h3>
            
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-wrestling-red shrink-0" />
              <div>
                <h4 className="font-anton text-sm tracking-wider text-wrestling-gold mb-1">EMAIL BOOKING</h4>
                <a href="mailto:booking@gkingwrestling.com" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">
                  booking@gkingwrestling.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Calendar className="w-6 h-6 text-wrestling-red shrink-0" />
              <div>
                <h4 className="font-anton text-sm tracking-wider text-wrestling-gold mb-1">EVENTI / SHOWS</h4>
                <p className="text-sm text-zinc-400">
                  Richieste di disponibilità per eventi in tutta Europa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-wrestling-red shrink-0" />
              <div>
                <h4 className="font-anton text-sm tracking-wider text-wrestling-gold mb-1">BASE OPERATIVA</h4>
                <p className="text-sm text-zinc-400">
                  Messina, Sicilia (RIW Roster)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2">
          <div className="bg-wrestling-black-light border border-zinc-900 p-8 rounded-sm">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <CheckCircle2 className="w-16 h-16 text-wrestling-gold mx-auto" />
                <h3 className="text-3xl font-anton text-white tracking-wider">MESSAGGIO INVIATO!</h3>
                <p className="text-zinc-400 max-w-md mx-auto text-sm">
                  Grazie per aver contattato il team di G-King. Il manager ti risponderà il prima possibile per discutere la disponibilità e i dettagli dell'evento.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-wrestling-red hover:bg-red-700 text-white font-anton tracking-wider px-6 py-3 rounded-sm transition-colors duration-300"
                >
                  INVIA UN ALTRO MESSAGGIO
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-anton text-white tracking-wider border-b border-zinc-800 pb-4">FORM DI RICHIESTA</h3>
                
                {error && <div className="bg-red-900/20 border border-red-550 text-red-300 p-4 rounded-sm text-sm">{error}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                      Nome / Referente
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tuo nome o della federazione"
                      className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tua@email.com"
                      className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="federation" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                      Federazione (Opzionale)
                    </label>
                    <input
                      type="text"
                      id="federation"
                      name="federation"
                      value={formData.federation}
                      onChange={handleChange}
                      placeholder="Es. RIW, ICW, etc."
                      className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                      Data Evento (Opzionale)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Es. Richiesta di Booking, Intervista, Evento"
                    className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2 font-bold">
                    Messaggio / Dettagli
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrivi la tua proposta o l'evento nei dettagli..."
                    className="w-full bg-wrestling-black border border-zinc-800 focus:border-wrestling-red rounded-sm p-3 text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-wrestling-red hover:bg-red-700 text-white font-anton text-lg tracking-wider py-4 rounded-sm transition-all duration-300 transform hover:scale-101 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                >
                  {loading ? (
                    'INVIO IN CORSO...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      INVIA RICHIESTA
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
