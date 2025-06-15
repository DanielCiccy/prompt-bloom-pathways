
import React from "react";
import { useChatSessionLogic } from "@/hooks/useChatSessionLogic";
import AssignmentHeader from "./AssignmentHeader";
import TreeGrowth from "./TreeGrowth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SessionSummary from "./SessionSummary";
import { t } from "@/i18n/i18n";

type AssignmentType = any;

const ChatSession: React.FC<{
  assignmentCode: string;
  assignment?: AssignmentType;
  onEnd: () => void;
}> = ({ assignmentCode, assignment, onEnd }) => {
  const {
    messages,
    setInput,
    input,
    sendMessage,
    handleKey,
    endSession,
    started,
    countdown,
    chatEndRef,
    photoRequested,
    recognitions,
    ended,
    startTime,
  } = useChatSessionLogic({
    assignment,
    assignmentCode,
    onSessionEnd: onEnd,
  });

  // Fin de session : résumé
  if (ended)
    return (
      <SessionSummary
        questions={messages.filter((m) => m.role === "user").length}
        recognitions={recognitions}
        start={startTime ? new Date(startTime) : new Date()}
        end={new Date()}
        sessionData={{
          assignment: assignmentCode,
          start: startTime ? new Date(startTime).toISOString() : "",
          end: new Date().toISOString(),
          messages,
          recognitions,
        }}
        onReset={() => window.location.reload()}
      />
    );

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg shadow-lg bg-white p-4 md:p-8 mt-3 mb-10 relative animate-fade-in">
      <AssignmentHeader
        assignment={assignment}
        assignmentCode={assignmentCode}
        countdown={countdown}
        photoRequested={photoRequested}
      />
      {/* Indicateur d’évolution */}
      <div className="absolute right-6 top-8 z-10">
        <TreeGrowth count={messages.filter((m) => m.role === "user").length} />
      </div>
      <div className="text-sm text-muted-foreground mb-2 pl-2">
        <span className="font-semibold text-orange-600">Assignment:</span> {assignmentCode}
      </div>
      {/* Historique du chat */}
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
