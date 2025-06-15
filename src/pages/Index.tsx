
import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <header className="w-full max-w-xl mx-auto mt-8 mb-6 flex flex-col items-center">
        {/* Language selector - top right */}
        <div className="w-full flex justify-end mb-2">
          <LanguageSelector />
        </div>
        <PromptRenfortLogo />
        <BrandingBar />
        {/* Motto block */}
        <div className="text-xl md:text-2xl text-orange-600 mb-1 font-semibold text-center">
          {t("landing.motto_bold")}
        </div>
        <div className="text-base md:text-lg font-light text-orange-800 mb-2 text-center">
          {t("landing.motto_light")}
        </div>
        <div className="bg-white/60 border rounded-xl shadow-sm p-5 mt-5 mb-4 w-full max-w-lg text-center space-y-2">
          <div className="text-2xl font-bold tracking-tight text-blue-900 mb-1">
            {t("landing.welcomeTitle")}
          </div>
          <div className="text-base text-blue-900">
            {t("landing.welcomeDesc")}
          </div>
          <div className="text-[15px] text-muted-foreground mt-3 mb-2 whitespace-pre-line">
            {t("landing.privacyBlock")}
          </div>
        </div>
        {/* BOUTON POUR ALLER VERS LA PAGE ELEVE */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded px-6 py-3 text-lg font-semibold transition"
            onClick={() => navigate("/élève-students")}
          >
            {t("landing.enterCode")}
          </button>
        </div>
      </header>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        {typeof t("landing.footer") === "function"
          ? t("landing.footer")({ year: new Date().getFullYear() })
          : t("landing.footer")}
      </footer>
    </div>
  );
};

export default Index;
