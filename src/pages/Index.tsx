import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, QrCode, ArrowRight } from "lucide-react";
import { t } from "@/i18n/i18n";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const record = t("landing.immutableLearningRecord");
  // Gestion du type partiel selon t() (retour possible string[] pour list)
  const title = record?.title || t("landing.immutableLearningRecord.title");
  const desc = record?.desc || t("landing.immutableLearningRecord.desc");
  const list =
    Array.isArray(record?.list) && record.list.length > 0
      ? record.list
      : [
          t("landing.immutableLearningRecord.list.0"),
          t("landing.immutableLearningRecord.list.1"),
          t("landing.immutableLearningRecord.list.2"),
        ];
  const cta = record?.cta || t("landing.immutableLearningRecord.cta");

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      {/* En-tête déjà géré dans AppHeader global */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-lg mx-auto gap-8 mt-10">
        {/* Bloc Immutable Learning Record */}
        <section className="w-full">
          <div className="bg-white/90 rounded-2xl shadow-xl px-6 py-5 flex flex-col gap-2 items-start border border-blue-100 mb-6">
            <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1">{title}</h3>
            <div className="whitespace-pre-line text-gray-700 text-base mb-3">{desc}</div>
            <ul className="list-disc pl-6 text-sm text-blue-900 mb-2">
              {list.map((item: string, idx: number) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>
            <div className="text-xs text-blue-700 whitespace-pre-line bg-blue-50 px-3 py-2 rounded font-semibold">{cta}</div>
          </div>
        </section>

        {/* Bouton Créer un devoir */}
        <button
          onClick={() => navigate("/create-assignment")}
          className="flex flex-col items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-2xl px-8 py-8 font-bold text-2xl shadow-lg transition gap-3 w-full"
        >
          <UserPlus className="w-12 h-12 mb-2" />
          {t("createAssignment.title")} <ArrowRight className="ml-2 w-7 h-7" />
          <span className="text-base font-normal text-white/80 mt-2">
            {t("createAssignment.subtitle")}
          </span>
        </button>

        {/* Bouton Rejoindre un devoir */}
        <button
          onClick={() => navigate("/rejoindre")}
          className="flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-8 font-bold text-2xl shadow-lg transition gap-3 w-full"
        >
          <QrCode className="w-12 h-12 mb-2" />
          {t("joinAssignment.title")} <ArrowRight className="ml-2 w-7 h-7" />
          <span className="text-base font-normal text-white/80 mt-2">
            {t("joinAssignment.instructions")}
          </span>
        </button>
      </main>
      <footer className="text-xs text-slate-500 mt-8 mb-2 select-none">
        Plateforme cognitive et pédagogique — Prompt Renfort {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
