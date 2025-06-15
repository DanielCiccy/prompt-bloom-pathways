
import React from "react";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const ParentSignup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <AppHeader />
      <Navbar />
      <div className="bg-white/90 p-6 rounded-xl shadow-xl mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Inscription Parent</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={e => {
            e.preventDefault();
            navigate("/famille");
          }}
        >
          <div className="flex gap-4">
            <label className="flex flex-col gap-1 w-1/2">
              Nom
              <input
                type="text"
                className="border rounded px-2 py-1"
                required
                name="nom"
                autoComplete="family-name"
              />
            </label>
            <label className="flex flex-col gap-1 w-1/2">
              Prénom
              <input
                type="text"
                className="border rounded px-2 py-1"
                required
                name="prenom"
                autoComplete="given-name"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1">
            Email
            <input
              type="email"
              className="border rounded px-2 py-1"
              required
              name="email"
              autoComplete="email"
            />
          </label>
          <div className="text-xs text-orange-900 bg-orange-50 rounded p-2 border border-orange-200 mb-2">
            Vous êtes sur le point de transmettre des données personnelles (nom, prénom, email).<br />
            <strong>Conformément au RGPD</strong>, votre consentement est requis et vos informations ne seront jamais partagées sans votre accord.<br />
            Vous pouvez demander l’accès, la modification ou la suppression de vos données à tout moment. 
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded px-4 py-2"
          >
            Créer mon compte parent
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentSignup;
