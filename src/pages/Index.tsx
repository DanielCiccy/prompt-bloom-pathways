

import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, QrCode, ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      {/* En-tête déjà géré dans AppHeader global */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-lg mx-auto gap-8 mt-10">
        {/* Bouton Créer un devoir */}
        <button
          onClick={() => navigate("/creer-devoir")}
          className="flex flex-col items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-2xl px-8 py-8 font-bold text-2xl shadow-lg transition gap-3 w-full"
        >
          <UserPlus className="w-12 h-12 mb-2" />
          Créer un devoir <ArrowRight className="ml-2 w-7 h-7" />
          <span className="text-base font-normal text-white/80 mt-2">
            Pour enseignants, parents : générez rapidement un devoir à partager par QR code, lien ou code simple.
          </span>
        </button>

        {/* Bouton Rejoindre un devoir */}
        <button
          onClick={() => navigate("/rejoindre")}
          className="flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-8 font-bold text-2xl shadow-lg transition gap-3 w-full"
        >
          <QrCode className="w-12 h-12 mb-2" />
          Rejoindre un devoir <ArrowRight className="ml-2 w-7 h-7" />
          <span className="text-base font-normal text-white/80 mt-2">
            Élèves : scannez le QR code ou saisissez un code pour démarrer votre accompagnement IA.
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
