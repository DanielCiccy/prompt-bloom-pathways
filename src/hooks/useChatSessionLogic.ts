
import React from "react";
import { toast } from "@/hooks/use-toast";
import { t } from "@/i18n/i18n";

export interface Message {
  role: "user" | "ai";
  content: string;
  time: number;
}

// Move AI openers and prompts to i18n
const AI_OPENERS_KEYS = [
  "chat.ai_opener_1",
  "chat.ai_opener_2",
  "chat.ai_opener_3",
  "chat.ai_opener_4",
  "chat.ai_opener_5",
  "chat.ai_opener_6",
];
const AI_GUIDANCE_KEYS = [
  "chat.ai_guidance_1",
  "chat.ai_guidance_2",
  "chat.ai_guidance_3",
  "chat.ai_guidance_4",
  "chat.ai_guidance_5",
  "chat.ai_guidance_6",
  "chat.ai_guidance_7",
  "chat.ai_guidance_8",
];
const RECOGNITION_LABEL_KEYS = [
  "chat.recognition_curiosity",
  "chat.recognition_persistence",
  "chat.recognition_growth_streak",
];

// Recognition colors should remain hardcoded
const RECOGNITION_COLORS = [
  "#21a179",
  "#ff9911",
  "#297373",
];

// Returns the internationalized welcoming message
function getWelcomeMessage() {
  return t("chat.invite_basic");
}

// Compose AI gentle reply with all pieces internationalized
function gentleAIReply(question: string, progressCount: number): string {
  let recog = "";
  if (progressCount % 4 === 1) recog = t("chat.recognition_grow");
  if (progressCount % 4 === 3) recog = t("chat.recognition_effort");
  const opener = t(AI_OPENERS_KEYS[progressCount % AI_OPENERS_KEYS.length]);
  const inspire = t(AI_GUIDANCE_KEYS[progressCount % AI_GUIDANCE_KEYS.length]);
  return `${opener} ${inspire}${recog ? "\n\n" + recog : ""}`;
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
      title: t("chat.photo_check_title"),
      description: t("chat.photo_check_desc"),
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
    if (session.length > 2)
      recognitions.push({ label: t(RECOGNITION_LABEL_KEYS[0]), color: RECOGNITION_COLORS[0] });
    if (session.length > 5)
      recognitions.push({ label: t(RECOGNITION_LABEL_KEYS[1]), color: RECOGNITION_COLORS[1] });
    if (session.length > 8)
      recognitions.push({ label: t(RECOGNITION_LABEL_KEYS[2]), color: RECOGNITION_COLORS[2] });
    return recognitions;
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

