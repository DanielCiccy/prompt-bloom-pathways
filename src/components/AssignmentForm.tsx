
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { t } from "@/i18n/i18n";

// --- Field helpers ---
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

const AssignmentForm: React.FC<{ feedbackSection: React.ReactNode; onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; submitting: boolean; feedbackSubmitting: boolean; }> = ({
  feedbackSection,
  onSubmit,
  submitting,
  feedbackSubmitting
}) => {
  const { control, handleSubmit, formState } = useFormContext();

  return (
    <form
      onSubmit={onSubmit}
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
      {/* Target age range dropdown */}
      <div>
        <label htmlFor="target_age_range" className="block text-sm text-blue-900 mb-1 font-semibold">
          {t("create_assignment.target_age_range_label")}
        </label>
        <Controller
          name="target_age_range"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || ""}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("create_assignment.target_age_range_placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {ageRanges.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {t(`create_assignment.age_ranges.${opt.labelKey}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {/* Feedback section */}
      {feedbackSection}
    </form>
  );
};

export default AssignmentForm;
