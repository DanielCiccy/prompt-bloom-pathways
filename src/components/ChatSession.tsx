
import React, { useState, useEffect, useRef } from "react";
import { t } from "@/i18n/i18n";
import TreeGrowth from "./TreeGrowth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SessionSummary from "./SessionSummary";

interface Message {
  role: "user" | "ai";
  content: string;
  time: number;
}

function gentleAIReply(question: string, progressCount: number): string {
  // Simulated, Socratic and supportive Reply
  const openers = [
    "Let's reflect on your approach.",
    "That's a thoughtful question!",
    "Progress!",
    "You’re on the right track.",
    "Interesting, let’s explore this together.",
    "Great, let’s break it down step by step.",
  ];
  const guidance = [
    // Gentle, guiding prompts - never direct answers
    "How would you begin to tackle this problem?",
    "Can you explain your thinking so far?",
    "What do you notice about the information provided?",
    "What’s a first step you might try?",
    "If you get stuck, what could you ask?",
    "What connections can you make to things you already know?",
    "What’s your confidence level on your current approach?",
    "Let’s rephrase the problem together—how would you put it in your own words?"
  ];
  // Rotate "recognition" feedback every few user messages
  let recog = "";
  if (progressCount % 4 === 1) recog = "🌱 Keep going, every question grows your understanding.";
  if (progressCount % 4 === 3) recog = "🍃 I can see your effort building.";
  const opener = openers[progressCount % openers.length];
  const inspire = guidance[progressCount % guidance.length];
  return `${opener} ${inspire}${recog ? "\n\n" + recog : ""}`;
}

function getRecognitions(session: Message[]): {label:string; color: string}[] {
  // Simple example: more advanced recognition logic can be added
  const recognitions: {label:string; color:string}[] = [];
  if (session.length > 2) recognitions.push({ label: "Curiosity", color: "#21a179" });
  if (session.length > 5) recognitions.push({ label: "Persistence", color: "#ff9911" });
  if (session.length > 8) recognitions.push({ label: "Growth Streak", color: "#297373" });
  return recognitions;
}

const ChatSession: React.FC<{assignmentCode: string; onEnd: () => void}> = ({
  assignmentCode,
  onEnd
}) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: t("chat.welcome"), time: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [startTime] = useState(Date.now());
  const [ended, setEnded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, ended]);

  function sendMessage() {
    if (!input.trim()) return;
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
          content: gentleAIReply(input, prev.filter(m => m.role==="user").length),
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
  }

  const recognitions = getRecognitions(messages.filter(m => m.role==="user"));

  if (ended)
    return (
      <SessionSummary
        questions={messages.filter(m => m.role==="user").length}
        recognitions={recognitions}
        start={new Date(startTime)}
        end={new Date()}
        sessionData={{
          assignment: assignmentCode,
          start: new Date(startTime).toISOString(),
          end: new Date().toISOString(),
          messages,
          recognitions
        }}
        onReset={() => window.location.reload()}
      />
    );

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg shadow-lg bg-white p-4 md:p-8 mt-3 mb-10 relative animate-fade-in">
      <div className="absolute right-6 top-8 z-10">
        <TreeGrowth count={messages.filter(m => m.role==="user").length} />
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
        />
        <Button type="submit" size="lg" className="bg-primary text-white hover:bg-primary/90">
          {t("chat.send")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          type="button"
          className="ml-2"
          onClick={endSession}
        >
          {t("chat.endSession")}
        </Button>
      </form>
    </div>
  );
};

export default ChatSession;
