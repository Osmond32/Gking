# DEVELOPMENT PLAYBOOK V2.0
**Manuale Operativo Architetturale e Procedura di Sviluppo AI-Ready**

Questo documento rappresenta la codifica definitiva del mio metodo di sviluppo software, estratto tramite analisi forense. È stato progettato per essere il riferimento assoluto e il manuale operativo che un agente AI (o un nuovo sviluppatore) deve seguire fedelmente per inizializzare, architettare e sviluppare qualsiasi mio nuovo progetto, senza prendere decisioni architetturali autonome.

---

## 1. PROJECT BOOTSTRAP (Procedura Operativa AI)

Questa sezione detta le istruzioni esatte, passo dopo passo, per la creazione dell'infrastruttura di base (Backend e Frontend). Un agente AI deve eseguire questi step sequenzialmente.

### 1.1 Backend Bootstrap

1. **Inizializzazione Cartella e Progetto:**
   - Creare la cartella radice `Backend`.
   - Posizionarsi in `Backend` ed eseguire `npm init -y`.
   - Modificare `package.json` aggiungendo `"type": "module"` (obbligatorio per import/export ES6).

2. **Installazione Dipendenze:**
   - Eseguire: `npm install express mysql2 dotenv cors bcryptjs jsonwebtoken`
   - Eseguire: `npm install -D nodemon`

