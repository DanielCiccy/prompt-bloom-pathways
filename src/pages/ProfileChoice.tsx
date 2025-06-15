
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, GraduationCap, Users2, ArrowRight } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const ageRanges = [
  { id: "primaire", label: "École primaire (6-11 ans)" },
  { id: "college", label: "Collège (11-15 ans)" },
  { id: "lycee", label: "Lycée (15-18 ans)" },
  { id: "superieur", label: "Supérieur (>18 ans)" },
];

const ProfileChoice: React.FC = () => {
  const [studentAgeRange, setStudentAgeRange] = useState<string>("");
  const navigate = useNavigate();

  const handleProfileSelect = (profile: string) => {
    if (profile === "eleve") return; // Show age range selector
    if (profile === "enseignant") navigate("/enseignant");
    if (profile === "parent") navigate("/parent");
  };

  const handleAgeValidate = () => {
    if (studentAgeRange) {
      navigate(`/élève-students?tranche=${studentAgeRange}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center">
      <AppHeader />
      <div className="bg-white/80 p-6 rounded-2xl shadow-xl max-w-md w-full flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Qui es-tu ?</h1>
        <div className="flex flex-col gap-3 w-full">
          <button
            className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 border border-blue-200 rounded-lg px-4 py-3 w-full text-blue-900 font-semibold transition"
            onClick={() => handleProfileSelect("eleve")}
          >
            <User className="w-6 h-6 text-blue-700" />
            Je suis élève
            <ArrowRight className="ml-auto w-5 h-5 text-blue-600" />
          </button>
          {studentAgeRange !== "" && (
            <div className="pl-8 mt-2 flex flex-col gap-2">
              {ageRanges.map((range) => (
                <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ageRange"
                    value={range.id}
                    checked={studentAgeRange === range.id}
                    onChange={() => setStudentAgeRange(range.id)}
                    className="accent-blue-600"
                  />
                  {range.label}
                </label>
              ))}
              <button
                onClick={handleAgeValidate}
                className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded px-4 py-2 transition"
              >
                Valider
              </button>
            </div>
          )}

          <button
            className="flex items-center gap-3 bg-yellow-100 hover:bg-yellow-200 border border-yellow-200 rounded-lg px-4 py-3 w-full text-yellow-900 font-semibold transition"
            onClick={() => handleProfileSelect("enseignant")}
          >
            <GraduationCap className="w-6 h-6 text-yellow-700" />
            Je suis enseignant
            <ArrowRight className="ml-auto w-5 h-5 text-yellow-600" />
          </button>
          <button
            className="flex items-center gap-3 bg-green-100 hover:bg-green-200 border border-green-200 rounded-lg px-4 py-3 w-full text-green-900 font-semibold transition"
            onClick={() => handleProfileSelect("parent")}
          >
            <Users2 className="w-6 h-6 text-green-700" />
            Je suis parent
            <ArrowRight className="ml-auto w-5 h-5 text-green-600" />
          </button>
        </div>
        <div className="text-xs mt-4 text-slate-500 text-center">Ce choix permet d’adapter au mieux l’expérience et la sécurité.
        </div>
      </div>
    </div>
  );
};

export default ProfileChoice;
