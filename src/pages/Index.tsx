import React from "react";
import PromptRenfortLogo from "@/components/PromptRenfortLogo";
import { t } from "@/i18n/i18n";
import LanguageSelector from "@/components/LanguageSelector";
import BrandingBar from "@/components/BrandingBar";
import { useNavigate } from "react-router-dom";
import { User, LogIn, Clock2, Brain, ShieldCheck, Puzzle, Award } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <AppHeader />
      {/* BOUTON CHOIX DU PROFIL */}
      <button
        className="mb-4 mt-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-6 py-3 text-lg font-semibold shadow transition"
        onClick={() => navigate("/profil")}
      >
        Je choisis mon profil
      </button>
      <Link
        to="/auth"
        className="block text-center underline text-blue-700 font-medium mb-3 text-sm hover:text-blue-900"
      >
        Se connecter ou créer un compte
      </Link>
      {/* Bloc Future Feature : Cognitive Trace & Value Ledger */}
      <section className="w-full max-w-lg mx-auto mt-4 mb-0">
        <div className="rounded-xl border bg-gradient-to-r from-blue-50 via-white to-orange-50 shadow-md px-4 py-5 flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2 text-lg font-bold text-blue-950 mb-1">
            <Award className="w-6 h-6 text-yellow-500" />
            {t("landing.immutableLearningRecord.title")}
          </div>
          <div className="text-base text-blue-900 mb-1 whitespace-pre-line">
            {t("landing.immutableLearningRecord.desc")}
          </div>
          <ul className="list-disc pl-6 text-sm text-slate-800 mb-1">
            {(t("landing.immutableLearningRecord.list") as string[]).map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="mt-2 mb-1 text-sm text-blue-900 italic whitespace-pre-line">
            {t("landing.immutableLearningRecord.cta")}
          </div>
        </div>
      </section>
      {/* Choix utilisateur */}
      <div className="mt-2 w-full max-w-lg flex flex-col gap-6">
        {/* Bloc connexion avec avantages */}
        <div className="bg-white/90 border rounded-xl shadow p-5 flex flex-col gap-5 items-center">
          {/* Objectif de la connexion */}
          <div className="w-full text-left space-y-2">
            <div className="text-blue-900 font-semibold mb-1 flex items-center gap-2 text-base">
              <User className="inline mr-1 w-5 h-5" />
              {t("landing.loginBlock.title")}
            </div>
            <ul className="text-sm text-blue-900 font-normal pl-0 space-y-1">
              {(t("landing.loginBlock.advantages") as string[]).map((adv, i) => (
                <li key={i} className="flex items-start gap-2">
                  {i === 0 && <Clock2 className="w-4 h-4 mt-[2px] text-blue-500" />}
                  {i === 1 && <Brain className="w-4 h-4 mt-[2px] text-orange-500" />}
                  {i === 2 && <ShieldCheck className="w-4 h-4 mt-[2px] text-green-600" />}
                  {i === 3 && <Puzzle className="w-4 h-4 mt-[2px] text-indigo-500" />}
                  <span dangerouslySetInnerHTML={{ __html: adv }} />
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded px-6 py-3 text-lg font-semibold transition"
            onClick={() => {
              alert(t("landing.loginBlock.alert"));
            }}
          >
            <User className="w-6 h-6" />
            {t("landing.loginBlock.button")}
          </button>
          <div
            className="text-sm text-blue-900 font-normal text-center"
            dangerouslySetInnerHTML={{ __html: t("landing.loginBlock.info") as string }}
          ></div>
        </div>
        {/* Bloc visiteur libre */}
        <div className="bg-white/90 border rounded-xl shadow p-5 flex flex-col gap-4 items-center">
          <button
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded px-6 py-3 text-lg font-semibold transition"
            onClick={() => navigate("/élève-students")}
          >
            <LogIn className="w-6 h-6" />
            {t("landing.visitorBlock.button")}
          </button>
          <div
            className="text-sm text-orange-800 font-normal text-center"
            dangerouslySetInnerHTML={{ __html: t("landing.visitorBlock.info") as string }}
          />
        </div>
      </div>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        {typeof t("landing.footer") === "function"
          ? t("landing.footer")({ year: new Date().getFullYear() })
          : t("landing.footer")}
      </footer>
    </div>
  );
};

export default Index;
