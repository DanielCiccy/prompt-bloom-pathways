
import React from "react";
import AppHeader from "@/components/AppHeader";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JoinAssignmentStudent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <div className="w-full max-w-lg mt-6">
        <button
          className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 text-sm mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour accueil
        </button>
        <div className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col gap-3 items-center">
          <h2 className="text-2xl font-bold text-orange-700 mb-3">Rejoindre un devoir</h2>
          <div className="text-base text-gray-700 text-center mb-2">
            Pour démarrer, scanne le QR code donné par ton enseignant ou saisis un code ci-dessous.<br/>
            <span className="block text-sm mt-2 text-orange-700">Expérience simplifiée, sans compte, pour un démarrage rapide.</span>
          </div>
          <div className="text-sm text-orange-700 bg-orange-50 border border-orange-100 rounded px-3 py-2 mb-2">
            <strong>À venir :</strong> Zone de saisie du code/scan QR et démarrage de la session individuelle.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAssignmentStudent;
