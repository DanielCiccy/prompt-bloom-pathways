
import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";
import { useNavigate } from "react-router-dom";
import { User, LogIn } from "lucide-react";

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
          <div className="text-2xl font-bold tracking-tight text-blue-900 mb-3">
            {t("landing.welcomeTitle")}
          </div>
          <div className="text-base text-blue-900">
            {t("landing.welcomeDesc")}
          </div>
          <div className="text-[15px] text-muted-foreground mt-3 mb-2 whitespace-pre-line">
            {t("landing.privacyBlock")}
          </div>
        </div>

        {/* NOUVEAU BLOC : Choix utilisateur */}
        <div className="mt-2 w-full max-w-lg flex flex-col gap-6">
          <div className="bg-white/90 border rounded-xl shadow p-5 flex flex-col gap-4 items-center">
            <button
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded px-6 py-3 text-lg font-semibold transition"
              onClick={() => {
                // Un futur flux de connexion pourra être ajouté ici
                alert(
                  "L’authentification sera bientôt disponible.\nTu seras alors accompagné(e), ton parcours sera suivi et tu pourras retrouver tes progrès d’une session à l’autre."
                );
              }}
            >
              <User className="w-6 h-6" />
              S’identifier
            </button>
            <div className="text-sm text-blue-900 font-normal text-center">
              <strong>Avantage :</strong> En t’identifiant, tu seras accompagné(e) par un(e) éducateur(trice) ou enseignant(e), qui pourra t’encourager, suivre tes progrès et personnaliser tes parcours.
            </div>
          </div>
          <div className="bg-white/90 border rounded-xl shadow p-5 flex flex-col gap-4 items-center">
            <button
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded px-6 py-3 text-lg font-semibold transition"
              onClick={() => navigate("/élève-students")}
            >
              <LogIn className="w-6 h-6" />
              Découvrir en visiteur libre
            </button>
            <div className="text-sm text-orange-800 font-normal text-center">
              <strong>Visiteur libre :</strong> Tu accèdes à Prompt Renfort en autonomie, sans qu’aucune donnée nominative ne soit enregistrée.
              <br />Ton expérience sera guidée par l’IA pour encourager ta réflexion et valoriser ton effort.
            </div>
          </div>
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

