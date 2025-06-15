const de = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Dein kognitiver KI-Begleiter. Starte eine Reise der Selbstentdeckung und des Wachstums.",
    intro: "Prompt Renfort ist ein KI-gestützter Tutor, der dich beim Lernen unterstützt. Scanne den QR-Code deiner Aufgabe oder gib den Code ein, um zu beginnen.",
    enterCode: "Aufgabencode eingeben",
    scanQR: "QR-Code scannen",
    start: "Sitzung starten",
    motto_bold: "Universelle Engine für kognitives Vertrauen",
    motto_light: "im Dienste von Schülern, Lehrern und Familien",
    welcomeTitle: "Willkommen bei Prompt Renfort",
    welcomeDesc: "Ein sicherer und respektvoller Raum für geführtes kognitives Lernen.",
    privacyBlock: "Wir speichern niemals persönliche Daten ohne Zustimmung.\nDiese Erfahrung entspricht der europäischen DSGVO.\nWir schützen deinen freien Willen, deine Reflexionszeit und dein Recht zu wachsen.",
    dataBelongs: "Die Daten gehören dir",
    noAnswersStored: "Es werden keine KI-Antworten gespeichert",
    trustedMind: "Hier wird deinem Verstand vertraut",
    preceptorLead: "Prompt Renfort ist dein KI-Tutor.",
    entryInstructions1: "Scanne den QR-Code deiner Aufgabe oder gib den Code ein, um eine geführte Sitzung zu starten.",
    entryInstructions2: "Deine Bemühungen werden anerkannt — nicht nur das Ergebnis.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Kognitiver Assistent (Prototyp).`,
    immutableLearningRecord: {
      title: "🧠 Unveränderlicher Lernnachweis",
      desc: "Prompt Renfort hilft dir nicht nur beim Lernen—es erinnert sich an deinen Weg.\nJede bedeutsame Interaktion—von einer Aufgabe oder persönlichen Initiative—wird aufgezeichnet, mit Zeitstempel versehen und kann in der Blockchain gespeichert werden.",
      list: [
        "Dieser Nachweis wird zu deinem kognitiven Buch: Er zeigt die investierte Zeit, die intellektuellen Wege, die Schlüsselmomente.",
        "Er zertifiziert deine Bemühungen, nicht nur die Ergebnisse.",
        "Er bietet Zugang zu echten Vorteilen: Rabatte, Aktivitäten, Anerkennungen."
      ],
      cta: "⏳ Diese Funktion wird bald verfügbar sein.\nHilf uns, sie zu bauen—deine Erfahrung zählt.",
    },
    loginBlock: {
      title: "Warum einloggen?",
      advantages: [
        "Die für jede Aufgabe aufgewendete Zeit erfassen (jeglicher Herkunft)",
        "Deine Interaktionen mit der KI speichern und analysieren, um Fortschritt, Anstrengung und Kreativität hervorzuheben",
        "Den Prozess sichern und validieren (verschlüsselte Datenbank, Blockchain in Kürze, zuverlässige Weitergabe)",
        "Eine faire Bewertung ermöglichen, die die geleistete Arbeit anerkennt, nicht nur das Ergebnis",
      ],
      button: "Einloggen",
      alert: "Die Authentifizierung wird bald verfügbar sein.\nDu wirst begleitet, dein Weg wird verfolgt und du kannst deine Fortschritte zwischen den Sitzungen einsehen.",
      info: "<strong>Vorteil:</strong> Durch das Einloggen kannst du nachweisen, dass du wirklich mit der KI interagiert, reflektiert und aufgebaut hast: Es ist kein einfaches Kopieren und Einfügen einer Antwort, sondern ein echter persönlicher Weg, der nachvollziehbar und wiederverwertbar ist.",
    },
    visitorBlock: {
      button: "Als Gast entdecken",
      info: `<strong>Gastmodus:</strong> Du greifst autonom auf Prompt Renfort zu, ohne dass persönliche Daten erfasst werden.<br />Deine Erfahrung wird von KI geleitet, um deine Reflexion zu fördern und deine Bemühungen zu würdigen.`
    }
  },
  chat: {
    welcome: "Hallo, ich bin Prompt Renfort. Teile deine Aufgabe oder Frage, wenn du bereit bist.",
    placeholder: "Schreibe deine Frage oder dein Problem hier…",
    send: "Senden",
    endSession: "Sitzung beenden",
    recognitions: "Erreichte Anerkennungen",
    invite_basic: "Lies die Aufgabe und wenn du bereit bist, lass uns anfangen zu arbeiten…",
  },
  summary: {
    sessionSummary: "Sitzungszusammenfassung",
    timeSpent: "Verwendete Zeit",
    questionsAsked: "Gestellte Fragen",
    recognitions: "Anerkennungen",
    sessionData: "Sitzungsdaten (Dev-Modus)",
    newSession: "Neue Sitzung starten"
  },
  about: {
    title: "🏆 Warum «Prompt Renfort»?",
    intro: `Prompt Renfort ist ein französischer Ausdruck, der aus dem klassischen Theater stammt: Er erscheint in <b>Le Cid</b> von Pierre Corneille (17. Jahrhundert) und bedeutet wörtlich „eine plötzliche Verstärkung“, eine entscheidende Hilfe, die im Moment des Zweifels oder der verletzten Ehre auftaucht.

In dem Stück wird Don Rodrigue von seinem Vater aufgefordert, angesichts eines moralischen Dilemmas mutig zu handeln. „Prompt renfort“ bezeichnet das Aufkommen einer inneren Kraft, eines moralischen Impulses, der es ermöglicht, edel zu handeln.

<b>Das ist genau das, was unsere KI tut:</b>`,
    values: [
      "Sie ersetzt den Schüler nicht. Sie unterstützt ihn.",
      "Sie befiehlt nicht. Sie lädt ein.",
      "Sie ist keine Antwortmaschine. Sie ist ein symbolischer Tutor.",
    ],
    conclusion: `Prompt Renfort begleitet den Schüler, wenn er anfängt zu zweifeln, allein vor dem leeren Blatt steht oder versucht, das, was er verstanden zu haben glaubt, neu zu formulieren.

Wir haben beschlossen, den Namen auf Französisch zu belassen.
Weil die Sprache die Erinnerung trägt.
Weil eine Marke auch ein Vers sein kann.
Weil Lernen kein einsamer Akt ist und Lernen ein Akt des Willens ist.

Wie im Stück agiert Prompt Renfort nicht anstelle des Schülers.
Er erscheint in dem Moment, in dem Mut gebraucht wird.
Er kommt, wenn das Wissen Wurzeln schlagen will.`,
  },
  navbar: {
    home: "Startseite",
    profile: "Profil",
    family: "Familie",
    about: "Über uns",
    login: "Einloggen",
    logout: "Ausloggen"
  },
  create_assignment: {
    title: "Aufgabe / Prompt Renfort Gruppe erstellen",
    subtitle: "Diese Seite ermöglicht es Lehrern und Eltern, eine Aufgabe oder Lerngruppe zu erstellen.\nNach der Validierung werden automatisch ein QR-Code, ein Code und ein Link zum Teilen generiert.",
    createBtn: "Aufgabe erstellen",
    creating: "Erstelle...",
    sendingFeedback: "Feedback wird gesendet...",
    codeLabel: "Aufgabencode:",
    qrInstruction: "Teilen Sie diesen Code oder QR mit Ihren Schülern!",
    backHome: "Zurück zur Startseite",
    mustBeLoggedIn: "Sie müssen eingeloggt sein, um eine Aufgabe zu erstellen.",
    createError: "Fehler bei der Erstellung",
    feedback: {
      errorTitle: "Fehler beim Senden des Feedbacks",
      errorDesc: "Ihr Vorschlag konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      thanksTitle: "Danke für Ihren Vorschlag!",
      thanksDesc: "Ihre Idee oder Rückmeldung wurde an das Team weitergeleitet.",
    },
    levels: {
      elementary: "Grundschule",
      middle: "Mittelschule",
      high: "Gymnasium",
      university: "Universität"
    },
    grades: {
      "6": "6. Klasse", "5": "5. Klasse", "4": "4. Klasse", "3": "3. Klasse", "2nde": "10. Fr", "1ère": "11. Fr",
      terminale: "12. Fr", college: "Mittelschule", lycee: "Gymnasium", other: "Andere"
    },
    languages: {
      fr: "Französisch", en: "Englisch", es: "Spanisch", de: "Deutsch", it: "Italienisch"
    },
    countries: {
      FR: "Frankreich", BE: "Belgien", ES: "Spanien", DE: "Deutschland", IT: "Italien", US: "USA",
      UK: "Vereinigtes Königreich", CA: "Kanada", PT: "Portugal", CH: "Schweiz", MA: "Marokko",
      TN: "Tunesien", SN: "Senegal", CM: "Kamerun", OTHER: "Andere"
    },
    target_age_range_label: "Zielaltersbereich (optional, z.B. 12-14 Jahre)",
    target_age_range_placeholder: "Wähle den Altersbereich…",
    age_ranges: {
      ages_6_8: "6–8 Jahre",
      ages_9_11: "9–11 Jahre",
      ages_12_14: "12–14 Jahre",
      ages_15_17: "15–17 Jahre",
      ages_18_22: "18–22 Jahre",
      ages_23_99: "23 Jahre oder älter",
      multi_age: "Mehrere Altersgruppen/Gruppe",
      other_age: "Andere",
    },
  },
  assignmentSession: {
    dualZoneTitle: "Demnächst: Pädagogischer Dual-Zonen-Arbeitsbereich",
    dualZoneDesc: "Ein freier Schreibbereich und ein separates KI-Assistenzfenster ermöglichen es, eigenständiges Denken von KI-Unterstützung zu unterscheiden. Diese Funktion ist prioritär und kommt bald!",
  },
};

export default de;
