const de = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Ihr KI-Kognitionsbegleiter. Beginnen Sie eine Reise der Selbstentdeckung und Entwicklung.",
    intro: "Prompt Renfort ist ein unterstützender KI-Lehrmeister, der Sie beim Lernen begleitet. Scannen Sie den Aufgaben-QR-Code oder geben Sie den Code ein, um zu starten.",
    enterCode: "Aufgabencode eingeben",
    scanQR: "QR scannen",
    start: "Sitzung starten",
    motto_bold: "Universelle Cognitive Trust Engine",
    motto_light: "für Lernende, Lehrende & Eltern",
    welcomeTitle: "Willkommen bei Prompt Renfort",
    welcomeDesc: "Ein sicherer und respektvoller Raum für kognitives Lernen mit Begleitung.",
    privacyBlock: "Wir speichern niemals personenbezogene Daten ohne Einwilligung.\nDieses Angebot erfüllt die Vorgaben der europäischen DSGVO.\nIhr freier Wille, Ihre Denkzeit und Ihr Recht auf Entwicklung werden geschützt.",
    dataBelongs: "Die Daten gehören Ihnen",
    noAnswersStored: "Keine KI-Antworten werden gespeichert",
    trustedMind: "Ihr Geist wird hier geschätzt",
    preceptorLead: "Prompt Renfort ist Ihr KI-Präzeptor.",
    entryInstructions1: "Scannen Sie den QR-Code Ihrer Aufgabe oder geben Sie den Code ein, um eine betreute Lernsitzung zu starten.",
    entryInstructions2: "Ihr Einsatz wird anerkannt – nicht nur Ihr Ergebnis.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Kognitiver Assistent (Prototyp).`,
    immutableLearningRecord: {
      title: "🧠 Unveränderlicher Lernnachweis",
      desc: "Prompt Renfort hilft nicht nur beim Lernen—es merkt sich deinen Weg.\nJede bedeutende Interaktion—ob von einer Aufgabe oder eigener Initiative—wird aufgezeichnet, mit Zeitstempel versehen und kann in der Blockchain gesichert werden.",
      list: [
        "Dieser Nachweis wird zu deinem kognitiven Register: Er zeigt deine investierte Zeit, deinen Denkweg, deine Wendepunkte.",
        "Bestätigt deine Bemühungen, nicht nur die Ergebnisse.",
        "Eröffnet Zugang zu echten Vorteilen: Rabatten, Aktivitäten, Anerkennung."
      ],
      cta: "⏳ Diese Funktion kommt bald.\nHilf uns, sie zu gestalten—dein Weg zählt.",
    },
    loginBlock: {
      title: "Warum anmelden?",
      advantages: [
        "Erfasse die Zeit für jede Aufgabe (egal woher)",
        "Speichere und analysiere deine Unterhaltungen mit der KI für Fortschritt, Einsatz und Kreativität",
        "Sichere und verifiziere den Prozess (verschlüsselte Datenbank, Blockchain folgt, verlässliches Teilen)",
        "Ermögliche eine faire Bewertung, die die geleistete Arbeit anerkennt, nicht nur das Ergebnis",
      ],
      button: "Anmelden",
      alert: "Authentifizierung ist bald verfügbar.\nDu wirst begleitet, dein Weg wird nachverfolgt und du findest deine Fortschritte in allen Sitzungen.",
      info: "<strong>Vorteil:</strong> Mit Anmeldung kannst du beweisen, dass du wirklich mit der KI gearbeitet, reflektiert und aufgebaut hast: Das ist nicht einfach nur eine kopierte Antwort, sondern ein persönlicher, nachvollziehbarer Weg.",
    },
    visitorBlock: {
      button: "Als Gast entdecken",
      info: `<strong>Gastmodus:</strong> Du nutzt Prompt Renfort eigenständig, ohne dass personenbezogene Daten gespeichert werden.<br />Die KI begleitet dich, regt zum Nachdenken an und würdigt deinen Einsatz.`
    }
  },
  chat: {
    welcome: "Hallo, ich bin Prompt Renfort. Teile deine Aufgabe oder Frage, wann immer du bereit bist.",
    placeholder: "Schreibe hier deine Frage oder dein Problem…",
    send: "Senden",
    endSession: "Sitzung beenden",
    recognitions: "Anerkennungen verdient"
  },
  summary: {
    sessionSummary: "Sitzungsübersicht",
    timeSpent: "Verbrachte Zeit",
    questionsAsked: "Gestellte Fragen",
    recognitions: "Anerkennungen",
    sessionData: "Sitzungsdaten (DevModus)",
    newSession: "Neue Sitzung starten"
  }
};
export default de;
