
import { t } from "@/i18n/i18n";

export function useAssignmentFormData() {
  // Niveaux scolaires
  const classLevels = [
    { value: "elementary", label: t("createAssignment.levels.elementary") },
    { value: "middle", label: t("createAssignment.levels.middle") },
    { value: "high", label: t("createAssignment.levels.high") },
    { value: "university", label: t("createAssignment.levels.university") },
  ];
  // Classes
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
  // Langues
  const languages = [
    { value: "fr", label: t("createAssignment.languages.fr") },
    { value: "en", label: t("createAssignment.languages.en") },
    { value: "es", label: t("createAssignment.languages.es") },
    { value: "de", label: t("createAssignment.languages.de") },
    { value: "it", label: t("createAssignment.languages.it") },
  ];
  // Pays
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
  // Tranches d'âge
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
  return { classLevels, grades, languages, countries, ageRanges };
}
