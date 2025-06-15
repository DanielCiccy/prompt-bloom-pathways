
import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";
import AssignmentEntry from "@/components/AssignmentEntry";
import { Lock, Book, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EleveStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
        <div className="w-full flex justify-end mb-2">
          <LanguageSelector />
        </div>
        <PromptRenfortLogo />

        <BrandingBar />

        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold text-center">
          {t("landing.motto_bold")}
        </div>
        <div className="text-base md:text-lg font-light text-orange-800 mb-2 text-center">
          {t("landing.motto_light")}
        </div>

        {/* Bloc d'instructions élève */}
        <div className="text-base text-gray-700 mt-5 mb-3 max-w-md text-center">
          <span className="font-semibold">{t("landing.preceptorLead")}</span>
          <br />
          {t("landing.entryInstructions1")}
          <br />
          {t("landing.entryInstructions2")}
        </div>
      </header>

      {/* Zone entrée mission */}
      <main className="w-full flex-1 justify-center items-center flex flex-col">
        <AssignmentEntry onStart={code => navigate("/")} />
        {/* OnStart ici serait normalement relié à la session d'apprentissage */}
        <div className="flex flex-col gap-2 mt-4 mb-0">
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
      </main>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        {typeof t("landing.footer") === "function"
          ? t("landing.footer")({ year: new Date().getFullYear() })
          : t("landing.footer")}
      </footer>
    </div>
  );
};

export default EleveStudents;
