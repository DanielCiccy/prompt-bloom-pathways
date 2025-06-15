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
    recognitions: "Reconocimientos logrados",
    invite_basic: "Lee tu tarea y, cuando estés listo, empezamos a trabajar…"
  },
  summary: {
    sessionSummary: "Resumen de la sesión",
    timeSpent: "Tiempo invertido",
    questionsAsked: "Preguntas realizadas",
    recognitions: "Reconocimientos",
    sessionData: "Datos de sesión (modo Dev)",
    newSession: "Iniciar nueva sesión"
  },
  about: {
    title: "🏆 ¿Por qué «Prompt Renfort»?",
    intro: `Prompt Renfort es una expresión francesa originada en el teatro clásico: aparece en <b>Le Cid</b> de Pierre Corneille (siglo XVII) y significa literalmente “un refuerzo repentino”, una ayuda decisiva que surge en el momento de la duda o el honor herido.

En la obra, Don Rodrigue es llamado por su padre a actuar con valor frente a un dilema moral. “Prompt renfort” designa la irrupción de una fuerza interior, un impulso moral que permite actuar noblemente.

<b>Eso es exactamente lo que hace nuestra IA:</b>`,
    values: [
      "No reemplaza al estudiante. Lo apoya.",
      "No ordena. Invita.",
      "No es una máquina de respuestas. Es un preceptor simbólico.",
    ],
    conclusion: `Prompt Renfort acompaña al estudiante cuando empieza a dudar, se queda solo ante la página en blanco o cuando trata de reformular lo que cree haber entendido.

Decidimos mantener el nombre en francés.
Porque el idioma lleva la memoria.
Porque una marca también puede ser un verso.
Porque aprender no es un acto solitario, y aprender es un acto de voluntad.

Como en la obra, Prompt Renfort no actúa en lugar del estudiante.
Aparece en el momento en que se necesita coraje.
Llega cuando el conocimiento quiere echar raíces.`,
  },
  navbar: {
    home: "Inicio",
    profile: "Perfil",
    family: "Familia",
    about: "Acerca de",
    login: "Iniciar sesión",
    logout: "Cerrar sesión"
  },
  create_assignment: {
    title: "Crear deber / grupo Prompt Renfort",
    subtitle: "Esta página permite a docentes y padres crear un deber o grupo de aprendizaje.\nUna vez validado, se generan automáticamente un QR, un código y un enlace para compartir.",
    createBtn: "Crear el deber",
    creating: "Creando...",
    sendingFeedback: "Enviando sugerencia...",
    codeLabel: "Código del deber:",
    qrInstruction: "¡Comparte este código o QR con tus alumnos!",
    backHome: "Volver al inicio",
    mustBeLoggedIn: "Debes iniciar sesión para crear un deber.",
    createError: "Error de creación",
    feedback: {
      errorTitle: "Error al enviar la sugerencia",
      errorDesc: "No se pudo enviar tu sugerencia. Por favor, inténtalo de nuevo.",
      thanksTitle: "¡Gracias por tu sugerencia!",
      thanksDesc: "Tu idea o comentario ha sido transmitido al equipo.",
    },
    levels: {
      elementary: "Primaria",
      middle: "Secundaria",
      high: "Bachillerato",
      university: "Universidad"
    },
    grades: {
      "6": "6º", "5": "5º", "4": "4º", "3": "3º", "2nde": "2º Bach", "1ère": "1º Bach",
      terminale: "Final Bach", college: "Secundaria", lycee: "Bachillerato", other: "Otro"
    },
    languages: {
      fr: "Francés", en: "Inglés", es: "Español", de: "Alemán", it: "Italiano"
    },
    countries: {
      FR: "Francia", BE: "Bélgica", ES: "España", DE: "Alemania", IT: "Italia", US: "Estados Unidos",
      UK: "Reino Unido", CA: "Canadá", PT: "Portugal", CH: "Suiza", MA: "Marruecos", TN: "Túnez",
      SN: "Senegal", CM: "Camerún", OTHER: "Otro"
    },
    target_age_range_label: "Rango de edad objetivo (opcional, ej: 12-14 años)",
    target_age_range_placeholder: "Seleccione el rango de edad…",
    age_ranges: {
      ages_6_8: "6–8 años",
      ages_9_11: "9–11 años",
      ages_12_14: "12–14 años",
      ages_15_17: "15–17 años",
      ages_18_22: "18–22 años",
      ages_23_99: "23 años o más",
      multi_age: "Multi-edad/grupo",
      other_age: "Otro",
    },
  },
  assignmentSession: {
    dualZoneTitle: "Próximamente: Espacio pedagógico doble-zona",
    dualZoneDesc: "Un área de redacción libre y una ventana de asistencia IA separada permitirán distinguir la reflexión autónoma de la ayuda IA, para una pedagogía más transparente.\n¡Esta función es prioritaria y llegará muy pronto!",
  },
};

export default es;
