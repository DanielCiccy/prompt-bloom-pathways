import React, { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import QrCode from "@/components/QrCode";
import { t } from "@/i18n/i18n";
import { toast } from "@/hooks/use-toast";
import AssignmentForm from "@/components/AssignmentForm";
import SuggestionBox from "@/components/SuggestionBox";

// --- Field helpers ---
const classLevels = [
  { value: "elementary", label: "Élémentaire" },
  { value: "middle", label: "Collège" },
  { value: "high", label: "Lycée" },
  { value: "university", label: "Université" },
];
const grades = [
  { value: "6", label: "6ème" },
  { value: "5", label: "5ème" },
  { value: "4", label: "4ème" },
  { value: "3", label: "3ème" },
  { value: "2nde", label: "2nde" },
  { value: "1ère", label: "1ère" },
  { value: "terminale", label: "Terminale" },
  { value: "college", label: "Collège" },
  { value: "lycee", label: "Lycée" },
  { value: "other", label: "Autre" },
];
const languages = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
];
// ISO-3166 (abbreviated list for callback simplicity, can expand as needed)
const countries = [
  { value: "FR", label: "France" },
  { value: "BE", label: "Belgique" },
  { value: "ES", label: "Espagne" },
  { value: "DE", label: "Allemagne" },
  { value: "IT", label: "Italie" },
  { value: "US", label: "États-Unis" },
  { value: "UK", label: "Royaume-Uni" },
  { value: "CA", label: "Canada" },
  { value: "PT", label: "Portugal" },
  { value: "CH", label: "Suisse" },
  { value: "MA", label: "Maroc" },
  { value: "TN", label: "Tunisie" },
  { value: "SN", label: "Sénégal" },
  { value: "CM", label: "Cameroun" },
  { value: "OTHER", label: "Autre" },
];

// --- Age Ranges (internationalized) ---
const ageRanges = [
  { value: "6-8", labelKey: "ages_6_8" },
  { value: "9-11", labelKey: "ages_9_11" },
  { value: "12-14", labelKey: "ages_12_14" },
  { value: "15-17", labelKey: "ages_15_17" },
  { value: "18-22", labelKey: "ages_18_22" },
  { value: "23-99", labelKey: "ages_23_99" },
  { value: "multi", labelKey: "multi_age" },
  { value: "other", labelKey: "other_age" },
];

type AssignmentForm = {
  title: string;
  description?: string;
  deadline_date: string;
  deadline_time: string;
  school_name: string;
  city: string;
  country: string;
  grade_level: string;
  language: string;
  target_age_range?: string;
};

function randomAssignmentCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < len; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function getTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Paris";
}

function hashTeacherId(uid: string): string {
  // Simple hash for privacy - in real prod use, add a salt or strong hash
  let hash = 0;
  for (let i = 0; i < uid.length; i++) hash = ((hash << 5) - hash) + uid.charCodeAt(i);
  return Math.abs(hash).toString(16);
}

const CreateAssignmentTeacher: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [createdAssignment, setCreatedAssignment] = useState<null | {code: string, qr_url: string, id?: string}>(null);
  const [suggestion, setSuggestion] = useState(""); // For suggestion box
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);

  const formMethods = useForm<AssignmentForm>({
    defaultValues: {
      title: "",
      description: "",
      deadline_date: "",
      deadline_time: "",
      school_name: "",
      city: "",
      country: "",
      grade_level: "",
      language: "",
      target_age_range: "",
    },
  });
  const { control, handleSubmit, reset, formState } = formMethods;

  // Fetch current user (should be authenticated)
  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user));
  }, []);

  const onSubmit = async (data: AssignmentForm) => {
    if (!user) {
      alert("Vous devez être connecté pour créer un devoir.");
      return;
    }
    setSubmitting(true);

    const assignment_code = randomAssignmentCode();
    const timezone = getTimezone();
    const teacher_hash = hashTeacherId(user.id);

    const insertObj = {
      ...data,
      assignment_code,
      timezone,
      teacher_hash,
      created_by: user.id,
    };

    // Insert into Supabase
    const { data: inserted, error } = await supabase
      .from("assignments")
      .insert([insertObj])
      .select("id")
      .maybeSingle();

    if (error) {
      alert("Erreur lors de la création : " + error.message);
      setSubmitting(false);
      return;
    }
    const assignmentId = inserted?.id || null;
    // QR contains a join URL
    const qr_url = `${window.location.origin}/rejoindre?code=${assignment_code}`;
    setCreatedAssignment({ code: assignment_code, qr_url, id: assignmentId });
    reset();

    // Suggestion box: If filled, save feedback
    if (suggestion.trim() !== "") {
      setFeedbackSubmitting(true);
      const feedbackObj = {
        assignment_id: assignmentId,
        suggestion_feedback: suggestion.trim(),
        teacher_hash,
      };
      const { error: feedbackError } = await supabase
        .from("assignment_feedback")
        .insert([feedbackObj]);
      if (feedbackError) {
        toast({
          title: "Erreur lors de l’envoi du feedback",
          description: "Votre suggestion n’a pas pu être envoyée. Merci de réessayer.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Merci beaucoup pour votre suggestion !",
          description: "Votre idée ou retour a bien été transmis à l’équipe.",
        });
        setSuggestion(""); // clear input
      }
      setFeedbackSubmitting(false);
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 flex flex-col items-center">
      <div className="w-full max-w-lg mt-6">
        <button
          className="flex items-center gap-2 text-blue-700 hover:underline hover:text-blue-900 text-sm mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </button>
        <div className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col gap-5 items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Créer un devoir / groupe Prompt Renfort
          </h2>
          <FormProvider {...formMethods}>
            <AssignmentForm
              feedbackSection={
                <SuggestionBox
                  suggestion={suggestion}
                  setSuggestion={setSuggestion}
                  submitting={submitting}
                  feedbackSubmitting={feedbackSubmitting}
                />
              }
              onSubmit={handleSubmit(onSubmit)}
              submitting={submitting}
              feedbackSubmitting={feedbackSubmitting}
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium mt-2"
              disabled={submitting || feedbackSubmitting}
              form={undefined}
              onClick={handleSubmit(onSubmit)}
            >
              {submitting ? "Création en cours..." 
              : feedbackSubmitting ? "Envoi du feedback..." 
              : "Créer le devoir"}
            </button>
          </FormProvider>
          {createdAssignment && (
            <div className="mt-6 text-center w-full">
              <div className="font-semibold text-blue-800 mb-2">Code du devoir : <span className="bg-slate-200 rounded px-2 py-1 font-mono">{createdAssignment.code}</span></div>
              <div className="mb-2 text-xs text-slate-500">Distribuez ce code ou le QR à vos élèves !</div>
              <QrCode text={createdAssignment.code} className="mx-auto" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentTeacher;
