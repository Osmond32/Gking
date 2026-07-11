# Spec Progetto: Sito Vetrina G-King (Wrestler)

## Contesto
Sito vetrina per Giuseppe Campagna, in arte **G-King**, wrestler professionista (RIW - Real Italian Wrestling), soprannome "Southern Warrior", originario di Messina. Progetto realizzato come regalo per un amico e come pezzo di portfolio personale (sviluppatore junior).

## Obiettivo
Sito scenico, d'impatto visivo, che pubblicizzi G-King come wrestler e mostri al contempo competenze frontend avanzate (animazioni, transizioni, cura del dettaglio).

## Stack tecnico
- **Next.js** (App Router, SSG — Static Site Generation)
- **TypeScript**
- **Tailwind CSS** per lo styling
- **Framer Motion** per animazioni e scroll reveal
- **Lenis** per lo smooth scroll
- Routing gestito nativamente da Next.js (file-based routing, niente React Router)
- **next/image** per l'ottimizzazione delle immagini (utile per la Gallery)
- **Nessun backend** — sito statico generato (SSG), nessun database/pannello admin
- Form contatti: servizio esterno no-backend da integrare (es. Formspree o EmailJS) — da scegliere in fase di sviluppo

## Perché Next.js + TypeScript
Next.js scelto principalmente per **SEO**: le pagine pre-renderizzate (SSG) favoriscono l'indicizzazione su Google rispetto a una SPA pura, importante per farsi trovare da chi cerca "G-King wrestler" o eventi RIW.
TypeScript introdotto come layer di tipizzazione sopra React/Next.js — primo progetto reale per iniziare a usarlo (competenza molto richiesta nelle offerte di lavoro junior/alternance).

## Deploy
- **Vercel**, collegato a un repository **GitHub privato**
- Motivo: mantenere il codice sorgente nascosto pur avendo il sito pubblicamente accessibile (a differenza di GitHub Pages, che su piano free richiede repo pubblico)

## Direzione visiva
- Tema arena/ring da wrestling: palette **nero, rosso, oro**
- Effetti spotlight / luci di scena
- Tipografia bold da locandina di match (es. Bebas Neue, Anton per i titoli)
- Richiami visivi alla **Trinacria** (Sicilia), elemento distintivo del personaggio
- Texture grain/vignette in stile poster vintage hardcore wrestling
- Animazioni cinematografiche: transizioni tra sezioni, reveal on scroll, hero d'ingresso d'impatto

## Struttura del sito (pagine)

### 1. Home Page
Funziona da "trailer": ogni sezione rimanda alla pagina di approfondimento corrispondente, non è autosufficiente.

1. **Hero video** — video generato con Gemini, in loop, autoplay muto, overlay scuro/gradiente sopra il video, testo "G-KING" in overlay + tagline (es. "Southern Warrior" / "RIW Hardcore Champion"), poster image di fallback per mobile/connessioni lente
2. **Intro rapida** — 2-3 righe teaser (non bio completa) + CTA "Scopri la sua storia" → link a pagina Bio
3. **Titoli in evidenza** — 3-4 card dei titoli più importanti/recenti + CTA "Vedi tutto il palmarès" → link a pagina Bio
4. **Highlight Gallery** — 4-6 foto/clip più rappresentative in griglia + CTA "Guarda la gallery completa" → link a pagina Gallery
5. **Prossimo evento / Booking** — banner con data/luogo se presente, oppure CTA diretta "Prenotalo per un evento" → link a Contatti
6. **Footer** — form contatti o CTA diretta + eventuali link social/RIW

### 2. Pagina Bio
- Storia e percorso: da Messina alla RIW
- Ispirazioni dichiarate (Sting, Homicide)
- Sezione **palmarès/titoli completa** con card, nella stessa pagina (non separata)

### 3. Pagina Gallery
- Foto e video dei match
- Embed YouTube dove disponibili

### 4. Pagina Contatti
- Form di contatto (soluzione no-backend, es. Formspree/EmailJS)

## Fuori scope (escluso esplicitamente)
- Nessuna sezione/pagina dedicata al rap (G-King è anche rapper, ma non è parte di questo progetto)
- Nessun backend/database/pannello admin

## Materiali da raccogliere (a cura del proprietario del progetto)
- [ ] Video hero (generato con Gemini)
- [ ] Foto e video dei match per Gallery
- [ ] Elenco titoli vinti con dettagli (nome titolo, federazione, anno, eventuale immagine cintura)
- [ ] Eventuale prossimo evento in programma (data, luogo)

## Note per lo sviluppo
- Priorità assoluta alla resa scenica: animazioni curate, transizioni fluide, texture/effetti coerenti col tema wrestling
- Font e palette colori definitivi da fissare prima di iniziare i componenti
- Struttura pensata per essere estendibile in futuro senza backend (aggiornamenti manuali via codice)
