import React, { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import QrCode from "@/components/QrCode";
import { t } from "@/i18n/i18n";
import { toast } from "@/hooks/use-toast";

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

  const { control, handleSubmit, reset, formState } = useForm<AssignmentForm>({
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
            autoComplete="off"
          >
            <div>
              <label htmlFor="title" className="block text-sm text-blue-900 mb-1 font-semibold">Titre du devoir</label>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Titre requis" }}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="title"
                      placeholder="ex: Projet Géographie"
                      {...field}
                    />
                    {fieldState.error && (
                      <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm text-blue-900 mb-1 font-semibold">Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="description"
                    placeholder="Décrivez le devoir, les ressources, les liens..."
                    {...field}
                    rows={3}
                  />
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="deadline_date" className="block text-sm text-blue-900 font-semibold mb-1">Date limite</label>
                <Controller
                  name="deadline_date"
                  control={control}
                  rules={{ required: "Date requise" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input id="deadline_date" type="date" {...field} />
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="deadline_time" className="block text-sm text-blue-900 font-semibold mb-1">Heure limite</label>
                <Controller
                  name="deadline_time"
                  control={control}
                  rules={{ required: "Heure requise" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input id="deadline_time" type="time" {...field} />
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <label htmlFor="school_name" className="block text-sm text-blue-900 mb-1 font-semibold">Établissement scolaire</label>
              <Controller
                name="school_name"
                control={control}
                rules={{ required: "Établissement requis" }}
                render={({ field, fieldState }) => (
                  <>
                    <Input id="school_name" placeholder="Nom de l'école ou lycée" {...field} />
                    {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="city" className="block text-sm text-blue-900 mb-1 font-semibold">Ville</label>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: "Ville requise" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input id="city" placeholder="Ville" {...field} />
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="country" className="block text-sm text-blue-900 mb-1 font-semibold">Pays</label>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "Pays requis" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le pays…" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="grade_level" className="block text-sm text-blue-900 mb-1 font-semibold">Niveau / Classe</label>
                <Controller
                  name="grade_level"
                  control={control}
                  rules={{ required: "Niveau requis" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le niveau…" />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="language" className="block text-sm text-blue-900 mb-1 font-semibold">Langue</label>
                <Controller
                  name="language"
                  control={control}
                  rules={{ required: "Langue requise" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez la langue…" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && <span className="block text-xs text-red-500 mt-1">{fieldState.error.message}</span>}
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <label htmlFor="target_age_range" className="block text-sm text-blue-900 mb-1 font-semibold">Tranche d'âge cible (optionnel, ex: 12-14 ans)</label>
              <Controller
                name="target_age_range"
                control={control}
                render={({ field }) => (
                  <Input id="target_age_range" placeholder="Âge cible ou groupe" {...field} />
                )}
              />
            </div>
            {/* --- Suggestion box for educators --- */}
            <div>
              <label htmlFor="suggestion_box" className="block text-sm text-blue-900 font-semibold mb-1">
                <span role="img" aria-label="bulb">💡</span> Vous avez une suggestion pour améliorer cet outil ?<br />
                Partagez votre idée ou retour ci-dessous. Nous écoutons ! <span role="img" aria-label="down-point">👇</span>
              </label>
              <textarea
                id="suggestion_box"
                className="w-full border border-slate-300 rounded px-3 py-2 min-h-[64px] text-sm resize-y"
                placeholder="Expliquez votre idée, problème ou remarque pour l’équipe produit (optionnel)"
                value={suggestion}
                onChange={e => setSuggestion(e.target.value)}
                disabled={submitting || feedbackSubmitting}
                rows={3}
              />
            </div>
            {/* --- End Suggestion box --- */}
            <Button type="submit" className="w-full flex items-center justify-center gap-2"
              disabled={submitting || feedbackSubmitting}
            >
              {submitting ? "Création en cours..." 
              : feedbackSubmitting ? "Envoi du feedback..." 
              : "Créer le devoir"}
            </Button>
          </form>
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