3. **Configurazione Script (`package.json`):**
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```

4. **Creazione Alberatura Cartelle:**
   - Creare le cartelle: `config`, `controllers`, `middlewares`, `models`, `routes`.

5. **Creazione File `.env` (nella radice Backend):**
   ```env
   PORT=3000
   
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=
   DB_PORT=3306
   
   JWT_SECRET=inserisci_una_chiave_segreta_qui
   ```

6. **Creazione File `.gitignore`:**
   ```text
   node_modules/
   .env
   ```

7. **Creazione File `config/db.js`:**
   ```javascript
   import mysql from 'mysql2/promise';
   import dotenv from 'dotenv';
   
   dotenv.config();
   
   const bdd = mysql.createPool({
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME,
       port: process.env.DB_PORT || 3306,
       ssl: { rejectUnauthorized: false } // Default per compatibilità cloud DB
   });
   
   export default bdd;
   ```

8. **Creazione File `index.js` (Entry Point Finale):**
   ```javascript
   import express from 'express';
   import dotenv from 'dotenv';
   import cors from 'cors';
   
   dotenv.config();
   
   const app = express();
   
   // Middleware Globali
   app.use(express.json());
   app.use(cors());
   
   // Iniezione Routes (Esempio)
   // import userRoutes from './routes/userRoutes.js';
   // app.use('/users', userRoutes);
   
   // Healthcheck
   app.get('/', (req, res) => {
       res.send('API Server is running 🟢');
   });
   
   const PORT = process.env.PORT || 3000;
   
   app.listen(PORT, () => {
       console.log(`Server démarré sur le port ${PORT} 🟢`);
   });
   ```

### 1.2 Frontend Bootstrap

1. **Inizializzazione Progetto:**
   - Creare il progetto React con Vite: `npm create vite@latest frontend -- --template react` (o equivalente).
   - Posizionarsi nella cartella `frontend` ed eseguire `npm install`.

2. **Installazione Dipendenze Principali:**
   - Eseguire: `npm install react-router-dom axios` (e l'eventuale libreria UI di riferimento, es. Mantine/Chakra).

3. **Creazione Alberatura Cartelle (in `src`):**
   - Creare le cartelle: `pages`, `components`, `services`, `context`, `assets`, `style` (opzionale se CSS modules).

4. **Configurazione `src/main.jsx`:**
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.jsx';
   import './index.css';
   // Eventuali Provider UI globali vanno inseriti qui
   
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

5. **Configurazione `src/App.jsx`:**
   ```javascript
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-dom/client';
   // import { AuthProvider } from './context/AuthContext';
   // import NavBar from './components/NavBar';
   
   function App() {
     return (
       // <AuthProvider>
       <Router>
         {/* <NavBar /> */}
         <Routes>
           {/* <Route path="/" element={<Home />} /> */}
         </Routes>
       </Router>
       // </AuthProvider>
     );
   }
   
   export default App;
   ```

---

## 2. STANDARD DI UN NUOVO PROGETTO (Workflow Cronologico)

Quando inizio un nuovo progetto (o una nuova macro-feature), il processo decisionale ed esecutivo deve seguire rigorosamente questa sequenza logica fino al primo commit.

1. **Fase 1: Modellazione Dati (DB First)**
   - Analisi dei requisiti dell'entità.
   - Definizione dei campi, dei tipi di dato e delle relazioni (chiavi esterne).
   - Creazione fisica delle tabelle nel Database.

2. **Fase 2: Astrazione Dati (Backend Model)**
   - Creazione di `models/nomeEntitaModel.js`.
   - Scrittura delle query CRUD di base (INSERT, SELECT, UPDATE, DELETE) usando sintassi parametrizzata.
   - Test mentale o tramite script isolato delle query.

3. **Fase 3: Logica di Business (Backend Controller)**
   - Creazione di `controllers/nomeEntitaController.js`.
   - Implementazione dei metodi asincroni protetti da `try/catch`.
   - Destrutturazione del payload, controllo dei dati, esecuzione chiamate al Model, restituzione status HTTP e JSON.

4. **Fase 4: Esposizione API (Backend Routes)**
   - Creazione di `routes/nomeEntitaRoutes.js`.
   - Associazione dei metodi HTTP (GET, POST, PUT, DELETE) alle funzioni del Controller.
   - Aggiunta di eventuali Middleware (Auth/Role).
   - Registrazione della nuova rotta in `index.js`.

5. **Fase 5: Validazione Backend**
   - Esecuzione di test manuali via Postman/Insomnia per validare che l'endpoint restituisca il JSON corretto (inclusi i test sui 404 e 500).

6. **Fase 6: Astrazione Rete (Frontend Service)**
   - Creazione di `services/nomeEntitaService.js`.
   - Implementazione delle chiamate Axios corrispondenti ai nuovi endpoint.
   - Standardizzazione dell'output in `{ success, message/data }`.

7. **Fase 7: Architettura di Stato (Frontend Context/Hooks)**
   - Valutazione: I dati servono globalmente? Se sì, creazione/aggiornamento del `Context`. Se no, i dati vivranno localmente nella Page.

8. **Fase 8: Integrazione Visiva (Frontend UI)**
   - Creazione/Modifica di `pages/NomeEntitaPage.jsx`.
   - Inizializzazione degli stati (`loading`, `error`, `data`).
   - Connessione degli Handler UI ai metodi del Service.
   - Creazione di Componenti "Dumb" (nella cartella `components`) per il rendering puro dei dati, se riutilizzabili.

9. **Fase 9: Stabilizzazione e Refactoring**
   - Pulizia dei `console.log` di debug.
   - Verifica di Naming Conventions.
   - Commit.

---

## 3. LA COSTITUZIONE DEL MIO METODO DI SVILUPPO (I 40 Articoli)

Queste regole definiscono l'identità del mio codice. Ogni scelta non conforme a questi articoli è da considerarsi un bug architetturale.

### Architettura Generale e Naming
1. **Un File = Una Responsabilità:** Nessun file deve eccedere il proprio perimetro logico. Le View non chiamano API direttamente, i Controller non scrivono SQL.
2. **Naming Semantico e Prevedibile:** Qualsiasi dev o agente AI deve poter indovinare il nome di un file senza aprire la directory.
3. **Cartelle in Lowercase:** Tutte le cartelle sono scritte in minuscolo o camelCase (`components`, `pages`, `middlewares`).
4. **File Logici in CamelCase:** File backend (Routes, Controllers, Models) e Service frontend terminano col loro ruolo (es. `userController.js`, `userService.js`).
5. **Componenti React in PascalCase:** File che restituiscono JSX devono sempre essere maiuscoli (es. `LogementCard.jsx`, `Login.jsx`).
6. **Esportazioni Chiare:** Usa esportazioni nominate per le funzioni costanti (`export const fn = ...`) e, opzionalmente, esporta un oggetto unitario di default in coda al file.
7. **Zero Hardcoding di Segreti:** Nessuna stringa di connessione, token, porta o URL di produzione deve trovarsi nel codice; devono passare sempre per variabili d'ambiente.

### Backend: Models (Data Access Layer)
8. **SQL Puro nei Models:** I file `Model` sono gli unici autorizzati a contenere codice SQL.
9. **Query Parametrizzate Obbligatorie:** Divieto assoluto di interpolazione diretta di variabili nella stringa SQL per prevenire injection. Utilizzare sempre `[?, ?]`.
10. **Query Mutilinee Letgibili:** Le istruzioni SQL devono essere racchiuse in template literals (`` `...` ``) ed incolonnate per favorire la lettura.
11. **Ritorno Pulito:** I Model restituiscono solo `rows` (per query di selezione) o `result` (per query di mutazione). Non formattano la risposta HTTP.
12. **Nessuna Cognizione HTTP:** Un Model non deve importare o conoscere `req` o `res`. Lavora solo con parametri primitivi.
13. **Isolamento delle Librerie:** Il Model non hasha le password (non importa `bcrypt`) e non decifra token. Resta agnostico.

### Backend: Controllers (Business Logic)
14. **Protezione Try/Catch Totale:** Ogni funzione asincrona nel controller deve essere racchiusa in un blocco `try/catch`. 100% di conformità richiesta.
15. **Estrazione Pulita:** Estrai i dati necessari da `req.body` o `req.params` nelle primissime righe tramite destrutturazione.
16. **Validazione di Esistenza Standard:** Quando si cerca un ID, il controllo `if (!data || data.length === 0)` deve sempre far scattare un `res.status(404)`.
17. **Standardizzazione Fallback:** Il blocco `catch` deve sempre loggare l'errore lato server e restituire un `res.status(500).json({ message: "..." })` pulito al client.
18. **Diatriba Ownership:** L'autorizzazione manuale all'interno del controller (`if(req.user.id !== host_id) return 403`) è accettabile, ma andrà promossa a Middleware (Ownership Validator) come evoluzione futura.
19. **Logica di Sicurezza:** Il Controller gestisce l'hashing (bcrypt) e la validazione dei dati prima di interrogare il Model.

### Backend: Routes e Middlewares
20. **Router Dedicati:** Utilizzare `express.Router()` per segmentare gli endpoint in base all'entità.
21. **Mappatura Pulita:** Il file Route mappa esclusivamente i Verbi HTTP e le URL alle funzioni del Controller, senza contenere logica applicativa inline.
22. **Middlewares come Gatekeepers:** Logiche come `checkAuth` o `checkAdmin` vivono isolate nei middlewares e vengono iniettate prima del controller nella Route.
23. **Risposte Terminanti nei Middleware:** Se un middleware fallisce (es. token non valido), deve terminare la catena rispondendo immediatamente con uno status d'errore (401/403) senza chiamare `next()`.

### Frontend: Services (Data Fetching)
24. **Axios come Standard:** Tutte le chiamate HTTP passano per Axios. Niente fetch nativo.
25. **Formattazione Output Rigorosa (Il Contratto):** Ogni singola funzione Service **deve** restituire un oggetto standard `{ success: boolean, data?: any, message?: string }`.
26. **Centralizzazione Errori di Rete:** Il `catch` del Service si occupa di tradurre il fallimento di rete e la risposta del server in una stringa d'errore (`error.response?.data?.message || "Errore fallback"`). La UI non deve mai crashare.
27. **URL Base Standardizzati:** L'URL base punta sempre all'ambiente corretto usando `import.meta.env.VITE_API_URL`.
28. **Iniezione Token:** L'iniezione del token via `localStorage` o Interceptor deve avvenire a questo livello, mai a livello di componente UI.

### Frontend: UI e Stato
29. **Disaccoppiamento della Logica di Rete:** I componenti React (Pages o Components) non importano mai `axios`. Chiamano esclusivamente le funzioni esposte dalla cartella `services`.
30. **Workflow del Form (Stato Operativo):** Ogni Form o Bottone ad azione asincrona deve gestire uno stato `loading`.
31. **La Triforza degli Stati UI:** Ogni Page che carica dati complessi deve orchestrare: `const [data, setData]`, `const [loading, setLoading]`, e `const [error, setError]`.
32. **Uso di e.preventDefault():** Obbligatorio all'inizio di qualsiasi handler di form, per non causare page reload inaspettati.
33. **Gestione del Ritorno Service:** Dopo aver invocato un Service, la UI valuta `if (result.success)` per eseguire azioni di successo, o usa la stringa di fallimento per aggiornare lo stato `error`.
34. **Naming degli Handlers:** Le funzioni che rispondono ad eventi utente si chiamano sempre `handleAzione` (es. `handleSubmit`, `handleLogin`).

---

## 4. DECISION TREE ARCHITETTURALE (Algoritmi Decisionali)

Quando sviluppi, segui questi diagrammi decisionali testuali per determinare come e dove allocare il codice.

### A. Gestione dello Stato (React): Quando usare Context vs useState vs Props?
1. Il dato è necessario *solo* in questo componente o in un suo figlio diretto?
   - **SI** ➔ Usa `useState` e passa il dato via `Props`.
   - **NO** ➔ Passa alla domanda 2.
2. Il dato rappresenta lo stato globale dell'utente (es. Sessione Auth, Tema, Lingua) ed è richiesto in aree lontane dell'albero DOM (es. NavBar, Routing e Pagina Interna)?
   - **SI** ➔ Crea un `Context` (es. `AuthContext.jsx`).
   - **NO** ➔ Il dato va scaricato e gestito localmente dalla `Page` che ne fa uso principale.

### B. Struttura UI: Page vs Component
1. L'elemento UI rappresenta una "schermata" intera navigabile tramite URL nel React Router?
   - **SI** ➔ È una `Page` (mettilo in `src/pages`). Conterrà logica di data-fetching e state management.
   - **NO** ➔ Passa alla domanda 2.
2. L'elemento è un pezzo di UI visiva (Bottone, Modale, Card) che può essere riutilizzato in diverse Pagine?
   - **SI** ➔ È un `Component` (mettilo in `src/components`). Riceverà i dati trami Props (è "Dumb").
   - **NO** ➔ È un frammento specifico di una Page. Tienilo all'interno del file della Page, oppure estrailo in un componente dedicato se il file della Page supera le 200 righe, per pura leggibilità.

### C. Architettura Dati: Creazione di Entità Backend
Devi implementare una nuova funzionalità (es. Sistema di Messaggistica):
1. Richiede l'accesso persistente a un nuovo set di dati?
   - **SI** ➔ Crea una Tabella, crea un `Model`. Vai alla domanda 2.
   - **NO** ➔ Usa i Model esistenti. Vai alla domanda 2.
2. Contiene logica di validazione complessa e un ciclo di richiesta/risposta?
   - **SI** ➔ Crea un `Controller`. Vai alla domanda 3.
3. Deve essere richiamata dal Frontend via HTTP?
   - **SI** ➔ Crea una `Route` dedicata e agganciala al file `index.js`. Vai alla domanda 4.
4. Richiede che il frontend esegua queste chiamate HTTP?
   - **SI** ➔ Crea un `Service` frontend. Vai alla domanda 5.
5. Esiste un controllo di sicurezza condiviso su questa rotta (es. "solo utenti Premium")?
   - **SI** ➔ Crea un `Middleware`.

---

## 5. FORENSIC BLUEPRINTS (I Calchi Operativi)

Questi template sono stati depurati dalle incoerenze. Utilizzali come punto di partenza obbligatorio (copia-incolla) per ogni nuovo file.

### 5.1. Backend: Model Blueprint
```javascript
import bdd from '../config/db.js';

