
import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";

const initialChildren = [];

const ageRanges = [
  { id: "primaire", label: "École primaire (6-11 ans)" },
  { id: "college", label: "Collège (11-15 ans)" },
  { id: "lycee", label: "Lycée (15-18 ans)" },
  { id: "superieur", label: "Supérieur (>18 ans)" },
];

const FamilyManagement: React.FC = () => {
  const [children, setChildren] = useState(initialChildren as any[]);
  const [newChild, setNewChild] = useState({ name: "", ageRange: "" });

  const handleAddChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChild.name && newChild.ageRange) {
      setChildren([...children, newChild]);
      setNewChild({ name: "", ageRange: "" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <Navbar />
      <div className="bg-white/90 p-6 rounded-xl shadow-xl mt-8 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Gestion de la famille</h2>
        <form onSubmit={handleAddChild} className="flex flex-col gap-3 mb-5">
          <input
            type="text"
            placeholder="Prénom de l'enfant"
            className="border rounded px-2 py-1"
            value={newChild.name}
            onChange={e => setNewChild(c => ({ ...c, name: e.target.value }))}
            required
          />
          <select
            className="border rounded px-2 py-1"
            value={newChild.ageRange}
            onChange={e => setNewChild(c => ({ ...c, ageRange: e.target.value }))}
            required
          >
            <option value="">Tranche d'âge</option>
            {ageRanges.map(range => (
              <option key={range.id} value={range.id}>{range.label}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded px-4 py-2"
          >
            Ajouter cet enfant
          </button>
        </form>
        {children.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Enfants inscrits :</h3>
            <ul className="flex flex-col gap-2">
              {children.map((enf, idx) => (
                <li key={idx} className="border rounded p-2 flex justify-between items-center">
                  <span>
                    {enf.name} —&nbsp;
                    {ageRanges.find(a => a.id === enf.ageRange)?.label}
                  </span>
                  <span className="text-xs text-slate-500">Profil enfant prêt</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyManagement;
