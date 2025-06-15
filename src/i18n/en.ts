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
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Cognitive Assistant Prototype.`,
    immutableLearningRecord: {
      title: "🧠 Immutable Learning Record",
      desc: "Prompt Renfort doesn't just help you learn—it remembers.\nEvery meaningful interaction—whether from a teacher’s assignment or your own initiative—is recorded, timestamped, and can be sealed on the blockchain.",
      list: [
        "This record becomes your cognitive ledger: showing your time spent, your intellectual path, your turning points.",
        "Certifying your efforts, not just your results.",
        "Opening access to real-world incentives: discounts, activities, recognition."
      ],
      cta: "⏳ This feature is coming soon.\nHelp us shape it—your journey matters.",
    },
    loginBlock: {
      title: "Why sign in?",
      advantages: [
        "Track the time spent on each assignment (from any source)",
        "Store and analyze your exchanges with AI to value progress, effort, creativity",
        "Secure and validate the process (encrypted database, blockchain coming soon, reliable sharing)",
        "Open up fair assessment that recognizes work accomplished, not just the result",
      ],
      button: "Sign In",
      alert: "Authentication will be available soon.\nYou will be accompanied; your journey will be tracked, and you’ll be able to find your progress across sessions.",
      info: "<strong>Advantage:</strong> By signing in, you can prove you truly interacted, thought, and built with AI: this is not just a copy-paste answer, but a real personal journey that is traceable and rewarding.",
    },
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
