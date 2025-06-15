
import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";

// Définition du type d'enfant
type Child = {
  firstName: string;
  lastName: string;
  pseudo: string;
  avatarUrl?: string;
  city: string;
  country: string;
  school: string;
  ageRange: string;
};

const initialChildren: Child[] = [];

const ageRanges = [
  { id: "primaire", label: "École primaire (6-11 ans)" },
  { id: "college", label: "Collège (11-15 ans)" },
  { id: "lycee", label: "Lycée (15-18 ans)" },
  { id: "superieur", label: "Supérieur (>18 ans)" },
];

const defaultAvatar = "/placeholder.svg";

// 4 avatars de démonstration (utilisation d’images libres)
const avatarOptions = [
  "/placeholder.svg",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // chat
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // chat orange
  "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // animal
  // On pourrait ajouter d’autres images libres selon besoin
];

const FamilyManagement: React.FC = () => {
  const [children, setChildren] = useState<Child[]>(initialChildren);
  const [newChild, setNewChild] = useState<Child>({
    firstName: "",
    lastName: "",
    pseudo: "",
    avatarUrl: avatarOptions[0],
    city: "",
    country: "",
    school: "",
    ageRange: "",
  });

  const handleAddChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newChild.firstName &&
      newChild.lastName &&
      newChild.pseudo &&
      newChild.city &&
      newChild.country &&
      newChild.school &&
      newChild.ageRange
    ) {
      setChildren([...children, newChild]);
      setNewChild({
        firstName: "",
        lastName: "",
        pseudo: "",
        avatarUrl: avatarOptions[0],
        city: "",
        country: "",
        school: "",
        ageRange: "",
      });
    }
  };

  // Sélection d’avatar
  const handleAvatarSelect = (url: string) => {
    setNewChild((c) => ({
      ...c,
      avatarUrl: url,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <Navbar />
      <div className="bg-white/90 p-6 rounded-xl shadow-xl mt-8 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Gestion de la famille</h2>
        <form onSubmit={handleAddChild} className="flex flex-col gap-3 mb-5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Prénom"
              className="border rounded px-2 py-1 w-1/2"
              value={newChild.firstName}
              onChange={e => setNewChild(c => ({ ...c, firstName: e.target.value }))}
              required
            />
            <input
              type="text"
              placeholder="Nom"
              className="border rounded px-2 py-1 w-1/2"
              value={newChild.lastName}
              onChange={e => setNewChild(c => ({ ...c, lastName: e.target.value }))}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Pseudo (sera affiché publiquement)"
            className="border rounded px-2 py-1"
            value={newChild.pseudo}
            onChange={e => setNewChild(c => ({ ...c, pseudo: e.target.value }))}
            required
          />
          {/* Sélection d’avatar */}
          <div>
            <div className="mb-1 text-sm text-gray-800 font-medium">Choisir un avatar :</div>
            <div className="flex gap-3 items-center">
              {avatarOptions.map((url, idx) => (
                <button
                  type="button"
                  key={url}
                  onClick={() => handleAvatarSelect(url)}
                  className={`focus:outline-none border-2 ${
                    newChild.avatarUrl === url
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-transparent"
                  } rounded-full p-0.5 transition-shadow`}
                  aria-label={`Avatar ${idx + 1}`}
                >
                  <img
                    src={url}
                    alt={`avatar option ${idx + 1}`}
                    className="w-12 h-12 rounded-full object-cover bg-gray-100"
                  />
                </button>
              ))}
            </div>
            <div className="mt-1 text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-2 py-1">
              <strong>Solution provisoire&nbsp;:</strong> Ce choix d’avatars est purement démonstratif pour la preuve de concept. Il sera amené à évoluer dans la version finale.
            </div>
          </div>
          <input
            type="text"
            placeholder="Ville"
            className="border rounded px-2 py-1"
            value={newChild.city}
            onChange={e => setNewChild(c => ({ ...c, city: e.target.value }))}
            required
          />
          <input
            type="text"
            placeholder="Pays"
            className="border rounded px-2 py-1"
            value={newChild.country}
            onChange={e => setNewChild(c => ({ ...c, country: e.target.value }))}
            required
          />
          <input
            type="text"
            placeholder="Établissement scolaire (ex: Collège Jean Moulin)"
            className="border rounded px-2 py-1"
            value={newChild.school}
            onChange={e => setNewChild(c => ({ ...c, school: e.target.value }))}
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
          <div className="text-xs bg-blue-50 border border-blue-200 rounded p-2 mt-2 text-blue-900">
            <strong>Confidentialité&nbsp;:</strong> Le pseudo (et l’avatar, si fourni) seront utilisés pour la visibilité publique. Le nom, prénom, ville, pays, et établissement resteront visibles uniquement par la famille et les référents éducatifs.
          </div>
        </form>
        {children.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Enfants inscrits :</h3>
            <ul className="flex flex-col gap-2">
              {children.map((enf, idx) => (
                <li key={idx} className="border rounded p-2 flex items-center gap-4">
                  <img
                    src={enf.avatarUrl || defaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <div className="font-bold text-blue-700">{enf.pseudo}</div>
                    <div className="text-xs text-gray-500">
                      {ageRanges.find(a => a.id === enf.ageRange)?.label} • {enf.school}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-slate-500">
                    Profil enfant prêt
                  </span>
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