export const getEntita = async () => {
    const query = `
        SELECT id_entita, Nome, Description, Status 
        FROM entita 
        WHERE Status = 1;
    `;
    const [rows] = await bdd.query(query);
    return rows;
};

export const createEntita = async (Nome, Description) => {
    const query = `
        INSERT INTO entita (Nome, Description, Date_creation)
        VALUES (?, ?, NOW());
    `;
    const [result] = await bdd.query(query, [Nome, Description]);
    return result;
};

export default {
    getEntita,
    createEntita
};
```

### 5.2. Backend: Controller Blueprint
```javascript
import * as entitaModel from '../models/entitaModel.js';

export const actionName = async (req, res) => {
    try {
        const { param1 } = req.body;
        const id_utente = req.user.id; // Estratto dal token middleware

        // 1. Pre-check esistenza e ownership
        const data = await entitaModel.getEntitaById(param1);
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Risorsa non trovata." });
        }
        if (data[0].id_user !== id_utente && req.user.role !== 4) {
            return res.status(403).json({ message: "Azione non autorizzata." });
        }

        // 2. Operazione Model
        await entitaModel.updateEntita(param1);
        
        // 3. Ritorno standard
        res.status(200).json({ message: "Operazione completata con successo!" });
    } catch (error) {
        console.error("Errore actionName in entitaController:", error);
        res.status(500).json({ message: "Errore interno del server." });
    }
};

