
import React, { useState, useRef } from "react";
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

const FamilyManagement: React.FC = () => {
  const [children, setChildren] = useState<Child[]>(initialChildren);
  const [newChild, setNewChild] = useState<Child>({
    firstName: "",
    lastName: "",
    pseudo: "",
    avatarUrl: "",
    city: "",
    country: "",
    school: "",
    ageRange: "",
  });
  const fileRef = useRef<HTMLInputElement>(null);

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
        avatarUrl: "",
        city: "",
        country: "",
        school: "",
        ageRange: "",
      });
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  // Avatar upload handler
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
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
          <div className="flex items-center gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="block w-full text-xs"
              onChange={handleAvatarChange}
            />
            {newChild.avatarUrl && (
              <img
                src={newChild.avatarUrl}
                alt="avatar preview"
                className="w-10 h-10 rounded-full object-cover border ml-2"
              />
            )}
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
