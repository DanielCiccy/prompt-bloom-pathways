
import React from "react";
import AppHeader from "@/components/AppHeader";
import ChatSession from "@/components/ChatSession";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

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
  const [assignment, setAssignment] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAssignment = async () => {
      if (!assignmentCode) return;
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("assignments")
        .select("*")
        .eq("assignment_code", assignmentCode)
        .maybeSingle();
      if (error) {
        setError("Erreur lors du chargement du devoir.");
        setLoading(false);
        return;
      }
      if (!data) {
        setError("Aucun devoir trouvé pour ce code.");
        setLoading(false);
        return;
      }
      setAssignment(data);
      setLoading(false);
    };
    fetchAssignment();
  }, [assignmentCode]);

  // Message d'erreur si code absent ou non valide
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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-blue-50">
        <AppHeader />
        <div className="text-lg text-blue-800 animate-pulse mt-16">Chargement du devoir…</div>
      </div>
    );
  }

  if (error || !assignment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-blue-50">
        <AppHeader />
        <div className="bg-white text-orange-800 px-4 py-12 rounded-xl shadow-xl mt-8 text-center max-w-lg">
          <h2 className="text-xl font-bold mb-3">Erreur</h2>
          <p className="mb-5">{error || "Devoir introuvable."}</p>
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
          assignment={assignment}
          onEnd={() => navigate("/")}
        />
      </main>
    </div>
  );
};

export default AssignmentSession;
