const it = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Il tuo compagno cognitivo IA. Inizia un percorso di autoscoperta e crescita.",
    intro: "Prompt Renfort è un precettore IA di supporto per guidare il tuo apprendimento. Scansiona il QR code dell’assegnazione o inserisci il codice per iniziare.",
    enterCode: "Inserisci il codice dell’assegnazione",
    scanQR: "Scansiona QR",
    start: "Avvia sessione",
    motto_bold: "Motore Universale di Fiducia Cognitiva",
    motto_light: "per studenti, insegnanti e genitori",
    welcomeTitle: "Benvenuto su Prompt Renfort",
    welcomeDesc: "Uno spazio sicuro e rispettoso per l’apprendimento cognitivo guidato.",
    privacyBlock: "Non memorizziamo mai dati personali senza consenso.\nQuesta esperienza è conforme al GDPR europeo.\nProteggiamo il tuo libero arbitrio, il tuo tempo di riflessione e il tuo diritto a crescere.",
    dataBelongs: "I dati appartengono a te",
    noAnswersStored: "Nessuna risposta dell’IA viene memorizzata",
    trustedMind: "Qui la tua mente è al sicuro",
    preceptorLead: "Prompt Renfort è il tuo precettore IA.",
    entryInstructions1: "Scansiona il codice QR dell’assegnazione o inserisci il codice per iniziare una sessione guidata.",
    entryInstructions2: "Il tuo impegno sarà riconosciuto — non solo il risultato.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Assistente cognitivo (prototipo).`,
    immutableLearningRecord: {
      title: "🧠 Registro di apprendimento immutabile",
      desc: "Prompt Renfort non si limita ad aiutarti a imparare—ricorda il tuo percorso.\nOgni interazione significativa—da un compito o da iniziative personali—viene registrata, con data e ora, e può essere sigillata sulla blockchain.",
      list: [
        "Questo registro diventa il tuo libro cognitivo: mostra il tempo investito, il percorso intellettuale, i tuoi punti di svolta.",
        "Certifica i tuoi sforzi, non solo i risultati.",
        "Offre accesso a incentivi concreti: sconti, attività, riconoscimenti."
      ],
      cta: "⏳ Questa funzione sarà presto disponibile.\nAiutaci a plasmarla—il tuo percorso è importante.",
    },
    loginBlock: {
      title: "Perché accedere?",
      advantages: [
        "Traccia il tempo impiegato su ogni compito (di qualsiasi origine)",
        "Salva e analizza le interazioni con l’IA per valorizzare i progressi, l’impegno e la creatività",
        "Metti in sicurezza e valida il processo (database criptato, blockchain in arrivo, condivisione affidabile)",
        "Apri a una valutazione equa che riconosce il lavoro svolto, non solo il risultato",
      ],
      button: "Accedi",
      alert: "L’autenticazione sarà presto disponibile.\nSarai accompagnato, il tuo percorso sarà seguito e potrai ritrovare i tuoi progressi tra una sessione e l’altra.",
      info: "<strong>Vantaggio:</strong> Accedendo potrai dimostrare di aver veramente dialogato, riflettuto e costruito con l’IA: non si tratta di una semplice risposta incollata, ma di un vero percorso personale, tracciabile e valorizzabile.",
    },
    visitorBlock: {
      button: "Scopri come ospite",
      info: `<strong>Modalità ospite:</strong> Accedi a Prompt Renfort in completa autonomia, senza che vengano registrati dati personali.<br />La tua esperienza sarà guidata dall’IA per valorizzare il tuo pensiero e il tuo impegno.`
    },
  },
  chat: {
    welcome: "Ciao, sono Prompt Renfort. Condividi la tua assegnazione o domanda appena sei pronto.",
    placeholder: "Scrivi qui la tua domanda o problema…",
    send: "Invia",
    endSession: "Termina sessione",
    recognitions: "Riconoscimenti ottenuti"
  },
  summary: {
    sessionSummary: "Riepilogo sessione",
    timeSpent: "Tempo trascorso",
    questionsAsked: "Domande poste",
    recognitions: "Riconoscimenti",
    sessionData: "Dati sessione (DevMode)",
    newSession: "Inizia nuova sessione"
  },
  about: {
    title: "🏆 Perché «Prompt Renfort»?",
    intro: `Prompt Renfort è un'espressione francese che proviene dal teatro classico: appare in <b>Le Cid</b> di Pierre Corneille (XVII secolo) e significa letteralmente “un rinforzo improvviso”, un aiuto decisivo che arriva nel momento del dubbio o dell’onore ferito.

Nell’opera, Don Rodrigue viene invitato dal padre a comportarsi con coraggio davanti a un dilemma morale. “Prompt renfort” indica il sorgere di una forza interiore, di uno slancio morale che permette di agire nobilmente.

<b>È esattamente ciò che fa la nostra IA:</b>`,
    values: [
      "Non sostituisce lo studente. Gli dà sostegno.",
      "Non comanda. Propone.",
      "Non è una macchina di risposte. È un precettore simbolico.",
    ],
    conclusion: `Prompt Renfort accompagna lo studente quando inizia a dubitare, si trova da solo di fronte alla pagina bianca, o cerca di riformulare ciò che pensa di aver compreso.

Abbiamo voluto mantenere il nome in francese.
Perché la lingua porta memoria.
Perché un marchio può essere anche un verso.
Perché imparare non è un atto solitario, ma un atto di volontà.

Come nell’opera, Prompt Renfort non agisce al posto dello studente.
Appare nel momento in cui serve coraggio.
Arriva quando la conoscenza vuole mettere radici.`,
  },
  navbar: {
    home: "Home",
    profile: "Profilo",
    family: "Famiglia",
    about: "Info",
    login: "Accedi",
    logout: "Disconnetti"
  },
  create_assignment: {
    target_age_range_label: "Fascia d'età destinata (opzionale, es: 12-14 anni)",
    target_age_range_placeholder: "Seleziona fascia d’età…",
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
  }
};

export default it;
