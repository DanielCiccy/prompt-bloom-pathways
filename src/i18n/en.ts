
const en = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Your AI cognitive companion. Begin a journey of self-discovery and growth.",
    intro: "Prompt Renfort is a supportive AI preceptor here to guide your learning. Scan your assignment QR code or enter its code to begin.",
    enterCode: "Enter Assignment Code",
    scanQR: "Scan QR",
    start: "Start Session",
    motto_bold: "Universal Cognitive Trust Engine",
    motto_light: "empowering learners, teachers & parents alike",
    welcomeTitle: "Welcome to Prompt Renfort",
    welcomeDesc: "A secure and respectful space for guided cognitive learning.",
    privacyBlock: "We never store personal data without consent.\nThis experience complies with the EU’s GDPR.\nWe protect your free will, your thinking time, and your right to grow.",
    dataBelongs: "Data belongs to you",
    noAnswersStored: "No AI answers are stored",
    trustedMind: "Your mind is trusted here",
    preceptorLead: "Prompt Renfort is your AI preceptor.",
    entryInstructions1: "Scan your assignment’s QR code or enter the code to begin a guided learning session.",
    entryInstructions2: "Your effort will be recognized — not just your result.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Cognitive Assistant Prototype.`
  },
  chat: {
    welcome: "Hello, I’m Prompt Renfort. Please share your assignment or question when you’re ready.",
    placeholder: "Type your question or problem here…",
    send: "Send",
    endSession: "End Session",
    recognitions: "Recognitions Earned"
  },
  summary: {
    sessionSummary: "Session Summary",
    timeSpent: "Time Spent",
    questionsAsked: "Questions Asked",
    recognitions: "Recognitions",
    sessionData: "Session Data (DevMode)",
    newSession: "Start a New Session"
  }
};

export default en;
