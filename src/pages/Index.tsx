
import React, { useState } from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import AssignmentEntry from "@/components/AssignmentEntry";
import ChatSession from "@/components/ChatSession";
import { t } from "@/i18n/i18n";

const Index = () => {
  const [assignment, setAssignment] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
        <PromptRenfortLogo />
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-1 tracking-tight font-sans">
          {t("landing.title")}
        </h1>
        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold">
          {t("landing.subtitle")}
        </div>
        <div className="text-base text-muted-foreground mb-3 max-w-lg text-center">
          {t("landing.intro")}
        </div>
      </header>
      <main className="w-full flex-1 justify-center items-center flex flex-col">
        {!assignment ? (
          <AssignmentEntry onStart={setAssignment} />
        ) : (
          <ChatSession assignmentCode={assignment} onEnd={() => setAssignment(null)} />
        )}
      </main>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        &copy; {new Date().getFullYear()} Prompt Renfort – Cognitive Assistant Prototype.
      </footer>
    </div>
  );
};

export default Index;
