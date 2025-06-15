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
    footer: (params?: { year: number }) => `© ${params?.year ?? new Date().getFullYear()} Prompt Renfort – Asistente cognitivo (prototipo).`,
    immutableLearningRecord: {
      title: "🧠 Huella de aprendizaje inmutable",
      desc: "Prompt Renfort no solo te ayuda a aprender—recuerda tu recorrido.\nCada interacción significativa—de una tarea o iniciativa personal—se registra, se sella con hora y puede guardarse en blockchain.",
      list: [
        "Esta huella se convierte en tu libro cognitivo: muestra el tiempo invertido, los caminos intelectuales, los momentos clave.",
        "Certifica tus esfuerzos, no solo los resultados.",
        "Ofrece acceso a ventajas reales: descuentos, actividades, reconocimientos."
      ],
      cta: "⏳ Esta función estará pronto disponible.\nAyúdanos a construirla—tu experiencia cuenta.",
    },
    loginBlock: {
      title: "¿Por qué iniciar sesión?",
      advantages: [
        "Registrar el tiempo dedicado a cada tarea (de cualquier origen)",
        "Almacenar y analizar tus intercambios con la IA para poner en valor progreso, esfuerzo y creatividad",
        "Asegurar y validar el proceso (base de datos cifrada, blockchain próximamente, compartición fiable)",
        "Abrir una evaluación justa que reconozca el trabajo realizado, no solo el resultado",
      ],
      button: "Iniciar sesión",
      alert: "La autenticación estará disponible pronto.\nEstarás acompañado, tu recorrido será seguido y podrás consultar tus progresos entre sesiones.",
      info: "<strong>Ventaja:</strong> Al iniciar sesión, podrás demostrar que realmente has interactuado, reflexionado y construido con la IA: no es un simple copia-pega de una respuesta, sino un verdadero recorrido personal, trazable y revalorizable.",
    },
    visitorBlock: {
      button: "Descubrir como invitado",
      info: `<strong>Modo invitado:</strong> Accedes a Prompt Renfort de forma autónoma, sin que se registre ningún dato personal.<br />Tu experiencia será guiada por IA para fomentar tu reflexión y valorar tu esfuerzo.`
    }
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
