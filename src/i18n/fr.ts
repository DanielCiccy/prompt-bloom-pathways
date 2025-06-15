const fr = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Votre compagnon cognitif IA. Commencez un parcours d’auto-découverte et de croissance.",
    intro: "Prompt Renfort est un précepteur IA bienveillant pour guider votre apprentissage. Scannez le QR code ou entrez le code de votre devoir pour démarrer.",
    enterCode: "Entrer le code du devoir",
    scanQR: "Scanner le QR",
    start: "Démarrer la session",
    motto_bold: "Moteur universel de confiance cognitive",
    motto_light: "au service des élèves, enseignants & parents",
    welcomeTitle: "Bienvenue sur Prompt Renfort",
    welcomeDesc: "Un espace sécurisé et respectueux pour un accompagnement cognitif guidé.",
    privacyBlock: "Nous ne stockons jamais de données personnelles sans consentement.\nCette expérience est conforme au RGPD européen.\nVotre libre arbitre, votre temps de réflexion et votre droit à grandir sont protégés.",
    dataBelongs: "Les données vous appartiennent",
    noAnswersStored: "Aucune réponse d’IA n’est stockée",
    trustedMind: "Votre esprit est respecté ici",
    preceptorLead: "Prompt Renfort est votre précepteur IA.",
    entryInstructions1: "Scannez le QR code de votre devoir ou entrez le code pour démarrer une session guidée.",
    entryInstructions2: "Votre effort sera valorisé — pas seulement le résultat.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Assistant cognitif (prototype).`,
    immutableLearningRecord: {
      title: "🧠 Empreinte cognitive inviolable",
      desc: "Prompt Renfort ne se contente pas de t'aider à apprendre — il garde la mémoire de ton parcours.\nChaque interaction — d’un devoir ou d’une initiative personnelle — est tracée, horodatée et peut être scellée dans une blockchain.",
      list: [
        "Cette empreinte devient ton registre cognitif : elle affiche ton temps investi, tes chemins intellectuels, tes déclics.",
        "Elle certifie tes efforts, pas seulement tes résultats.",
        "Elle offre l’accès à des avantages concrets : réductions, activités, reconnaissance."
      ],
      cta: "⏳ Cette fonctionnalité arrive bientôt.\nAide-nous à la construire — ton parcours compte.",
    }
  },
  chat: {
    welcome: "Bonjour, je suis Prompt Renfort. Partage ton devoir ou ta question quand tu veux.",
    placeholder: "Tape ta question ou problème ici…",
    send: "Envoyer",
    endSession: "Terminer la session",
    recognitions: "Récompenses obtenues"
  },
  summary: {
    sessionSummary: "Résumé de la session",
    timeSpent: "Temps passé",
    questionsAsked: "Questions posées",
    recognitions: "Récompenses",
    sessionData: "Données de session (mode Dev)",
    newSession: "Démarrer une nouvelle session"
  }
};

export default fr;
