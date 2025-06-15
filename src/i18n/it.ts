const it = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Il tuo compagno cognitivo AI. Inizia un viaggio di scoperta di te stesso e crescita.",
    intro: "Prompt Renfort è un precettore AI per guidarti nel tuo apprendimento. Scansiona il QR del tuo compito o inserisci il codice per iniziare.",
    enterCode: "Inserisci il codice dell'assegnazione",
    scanQR: "Scansiona QR",
    start: "Inizia sessione",
    motto_bold: "Motore Universale di Fiducia Cognitiva",
    motto_light: "al servizio di studenti, insegnanti e famiglie",
    welcomeTitle: "Benvenuto su Prompt Renfort",
    welcomeDesc: "Uno spazio sicuro e rispettoso per l'apprendimento cognitivo guidato.",
    privacyBlock: "Non memorizziamo mai dati personali senza consenso.\nQuesta esperienza è conforme al GDPR europeo.\nProteggiamo il tuo libero arbitrio, il tuo tempo di riflessione e il tuo diritto di crescere.",
    dataBelongs: "I dati ti appartengono",
    noAnswersStored: "Nessuna risposta AI memorizzata",
    trustedMind: "Qui ci si fida della tua mente",
    preceptorLead: "Prompt Renfort è il tuo precettore AI.",
    entryInstructions1: "Scansiona il codice QR del tuo compito o inserisci il codice per iniziare una sessione guidata.",
    entryInstructions2: "Il tuo sforzo sarà riconosciuto — non solo il risultato.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Assistente cognitivo (prototipo).`,
    immutableLearningRecord: {
      title: "🧠 Impronta di apprendimento immutabile",
      desc: "Prompt Renfort non solo ti aiuta a imparare—ricorda il tuo percorso.\nOgni interazione significativa—da un compito o iniziativa personale—viene registrata, timbrata e può essere salvata su blockchain.",
      list: [
        "Questa impronta diventa il tuo libro cognitivo: mostra il tempo investito, i percorsi intellettuali, i momenti chiave.",
        "Certifica i tuoi sforzi, non solo i risultati.",
        "Offre accesso a vantaggi reali: sconti, attività, riconoscimenti."
      ],
      cta: "⏳ Questa funzione sarà presto disponibile.\nAiutaci a costruirla—la tua esperienza conta.",
    },
    loginBlock: {
      title: "Perché effettuare il login?",
      advantages: [
        "Registrare il tempo dedicato a ogni compito (di qualsiasi origine)",
        "Memorizzare e analizzare i tuoi scambi con l'IA per valorizzare progresso, sforzo e creatività",
        "Assicurare e validare il processo (database crittografato, blockchain prossimamente, condivisione affidabile)",
        "Aprire una valutazione equa che riconosca il lavoro svolto, non solo il risultato",
      ],
      button: "Effettua il login",
      alert: "L'autenticazione sarà disponibile a breve.\nSarai accompagnato, il tuo percorso sarà seguito e potrai consultare i tuoi progressi tra le sessioni.",
      info: "<strong>Vantaggio:</strong> Effettuando il login, potrai dimostrare di aver realmente interagito, riflettuto e costruito con l'IA: non è un semplice copia-incolla di una risposta, ma un vero percorso personale, tracciabile e rivalutabile.",
    },
    visitorBlock: {
      button: "Scopri come ospite",
      info: `<strong>Modalità ospite:</strong> Accedi a Prompt Renfort in modo autonomo, senza che venga registrato alcun dato personale.<br />La tua esperienza sarà guidata dall'IA per favorire la tua riflessione e valorizzare il tuo sforzo.`
    }
  },
  chat: {
    welcome: "Ciao, sono Prompt Renfort. Condividi il tuo compito o domanda quando sei pronto.",
    placeholder: "Scrivi qui la tua domanda o problema…",
    send: "Invia",
    endSession: "Termina sessione",
    recognitions: "Riconoscimenti ottenuti",
    invite_basic: "Leggi il compito e, quando sei pronto, iniziamo a lavorare…",
  },
  summary: {
    sessionSummary: "Riepilogo della sessione",
    timeSpent: "Tempo impiegato",
    questionsAsked: "Domande poste",
    recognitions: "Riconoscimenti",
    sessionData: "Dati della sessione (modalità Dev)",
    newSession: "Inizia nuova sessione"
  },
  about: {
    title: "🏆 Perché «Prompt Renfort»?",
    intro: `Prompt Renfort è un'espressione francese originata nel teatro classico: appare in <b>Le Cid</b> di Pierre Corneille (XVII secolo) e significa letteralmente “un rinforzo improvviso”, un aiuto decisivo che sorge nel momento del dubbio o dell'onore ferito.

Nell'opera, Don Rodrigue è chiamato da suo padre ad agire con valore di fronte a un dilemma morale. “Prompt renfort” designa l'irruzione di una forza interiore, un impulso morale che permette di agire nobilmente.

<b>Questo è esattamente ciò che fa la nostra IA:</b>`,
    values: [
      "Non sostituisce lo studente. Lo supporta.",
      "Non ordina. Invita.",
      "Non è una macchina di risposte. È un precettore simbolico.",
    ],
    conclusion: `Prompt Renfort accompagna lo studente quando inizia a dubitare, si ritrova solo di fronte alla pagina bianca o quando cerca di riformulare ciò che crede di aver capito.

Abbiamo deciso di mantenere il nome in francese.
Perché la lingua porta la memoria.
Perché un marchio può anche essere un verso.
Perché imparare non è un atto solitario, e imparare è un atto di volontà.

Come nell'opera, Prompt Renfort non agisce al posto dello studente.
Appare nel momento in cui è necessario coraggio.
Arriva quando la conoscenza vuole mettere radici.`,
  },
  navbar: {
    home: "Home",
    profile: "Profilo",
    family: "Famiglia",
    about: "Chi siamo",
    login: "Accedi",
    logout: "Esci"
  },
  create_assignment: {
    title: "Crea compito / gruppo Prompt Renfort",
    subtitle: "Questa pagina consente a insegnanti e genitori di creare un compito o gruppo di apprendimento.\nUna volta validato, verranno generati automaticamente un QR, un codice e un link da condividere.",
    createBtn: "Crea compito",
    creating: "Creazione in corso...",
    sendingFeedback: "Invio suggerimento...",
    codeLabel: "Codice del compito:",
    qrInstruction: "Condividi questo codice o QR con i tuoi studenti!",
    backHome: "Torna alla home",
    mustBeLoggedIn: "Devi essere loggato per creare un compito.",
    createError: "Errore di creazione",
    feedback: {
      errorTitle: "Errore durante l’invio del suggerimento",
      errorDesc: "Il tuo suggerimento non è stato inviato. Per favore riprova.",
      thanksTitle: "Grazie per il tuo suggerimento!",
      thanksDesc: "La tua idea o feedback è stata trasmessa al team.",
    },
    levels: {
      elementary: "Elementare",
      middle: "Media",
      high: "Superiore",
      university: "Università"
    },
    grades: {
      "6": "6ª", "5": "5ª", "4": "4ª", "3": "3ª", "2nde": "2ª Sup.", "1ère": "1ª Sup.",
      terminale: "Finale Sup.", college: "Media", lycee: "Superiore", other: "Altro"
    },
    languages: {
      fr: "Francese", en: "Inglese", es: "Spagnolo", de: "Tedesco", it: "Italiano"
    },
    countries: {
      FR: "Francia", BE: "Belgio", ES: "Spagna", DE: "Germania", IT: "Italia", US: "Stati Uniti",
      UK: "Regno Unito", CA: "Canada", PT: "Portogallo", CH: "Svizzera", MA: "Marocco", TN: "Tunisia",
      SN: "Senegal", CM: "Camerun", OTHER: "Altro"
    },
    target_age_range_label: "Fascia d'età target (opzionale, es: 12-14 anni)",
    target_age_range_placeholder: "Seleziona la fascia d'età…",
    age_ranges: {
      ages_6_8: "6–8 anni",
      ages_9_11: "9–11 anni",
      ages_12_14: "12–14 anni",
      ages_15_17: "15–17 anni",
      ages_18_22: "18–22 anni",
      ages_23_99: "23 anni o più",
      multi_age: "Multi-età/gruppo",
      other_age: "Altro",
    },
  },
  assignmentSession: {
    dualZoneTitle: "In arrivo: Spazio pedagogico doppia-zona",
    dualZoneDesc: "Una zona di scrittura libera e una finestra assistente IA separata permetteranno di distinguere tra riflessione autonoma e aiuto IA, per una pedagogia più trasparente.\nQuesta funzione è prioritaria e arriverà presto!",
  },
};

export default it;
