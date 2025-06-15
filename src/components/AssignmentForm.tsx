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

import TitleField from "./AssignmentFormFields/TitleField";
import DescriptionField from "./AssignmentFormFields/DescriptionField";
import DeadlineDateField from "./AssignmentFormFields/DeadlineDateField";
import DeadlineTimeField from "./AssignmentFormFields/DeadlineTimeField";
import SchoolNameField from "./AssignmentFormFields/SchoolNameField";
import CityField from "./AssignmentFormFields/CityField";
import CountryField from "./AssignmentFormFields/CountryField";
import GradeLevelField from "./AssignmentFormFields/GradeLevelField";
import LanguageField from "./AssignmentFormFields/LanguageField";
import TargetAgeRangeField from "./AssignmentFormFields/TargetAgeRangeField";

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
      <TitleField />
      <DescriptionField />
      <div className="flex flex-col md:flex-row gap-3">
        <DeadlineDateField />
        <DeadlineTimeField />
      </div>
      <SchoolNameField />
      <div className="flex flex-col md:flex-row gap-3">
        <CityField />
        <CountryField />
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <GradeLevelField />
        <LanguageField />
      </div>
      <TargetAgeRangeField />
      {/* Feedback section */}
      {feedbackSection}
    </form>
  );
};

export default AssignmentForm;
