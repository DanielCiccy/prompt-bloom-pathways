
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
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Assistente cognitivo (prototipo).`
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
  }
};
export default it;
