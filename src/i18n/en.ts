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
      desc: `Prompt Renfort empowers educators by transforming how AI is used in learning.
Rather than encouraging shortcuts, it channels AI into a guided, trackable, and pedagogically sound experience.

Each session—triggered by a teacher’s assignment or a student’s own initiative—is recorded, timestamped, and optionally sealed on the blockchain.
This prevents the kind of untraceable, sterile AI usage often lamented by educators who feel powerless against unearned answers.

Instead, teachers gain a window into:
• Time spent on the task
• Quality and depth of the student’s dialogue
• Key turning points in understanding

Students build a Cognitive Ledger—a new kind of academic trace that validates effort, engagement, and growth, not just final results.
It restores trust and opens doors to incentives, recognition, and collaboration.`,
      list: [],
      cta: `⏳ Coming soon.
Help us shape it—because learning deserves trust.`,
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
    visitorBlock: {
      button: "Discover as a guest",
      info: `<strong>Guest mode:</strong> You access Prompt Renfort independently, with no personal data recorded.<br />Your journey will be guided by AI to encourage your thinking and to value your effort.`
    }
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
  },
  about: {
    title: "🏆 Why 'Prompt Renfort'?",
    intro: `Prompt Renfort is a French term from classical theatre: it appears in <b>Le Cid</b> by Pierre Corneille (17th century) and literally means “sudden reinforcement,” a decisive support that arises at a moment of doubt or wounded honor.

In the play, Don Rodrigue is summoned by his father to show courage in a moral dilemma. “Prompt renfort” designates the surge of inner strength—a moral resolve—that allows one to act nobly.

<b>This is exactly what our AI does:</b>`,
    values: [
      "It does not replace the student. It provides support.",
      "It does not command. It invites.",
      "It is not a machine for answers. It is a symbolic preceptor.",
    ],
    conclusion: `Prompt Renfort accompanies the student when doubt creeps in, when facing the blank page, or trying to rephrase understanding.

We chose to keep the name in French.
Because language carries memory.
Because a brand can also be a verse.
Because learning is not a solitary act—learning is an act of will.

Like in the play, Prompt Renfort does not act in place of the student.
It appears when courage is needed.
It arrives when knowledge seeks to take root.`,
  },
  navbar: {
    home: "Home",
    profile: "Profile",
    family: "Family",
    about: "About",
    login: "Sign In",
    logout: "Sign Out"
  },
  common: {
    comingSoon: "Coming soon:",
    backHome: "Back to home",
  },
  createAssignment: {
    title: "Create assignment",
    subtitle: "This page allows teachers and parents to quickly create a group assignment.\nOnce validated, a QR code, code, and shareable link will be automatically generated for learners.",
    soonBlock: "The assignment settings form will appear here.",
  },
  joinAssignment: {
    title: "Join assignment",
    instructions: "To start, scan the QR code given by your teacher or enter a code below.\n",
    experience: "Simplified experience, no account needed, for a quick start.",
    soonBlock: "Area for entering code/scanning QR and starting the individual session.",
  },
};

export default en;
