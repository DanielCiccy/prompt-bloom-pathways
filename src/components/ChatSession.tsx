
import React, { useState, useEffect, useRef } from "react";
import { t } from "@/i18n/i18n";
import TreeGrowth from "./TreeGrowth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SessionSummary from "./SessionSummary";
import { toast } from "@/hooks/use-toast";
import { Camera } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
  time: number;
}

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
    "Let’s rephrase the problem together—how would you put it in your own words?"
  ];
  let recog = "";
  if (progressCount % 4 === 1) recog = "🌱 Keep going, every question grows your understanding.";
  if (progressCount % 4 === 3) recog = "🍃 I can see your effort building.";
  const opener = openers[progressCount % openers.length];
  const inspire = guidance[progressCount % guidance.length];
  return `${opener} ${inspire}${recog ? "\n\n" + recog : ""}`;
}

function getRecognitions(session: Message[]): {label:string; color: string}[] {
  const recognitions: {label:string; color:string}[] = [];
  if (session.length > 2) recognitions.push({ label: "Curiosity", color: "#21a179" });
  if (session.length > 5) recognitions.push({ label: "Persistence", color: "#ff9911" });
  if (session.length > 8) recognitions.push({ label: "Growth Streak", color: "#297373" });
  return recognitions;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type AssignmentType = any; // Pour usage rapide, on pourrait typer selon la structure precise

const DEFAULT_EXAM_TIME_MINUTES = 30; // Durée par défaut si aucune info

const ChatSession: React.FC<{assignmentCode: string; assignment?: AssignmentType; onEnd: () => void}> = ({
  assignmentCode,
  assignment,
  onEnd
}) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: t("chat.welcome"), time: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [ended, setEnded] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [photoRequested, setPhotoRequested] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const photoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, ended]);

  // Démarre le compte à rebours à la première saisie utilisateur
  useEffect(() => {
    if (messages.find(m => m.role === "user") && !startTime) {
      const now = Date.now();
      setStartTime(now);
      // Récupère la durée depuis l'assignement (en minutes) ou défaut
      let durationMinutes = DEFAULT_EXAM_TIME_MINUTES;
      if (assignment?.deadline_time) {
        //  e.g. "01:30:00" => 90min if need be, mais logique simple ici :
        const [h, m, s] = assignment.deadline_time.split(":");
        durationMinutes = Number(h) * 60 + Number(m);
        // TODO : gérer les durations négatives ou aberrantes
        if (!durationMinutes || durationMinutes < 1) 
          durationMinutes = DEFAULT_EXAM_TIME_MINUTES;
      }
      setCountdown(durationMinutes * 60);

      // Démarre la photo-check aléatoire après 1min env, faux délai au début
      const startPhotoTimeout = setTimeout(triggerPhotoCheck, 60000 + Math.random() * 20000);
      photoTimeoutRef.current = startPhotoTimeout;
    }
    // eslint-disable-next-line
  }, [messages, assignment]);

  // Compte à rebours actif
  useEffect(() => {
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

  // Gestion de la "prise de photo" aléatoire
  function triggerPhotoCheck() {
    setPhotoRequested(true);
    toast({
      title: "Vérification de présence",
      description: "Merci de montrer votre visage devant la caméra. (Aucune donnée n'est enregistrée, uniquement contrôle visuel)",
      icon: <Camera className="w-6 h-6 text-orange-600" />
    });
    // Simuler une vérification, puis programmer la prochaine aléatoire
    setTimeout(() => {
      setPhotoRequested(false);
      // Prochaine check dans 4 à 12 min (pas trop fréquemment !)
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
          content: gentleAIReply(input, prev.filter(m => m.role === "user").length),
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
  }

  const recognitions = getRecognitions(messages.filter(m => m.role === "user"));

  // Affichage 
  if (ended)
    return (
      <SessionSummary
        questions={messages.filter(m => m.role === "user").length}
        recognitions={recognitions}
        start={startTime ? new Date(startTime) : new Date()}
        end={new Date()}
        sessionData={{
          assignment: assignmentCode,
          start: startTime ? new Date(startTime).toISOString() : "",
          end: new Date().toISOString(),
          messages,
          recognitions
        }}
        onReset={() => window.location.reload()}
      />
    );

  // Header avec informations devoir
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg shadow-lg bg-white p-4 md:p-8 mt-3 mb-10 relative animate-fade-in">
      {/* Info devoir */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-blue-900">{assignment?.title || "Devoir"}</h2>
        <div className="flex flex-col md:flex-row md:gap-8 gap-1 text-sm text-gray-700 mt-1">
          <div>
            <span className="font-semibold text-orange-700">Code : </span>
            <span className="font-mono">{assignmentCode}</span>
          </div>
          {assignment?.deadline_time && (
            <div>
              <span className="font-semibold text-orange-700">Temps imparti : </span>
              {assignment.deadline_time.slice(0,5)}
            </div>
          )}
          {assignment?.deadline_date && (
            <div>
              <span className="font-semibold text-blue-800">Date butoir : </span>
              {assignment.deadline_date}
            </div>
          )}
          {assignment?.school_name && (
            <div>
              <span className="font-semibold text-blue-800">Établissement : </span>
              {assignment.school_name}
            </div>
          )}
        </div>
        {/* Compte à rebours */}
        {countdown !== null && (
          <div className="mt-3 flex items-center gap-2 text-lg font-bold text-green-700">
            <span className="rounded-full bg-green-100 px-3 py-1">
              ⏰ {formatTime(countdown)}
            </span>
            <span className="text-xs text-gray-500 font-normal">Temps restant</span>
          </div>
        )}
        {/* Vérification caméra si demandée */}
        {photoRequested && (
          <div className="mt-2 flex items-center gap-2 animate-pulse text-orange-600">
            <Camera className="w-6 h-6" />
            <span>Vérification… Merci de montrer votre visage à l'écran !</span>
          </div>
        )}
      </div>
      {/* Chat */}
      <div className="absolute right-6 top-8 z-10">
        <TreeGrowth count={messages.filter(m => m.role === "user").length} />
      </div>
      <div className="text-sm text-muted-foreground mb-2 pl-2">
        <span className="font-semibold text-orange-600">Assignment:</span> {assignmentCode}
      </div>
      {/* Chat history */}
      <div className="max-h-[340px] overflow-y-auto pr-2 mb-4 flex flex-col gap-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start mb-1 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "ai" && (
              <div className="w-8 shrink-0 flex items-center justify-center mr-2">
                <span className="bg-orange-500 text-white rounded-full px-2 py-1 text-xs font-bold">Ω</span>
              </div>
            )}
            <div
              className={`rounded-xl px-5 py-3 max-w-[75%] whitespace-pre-line shadow-sm
                ${msg.role === "user"
                  ? "bg-blue-50 border border-blue-200 text-right text-blue-900"
                  : "bg-muted border text-left"}
                `}
              style={
                msg.role === "ai"
                  ? { borderColor: "#ff9911" }
                  : {}
              }
            >
              {msg.content}
            </div>
            {msg.role === "user" && (
              <div className="w-8 shrink-0 flex items-center justify-center ml-2">
                <span className="bg-primary text-white rounded-full px-2 py-1 text-xs font-bold">👤</span>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      {/* Recognitions */}
      {recognitions.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2 pl-2">
          {recognitions.map((r, i) => (
            <span
              key={i}
              className="rounded px-3 py-1 text-xs text-white"
              style={{ background: r.color }}
            >
              {r.label}
            </span>
          ))}
        </div>
      )}
      {/* Input */}
      <form
        className="flex items-center gap-3 mt-2"
        onSubmit={e => { e.preventDefault(); sendMessage(); }}
      >
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={t("chat.placeholder")}
          className="flex-1 text-lg"
          maxLength={350}
          autoFocus
          disabled={ended || countdown === 0}
        />
        <Button type="submit" size="lg" className="bg-primary text-white hover:bg-primary/90" disabled={ended || countdown === 0}>
          {t("chat.send")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          type="button"
          className="ml-2"
          onClick={endSession}
          disabled={ended}
        >
          {t("chat.endSession")}
        </Button>
      </form>
    </div>
  );
};

export default ChatSession;