export default { actionName };
```

### 5.3. Frontend: Service Blueprint
```javascript
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/endpoint_base`;

export const doAction = async (payload) => {
    try {
        // Todo futuro: Rimuovere se si usano Axios Interceptors
        const token = localStorage.getItem('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.post(`${API_URL}/azione`, payload, { headers });
        
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Errore in doAction service:", error);
        return { 
            success: false, 
            message: error.response?.data?.message || "Errore di connessione." 
        };
    }
};
```

### 5.4. Frontend: Page (React) Blueprint
```javascript
import React, { useState, useEffect } from 'react';
import { doAction } from '../services/entitaService';

const NomePage = () => {
    const [formData, setFormData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await doAction({ dato: formData });

        if (result.success) {
            // Logica successo (es. notifiche, clear form, navigazione)
            setFormData('');
        } else {
            // Logica fallimento
            setError(result.message);
        }
        
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error-alert">{error}</div>}
            
            <input 
                type="text"
                value={formData} 
                onChange={(e) => setFormData(e.target.value)} 
                required
            />
            
            <button type="submit" disabled={loading}>
                {loading ? 'Caricamento...' : 'Conferma'}
            </button>
        </form>
    );
};

export default NomePage;
```

---

## 6. LE 5 GOLDEN RULES (Le Regole Inviolabili)

