
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
  { value: "elementary", label: t("createAssignment.levels.elementary") },
  { value: "middle", label: t("createAssignment.levels.middle") },
  { value: "high", label: t("createAssignment.levels.high") },
  { value: "university", label: t("createAssignment.levels.university") },
];
const grades = [
  { value: "6", label: t("createAssignment.grades.6") },
  { value: "5", label: t("createAssignment.grades.5") },
  { value: "4", label: t("createAssignment.grades.4") },
  { value: "3", label: t("createAssignment.grades.3") },
  { value: "2nde", label: t("createAssignment.grades.2nde") },
  { value: "1ère", label: t("createAssignment.grades.1ère") },
  { value: "terminale", label: t("createAssignment.grades.terminale") },
  { value: "college", label: t("createAssignment.grades.college") },
  { value: "lycee", label: t("createAssignment.grades.lycee") },
  { value: "other", label: t("createAssignment.grades.other") },
];
const languages = [
  { value: "fr", label: t("createAssignment.languages.fr") },
  { value: "en", label: t("createAssignment.languages.en") },
  { value: "es", label: t("createAssignment.languages.es") },
  { value: "de", label: t("createAssignment.languages.de") },
  { value: "it", label: t("createAssignment.languages.it") },
];
const countries = [
  { value: "FR", label: t("createAssignment.countries.FR") },
  { value: "BE", label: t("createAssignment.countries.BE") },
  { value: "ES", label: t("createAssignment.countries.ES") },
  { value: "DE", label: t("createAssignment.countries.DE") },
  { value: "IT", label: t("createAssignment.countries.IT") },
  { value: "US", label: t("createAssignment.countries.US") },
  { value: "UK", label: t("createAssignment.countries.UK") },
  { value: "CA", label: t("createAssignment.countries.CA") },
  { value: "PT", label: t("createAssignment.countries.PT") },
  { value: "CH", label: t("createAssignment.countries.CH") },
  { value: "MA", label: t("createAssignment.countries.MA") },
  { value: "TN", label: t("createAssignment.countries.TN") },
  { value: "SN", label: t("createAssignment.countries.SN") },
  { value: "CM", label: t("createAssignment.countries.CM") },
  { value: "OTHER", label: t("createAssignment.countries.OTHER") },
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
      alert(t("createAssignment.mustBeLoggedIn"));
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
      alert(t("createAssignment.createError") + " : " + error.message);
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
          title: t("createAssignment.feedback.errorTitle"),
          description: t("createAssignment.feedback.errorDesc"),
          variant: "destructive"
        });
      } else {
        toast({
          title: t("createAssignment.feedback.thanksTitle"),
          description: t("createAssignment.feedback.thanksDesc"),
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
          {t("createAssignment.backHome")}
        </button>
        <div className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col gap-5 items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            {t("createAssignment.title")}
          </h2>
          <p className="text-gray-800 text-center whitespace-pre-line mb-3">
            {t("createAssignment.subtitle")}
          </p>
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
              {submitting ? t("createAssignment.creating") 
              : feedbackSubmitting ? t("createAssignment.sendingFeedback") 
              : t("createAssignment.createBtn")}
            </button>
          </FormProvider>
          {createdAssignment && (
            <div className="mt-6 text-center w-full">
              <div className="font-semibold text-blue-800 mb-2">{t("createAssignment.codeLabel")} <span className="bg-slate-200 rounded px-2 py-1 font-mono">{createdAssignment.code}</span></div>
              <div className="mb-2 text-xs text-slate-500">{t("createAssignment.qrInstruction")}</div>
              <QrCode text={createdAssignment.code} className="mx-auto" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentTeacher;
