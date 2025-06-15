
import React from "react";
import { toast } from "@/hooks/use-toast";
import { Camera } from "lucide-react";

export interface Message {
  role: "user" | "ai";
  content: string;
  time: number;
}

export function useChatSessionLogic({
  assignment,
  assignmentCode,
  onSessionEnd,
}: {
  assignment: any;
  assignmentCode: string;
  onSessionEnd: () => void;
}) {
  const DEFAULT_EXAM_TIME_MINUTES = 30;

  // Génère le message de bienvenue spécialisé selon l'existence du devoir
  function getWelcomeMessage(): string {
    if (assignment?.title && assignment?.description) {
      return `Bienvenue ! Ce devoir porte sur : ${assignment.title}.\n\n${assignment.description}\n\nLorsque tu es prêt, pose ta première question ou explique ta démarche.`;
    }
    if (assignment?.title) {
      return `Bienvenue ! Ce devoir porte sur : ${assignment.title}.\n\nPose ta première question ou explique ta démarche.`;
    }
    if (assignment?.description) {
      return `Bienvenue !\nDescription du devoir : ${assignment.description}\n\nPose ta première question ou explique ta démarche.`;
    }
    return "Bienvenue ! Pose-moi une question ou explique ta démarche.";
  }

  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "ai",
      content: getWelcomeMessage(),
      time: Date.now(),
    },
  ]);
  const [input, setInput] = React.useState("");
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [ended, setEnded] = React.useState(false);
  const [countdown, setCountdown] = React.useState<number | null>(null);
  const [photoRequested, setPhotoRequested] = React.useState(false);

  const chatEndRef = React.useRef<HTMLDivElement | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const photoTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Scroll automatique en bas du chat
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, ended]);

  // Démarrage du timer à la première question élève
  React.useEffect(() => {
    if (messages.find((m) => m.role === "user") && !startTime) {
      const now = Date.now();
      setStartTime(now);
      let durationMinutes = DEFAULT_EXAM_TIME_MINUTES;
      if (assignment?.deadline_time) {
        const [h, m] = assignment.deadline_time.split(":");
        durationMinutes = Number(h) * 60 + Number(m);
        if (!durationMinutes || durationMinutes < 1)
          durationMinutes = DEFAULT_EXAM_TIME_MINUTES;
      }
      setCountdown(durationMinutes * 60);
      // Première vérification photo env 1 min après début
      const startPhotoTimeout = setTimeout(triggerPhotoCheck, 60000 + Math.random() * 20000);
      photoTimeoutRef.current = startPhotoTimeout;
    }
    // eslint-disable-next-line
  }, [messages, assignment]);

  // Gestion timer
  React.useEffect(() => {
    if (countdown === null || ended) return;
    if (countdown <= 0) {
      setEnded(true);
      setCountdown(0);
      return;
    }
    timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [countdown, ended]);

  // Prise de photo aléatoire
  function triggerPhotoCheck() {
    setPhotoRequested(true);
    toast({
      title: "Vérification de présence",
      description: "Merci de montrer votre visage devant la caméra. (Aucune donnée n'est enregistrée, uniquement contrôle visuel)",
      // Retrait de l'option "icon" qui n'est pas supportée
      // Ajout possible : le composant Toast accepte des composants React dans le title/description
    });
    setTimeout(() => {
      setPhotoRequested(false);
      if (!ended) {
        photoTimeoutRef.current = setTimeout(triggerPhotoCheck, 240000 + Math.random() * 480000);
      }
    }, 15000);
  }

  function sendMessage() {
    if (!input.trim() || ended) return;
    const now = Date.now();
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input, time: now },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: gentleAIReply(input, prev.filter((m) => m.role === "user").length),
          time: Date.now(),
        },
      ]);
    }, 500 + Math.random() * 500);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function endSession() {
    setEnded(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
    if (photoTimeoutRef.current) clearTimeout(photoTimeoutRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (onSessionEnd) onSessionEnd();
  }

  // Recognitions calcul
  function getRecognitions(session: Message[]): { label: string; color: string }[] {
    const recognitions: { label: string; color: string }[] = [];
    if (session.length > 2) recognitions.push({ label: "Curiosity", color: "#21a179" });
    if (session.length > 5) recognitions.push({ label: "Persistence", color: "#ff9911" });
    if (session.length > 8) recognitions.push({ label: "Growth Streak", color: "#297373" });
    return recognitions;
  }

  // Génération réponse AI pédagogue :
  function gentleAIReply(question: string, progressCount: number): string {
    const openers = [
      "Let's reflect on your approach.",
      "That's a thoughtful question!",
      "Progress!",
      "You’re on the right track.",
      "Interesting, let’s explore this together.",
      "Great, let’s break it down step by step.",
    ];
    const guidance = [
      "How would you begin to tackle this problem?",
      "Can you explain your thinking so far?",
      "What do you notice about the information provided?",
      "What’s a first step you might try?",
      "If you get stuck, what could you ask?",
      "What connections can you make to things you already know?",
      "What’s your confidence level on your current approach?",
      "Let’s rephrase the problem together—how would you put it in your own words?",
    ];
    let recog = "";
    if (progressCount % 4 === 1) recog = "🌱 Keep going, every question grows your understanding.";
    if (progressCount % 4 === 3) recog = "🍃 I can see your effort building.";
    const opener = openers[progressCount % openers.length];
    const inspire = guidance[progressCount % guidance.length];
    return `${opener} ${inspire}${recog ? "\n\n" + recog : ""}`;
  }

  return {
    messages,
    setInput,
    input,
    sendMessage,
    handleKey,
    endSession,
    started: !!startTime,
    countdown,
    chatEndRef,
    photoRequested,
    recognitions: getRecognitions(messages.filter((m) => m.role === "user")),
    setEnded,
    ended,
    setMessages,
    startTime,
  };
}
