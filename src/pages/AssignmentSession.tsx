
import React from "react";
import AppHeader from "@/components/AppHeader";
import ChatSession from "@/components/ChatSession";
import { useNavigate, useLocation } from "react-router-dom";

function useQueryParam(param: string) {
  const { search } = useLocation();
  return React.useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get(param);
  }, [search, param]);
}

const AssignmentSession: React.FC = () => {
  const assignmentCode = useQueryParam("code");
  const navigate = useNavigate();

  // Facultatif: message d'erreur si code absent (sécurité)
  if (!assignmentCode) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-blue-50">
        <AppHeader />
        <div className="bg-white text-orange-800 px-5 py-12 rounded-xl shadow-xl mt-10 text-center max-w-lg">
          <h2 className="text-xl font-bold mb-3">Code manquant ou invalide</h2>
          <p className="mb-5">Veuillez accéder à la session via le lien de votre devoir ou renseigner un code valide.</p>
          <button
            onClick={() => navigate("/join-assignment")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50">
      <AppHeader />
      <main className="w-full flex flex-col items-center px-2 mb-8">
        <ChatSession 
          assignmentCode={assignmentCode}
          onEnd={() => navigate("/")}
        />
      </main>
    </div>
  );
};

export default AssignmentSession;
