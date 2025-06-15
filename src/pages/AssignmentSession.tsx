import React from "react";
import AppHeader from "@/components/AppHeader";
import ChatSession from "@/components/ChatSession";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { t } from "@/i18n/i18n";

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
        {/* Encadré roadmap double-zone */}
        <div className="max-w-2xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-5 py-4 mb-4 rounded-lg shadow-sm flex items-center gap-4">
          <span className="text-2xl font-bold">🎓</span>
          <div>
            <div className="font-semibold">
              {t("assignmentSession.dualZoneTitle") || "Bientôt : Espace pédagogique double-zone"}
            </div>
            <p className="text-sm mt-1 whitespace-pre-line">
              {t("assignmentSession.dualZoneDesc") || 
                "Une zone de rédaction libre et une fenêtre assistant IA distincte vont permettre de distinguer réflexion autonome et aide de l’IA, pour une pédagogie plus transparente. Cette fonctionnalité est prioritaire et arrive très bientôt !"}
            </p>
          </div>
        </div>
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
