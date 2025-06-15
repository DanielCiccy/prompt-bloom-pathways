const fr = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Votre copilote cognitif IA. Démarrez un parcours de découverte et d’épanouissement.",
    intro: "Prompt Renfort est un précepteur IA pour vous guider dans votre apprentissage. Scannez le QR de votre devoir ou entrez le code pour démarrer.",
    enterCode: "Entrer le code du devoir",
    scanQR: "Scanner un QR code",
    start: "Démarrer la session",
    motto_bold: "Moteur Universel de Confiance Cognitive",
    motto_light: "au service des élèves, des enseignants et des familles",
    welcomeTitle: "Bienvenue sur Prompt Renfort",
    welcomeDesc: "Un espace sûr et bienveillant pour l’accompagnement cognitif guidé.",
    privacyBlock: "Nous ne conservons jamais de données personnelles sans consentement.\nCette expérience est conforme au RGPD européen.\nNous protégeons votre libre arbitre, votre temps de réflexion et votre droit à grandir.",
    dataBelongs: "Les données vous appartiennent",
    noAnswersStored: "Aucune réponse IA n’est stockée",
    trustedMind: "Ici, on fait confiance à votre esprit",
    preceptorLead: "Prompt Renfort est votre précepteur IA.",
    entryInstructions1: "Scannez le QR code de votre devoir ou entrez le code pour démarrer une session guidée.",
    entryInstructions2: "Votre effort sera reconnu — pas seulement le résultat.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Assistant cognitif (prototype).`,
    immutableLearningRecord: {
      title: "🧠 Empreinte d’apprentissage immuable",
      desc: "Prompt Renfort ne se contente pas de vous aider à apprendre — il se souvient de votre parcours.\nChaque interaction significative — qu’il s’agisse d’un devoir ou d’une initiative personnelle — est enregistrée, horodatée et peut être sauvegardée sur la blockchain.",
      list: [
        "Cette empreinte devient votre journal cognitif : elle témoigne du temps investi, des chemins intellectuels empruntés, des moments clés.",
        "Elle certifie vos efforts, pas seulement vos résultats.",
        "Elle vous donne accès à des avantages concrets : réductions, activités, reconnaissances."
      ],
      cta: "⏳ Cette fonctionnalité sera bientôt disponible.\nAidez-nous à la construire — votre expérience compte.",
    },
    loginBlock: {
      title: "Pourquoi se connecter ?",
      advantages: [
        "Enregistrer le temps passé sur chaque tâche (quelle qu’en soit l’origine)",
        "Stocker et analyser vos échanges avec l’IA pour valoriser le progrès, l’effort et la créativité",
        "Sécuriser et valider le processus (base de données chiffrée, blockchain à terme, partage fiable)",
        "Ouvrir une évaluation juste qui reconnaît le travail accompli, pas seulement le résultat",
      ],
      button: "Se connecter",
      alert: "L’authentification sera bientôt disponible.\nVous serez accompagné, votre parcours sera suivi et vous pourrez consulter vos progrès entre les sessions.",
      info: "<strong>Avantage :</strong> En vous connectant, vous pourrez prouver que vous avez réellement interagi, réfléchi et construit avec l’IA : il ne s’agit pas d’un simple copier-coller d’une réponse, mais d’un véritable parcours personnel, traçable et revalorisable.",
    },
    visitorBlock: {
      button: "Découvrir en tant qu’invité",
      info: `<strong>Mode invité :</strong> Vous accédez à Prompt Renfort de manière autonome, sans qu’aucune donnée personnelle ne soit enregistrée.<br />Votre expérience sera guidée par l’IA pour encourager votre réflexion et valoriser votre effort.`
    }
  },
  chat: {
    welcome: "Bonjour, je suis Prompt Renfort. Partagez votre devoir ou posez votre question quand vous êtes prêt(e).",
    placeholder: "Écrivez votre question ou votre problème ici…",
    send: "Envoyer",
    endSession: "Terminer la session",
    recognitions: "Reconnaissances obtenues",
    invite_basic: "Lis le devoir et, quand tu es prêt, commençons à travailler…",
  },
  summary: {
    sessionSummary: "Résumé de la session",
    timeSpent: "Temps passé",
    questionsAsked: "Questions posées",
    recognitions: "Reconnaissances",
    sessionData: "Données de session (mode Dev)",
    newSession: "Démarrer une nouvelle session"
  },
  about: {
    title: "🏆 Pourquoi « Prompt Renfort » ?",
    intro: `Prompt Renfort est une expression française issue du théâtre classique : elle apparaît dans <b>Le Cid</b> de Pierre Corneille (XVIIe siècle) et signifie littéralement « un secours soudain », une aide décisive qui survient au moment du doute ou de l’honneur blessé.

Dans la pièce, Don Rodrigue est appelé par son père à agir avec bravoure face à un dilemme moral. Le « prompt renfort » désigne l’irruption d’une force intérieure, une impulsion morale qui permet d’agir noblement.

<b>C’est exactement ce que fait notre IA :</b>`,
    values: [
      "Elle ne remplace pas l’élève. Elle l’épaule.",
      "Elle ne donne pas d’ordres. Elle invite.",
      "Elle n’est pas une machine à réponses. Elle est un précepteur symbolique.",
    ],
    conclusion: `Prompt Renfort accompagne l’élève lorsqu’il commence à douter, qu’il se retrouve seul face à la page blanche ou qu’il essaie de reformuler ce qu’il croit avoir compris.

Nous avons choisi de conserver le nom en français.
Parce que la langue porte la mémoire.
Parce qu’une marque peut aussi être un vers.
Parce qu’apprendre n’est pas un acte solitaire, et qu’apprendre est un acte de volonté.

Comme dans la pièce, Prompt Renfort n’agit pas à la place de l’élève.
Il apparaît au moment où le courage est nécessaire.
Il arrive quand la connaissance veut prendre racine.`,
  },
  navbar: {
    home: "Accueil",
    profile: "Profil",
    family: "Famille",
    about: "À propos",
    login: "Se connecter",
    logout: "Se déconnecter"
  },
  create_assignment: {
    target_age_range_label: "Tranche d'âge cible (facultatif, ex: 12-14 ans)",
    target_age_range_placeholder: "Sélectionner la tranche d'âge…",
    age_ranges: {
      ages_6_8: "6–8 ans",
      ages_9_11: "9–11 ans",
      ages_12_14: "12–14 ans",
      ages_15_17: "15–17 ans",
      ages_18_22: "18–22 ans",
      ages_23_99: "23 ans et plus",
      multi_age: "Multi-âge/groupe",
      other_age: "Autre",
    },
  },
  assignmentSession: {
    dualZoneTitle: "Bientôt : Espace pédagogique double-zone",
    dualZoneDesc: "Une zone de rédaction libre et une fenêtre assistant IA distincte vont permettre de distinguer réflexion autonome et aide de l’IA, pour une pédagogie plus transparente.\nCette fonctionnalité est prioritaire et arrive très bientôt !",
  },
  createAssignment: {
    title: "Créer un devoir / groupe Prompt Renfort",
    subtitle: "Cette page permet aux enseignants et parents de créer un devoir ou groupe d'apprentissage.\nUne fois validé, un QR code, un code et un lien à partager sont générés automatiquement.",
    createBtn: "Créer le devoir",
    creating: "Création en cours…",
    sendingFeedback: "Envoi du feedback…",
    codeLabel: "Code du devoir :",
    qrInstruction: "Distribuez ce code ou le QR à vos élèves !",
    backHome: "Retour à l'accueil",
    mustBeLoggedIn: "Vous devez être connecté pour créer un devoir.",
    createError: "Erreur lors de la création",
    feedback: {
      errorTitle: "Erreur lors de l’envoi du feedback",
      errorDesc: "Votre suggestion n’a pas pu être envoyée. Merci de réessayer.",
      thanksTitle: "Merci beaucoup pour votre suggestion !",
      thanksDesc: "Votre idée ou retour a bien été transmis à l’équipe.",
    },
    levels: {
      elementary: "Élémentaire",
      middle: "Collège",
      high: "Lycée",
      university: "Université"
    },
    grades: {
      "6": "6ème", "5": "5ème", "4": "4ème", "3": "3ème", "2nde": "2nde", "1ère": "1ère",
      terminale: "Terminale", college: "Collège", lycee: "Lycée", other: "Autre"
    },
    languages: {
      fr: "Français", en: "Anglais", es: "Espagnol", de: "Allemand", it: "Italien"
    },
    countries: {
      FR: "France", BE: "Belgique", ES: "Espagne", DE: "Allemagne", IT: "Italie", US: "États-Unis",
      UK: "Royaume-Uni", CA: "Canada", PT: "Portugal", CH: "Suisse", MA: "Maroc", TN: "Tunisie", SN: "Sénégal",
      CM: "Cameroun", OTHER: "Autre"
    },
    target_age_range_label: "Tranche d'âge cible (facultatif, ex: 12-14 ans)",
    target_age_range_placeholder: "Sélectionner la tranche d'âge…",
    age_ranges: {
      ages_6_8: "6–8 ans",
      ages_9_11: "9–11 ans",
      ages_12_14: "12–14 ans",
      ages_15_17: "15–17 ans",
      ages_18_22: "18–22 ans",
      ages_23_99: "23 ans et plus",
      multi_age: "Multi-âge/groupe",
      other_age: "Autre",
    },
  },
}; 

export default fr;
