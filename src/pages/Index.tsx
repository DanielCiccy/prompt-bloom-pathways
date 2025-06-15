
import React, { useState } from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import AssignmentEntry from "@/components/AssignmentEntry";
import ChatSession from "@/components/ChatSession";
import { t } from "@/i18n/i18n";
import { Lock, Book, Check } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const [assignment, setAssignment] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
        {/* Language selector - top right */}
        <div className="w-full flex justify-end mb-2">
          <LanguageSelector />
        </div>
        <PromptRenfortLogo />
        {/* Motto block */}
        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold text-center">
          {t("landing.motto_bold")}
        </div>
        <div className="text-base md:text-lg font-light text-orange-800 mb-2 text-center">
          {t("landing.motto_light")}
        </div>

        {/* Welcome Block */}
        <div className="bg-white/60 border rounded-xl shadow-sm p-5 mt-5 mb-4 w-full max-w-lg text-center space-y-2">
          <div className="text-2xl font-bold tracking-tight text-blue-900 mb-1">
            {t("landing.welcomeTitle")}
          </div>
          <div className="text-base text-blue-900">
            {t("landing.welcomeDesc")}
          </div>
          <div className="text-[15px] text-muted-foreground mt-3 mb-2">
            {t("landing.privacyBlock")}
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-2 justify-center text-blue-800">
              <Lock className="w-5 h-5" aria-label="Lock icon" />
              <span className="font-medium">{t("landing.dataBelongs")}</span>
            </div>
            <div className="flex items-center gap-2 justify-center text-blue-800">
              <Book className="w-5 h-5" aria-label="Book icon" />
              <span className="font-medium">{t("landing.noAnswersStored")}</span>
            </div>
            <div className="flex items-center gap-2 justify-center text-green-700">
              <Check className="w-5 h-5" aria-label="Check icon" />
              <span className="font-medium">{t("landing.trustedMind")}</span>
            </div>
          </div>
        </div>

        {/* Session Entry Section Description */}
        <div className="text-base text-gray-700 mt-2 mb-3 max-w-md text-center">
          <span className="font-semibold">{t("landing.preceptorLead")}</span><br />
          {t("landing.entryInstructions1")}<br />
          {t("landing.entryInstructions2")}
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
        {t("landing.footer", { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
};

export default Index;