Queste sono le sentenze finali che riassumono il mio metodo di sviluppo. Non esistono eccezioni valide a queste regole. Qualsiasi violazione rende il codice da scartare.

1. **La Legge del Contratto del Service:** Un Service frontend deve restituire SEMPRE, in caso di successo o fallimento, l'oggetto `{ success: boolean, message/data: ... }`. Nessun componente React è autorizzato a schiantarsi a causa di un'eccezione Axios non gestita.
2. **La Legge dell'Isolamento del Model:** Il Model non sa nulla di Express, HTTP, status code, o logica bcrypt. Prende parametri nativi in ingresso (stringhe, numeri), esegue una query `bdd.query()` e restituisce i risultati.
3. **La Legge del Try/Catch Universale:** Non scrivere MAI una funzione asincrona in un Controller o in un Service senza racchiuderla in un `try/catch`. Il server non deve mai andare in crash, la pagina non deve mai bloccarsi.
4. **La Legge del Silenzio dell'Utente Sbagliato:** Qualsiasi richiesta HTTP che richiede validazione (update/delete) deve terminare la corsa con un errore `403` se l'ID nel token di sicurezza non coincide con l'ID dell'autore della risorsa nel Database (a meno che non sia un Admin ruolo 4).
5. **La Legge del Modulo Muto:** Non chiamare API ("fetch" o "axios") all'interno di un Componente Page. Il Componente chiama una funzione Service, la funzione Service chiama Axios, Axios chiama il backend. I layer non si scavalcano MAI.
