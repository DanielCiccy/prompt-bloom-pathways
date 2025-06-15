
const es = {
  landing: {
    title: "Prompt Renfort",
    subtitle: "Tu compañero cognitivo de IA. Comienza un viaje de autodescubrimiento y crecimiento.",
    intro: "Prompt Renfort es un preceptor de IA para guiarte en tu aprendizaje. Escanea el QR de tu tarea o ingresa el código para comenzar.",
    enterCode: "Introducir código de asignación",
    scanQR: "Escanear QR",
    start: "Iniciar sesión",
    motto_bold: "Motor Universal de Confianza Cognitiva",
    motto_light: "al servicio de estudiantes, profesores y familias",
    welcomeTitle: "Bienvenido a Prompt Renfort",
    welcomeDesc: "Un espacio seguro y respetuoso para el aprendizaje cognitivo guiado.",
    privacyBlock: "Nunca almacenamos datos personales sin consentimiento.\nEsta experiencia cumple con el RGPD europeo.\nProtegemos tu libre albedrío, tu tiempo de reflexión y tu derecho a crecer.",
    dataBelongs: "Los datos te pertenecen",
    noAnswersStored: "No se almacenan respuestas de IA",
    trustedMind: "Aquí se confía en tu mente",
    preceptorLead: "Prompt Renfort es tu preceptor de IA.",
    entryInstructions1: "Escanea el código QR de tu asignación o ingresa el código para comenzar una sesión guiada.",
    entryInstructions2: "Tu esfuerzo será reconocido — no solo el resultado.",
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Asistente cognitivo (prototipo).`
  },
  chat: {
    welcome: "Hola, soy Prompt Renfort. Comparte tu tarea o pregunta cuando estés listo.",
    placeholder: "Escribe tu pregunta o problema aquí…",
    send: "Enviar",
    endSession: "Terminar sesión",
    recognitions: "Reconocimientos logrados"
  },
  summary: {
    sessionSummary: "Resumen de la sesión",
    timeSpent: "Tiempo invertido",
    questionsAsked: "Preguntas realizadas",
    recognitions: "Reconocimientos",
    sessionData: "Datos de sesión (modo Dev)",
    newSession: "Iniciar nueva sesión"
  }
};
export default es;
